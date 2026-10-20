"use client";

import useSWR from "swr";
import { adminHeaders } from "@/lib/auth/adminAuth";

type Mensagem = { id: number; nome: string; email: string; empresa?: string; projeto?: string; mensagem?: string; dataEnvio: string; lida: boolean };
const apiUrl = () => (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export function AdminMensagens() {
    const { data: mensagens = [], mutate } = useSWR<Mensagem[]>(`${apiUrl()}/api/contato`, (url) => fetch(url, { headers: adminHeaders() }).then((res) => res.json()));

    async function atualizar(id: number, lida: boolean) {
        await fetch(`${apiUrl()}/api/contato/${id}`, { method: "PATCH", headers: { ...adminHeaders(), "Content-Type": "application/json" }, body: JSON.stringify({ lida }) });
        await mutate();
    }

    async function excluir(id: number) {
        if (!window.confirm("Excluir esta mensagem?")) return;
        await fetch(`${apiUrl()}/api/contato/${id}`, { method: "DELETE", headers: adminHeaders() });
        await mutate();
    }

    return <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
        <div className="flex items-center justify-between"><div><h2 className="text-xl font-semibold">Mensagens de contato</h2><p className="mt-1 text-sm text-slate-400">{mensagens.length} mensagem(ns) recebida(s).</p></div></div>
        <div className="mt-5 space-y-3">{mensagens.length === 0 ? <p className="text-sm text-slate-500">Nenhuma mensagem recebida.</p> : mensagens.map((item) => <article key={item.id} className={`rounded-lg border p-4 ${item.lida ? "border-slate-800" : "border-cyan-800 bg-cyan-950/20"}`}><div className="flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-medium">{item.nome}</h3><p className="text-sm text-cyan-400">{item.email}</p></div><time className="text-xs text-slate-500">{new Date(item.dataEnvio).toLocaleString("pt-BR")}</time></div><p className="mt-3 whitespace-pre-wrap text-sm text-slate-300">{item.mensagem}</p><div className="mt-4 flex gap-2"><button onClick={() => atualizar(item.id, !item.lida)} className="rounded-md border border-slate-700 px-3 py-1.5 text-xs hover:border-cyan-400">{item.lida ? "Marcar não lida" : "Marcar como lida"}</button><button onClick={() => excluir(item.id)} className="rounded-md border border-red-900 px-3 py-1.5 text-xs text-red-300 hover:border-red-500">Excluir</button></div></article>)}</div>
    </section>;
}
