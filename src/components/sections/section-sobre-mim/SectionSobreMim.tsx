
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
            className="relative z-10 flex w-full min-w-0 items-center justify-center pt-4 pb-8 sm:pt-6 sm:pb-10"
        >
            <div className="w-full min-w-0">
                <div className="grid w-full min-w-0 grid-cols-1 items-center gap-12 lg:grid-cols-12">
                    {/* Editor: primeiro no mobile, segundo no desktop */}
                    <EditorCodigo
                        displayedLines={displayedLines}
                        currentLineIndex={currentLineIndex}
                        isFullyTyped={isFullyTyped}
                        isTyping={isTyping}
                    />

                    {/* Sobre mim: segundo no mobile, primeiro no desktop */}
                    <ApresentacaoSobreMim />
                </div>
            </div>
        </section>
    );
}
