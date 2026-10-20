"use client";

import useSWR from "swr";
import { dadosQualificacoes, type Qualificacao } from "@/data/dadosQualificacoes";

const baseUrl = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");

const fetcher = async (url: string): Promise<Qualificacao[]> => {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Não foi possível carregar as qualificações");
  const data = await response.json();
  return data.map((item: Partial<Qualificacao> & { id: number | string }) => ({
    id: String(item.id),
    title: item.title ?? "Qualificação",
    institution: item.institution ?? "",
    category: item.category ?? "Cursos",
    period: item.period ?? "",
    status: item.status,
    description: item.description ?? "",
    certificateUrl: item.certificateUrl,
    highlights: item.highlights ?? [],
  }));
};

export function useQualificacoesApi() {
  const { data, error, isLoading } = useSWR<Qualificacao[]>(
    baseUrl ? `${baseUrl}/api/qualificacoes` : null,
    fetcher,
  );

  return {
    qualificacoes: data?.length ? data : dadosQualificacoes,
    error,
    isLoading,
  };
}
