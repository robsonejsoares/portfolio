"use client";

import { FormEvent, useState } from "react";
import useSWR from "swr";
import { adminHeaders, getAdminToken } from "@/lib/auth/adminAuth";

type Qualificacao = { id: number; titulo: string; instituicao: string; tipo: string; dataInicio?: string; dataFim?: string; descricao?: string; documentoUrl?: string };
type Formulario = Omit<Qualificacao, "id">;
const vazio: Formulario = { titulo: "", instituicao: "", tipo: "Curso", dataInicio: "", dataFim: "", descricao: "", documentoUrl: "" };
const baseUrl = () => (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export function AdminQualificacoes() {
    const { data: itens = [], mutate } = useSWR<Qualificacao[]>(`${baseUrl()}/api/qualificacoes`, (url: string) => fetch(url).then((res) => res.json()));
    const [formulario, setFormulario] = useState<Formulario>(vazio);
    const [editando, setEditando] = useState<number | null>(null);
    const [erro, setErro] = useState("");
    const [salvando, setSalvando] = useState(false);
    function limpar() { setEditando(null); setFormulario(vazio); setErro(""); }
    function editar(item: Qualificacao) { setEditando(item.id); setFormulario({ titulo: item.titulo, instituicao: item.instituicao, tipo: item.tipo, dataInicio: item.dataInicio ?? "", dataFim: item.dataFim ?? "", descricao: item.descricao ?? "", documentoUrl: item.documentoUrl ?? "" }); }
    async function salvar(evento: FormEvent) { evento.preventDefault(); setSalvando(true); setErro(""); const resposta = await fetch(`${baseUrl()}/api/qualificacoes${editando ? `/${editando}` : ""}`, { method: editando ? "PUT" : "POST", headers: { ...adminHeaders(), "Content-Type": "application/json" }, body: JSON.stringify(formulario) }); if (!resposta.ok) { setErro("Não foi possível salvar a qualificação."); setSalvando(false); return; } limpar(); await mutate(); setSalvando(false); }
    async function excluir(id: number) { if (!window.confirm("Excluir esta qualificação?")) return; await fetch(`${baseUrl()}/api/qualificacoes/${id}`, { method: "DELETE", headers: adminHeaders() }); await mutate(); }
    if (!getAdminToken()) return null;
    return <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <form onSubmit={salvar} className="rounded-xl border border-slate-800 bg-slate-900 p-5"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{editando ? "Editar qualificação" : "Nova qualificação"}</h2>{editando && <button type="button" onClick={limpar} className="text-sm text-slate-400">Cancelar</button>}</div><div className="mt-4 grid gap-3">
            <input required placeholder="Título" value={formulario.titulo} onChange={(e) => setFormulario({ ...formulario, titulo: e.target.value })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" /><input required placeholder="Instituição" value={formulario.instituicao} onChange={(e) => setFormulario({ ...formulario, instituicao: e.target.value })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" /><input required placeholder="Tipo" value={formulario.tipo} onChange={(e) => setFormulario({ ...formulario, tipo: e.target.value })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" /><div className="grid gap-3 sm:grid-cols-2"><input type="date" value={formulario.dataInicio} onChange={(e) => setFormulario({ ...formulario, dataInicio: e.target.value })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" /><input type="date" value={formulario.dataFim} onChange={(e) => setFormulario({ ...formulario, dataFim: e.target.value })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" /></div><textarea placeholder="Descrição" value={formulario.descricao} onChange={(e) => setFormulario({ ...formulario, descricao: e.target.value })} className="min-h-24 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" />
            {erro && <p className="text-sm text-red-400">{erro}</p>}<button disabled={salvando} className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 disabled:opacity-50">{salvando ? "Salvando..." : editando ? "Atualizar qualificação" : "Adicionar qualificação"}</button>
        </div></form>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5"><h2 className="text-lg font-semibold">Qualificações cadastradas</h2><div className="mt-4 grid gap-3">{itens.map((item) => <article key={item.id} className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3"><div><p className="text-xs text-cyan-400">{item.tipo}</p><h3 className="font-medium">{item.titulo}</h3><p className="text-sm text-slate-400">{item.instituicao}</p></div><div className="flex gap-2"><button onClick={() => editar(item)} className="rounded-md border border-slate-700 px-3 py-1 text-sm">Editar</button><button onClick={() => void excluir(item.id)} className="rounded-md border border-red-900 px-3 py-1 text-sm text-red-400">Excluir</button></div></article>)}{itens.length === 0 && <p className="text-sm text-slate-400">Nenhuma qualificação encontrada.</p>}</div></div>
    </section>;
}
