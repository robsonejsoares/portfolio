"use client";

import { useRotacaoAutomaticaHabilidades } from "./hooks/useRotacaoAutomaticaHabilidades";
import { HeaderHabilidades } from "./components/HeaderHabilidades";
import { TabsHabilidades } from "./components/TabsHabilidades";
import { GridHabilidades } from "./components/GridHabilidades";

export function SectionHabilidades() {
    const {
        activeTab,
        currentCategory,
        handleTabClick,
        handleMouseEnter,
        handleMouseLeave,
    } = useRotacaoAutomaticaHabilidades();

    return (
        <section
            id="skills"
            className="relative z-10 w-full min-w-0 py-5 sm:py-6"
        >
            <div className="w-full min-w-0">
                <HeaderHabilidades />

                <TabsHabilidades
                    activeTab={activeTab}
                    onTabClick={handleTabClick}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                />

                <GridHabilidades currentCategory={currentCategory} />
            </div>
        </section>
    );

}

