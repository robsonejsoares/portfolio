
"use client";

import { useEffect, useState } from "react";

interface UseEfeitoDigitacaoProps {
    textos: string[];
    velocidadeDigitacao?: number;
    velocidadeApagar?: number;
    tempoEspera?: number;
}

export function useEfeitoDigitacao({
    textos,
    velocidadeDigitacao = 80,
    velocidadeApagar = 40,
    tempoEspera = 1800,
}: UseEfeitoDigitacaoProps): string {
    const [indiceTexto, setIndiceTexto] = useState(0);
    const [textoExibido, setTextoExibido] = useState("");
    const [apagando, setApagando] = useState(false);

    const quantidadeTextos = textos.length;
    const indiceValido =
        quantidadeTextos > 0 && indiceTexto < quantidadeTextos
            ? indiceTexto
            : 0;

    const textoAtual = textos[indiceValido] ?? "";

    useEffect(() => {
        if (!textoAtual) {
            return;
        }

        if (!apagando && textoExibido === textoAtual) {
            const temporizador = window.setTimeout(() => {
                setApagando(true);
            }, tempoEspera);

            return () => window.clearTimeout(temporizador);
        }

        const temporizador = window.setTimeout(() => {
            if (apagando) {
                const proximoTexto = textoAtual.substring(
                    0,
                    textoExibido.length - 1,
                );

                setTextoExibido(proximoTexto);

                if (proximoTexto.length === 0) {
                    setApagando(false);
                    setIndiceTexto(
                        (indiceAnterior) =>
                            (indiceAnterior + 1) % quantidadeTextos,
                    );
                }

                return;
            }

            setTextoExibido(
                textoAtual.substring(0, textoExibido.length + 1),
            );
        }, apagando ? velocidadeApagar : velocidadeDigitacao);

        return () => window.clearTimeout(temporizador);
    }, [
        textoAtual,
        textoExibido,
        apagando,
        quantidadeTextos,
        velocidadeDigitacao,
        velocidadeApagar,
        tempoEspera,
    ]);

    if (quantidadeTextos === 0) {
        return "";
    }

    return textoExibido;
}
