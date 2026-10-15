"use client";

import { useState, useEffect } from "react";
import { skillCategories } from "../dadosHabilidades";

export function useRotacaoAutomaticaHabilidades() {
    const [activeTab, setActiveTab] = useState<string>(
        skillCategories[0].id,
    );

    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setActiveTab((currentId) => {
                const currentIndex = skillCategories.findIndex(
                    (category) => category.id === currentId,
                );

                const nextIndex =
                    (currentIndex + 1) % skillCategories.length;

                return skillCategories[nextIndex].id;
            });
        }, 10000);

        return () => clearInterval(interval);
    }, [isPaused]);

    const handleTabClick = (id: string) => {
        setActiveTab(id);
        setIsPaused(true);
    };

    const handleMouseEnter = () => {
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        setIsPaused(false);
    };

    const currentCategory =
        skillCategories.find((category) => category.id === activeTab) ??
        skillCategories[0];

    return {
        activeTab,
        isPaused,
        currentCategory,
        handleTabClick,
        handleMouseEnter,
        handleMouseLeave,
    };

}
