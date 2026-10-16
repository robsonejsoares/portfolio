import { NextResponse } from "next/server";

import { enviarAlertaFalhaContato } from "@/lib/alerts/email";
import {
    validarDadosContato,
    type DadosContato,
} from "@/lib/contact/validarDadosContato";
import { enviarEmailContato } from "@/lib/contact/enviarEmailContato";

export async function POST(request: Request) {
    let apiKey: string | undefined;
    let dadosAlerta: DadosContato | null = null;

    try {
        apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            console.error("[CONTATO] RESEND_API_KEY não está configurada.");

            return NextResponse.json(
                { error: "Serviço de e-mail não configurado." },
                { status: 500 },
            );
        }

        const body: unknown = await request.json();

        if (!body || typeof body !== "object" || Array.isArray(body)) {
            return NextResponse.json(
                { error: "Dados inválidos." },
                { status: 400 },
            );
        }

        const data = body as Record<string, unknown>;

        const dados: DadosContato = {
            nome: typeof data.nome === "string" ? data.nome.trim() : "",
            email: typeof data.email === "string" ? data.email.trim() : "",
            assunto:
                typeof data.assunto === "string"
                    ? data.assunto.trim()
                    : "",
            mensagem:
                typeof data.mensagem === "string"
                    ? data.mensagem.trim()
                    : "",
        };

        const erroValidacao = validarDadosContato(dados);

        if (erroValidacao) {
            return NextResponse.json(
                { error: erroValidacao },
                { status: 400 },
            );
        }

        dadosAlerta = dados;

        const resultado = await enviarEmailContato(dados);

        if (!resultado.sucesso) {
            const erro = resultado.erro ?? "Erro desconhecido";

            if (erro === "Serviço de e-mail não configurado.") {
                return NextResponse.json(
                    { error: erro },
                    { status: 500 },
                );
            }

            await enviarAlertaFalhaContato({
                ...dados,
                erro,
            });

            return NextResponse.json(
                {
                    error:
                        "Não foi possível enviar sua mensagem. Tente novamente.",
                },
                { status: 502 },
            );
        }

        return NextResponse.json({
            success: true,
            message: "Mensagem enviada com sucesso!",
        });
    } catch (error) {
        const detalhe =
            error instanceof Error ? error.message : "Erro desconhecido";

        console.error("[CONTATO] Erro inesperado:", detalhe);

        if (apiKey && dadosAlerta) {
            await enviarAlertaFalhaContato({
                ...dadosAlerta,
                erro: detalhe,
            });
        }

        return NextResponse.json(
            { error: "Ocorreu um erro ao processar sua mensagem." },
            { status: 500 },
        );
    }
}