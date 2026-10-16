"use client";

import { useDigitacaoCodigo } from "./hooks/useDigitacaoCodigo";
import { EditorCodigo } from "./components/EditorCodigo";
import { ApresentacaoSobreMim } from "./components/ApresentacaoSobreMim";

export function SectionSobreMim() {
    const {
        displayedLines,
        currentLineIndex,
        isFullyTyped,
        isTyping,
    } = useDigitacaoCodigo();

    return (
        <section
            id="sobre-mim"
            className="relative z-10 w-full min-w-0 pt-4 pb-8 sm:pt-6 sm:pb-10"
        >
            <div className="mx-auto w-full min-w-0 max-w-7xl px-4 sm:px-6 lg:px-8">
                <div
                    className="
                        grid w-full min-w-0 grid-cols-1 items-center gap-8
                        lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]
                        lg:gap-10
                        xl:gap-12
                    "
                >
                    {/* Apresentação primeiro no mobile e à esquerda no desktop */}
                    <div className="order-1 min-w-0">
                        <ApresentacaoSobreMim />
                    </div>

                    {/* Editor depois no mobile e à direita no desktop */}
                    <div className="order-2 min-w-0">
                        <EditorCodigo
                            displayedLines={displayedLines}
                            currentLineIndex={currentLineIndex}
                            isFullyTyped={isFullyTyped}
                            isTyping={isTyping}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}