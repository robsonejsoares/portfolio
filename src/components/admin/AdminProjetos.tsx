"use client";

import { FormEvent, useState } from "react";
import useSWR from "swr";
import { adminHeaders, getAdminToken } from "@/lib/auth/adminAuth";

type Projeto = {
    id: number;
    titulo: string;
    categoria: string;
    descricao: string;
    tags: string;
    link?: string;
    imagem?: string;
    destaque: boolean;
};

type Formulario = Omit<Projeto, "id">;
const vazio: Formulario = { titulo: "", categoria: "Sistemas Web", descricao: "", tags: "", link: "", imagem: "", destaque: false };
const baseUrl = () => (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export function AdminProjetos() {
    const { data: projetos = [], mutate: recarregar } = useSWR<Projeto[]>(`${baseUrl()}/api/projetos`, (url) => fetch(url).then((res) => res.json()));
    const [formulario, setFormulario] = useState<Formulario>(vazio);
    const [editando, setEditando] = useState<number | null>(null);
    const [erro, setErro] = useState("");
    const [salvando, setSalvando] = useState(false);

    function alterar(campo: keyof Formulario, valor: string | boolean) {
        setFormulario((atual) => ({ ...atual, [campo]: valor }));
    }

    function editar(projeto: Projeto) {
        setEditando(projeto.id);
        setFormulario({ titulo: projeto.titulo, categoria: projeto.categoria, descricao: projeto.descricao, tags: projeto.tags, link: projeto.link ?? "", imagem: projeto.imagem ?? "", destaque: projeto.destaque });
    }

    function limpar() { setEditando(null); setFormulario(vazio); setErro(""); }

    async function salvar(evento: FormEvent) {
        evento.preventDefault(); setSalvando(true); setErro("");
        const resposta = await fetch(`${baseUrl()}/api/projetos${editando ? `/${editando}` : ""}`, { method: editando ? "PUT" : "POST", headers: { ...adminHeaders(), "Content-Type": "application/json" }, body: JSON.stringify(formulario) });
        if (!resposta.ok) { setErro("Não foi possível salvar o projeto."); setSalvando(false); return; }
        limpar(); await recarregar(); setSalvando(false);
    }

    async function excluir(id: number) {
        if (!window.confirm("Excluir este projeto?")) return;
        await fetch(`${baseUrl()}/api/projetos/${id}`, { method: "DELETE", headers: adminHeaders() });
        await recarregar();
    }

    if (!getAdminToken()) return null;
    return <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
        <form onSubmit={salvar} className="rounded-xl border border-slate-800 bg-slate-900 p-5">
            <div className="flex items-center justify-between"><h2 className="text-lg font-semibold">{editando ? "Editar projeto" : "Novo projeto"}</h2>{editando && <button type="button" onClick={limpar} className="text-sm text-slate-400">Cancelar</button>}</div>
            <div className="mt-4 grid gap-3">
                {([['titulo', 'Título'], ['categoria', 'Categoria'], ['tags', 'Tags (separadas por vírgula)'], ['link', 'Link'], ['imagem', 'URL da imagem']] as const).map(([campo, rotulo]) => <label key={campo} className="grid gap-1 text-sm text-slate-300">{rotulo}<input value={formulario[campo]} onChange={(e) => alterar(campo, e.target.value)} required={campo === 'titulo' || campo === 'categoria'} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" /></label>)}
                <label className="grid gap-1 text-sm text-slate-300">Descrição<textarea value={formulario.descricao} onChange={(e) => alterar("descricao", e.target.value)} required rows={4} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100 outline-none focus:border-cyan-400" /></label>
                <label className="flex items-center gap-2 text-sm text-slate-300"><input type="checkbox" checked={formulario.destaque} onChange={(e) => alterar("destaque", e.target.checked)} /> Projeto em destaque</label>
                {erro && <p className="text-sm text-red-400">{erro}</p>}
                <button disabled={salvando} className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 disabled:opacity-50">{salvando ? "Salvando..." : editando ? "Atualizar projeto" : "Adicionar projeto"}</button>
            </div>
        </form>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5"><h2 className="text-lg font-semibold">Projetos cadastrados</h2><div className="mt-4 grid gap-3">{projetos.map((projeto) => <article key={projeto.id} className="flex items-center justify-between gap-3 rounded-lg border border-slate-800 bg-slate-950 p-3"><div><h3 className="font-medium">{projeto.titulo}</h3><p className="text-sm text-slate-400">{projeto.categoria}</p></div><div className="flex gap-2"><button onClick={() => editar(projeto)} className="rounded-md border border-slate-700 px-3 py-1 text-sm hover:border-cyan-400">Editar</button><button onClick={() => void excluir(projeto.id)} className="rounded-md border border-red-900 px-3 py-1 text-sm text-red-400 hover:border-red-400">Excluir</button></div></article>)}{projetos.length === 0 && <p className="text-sm text-slate-400">Nenhum projeto encontrado.</p>}</div></div>
    </section>;
}
