"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getAdminName, getAdminToken, logoutAdmin } from "@/lib/auth/adminAuth";
import { AdminProjetos } from "@/components/admin/AdminProjetos";

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
                    <button onClick={sair} className="rounded-lg border border-slate-700 px-4 py-2 text-sm hover:border-cyan-400">Sair</button>
                </div>
                <AdminProjetos />
                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                    {["Serviços", "Habilidades", "Qualificações", "Carreira", "Mensagens"].map((item) => <section key={item} className="rounded-xl border border-slate-800 bg-slate-900 p-5"><h2 className="font-semibold">{item}</h2><p className="mt-2 text-sm text-slate-400">Disponível pela API Spring Boot.</p></section>)}
                </div>
            </div>
        </main>
    );
}
