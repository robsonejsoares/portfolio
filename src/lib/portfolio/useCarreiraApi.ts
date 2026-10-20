"use client";

import useSWR from "swr";
import { dadosCurriculo } from "@/data/dadosCurriculo";

const url = `${process.env.NEXT_PUBLIC_API_URL ?? ""}/api/carreiras`;
const fetcher = (input: string) => fetch(input).then((r) => (r.ok ? r.json() : Promise.reject(new Error("API indisponível"))));

export function useCarreiraApi() {
  const { data } = useSWR<Array<{ id: number; cargo: string; empresa: string; periodo: string; tipo?: string; descricao?: string; conquistas: string }>>(url, fetcher, { revalidateOnFocus: false });
  const fallback = dadosCurriculo.experiences.map((item, id) => ({ id, cargo: item.role, empresa: item.company, periodo: item.period, tipo: "Experiência", descricao: item.subtitle, conquistas: item.highlights.join("\n") }));
  return { carreiras: data ?? fallback };
}
