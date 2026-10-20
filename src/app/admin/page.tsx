"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdminName, getAdminToken, logoutAdmin } from "@/lib/auth/adminAuth";
import { AdminProjetos } from "@/components/admin/AdminProjetos";
import { AdminServicos } from "@/components/admin/AdminServicos";
import { AdminHabilidades } from "@/components/admin/AdminHabilidades";
import { AdminQualificacoes } from "@/components/admin/AdminQualificacoes";
import { AdminCarreira } from "@/components/admin/AdminCarreira";
import { AdminMensagens } from "@/components/admin/AdminMensagens";
import { ThemeToggle } from "@/components/common/ThemeToggle";

export default function AdminPage() {
    const router = useRouter();
    const [nome] = useState<string | null>(() => getAdminName());

    useEffect(() => {
        if (!getAdminToken()) router.replace("/admin/login");
    }, [router]);

    function sair() {
        logoutAdmin();
        router.replace("/admin/login");
    }

    if (!nome) return <main className="min-h-screen bg-slate-950" />;

    return (
        <main className="min-h-screen bg-slate-950 px-6 py-12 text-slate-100">
            <div className="mx-auto max-w-5xl">
                <div className="flex items-center justify-between border-b border-slate-800 pb-6">
                    <div><p className="text-sm text-cyan-400">Robson.dev</p><h1 className="mt-1 text-3xl font-bold">Painel administrativo</h1><p className="mt-2 text-slate-400">Olá, {nome}.</p></div>
                    <div className="flex items-center gap-3"><ThemeToggle className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:border-cyan-400" /><button onClick={sair} className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:border-cyan-400">Sair</button></div>
                </div>
                <AdminProjetos />
                <AdminServicos />
                <AdminHabilidades />
                <AdminQualificacoes />
                <AdminCarreira />
                <AdminMensagens />
            </div>
        </main>
    );
}
