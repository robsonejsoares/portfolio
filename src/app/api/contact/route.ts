import { NextResponse } from "next/server";
import { Resend } from "resend";
import { enviarAlertaFalhaContato } from "@/lib/alerts/email";

interface DadosContato {
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
}

function escaparHtml(valor: string): string {
    return valor
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");
}

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

        const nome = typeof data.nome === "string" ? data.nome.trim() : "";
        const email = typeof data.email === "string" ? data.email.trim() : "";
        const assunto =
            typeof data.assunto === "string" ? data.assunto.trim() : "";
        const mensagem =
            typeof data.mensagem === "string" ? data.mensagem.trim() : "";

        if (!nome || !email || !assunto || !mensagem) {
            return NextResponse.json(
                { error: "Preencha todos os campos." },
                { status: 400 },
            );
        }

        if (
            nome.length > 100 ||
            email.length > 254 ||
            assunto.length > 150 ||
            mensagem.length > 5000
        ) {
            return NextResponse.json(
                { error: "Um ou mais campos excedem o limite permitido." },
                { status: 400 },
            );
        }

        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            return NextResponse.json(
                { error: "Informe um e-mail válido." },
                { status: 400 },
            );
        }

        if (mensagem.length < 10) {
            return NextResponse.json(
                { error: "A mensagem deve ter pelo menos 10 caracteres." },
                { status: 400 },
            );
        }

        dadosAlerta = { nome, email, assunto, mensagem };

        const nomeHtml = escaparHtml(nome);
        const emailHtml = escaparHtml(email);
        const assuntoHtml = escaparHtml(assunto);
        const mensagemHtml = escaparHtml(mensagem).replace(/\r\n|\r|\n/g, "<br>");

        const corTitulo = "#0f172a";
        const corTexto = "#475569";
        const corRotulo = "#334155";
        const corSecundaria = "#64748b";
        const corBorda = "#e2e8f0";
        const tamanhoTitulo = "16px";
        const tamanhoTexto = "13px";

        const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nova mensagem recebida</title>
</head>
<body style="margin:0; padding:0; background-color:#f1f5f9; font-family:Arial,Helvetica,sans-serif; color:${corTexto};">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%; background-color:#f1f5f9; padding:28px 12px;">
        <tr>
            <td align="center">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%; max-width:600px; background-color:#ffffff; border:1px solid ${corBorda}; border-radius:12px; overflow:hidden;">

                    <!-- Cabeçalho -->
                    <tr>
                        <td style="background-color:${corTitulo}; padding:22px 24px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td style="width:34px; vertical-align:middle; font-size:22px; line-height:1;">
                                        ✉
                                    </td>
                                    <td style="vertical-align:middle;">
                                        <h1 style="margin:0; color:#ffffff; font-size:20px; line-height:1.4; font-weight:600;">
                                            Nova mensagem recebida
                                        </h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Resumo -->
                    <tr>
                        <td style="padding:24px 24px 20px;">
                            <p style="margin:0; color:${corTexto}; font-size:14px; line-height:1.7;">
                                Você recebeu uma nova mensagem pelo formulário de contato do seu portfólio.
                            </p>
                        </td>
                    </tr>

                    <!-- Dados do visitante -->
                    <tr>
                        <td style="padding:0 24px 24px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="width:100%; border:1px solid ${corBorda}; border-radius:8px; border-collapse:separate;">

                                <tr>
                                    <td colspan="2" style="padding:16px 16px 12px;">
                                        <h2 style="margin:0; color:${corTitulo}; font-size:${tamanhoTitulo}; line-height:1.4; font-weight:600;">
                                            Dados do visitante
                                        </h2>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:10px 16px; width:100px; vertical-align:top; border-top:1px solid ${corBorda};">
                                        <span style="color:${corRotulo}; font-size:12px; font-weight:600;">
                                            Nome
                                        </span>
                                    </td>
                                    <td style="padding:10px 16px; vertical-align:top; border-top:1px solid ${corBorda};">
                                        <span style="color:${corTexto}; font-size:${tamanhoTexto}; line-height:1.6; overflow-wrap:anywhere;">
                                            ${nomeHtml}
                                        </span>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:10px 16px; width:100px; vertical-align:top; border-top:1px solid ${corBorda};">
                                        <span style="color:${corRotulo}; font-size:12px; font-weight:600;">
                                            E-mail
                                        </span>
                                    </td>
                                    <td style="padding:10px 16px; vertical-align:top; border-top:1px solid ${corBorda};">
                                        <a href="mailto:${emailHtml}" style="color:${corTexto}; font-size:${tamanhoTexto}; line-height:1.6; overflow-wrap:anywhere; text-decoration:underline;">
                                            ${emailHtml}
                                        </a>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:10px 16px; width:100px; vertical-align:top; border-top:1px solid ${corBorda};">
                                        <span style="color:${corRotulo}; font-size:12px; font-weight:600;">
                                            Assunto
                                        </span>
                                    </td>
                                    <td style="padding:10px 16px; vertical-align:top; border-top:1px solid ${corBorda};">
                                        <span style="color:${corTexto}; font-size:${tamanhoTexto}; line-height:1.6; overflow-wrap:anywhere;">
                                            ${assuntoHtml}
                                        </span>
                                    </td>
                                </tr>

                                <!-- Mensagem, sem fundo colorido -->
                                <tr>
                                    <td colspan="2" style="padding:16px; border-top:1px solid ${corBorda};">
                                        <p style="margin:0 0 10px; color:${corRotulo}; font-size:12px; font-weight:600;">
                                            Mensagem
                                        </p>
                                        <p style="margin:0; color:${corTexto}; font-size:${tamanhoTexto}; line-height:1.8; overflow-wrap:anywhere; word-break:break-word;">
                                            ${mensagemHtml}
                                        </p>
                                    </td>
                                </tr>

                            </table>
                        </td>
                    </tr>

                    <!-- Rodapé -->
                    <tr>
                        <td style="padding:16px 24px; border-top:1px solid ${corBorda}; background-color:#ffffff;">
                            <p style="margin:0; color:${corSecundaria}; font-size:12px; line-height:1.7; text-align:center;">
                                Mensagem recebida pelo portfólio do Robson Soares.
                            </p>
                        </td>
                    </tr>

                </table>
            </td>
        </tr>
    </table>
</body>
</html>`;

        const text = [
            "NOVA MENSAGEM RECEBIDA",
            "",
            "Você recebeu uma nova mensagem pelo formulário de contato do seu portfólio.",
            "",
            "DADOS DO VISITANTE",
            "",
            `Nome: ${nome}`,
            `E-mail: ${email}`,
            `Assunto: ${assunto}`,
            "",
            "MENSAGEM",
            mensagem,
            "",
            "Mensagem recebida pelo portfólio do Robson Soares.",
        ].join("\n");

        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
            from: "Portfólio <contato@xcodify.com.br>",
            to: ["robsoncsoares.1050@gmail.com"],
            replyTo: email,
            subject: assunto,
            html,
            text,
        });

        if (error) {
            console.error("[CONTATO] Falha no Resend:", error.message);

            await enviarAlertaFalhaContato({
                ...dadosAlerta,
                erro: error.message,
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