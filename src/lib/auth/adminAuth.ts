"use client";

const TOKEN_KEY = "portfolio_admin_token";
const NAME_KEY = "portfolio_admin_name";

const apiUrl = () => (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export async function loginAdmin(email: string, senha: string) {
    const response = await fetch(`${apiUrl()}/api/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
    });

    if (!response.ok) {
        throw new Error("E-mail ou senha inválidos.");
    }

    const data = (await response.json()) as { token: string; nome: string };
    sessionStorage.setItem(TOKEN_KEY, data.token);
    sessionStorage.setItem(NAME_KEY, data.nome);
    return data;
}

export function getAdminToken() {
    return typeof window === "undefined" ? null : sessionStorage.getItem(TOKEN_KEY);
}

export function getAdminName() {
    return typeof window === "undefined" ? null : sessionStorage.getItem(NAME_KEY);
}

export function logoutAdmin() {
    sessionStorage.removeItem(TOKEN_KEY);
    sessionStorage.removeItem(NAME_KEY);
}

export function adminHeaders(): HeadersInit {
    const token = getAdminToken();
    return token ? { Authorization: `Bearer ${token}` } : {};
}
