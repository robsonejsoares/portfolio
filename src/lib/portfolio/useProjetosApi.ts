"use client";

import useSWR from "swr";

import { dadosPortfolio, type Project } from "@/data/dadosPortfolio";

const fetcher = async (url: string): Promise<Project[]> => {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Não foi possível carregar os projetos.");
    return response.json();
};

export function useProjetosApi() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    const endpoint = apiUrl ? `${apiUrl.replace(/\/$/, "")}/api/projetos` : null;
    const { data, error, isLoading } = useSWR<Project[]>(endpoint, fetcher, {
        revalidateOnFocus: false,
        shouldRetryOnError: false,
    });

    return {
        projects: data?.length ? data : dadosPortfolio.projects,
        isLoading,
        hasApiError: Boolean(error),
    };
}
