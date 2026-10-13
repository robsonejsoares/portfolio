import { timingSafeEqual } from "node:crypto";
import { NextResponse } from "next/server";

function resposta(
    dados: Record<string, string>,
    status: number,
) {
    return NextResponse.json(dados, {
        status,
        headers: {
            "Cache-Control": "no-store, no-cache, must-revalidate",
        },
    });
}

function tokenValido(
    tokenRecebido: string,
    tokenEsperado: string,
): boolean {
    const recebido = Buffer.from(tokenRecebido);
    const esperado = Buffer.from(tokenEsperado);

    if (recebido.length !== esperado.length) {
        return false;
    }

    return timingSafeEqual(recebido, esperado);
}

export async function GET(request: Request) {
    const tokenEsperado = process.env.HEALTH_CHECK_TOKEN;

    // Mantém o diagnóstico indisponível se não houver segredo configurado.
    if (!tokenEsperado) {
        return resposta({ error: "Not found" }, 404);
    }

    const tokenRecebido =
        request.headers.get("x-health-check-token") ?? "";

    if (!tokenValido(tokenRecebido, tokenEsperado)) {
        return resposta({ error: "Unauthorized" }, 401);
    }

    const agora = new Date().toISOString();
    const resendConfigurado = Boolean(
        process.env.RESEND_API_KEY,
    );

    if (!resendConfigurado) {
        return resposta(
            {
                status: "degraded",
                application: "ok",
                resend: "not_configured",
                timestamp: agora,
            },
            503,
        );
    }

    return resposta(
        {
            status: "ok",
            application: "ok",
            resend: "configured",
            timestamp: agora,
        },
        200,
    );
}