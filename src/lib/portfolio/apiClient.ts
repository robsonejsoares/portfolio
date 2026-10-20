const API_BASE_URL = (process.env.NEXT_PUBLIC_API_URL ?? "").replace(/\/$/, "");

export function portfolioApiUrl(path: string) {
    return `${API_BASE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export async function fetchPortfolioJson<T>(path: string, signal?: AbortSignal): Promise<T> {
    const response = await fetch(portfolioApiUrl(path), { signal, headers: { Accept: "application/json" } });
    if (!response.ok) throw new Error(`API indisponível (${response.status})`);
    return response.json() as Promise<T>;
}
