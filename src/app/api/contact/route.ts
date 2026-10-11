
import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const apiKey = process.env.RESEND_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "Serviço de e-mail não configurado." },
                { status: 500 },
            );
        }

        const body: unknown = await request.json();

        if (!body || typeof body !== "object") {
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

        const resend = new Resend(apiKey);

        const { error } = await resend.emails.send({
            from: "Portfólio <contato@oprogramadorautonomo.com.br>",
            to: ["robsoncsoares.1050@gmail.com"],
            replyTo: email,
            subject: `${assunto}`,
            text: [
                `Nome: ${nome}`,
                `E-mail: ${email}`,
                `Assunto: ${assunto}`,
                "",
                "Mensagem:",
                mensagem,
            ].join("\n"),
        });

        if (error) {
            console.error("Erro ao enviar e-mail pelo Resend:", error.message);

            return NextResponse.json(
                { error: "Não foi possível enviar sua mensagem. Tente novamente." },
                { status: 502 },
            );
        }

        return NextResponse.json({
            success: true,
            message: "Mensagem enviada com sucesso!",
        });
    } catch {
        return NextResponse.json(
            { error: "Ocorreu um erro ao processar sua mensagem." },
            { status: 500 },
        );
    }
}
