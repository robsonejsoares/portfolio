"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";
import { loginAdmin } from "@/lib/auth/adminAuth";

export default function AdminLoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const [carregando, setCarregando] = useState(false);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setErro("");
        setCarregando(true);
        try {
            await loginAdmin(email, senha);
            router.push("/admin");
        } catch (error) {
            setErro(error instanceof Error ? error.message : "Não foi possível entrar.");
        } finally {
            setCarregando(false);
        }
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-slate-950 px-6 text-slate-100">
            <form onSubmit={handleSubmit} className="w-full max-w-md space-y-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
                <div>
                    <p className="text-sm font-medium text-cyan-400">Robson.dev</p>
                    <h1 className="mt-2 text-3xl font-bold">Área administrativa</h1>
                    <p className="mt-2 text-sm text-slate-400">Entre para gerenciar o conteúdo do portfólio.</p>
                </div>
                <label className="block text-sm text-slate-300">E-mail<input required type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 outline-none focus:border-cyan-400" /></label>
                <label className="block text-sm text-slate-300">Senha<input required type="password" value={senha} onChange={(event) => setSenha(event.target.value)} className="mt-2 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-3 outline-none focus:border-cyan-400" /></label>
                {erro && <p role="alert" className="rounded-lg border border-red-900 bg-red-950/40 p-3 text-sm text-red-300">{erro}</p>}
                <button disabled={carregando} className="w-full rounded-lg bg-cyan-500 px-4 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400 disabled:cursor-wait disabled:opacity-60">{carregando ? "Entrando..." : "Entrar"}</button>
            </form>
        </main>
    );
}
