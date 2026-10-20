"use client";

import useSWR from "swr";
import { skillCategories as fallback } from "@/components/sections/section-habilidades/dadosHabilidades";
import { fetchPortfolioJson } from "./apiClient";

type HabilidadeApi = { id: number; categoria: string; nome: string; nivel: number; ordem: number };

const fetcher = (): Promise<HabilidadeApi[]> => fetchPortfolioJson<HabilidadeApi[]>("/api/habilidades");

export function useHabilidadesApi() {
  const { data } = useSWR<HabilidadeApi[]>("habilidades", fetcher, { revalidateOnFocus: false });
  return { habilidades: data ?? fallback.flatMap((category) => category.skills.map((skill, ordem) => ({ id: ordem, categoria: category.label, nome: skill.name, nivel: 1, ordem }))) };
}
