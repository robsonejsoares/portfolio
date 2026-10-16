"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { LoaderCircle, Send } from "lucide-react";
import {
    FeedbackContato,
    type TipoFeedback,
} from "./FeedbackContato";

type CampoContato = "nome" | "email" | "assunto" | "mensagem";

const classesCampo =
    "w-full rounded-md border border-white/10 bg-slate-950/70 px-4 py-3 text-sm text-slate-200 outline-none transition-colors duration-200 placeholder focus/20 focus disabled disabled";

export function FormularioContato() {
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [assunto, setAssunto] = useState("");
    const [mensagem, setMensagem] = useState("");

    const [feedbackTipo, setFeedbackTipo] =
        useState<TipoFeedback | null>(null);
    const [feedbackMensagem, setFeedbackMensagem] = useState("");
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

    function limparTemporizadorSucesso() {
        if (temporizadorSucesso.current) {
            clearTimeout(temporizadorSucesso.current);
            temporizadorSucesso.current = null;
        }
    }

    function exibirFeedback(tipo: TipoFeedback, texto: string) {
        setFeedbackTipo(tipo);
        setFeedbackMensagem(texto);
    }

    function limparAvisos() {
        setFeedbackTipo(null);
        setFeedbackMensagem("");
        limparTemporizadorSucesso();
    }

    function atualizarCampo(campo: CampoContato, valor: string) {
        const setters = {
            nome: setNome,
            email: setEmail,
            assunto: setAssunto,
            mensagem: setMensagem,
        };

        setters[campo](valor);

        if (feedbackTipo === "erro" || feedbackTipo === "aviso") {
            setFeedbackTipo(null);
            setFeedbackMensagem("");
        }
    }

    function validarCampos(): string | null {
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
            return "Preencha todos os campos obrigatórios.";
        }

        if (nomeValido.length > 100) {
            return "O nome deve ter no máximo 100 caracteres.";
        }

        if (emailValido.length > 254) {
            return "O e-mail deve ter no máximo 254 caracteres.";
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValido)) {
            return "Informe um endereço de e-mail válido.";
        }

        if (assuntoValido.length > 150) {
            return "O assunto deve ter no máximo 150 caracteres.";
        }

        if (mensagemValida.length < 10) {
            return "A mensagem deve ter pelo menos 10 caracteres.";
        }

        if (mensagemValida.length > 5000) {
            return "A mensagem deve ter no máximo 5.000 caracteres.";
        }

        return null;
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (enviando) {
            return;
        }

        limparAvisos();

        const erroValidacao = validarCampos();

        if (erroValidacao) {
            exibirFeedback("erro", erroValidacao);
            return;
        }

        setEnviando(true);
        exibirFeedback("processando", "Enviando mensagem...");

        try {
            const resposta = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    nome: nome.trim(),
                    email: email.trim(),
                    assunto: assunto.trim(),
                    mensagem: mensagem.trim(),
                }),
            });

            const resultado: {
                success?: boolean;
                message?: string;
                error?: string;
            } = await resposta.json();

            if (!resposta.ok || resultado.success === false) {
                throw new Error(
                    resultado.error ||
                    "Não foi possível enviar sua mensagem. Tente novamente."
                );
            }

            exibirFeedback(
                "sucesso",
                resultado.message || "Mensagem enviada com sucesso!"
            );

            setNome("");
            setEmail("");
            setAssunto("");
            setMensagem("");

            limparTemporizadorSucesso();

            temporizadorSucesso.current = setTimeout(() => {
                setFeedbackTipo(null);
                setFeedbackMensagem("");
                temporizadorSucesso.current = null;
            }, 5000);
        } catch (error) {
            exibirFeedback(
                "erro",
                error instanceof Error
                    ? error.message
                    : "Ocorreu um erro inesperado. Tente novamente."
            );
        } finally {
            setEnviando(false);
        }
    }

    return (
        <div className="rounded-md border border-white/10 bg-slate-900/60 p-5 shadow-2xl shadow-black/20 backdrop-blur-xl sm:p-8">
            <form
                onSubmit={handleSubmit}
                noValidate
                aria-busy={enviando}
                className="space-y-5"
            >
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                    <div className="min-w-0">
                        <label
                            htmlFor="contact-name"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            Nome
                            <span className="ml-1 text-cyan-400" aria-hidden="true">
                                *
                            </span>
                        </label>

                        <input
                            id="contact-name"
                            name="nome"
                            type="text"
                            autoComplete="name"
                            required
                            maxLength={100}
                            value={nome}
                            onChange={(event) =>
                                atualizarCampo("nome", event.target.value)
                            }
                            placeholder="Seu nome"
                            disabled={enviando}
                            className={classesCampo}
                        />
                    </div>

                    <div className="min-w-0">
                        <label
                            htmlFor="contact-email"
                            className="mb-2 block text-sm font-medium text-slate-300"
                        >
                            E-mail
                            <span className="ml-1 text-cyan-400" aria-hidden="true">
                                *
                            </span>
                        </label>

                        <input
                            id="contact-email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            maxLength={254}
                            value={email}
                            onChange={(event) =>
                                atualizarCampo("email", event.target.value)
                            }
                            placeholder="voce@exemplo.com"
                            disabled={enviando}
                            className={classesCampo}
                        />
                    </div>
                </div>

                <div>
                    <label
                        htmlFor="contact-subject"
                        className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Assunto
                        <span className="ml-1 text-cyan-400" aria-hidden="true">
                            *
                        </span>
                    </label>

                    <input
                        id="contact-subject"
                        name="assunto"
                        type="text"
                        required
                        maxLength={150}
                        value={assunto}
                        onChange={(event) =>
                            atualizarCampo("assunto", event.target.value)
                        }
                        placeholder="Sobre o que vamos conversar?"
                        disabled={enviando}
                        className={classesCampo}
                    />
                </div>

                <div>
                    <label
                        htmlFor="contact-message"
                        className="mb-2 block text-sm font-medium text-slate-300"
                    >
                        Mensagem
                        <span className="ml-1 text-cyan-400" aria-hidden="true">
                            *
                        </span>
                    </label>

                    <textarea
                        id="contact-message"
                        name="mensagem"
                        required
                        minLength={10}
                        maxLength={5000}
                        rows={6}
                        value={mensagem}
                        onChange={(event) =>
                            atualizarCampo("mensagem", event.target.value)
                        }
                        placeholder="Conte um pouco sobre sua ideia, projeto ou oportunidade..."
                        disabled={enviando}
                        className={`${classesCampo} resize-y leading-6`}
                    />

                    <div className="mt-2 flex items-start justify-between gap-3">
                        <p className="text-xs text-slate-500">
                            Mínimo de 10 caracteres.
                        </p>

                        <p
                            id="contact-message-count"
                            className="shrink-0 text-right text-xs tabular-nums text-slate-500"
                            aria-live="polite"
                        >
                            {mensagem.length}/5000
                        </p>
                    </div>
                </div>

                <FeedbackContato
                    tipo={feedbackTipo}
                    mensagem={feedbackMensagem}
                />

                <div className="flex justify-center pt-1">
                    <button
                        type="submit"
                        disabled={enviando}
                        className="group relative flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-md bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 px-6 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:brightness-110 hover:shadow-[0_0_28px_rgba(6,182,212,0.25)] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:shadow-lg"
                    >
                        <span
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 h-full w-full -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full"
                        />

                        <span className="relative z-10 flex items-center justify-center gap-2">
                            {enviando ? (
                                <>
                                    Enviando mensagem...
                                    <LoaderCircle
                                        className="h-4 w-4 animate-spin"
                                        aria-hidden="true"
                                    />
                                </>
                            ) : (
                                <>
                                    Enviar mensagem
                                    <Send
                                        className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                                        aria-hidden="true"
                                    />
                                </>
                            )}
                        </span>
                    </button>
                </div>
            </form>
        </div>
    );

}