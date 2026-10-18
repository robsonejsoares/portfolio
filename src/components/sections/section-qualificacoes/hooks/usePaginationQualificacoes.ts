
"use client";

import { useCallback, useEffect, useMemo, useState } from "react";

interface UsePaginationQualificacoesProps<T> {
    items: T[];
}

export function usePaginationQualificacoes<T>({
    items,
}: UsePaginationQualificacoesProps<T>) {
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(1);

    // Ajusta a quantidade de cards conforme a largura da tela.
    useEffect(() => {
        const tabletQuery = window.matchMedia("(min-width: 640px)");
        const desktopQuery = window.matchMedia("(min-width: 1280px)");

        function updatePageSize() {
            if (desktopQuery.matches) {
                setPageSize(3);
            } else if (tabletQuery.matches) {
                setPageSize(2);
            } else {
                setPageSize(1);
            }
        }

        updatePageSize();

        tabletQuery.addEventListener("change", updatePageSize);
        desktopQuery.addEventListener("change", updatePageSize);

        return () => {
            tabletQuery.removeEventListener("change", updatePageSize);
            desktopQuery.removeEventListener("change", updatePageSize);
        };
    }, []);

    // Calcula o total de páginas.
    const totalPages = Math.ceil(items.length / pageSize);

    // Impede que a página atual fique fora dos limites.
    const safeCurrentPage = Math.min(
        currentPage,
        Math.max(0, totalPages - 1),
    );

    // Seleciona os cards visíveis.
    const visibleItems = useMemo(() => {
        const startIndex = safeCurrentPage * pageSize;

        return items.slice(startIndex, startIndex + pageSize);
    }, [items, safeCurrentPage, pageSize]);

    const startIndex = safeCurrentPage * pageSize;

    // Número mostrado no indicador de páginas.
    const displayedPage =
        totalPages === 0 ? 0 : safeCurrentPage + 1;

    const goToPreviousPage = useCallback(() => {
        setCurrentPage((page) => Math.max(0, page - 1));
    }, []);

    const goToNextPage = useCallback(() => {
        setCurrentPage((page) =>
            Math.min(Math.max(0, totalPages - 1), page + 1),
        );
    }, [totalPages]);

    const resetPage = useCallback(() => {
        setCurrentPage(0);
    }, []);

    return {
        visibleItems,
        startIndex,
        currentPage: safeCurrentPage,
        pageSize,
        totalPages,
        displayedPage,
        goToPreviousPage,
        goToNextPage,
        resetPage,
    };
}
