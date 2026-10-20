"use client";

import { useState } from "react";
import useSWR from "swr";
import { adminHeaders } from "@/lib/auth/adminAuth";

interface Carreira { id: number; cargo: string; empresa: string; periodo: string; tipo?: string; descricao?: string; conquistas: string; }
const vazio = { cargo: "", empresa: "", periodo: "", tipo: "", descricao: "", conquistas: "" };
const api = () => process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "") || "http://localhost:8080";

export function AdminCarreira() {
  const { data: itens = [], mutate } = useSWR<Carreira[]>(`${api()}/api/carreiras`, (url: string) => fetch(url).then((r) => r.json()));
  const [form, setForm] = useState(vazio);
  const [editando, setEditando] = useState<number | null>(null);
  const [erro, setErro] = useState("");

  function alterar(campo: keyof typeof vazio, valor: string) { setForm((atual) => ({ ...atual, [campo]: valor })); }
  function editar(item: Carreira) { setEditando(item.id); setForm({ cargo: item.cargo, empresa: item.empresa, periodo: item.periodo, tipo: item.tipo || "", descricao: item.descricao || "", conquistas: item.conquistas }); }
  function limpar() { setEditando(null); setForm(vazio); }
  async function salvar(event: React.FormEvent) {
    event.preventDefault(); setErro("");
    const resposta = await fetch(editando ? `${api()}/api/carreiras/${editando}` : `${api()}/api/carreiras`, { method: editando ? "PUT" : "POST", headers: { ...adminHeaders(), "Content-Type": "application/json" }, body: JSON.stringify(form) });
    if (!resposta.ok) { setErro("Não foi possível salvar a experiência."); return; }
    limpar(); await mutate();
  }
  async function excluir(id: number) { if (!window.confirm("Excluir esta experiência?")) return; await fetch(`${api()}/api/carreiras/${id}`, { method: "DELETE", headers: adminHeaders() }); await mutate(); }

  return <section className="mt-6 rounded-xl border border-slate-800 bg-slate-900 p-6">
    <div className="mb-5"><h2 className="text-xl font-semibold">Carreira profissional</h2><p className="mt-1 text-sm text-slate-400">Gerencie suas experiências profissionais.</p></div>
    <form onSubmit={salvar} className="grid gap-3 md:grid-cols-2">
      {([["cargo", "Cargo"], ["empresa", "Empresa"], ["periodo", "Período"], ["tipo", "Tipo"]] as const).map(([campo, label]) => <input key={campo} required={campo !== "tipo"} value={form[campo]} onChange={(e) => alterar(campo, e.target.value)} placeholder={label} className="rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-cyan-400" />)}
      <textarea value={form.descricao} onChange={(e) => alterar("descricao", e.target.value)} placeholder="Descrição" className="min-h-20 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-cyan-400 md:col-span-2" />
      <textarea required value={form.conquistas} onChange={(e) => alterar("conquistas", e.target.value)} placeholder="Conquistas, uma por linha" className="min-h-20 rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-sm outline-none focus:border-cyan-400 md:col-span-2" />
      <div className="flex gap-2 md:col-span-2"><button className="rounded-lg bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950">{editando ? "Atualizar" : "Adicionar"}</button>{editando && <button type="button" onClick={limpar} className="rounded-lg border border-slate-700 px-4 py-2 text-sm">Cancelar</button>}</div>
      {erro && <p className="text-sm text-red-400 md:col-span-2">{erro}</p>}
    </form>
    <div className="mt-6 space-y-2">{itens.map((item) => <div key={item.id} className="flex items-center justify-between gap-4 rounded-lg border border-slate-800 px-4 py-3"><div><p className="font-medium">{item.cargo}</p><p className="text-sm text-slate-400">{item.empresa} · {item.periodo}</p></div><div className="flex gap-2"><button onClick={() => editar(item)} className="rounded border border-slate-700 px-3 py-1 text-xs">Editar</button><button onClick={() => excluir(item.id)} className="rounded border border-red-900 px-3 py-1 text-xs text-red-300">Excluir</button></div></div>)}</div>
  </section>;
}
