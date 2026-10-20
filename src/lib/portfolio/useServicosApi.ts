"use client";

import useSWR from "swr";

import { dadosServicos, type Servico } from "@/data/dadosServicos";
import { fetchPortfolioJson } from "./apiClient";

interface ApiServico {
    titulo: string;
    descricao: string;
    emoji?: string;
    cor?: Servico["cor"];
}

const fetcher = async (): Promise<ApiServico[]> => fetchPortfolioJson<ApiServico[]>("/api/servicos");

export function useServicosApi() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = apiUrl
        ? `${apiUrl.replace(/\/$/, "")}/api/servicos`
        : null;
    const { data, error, isLoading } = useSWR<ApiServico[]>(endpoint, fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
    });

    const servicos: Servico[] = data?.length
        ? data.map((servico, index) => ({
              titulo: servico.titulo,
              descricao: servico.descricao,
              emoji: servico.emoji ?? dadosServicos[index % dadosServicos.length].emoji,
              cor: servico.cor ?? dadosServicos[index % dadosServicos.length].cor,
          }))
        : dadosServicos;

    return { servicos, isLoading, hasApiError: Boolean(error) };
}
