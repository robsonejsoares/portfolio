"use client";

import { FormEvent, useState } from "react";
import useSWR from "swr";
import { adminHeaders, getAdminToken } from "@/lib/auth/adminAuth";

type Servico = { id: number; titulo: string; descricao: string; icone?: string };
type Formulario = Omit<Servico, "id">;
const vazio: Formulario = { titulo: "", descricao: "", icone: "" };
const baseUrl = () => (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export function AdminServicos() {
    const { data: servicos = [], mutate } = useSWR<Servico[]>(`${baseUrl()}/api/servicos`, (url: string) => fetch(url).then((res) => res.json()));
    const [formulario, setFormulario] = useState<Formulario>(vazio);
    const [editando, setEditando] = useState<number | null>(null);
    const [erro, setErro] = useState("");
    const [salvando, setSalvando] = useState(false);

    function limpar() { setEditando(null); setFormulario(vazio); setErro(""); }
    function editar(servico: Servico) { setEditando(servico.id); setFormulario({ titulo: servico.titulo, descricao: servico.descricao, icone: servico.icone ?? "" }); }

    async function salvar(evento: FormEvent) {
        evento.preventDefault(); setSalvando(true); setErro("");
        const resposta = await fetch(`${baseUrl()}/api/servicos${editando ? `/${editando}` : ""}`, { method: editando ? "PUT" : "POST", headers: { ...adminHeaders(), "Content-Type": "application/json" }, body: JSON.stringify(formulario) });
        if (!resposta.ok) { setErro("Não foi possível salvar o serviço."); setSalvando(false); return; }
        limpar(); await mutate(); setSalvando(false);
    }

    async function excluir(id: number) {
        if (!window.confirm("Excluir este serviço?")) return;
        await fetch(`${baseUrl()}/api/servicos/${id}`, { method: "DELETE", headers: adminHeaders() });
        await mutate();
    }

    if (!getAdminToken()) return null;
    return <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <form onSubmit={salvar} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{editando ? "Editar serviço" : "Novo serviço"}</h2>{editando && <button type="button" onClick={limpar} className="text-sm text-slate-400">Cancelar</button>}</div>
            <div className="mt-4 grid gap-3">
                <label className="grid gap-1 text-sm text-slate-300">Título<input required value={formulario.titulo} onChange={(e) => setFormulario({ ...formulario, titulo: e.target.value })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" /></label>
                <label className="grid gap-1 text-sm text-slate-300">Ícone<input value={formulario.icone} onChange={(e) => setFormulario({ ...formulario, icone: e.target.value })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" /></label>
                <label className="grid gap-1 text-sm text-slate-300">Descrição<textarea required rows={4} value={formulario.descricao} onChange={(e) => setFormulario({ ...formulario, descricao: e.target.value })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" /></label>
                {erro && <p className="text-sm text-red-400">{erro}</p>}
                <button disabled={salvando} className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 disabled:opacity-50">{salvando ? "Salvando..." : editando ? "Atualizar serviço" : "Adicionar serviço"}</button>
            </div>
        </form>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5"><h2 className="text-lg font-semibold">Serviços cadastrados</h2><div className="mt-4 grid gap-3">{servicos.map((servico) => <article key={servico.id} className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3"><div><h3 className="font-medium">{servico.titulo}</h3><p className="text-sm text-slate-400">{servico.descricao}</p></div><div className="flex gap-2"><button onClick={() => editar(servico)} className="rounded-md border border-slate-700 px-3 py-1 text-sm hover:border-cyan-400">Editar</button><button onClick={() => void excluir(servico.id)} className="rounded-md border border-red-900 px-3 py-1 text-sm text-red-400 hover:border-red-400">Excluir</button></div></article>)}{servicos.length === 0 && <p className="text-sm text-slate-400">Nenhum serviço encontrado.</p>}</div></div>
    </section>;
}
