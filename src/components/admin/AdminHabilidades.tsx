"use client";

import { FormEvent, useState } from "react";
import useSWR from "swr";
import { adminHeaders, getAdminToken } from "@/lib/auth/adminAuth";

type Habilidade = { id: number; categoria: string; nome: string; nivel: number; ordem: number };
type Formulario = Omit<Habilidade, "id">;
const vazio: Formulario = { categoria: "", nome: "", nivel: 1, ordem: 0 };
const baseUrl = () => (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export function AdminHabilidades() {
    const { data: habilidades = [], mutate } = useSWR<Habilidade[]>(`${baseUrl()}/api/habilidades`, (url: string) => fetch(url).then((res) => res.json()));
    const [formulario, setFormulario] = useState<Formulario>(vazio);
    const [editando, setEditando] = useState<number | null>(null);
    const [erro, setErro] = useState("");
    const [salvando, setSalvando] = useState(false);

    function limpar() { setEditando(null); setFormulario(vazio); setErro(""); }
    function editar(item: Habilidade) { setEditando(item.id); setFormulario({ categoria: item.categoria, nome: item.nome, nivel: item.nivel, ordem: item.ordem }); }
    async function salvar(evento: FormEvent) {
        evento.preventDefault(); setSalvando(true); setErro("");
        const resposta = await fetch(`${baseUrl()}/api/habilidades${editando ? `/${editando}` : ""}`, { method: editando ? "PUT" : "POST", headers: { ...adminHeaders(), "Content-Type": "application/json" }, body: JSON.stringify(formulario) });
        if (!resposta.ok) { setErro("Não foi possível salvar a habilidade."); setSalvando(false); return; }
        limpar(); await mutate(); setSalvando(false);
    }
    async function excluir(id: number) { if (!window.confirm("Excluir esta habilidade?")) return; await fetch(`${baseUrl()}/api/habilidades/${id}`, { method: "DELETE", headers: adminHeaders() }); await mutate(); }
    if (!getAdminToken()) return null;
    return <section className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <form onSubmit={salvar} className="rounded-xl border border-slate-800 bg-slate-900 p-5"><div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{editando ? "Editar habilidade" : "Nova habilidade"}</h2>{editando && <button type="button" onClick={limpar} className="text-sm text-slate-400">Cancelar</button>}</div><div className="mt-4 grid gap-3">
            {(["categoria", "nome"] as const).map((campo) => <label key={campo} className="grid gap-1 text-sm text-slate-300">{campo === "categoria" ? "Categoria" : "Nome"}<input required value={formulario[campo]} onChange={(e) => setFormulario({ ...formulario, [campo]: e.target.value })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" /></label>)}
            <label className="grid gap-1 text-sm text-slate-300">Nível (1 a 100)<input required min="1" max="100" type="number" value={formulario.nivel} onChange={(e) => setFormulario({ ...formulario, nivel: Number(e.target.value) })} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" /></label>
            {erro && <p className="text-sm text-red-400">{erro}</p>}<button disabled={salvando} className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 disabled:opacity-50">{salvando ? "Salvando..." : editando ? "Atualizar habilidade" : "Adicionar habilidade"}</button>
        </div></form>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5"><h2 className="text-lg font-semibold">Habilidades cadastradas</h2><div className="mt-4 grid gap-3">{habilidades.map((item) => <article key={item.id} className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3"><div><p className="text-xs text-cyan-400">{item.categoria}</p><h3 className="font-medium">{item.nome}</h3><p className="text-sm text-slate-400">Nível {item.nivel}</p></div><div className="flex gap-2"><button onClick={() => editar(item)} className="rounded-md border border-slate-700 px-3 py-1 text-sm hover:border-cyan-400">Editar</button><button onClick={() => void excluir(item.id)} className="rounded-md border border-red-900 px-3 py-1 text-sm text-red-400 hover:border-red-400">Excluir</button></div></article>)}{habilidades.length === 0 && <p className="text-sm text-slate-400">Nenhuma habilidade encontrada.</p>}</div></div>
    </section>;
}
