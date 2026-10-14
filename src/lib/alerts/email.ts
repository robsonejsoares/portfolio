import { Resend } from "resend";

interface AlertaFalhaContato {
    nome: string;
    email: string;
    assunto: string;
    mensagem: string;
    erro: string;
}

export async function enviarAlertaFalhaContato(
    dados: AlertaFalhaContato,
): Promise<void> {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error(
            "[ALERTA DE CONTATO] RESEND_API_KEY não está configurada.",
        );
        return;
    }

    const urlLogsResend = "https://resend.com/logs";
    const urlLogsVercel =
        "https://vercel.com/o-programador-autonomo/portfolio/logs";

    const dataAtual = new Date().toISOString();
    const ambiente =
        process.env.VERCEL_ENV ?? "local ou não identificado";

    function escaparHtml(valor: string): string {
        return valor.replace(/[&<>"']/g, (caractere) => {
            const entidades: Record<string, string> = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
            };

            return entidades[caractere];
        });
    }

    const nomeHtml = escaparHtml(dados.nome);
    const emailHtml = escaparHtml(dados.email);
    const assuntoHtml = escaparHtml(dados.assunto);
    const erroHtml = escaparHtml(dados.erro);
    const dataHtml = escaparHtml(dataAtual);
    const ambienteHtml = escaparHtml(ambiente);

    const mensagemHtml = escaparHtml(dados.mensagem).replace(
        /\r\n|\r|\n/g,
        "<br>",
    );

    // Tokens visuais para manter a hierarquia consistente.
    const corTitulo = "#0f172a";
    const corTexto = "#475569";
    const corRotulo = "#334155";
    const corSecundaria = "#64748b";
    const corBorda = "#e2e8f0";
    const tamanhoTitulo = "16px";
    const tamanhoTexto = "13px";

    const estiloRotulo = `margin:0 0 5px;font-size:12px;line-height:1.5;font-weight:bold;color:${corRotulo};`;

    const estiloValor = `margin:0;font-size:${tamanhoTexto};line-height:1.8;font-weight:normal;color:${corTexto};overflow-wrap:anywhere;word-break:break-word;`;

    const html = `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alerta de falha - Portfólio</title>
</head>

<body style="margin:0;padding:0;background-color:#f1f5f9;font-family:Arial,Helvetica,sans-serif;color:${corTexto};">

    <div style="display:none;max-height:0;overflow:hidden;opacity:0;">
        Falha no formulário de contato.
    </div>

    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f1f5f9;">
        <tr>
            <td align="center" style="padding:28px 12px;">

                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:600px;background-color:#ffffff;border:1px solid ${corBorda};border-radius:12px;overflow:hidden;">

                    <!-- 1. Cabeçalho -->
                    <tr>
                        <td style="padding:22px 24px;background-color:#0f172a;">
                            <table role="presentation" cellspacing="0" cellpadding="0" border="0">
                                <tr>
                                    <td valign="middle" style="padding-right:10px;">
                                        <span style="display:inline-block;width:30px;height:30px;line-height:30px;text-align:center;border:1px solid #7f1d1d;border-radius:8px;background-color:#451a1a;color:#fca5a5;font-size:17px;">
                                            ⚠️
                                        </span>
                                    </td>
                                    <td valign="middle">
                                        <h1 style="margin:0;font-size:20px;line-height:1.5;font-weight:bold;color:#f8fafc;">
                                            Alerta de falha
                                        </h1>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- 2. Resumo -->
                    <tr>
                        <td style="padding:22px 24px 18px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid ${corBorda};border-radius:8px;">
                                <tr>
                                    <td style="padding:16px;">
                                        <h2 style="margin:0 0 8px;font-size:${tamanhoTitulo};line-height:1.5;font-weight:bold;color:${corTitulo};">
                                            O processamento falhou
                                        </h2>
                                        <p style="margin:0;font-size:${tamanhoTexto};line-height:1.8;color:${corTexto};">
                                            Uma solicitação do formulário de contato não foi processada corretamente. Consulte o erro identificado e as informações técnicas abaixo para investigar a causa.
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- 3. Erro identificado -->
                    <tr>
                        <td style="padding:0 24px 18px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#fff7f7;border:1px solid #fecaca;border-radius:8px;">
                                <tr>
                                    <td style="padding:16px;">
                                        <p style="margin:0 0 8px;font-size:11px;line-height:1.5;font-weight:bold;letter-spacing:0.6px;color:#b91c1c;">
                                            ERRO IDENTIFICADO
                                        </p>
                                        <p style="margin:0;font-family:Consolas,Monaco,monospace;font-size:${tamanhoTexto};line-height:1.8;color:#991b1b;overflow-wrap:anywhere;word-break:break-word;">
                                            ${erroHtml}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- 4. Informações técnicas -->
                    <tr>
                        <td style="padding:0 24px 18px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid ${corBorda};border-radius:8px;">
                                <tr>
                                    <td style="padding:14px 16px;">
                                        <h2 style="margin:0;font-size:${tamanhoTitulo};line-height:1.5;font-weight:bold;color:${corTitulo};">
                                            Informações técnicas
                                        </h2>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:12px 16px;border-top:1px solid ${corBorda};">
                                        <p style="${estiloRotulo}">
                                            Data e hora (UTC)
                                        </p>
                                        <p style="${estiloValor}">
                                            ${dataHtml}
                                        </p>
                                    </td>
                                </tr>
                                <tr>
                                    <td style="padding:12px 16px;border-top:1px solid ${corBorda};">
                                        <p style="${estiloRotulo}">
                                            Ambiente
                                        </p>
                                        <p style="${estiloValor}">
                                            ${ambienteHtml}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- 5. Dados do visitante -->
                    <tr>
                        <td style="padding:0 24px 18px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid ${corBorda};border-radius:8px;">
                                <tr>
                                    <td style="padding:14px 16px;">
                                        <h2 style="margin:0;font-size:${tamanhoTitulo};line-height:1.5;font-weight:bold;color:${corTitulo};">
                                            Dados do visitante
                                        </h2>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px 16px;border-top:1px solid ${corBorda};">
                                        <p style="${estiloRotulo}">Nome</p>
                                        <p style="${estiloValor}">${nomeHtml}</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px 16px;border-top:1px solid ${corBorda};">
                                        <p style="${estiloRotulo}">E-mail</p>
                                        <p style="${estiloValor}">${emailHtml}</p>
                                    </td>
                                </tr>

                                <tr>
                                    <td style="padding:12px 16px;border-top:1px solid ${corBorda};">
                                        <p style="${estiloRotulo}">Assunto</p>
                                        <p style="${estiloValor}">${assuntoHtml}</p>
                                    </td>
                                </tr>

                                <!-- Mensagem sem fundo colorido -->
                                <tr>
                                    <td style="padding:14px 16px;border-top:1px solid ${corBorda};">
                                        <p style="${estiloRotulo}">Mensagem</p>
                                        <p style="${estiloValor}">
                                            ${mensagemHtml}
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- 6. Logs e diagnóstico -->
                    <tr>
                        <td style="padding:0 24px 22px;">
                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid ${corBorda};border-radius:8px;">
                                <tr>
                                    <td style="padding:14px 16px;">
                                        <h2 style="margin:0 0 5px;font-size:${tamanhoTitulo};line-height:1.5;font-weight:bold;color:${corTitulo};">
                                            Logs e diagnóstico
                                        </h2>
                                        <p style="margin:0;font-size:${tamanhoTexto};line-height:1.7;color:${corTexto};">
                                            Consulte os registros dos serviços para investigar a origem da falha.
                                        </p>
                                    </td>
                                </tr>

                                <!-- Vercel -->
                                <tr>
                                    <td style="padding:14px 16px;border-top:1px solid ${corBorda};">
                                        <p style="margin:0 0 4px;font-size:${tamanhoTexto};line-height:1.6;font-weight:bold;color:${corTitulo};">
                                            Vercel
                                        </p>
                                        <p style="margin:0 0 12px;font-size:12px;line-height:1.7;color:${corSecundaria};">
                                            Erros da API e da aplicação.
                                        </p>
                                        <a href="${urlLogsVercel}" style="display:inline-block;padding:8px 12px;border:1px solid #cbd5e1;border-radius:6px;background-color:#f8fafc;font-size:12px;line-height:1.5;font-weight:bold;color:#334155;text-decoration:none;">
                                            Abrir logs →
                                        </a>
                                    </td>
                                </tr>

                                <!-- Resend -->
                                <tr>
                                    <td style="padding:14px 16px;border-top:1px solid ${corBorda};">
                                        <p style="margin:0 0 4px;font-size:${tamanhoTexto};line-height:1.6;font-weight:bold;color:${corTitulo};">
                                            Resend
                                        </p>
                                        <p style="margin:0 0 12px;font-size:12px;line-height:1.7;color:${corSecundaria};">
                                            Tentativas de envio e status dos e-mails.
                                        </p>
                                        <a href="${urlLogsResend}" style="display:inline-block;padding:8px 12px;border:1px solid #cbd5e1;border-radius:6px;background-color:#f8fafc;font-size:12px;line-height:1.5;font-weight:bold;color:#334155;text-decoration:none;">
                                            Abrir logs →
                                        </a>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>

                    <!-- Rodapé -->
                    <tr>
                        <td style="padding:16px 24px;background-color:#f8fafc;text-align:center;border-top:1px solid ${corBorda};">
                            <p style="margin:0;font-size:12px;line-height:1.7;color:${corSecundaria};">
                                Alerta automático do sistema de monitoramento do portfólio Robson Soares.
                            </p>
                        </td>
                    </tr>

                </table>

            </td>
        </tr>
    </table>

</body>
</html>`;

    const textoPuro = [
        "ALERTA DE FALHA",
        "",
        "O processamento falhou",
        "Uma solicitação do formulário de contato não foi processada corretamente.",
        "",
        "ERRO IDENTIFICADO",
        dados.erro,
        "",
        "INFORMAÇÕES TÉCNICAS",
        `Data e hora (UTC): ${dataAtual}`,
        `Ambiente: ${ambiente}`,
        "",
        "DADOS DO VISITANTE",
        `Nome: ${dados.nome}`,
        `E-mail: ${dados.email}`,
        `Assunto: ${dados.assunto}`,
        `Mensagem: ${dados.mensagem}`,
        "",
        "LOGS E DIAGNÓSTICO",
        `Vercel: ${urlLogsVercel}`,
        `Resend: ${urlLogsResend}`,
        "",
        "Alerta automático do sistema de monitoramento do portfólio Robson Soares.",
    ].join("\n");

    try {
        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
            from: "Alertas do Portfólio <contato@xcodify.com.br>",
            to: ["robsoncsoares.1050@gmail.com"],
            subject: "[ALERTA] Falha no formulário de contato",
            html,
            text: textoPuro,
        });

        if (error) {
            console.error(
                "[ALERTA DE CONTATO] Não foi possível enviar o alerta:",
                error.message,
            );
        }
    } catch (error) {
        console.error(
            "[ALERTA DE CONTATO] Exceção ao enviar o alerta:",
            error instanceof Error
                ? error.message
                : "Erro desconhecido",
        );
    }
}