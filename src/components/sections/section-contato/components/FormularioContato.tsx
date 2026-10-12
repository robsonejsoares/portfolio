"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Send, LoaderCircle, CheckCircle2 } from "lucide-react";

export function FormularioContato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");
    const [erro, setErro] = useState("");
    const [sucesso, setSucesso] = useState("");
    const [enviando, setEnviando] = useState(false);

    const temporizadorSucesso =
        useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        return () => {
            if (temporizadorSucesso.current) {
                clearTimeout(temporizadorSucesso.current);
            }
        };
    }, []);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        setErro("");
        setSucesso("");

        if (temporizadorSucesso.current) {
            clearTimeout(temporizadorSucesso.current);
            temporizadorSucesso.current = null;
        }

        const nomeValido = nome.trim();
        const emailValido = email.trim();
        const assuntoValido = assunto.trim();
        const mensagemValida = mensagem.trim();

        if (
            !nomeValido ||
            !emailValido ||
            !assuntoValido ||
            !mensagemValida
        ) {
            setErro("Preencha todos os campos antes de continuar.");
            return;
        }

        if (
            nomeValido.length > 100 ||
            emailValido.length > 254 ||
            assuntoValido.length > 150 ||
            mensagemValida.length > 5000
        ) {
            setErro("Um ou mais campos excedem o limite permitido.");
            return;
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValido)) {
            setErro("Informe um endereço de e-mail válido.");
            return;
        }

        if (mensagemValida.length < 10) {
            setErro("A mensagem deve conter pelo menos 10 caracteres.");
            return;
        }

        setEnviando(true);

        try {
            const resposta = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: nomeValido,
                    email: emailValido,
                    assunto: assuntoValido,
                    mensagem: mensagemValida,
                }),
            });

            const resultado: {
                success?: boolean;
                message?: string;
                error?: string;
            } = await resposta.json();

            if (!resposta.ok) {
                throw new Error(
                    resultado.error ||
                        "Não foi possível enviar sua mensagem. Tente novamente.",
                );
            }

            setSucesso(
                resultado.message || "Mensagem enviada com sucesso!",
            );

            setNome("");
            setEmail("");
            setAssunto("");
            setMensagem("");

            temporizadorSucesso.current = setTimeout(() => {
                setSucesso("");
                temporizadorSucesso.current = null;
            }, 5000);
        } catch (error) {
            setErro(
                error instanceof Error
                    ? error.message
                    : "Erro inesperado ao enviar a mensagem.",
            );
        } finally {
            setEnviando(false);
        }
    }

    return (
        <div className="rounded-xl border border-white/10 bg-slate-900/60 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <div className="mb-7">
                <h4 className="mt-2 text-xl font-bold text-slate-400 sm:text-2xl">
                    Envie uma mensagem
                </h4>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div>
                        <label
                            htmlFor="contact-name"
                            className="mb-2 block text-sm font-medium text-slate-400"
                        >
                            Nome
                        </label>

                        <input
                            id="contact-name"
                            name="name"
                            type="text"
                            autoComplete="name"
                            required
                            maxLength={100}
                            value={nome}
                            onChange={(event) => setNome(event.target.value)}
                            placeholder="Seu nome"
                            disabled={enviando}
                            className="w-full rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-400 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 disabled:opacity-60"
                        />
                    </div>

                    <div>
                        <label
                            htmlFor="contact-email"
                            className="mb-2 block text-sm font-medium text-slate-400"
                        >
                            E-mail
                        </label>

                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            maxLength={254}
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            placeholder="voce@exemplo.com"
                            disabled={enviando}
                            className="w-full rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-400 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 disabled:opacity-60"
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-sm font-medium text-slate-400"
                    >
                        Assunto
                    </label>

                    <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        required
                        maxLength={150}
                        value={assunto}
                        onChange={(event) => setAssunto(event.target.value)}
                        placeholder="Sobre o que vamos conversar?"
                        disabled={enviando}
                        className="w-full rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-400 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 disabled:opacity-60"
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-medium text-slate-400"
                    >
                        Mensagem
                    </label>

                    <textarea
                        id="contact-message"
                        name="message"
                        required
                        minLength={10}
                        maxLength={5000}
                        rows={6}
                        value={mensagem}
                        onChange={(event) => setMensagem(event.target.value)}
                        placeholder="Conte um pouco sobre sua ideia, projeto ou oportunidade..."
                        disabled={enviando}
                        className="w-full resize-y rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-sm leading-6 text-slate-400 outline-none transition placeholder:text-slate-600 focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10 disabled:opacity-60"
                    />

                    <p className="mt-2 text-right text-xs text-slate-600">
                        {mensagem.length}/5000 caracteres
                    </p>
                </div>

                {erro && (
                    <p
                        role="alert"
                        className="rounded-md border border-red-400/20 bg-red-400/5 px-4 py-3 text-sm text-red-300"
                    >
                        {erro}
                    </p>
                )}

                {sucesso && (
                    <p
                        role="status"
                        aria-live="polite"
                        className="flex items-center gap-2 text-sm text-emerald-400/90"
                    >
                        <CheckCircle2 className="h-4 w-4 shrink-0" />
                        <span>{sucesso}</span>
                    </p>
                )}

                {/* Botão centralizado, mantendo o tamanho original */}
                <div className="flex justify-center">
                    <button
                        type="submit"
                        disabled={enviando}
                        className="group relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3.5 text-sm font-bold text-black shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:scale-105 hover:brightness-110 hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
                    >
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/50 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                        />

                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {enviando ? (
                                <>
                                    Enviando mensagem...
                                    <LoaderCircle className="h-4 w-4 animate-spin" />
                                </>
                            ) : (
                                <>
                                    Enviar mensagem
                                    <Send className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                                </>
                            )}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );
}