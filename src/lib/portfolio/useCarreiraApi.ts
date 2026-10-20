"use client";

import useSWR from "swr";
import { dadosCurriculo } from "@/data/dadosCurriculo";
import { fetchPortfolioJson } from "./apiClient";

type CarreiraApi = { id: number; cargo: string; empresa: string; periodo: string; tipo?: string; descricao?: string; conquistas: string };

const fetcher = (): Promise<CarreiraApi[]> => fetchPortfolioJson<CarreiraApi[]>("/api/carreiras");

export function useCarreiraApi() {
  const { data } = useSWR<CarreiraApi[]>("carreiras", fetcher, { revalidateOnFocus: false });
  const fallback = dadosCurriculo.experiences.map((item, id) => ({ id, cargo: item.role, empresa: item.company, periodo: item.period, tipo: "Experiência", descricao: item.subtitle, conquistas: item.highlights.join("\n") }));
  return { carreiras: data ?? fallback };
}
