"use client";

import useSWR from "swr";
import { skillCategories as fallback } from "@/components/sections/section-habilidades/dadosHabilidades";

const url = `${process.env.NEXT_PUBLIC_API_URL ?? ""}/api/habilidades`;
const fetcher = (input: string) => fetch(input).then((r) => (r.ok ? r.json() : Promise.reject(new Error("API indisponível"))));

export function useHabilidadesApi() {
  const { data } = useSWR<Array<{ id: number; categoria: string; nome: string; nivel: number; ordem: number }>>(url, fetcher, { revalidateOnFocus: false });
  return { habilidades: data ?? fallback.flatMap((category) => category.skills.map((skill, ordem) => ({ id: ordem, categoria: category.label, nome: skill.name, nivel: 1, ordem }))) };
}
