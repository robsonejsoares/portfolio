
"use client";

import { useEffect, useState } from "react";
import { codeLinesWithoutComment } from "../dadosEditorCodigo";

export function useDigitacaoCodigo() {
    const [displayedLines, setDisplayedLines] = useState<string[]>([""]);
    const [currentLineIndex, setCurrentLineIndex] = useState(0);
    const [isFullyTyped, setIsFullyTyped] = useState(false);
    const [isTyping, setIsTyping] = useState(true);

    useEffect(() => {
        let isMounted = true;
        let timer: ReturnType<typeof setTimeout>;

        const runTypingAndDeletingCycle = () => {
            if (!isMounted) return;

            let lineIdx = 0;
            let charIdx = 0;
            const currentLines: string[] = [""];

            const startDeleting = () => {
                if (!isMounted) return;

                setIsFullyTyped(false);
                setIsTyping(true);

                let lIdx = codeLinesWithoutComment.length - 1;
                let cIdx = codeLinesWithoutComment[lIdx].length;

                const activeLines = [...codeLinesWithoutComment];

                const deleteNextChar = () => {
                    if (!isMounted) return;

                    if (lIdx >= 0) {
                        const targetLine = codeLinesWithoutComment[lIdx];

                        if (cIdx >= 0) {
                            activeLines[lIdx] = targetLine.substring(0, cIdx);

                            setDisplayedLines([...activeLines]);
                            setCurrentLineIndex(lIdx);

                            cIdx--;

                            const deleteDelay =
                                Math.floor(Math.random() * 45) + 30;

                            timer = setTimeout(deleteNextChar, deleteDelay);
                        } else {
                            activeLines.pop();
                            lIdx--;

                            if (lIdx >= 0) {
                                cIdx = codeLinesWithoutComment[lIdx].length;
                                timer = setTimeout(deleteNextChar, 100);
                            } else {
                                timer = setTimeout(() => {
                                    runTypingAndDeletingCycle();
                                }, 1200);
                            }
                        }
                    }
                };

                deleteNextChar();
            };

            const typeNextChar = () => {
                if (!isMounted) return;

                setIsTyping(true);

                if (lineIdx < codeLinesWithoutComment.length) {
                    const targetLine = codeLinesWithoutComment[lineIdx];

                    if (charIdx <= targetLine.length) {
                        currentLines[lineIdx] = targetLine.substring(0, charIdx);

                        setDisplayedLines([...currentLines]);
                        setCurrentLineIndex(lineIdx);

                        charIdx++;

                        const char = targetLine.charAt(charIdx - 1);

                        let humanDelay = Math.floor(Math.random() * 90) + 80;

                        if (targetLine.includes("return")) {
                            humanDelay = Math.floor(Math.random() * 110) + 95;
                        }

                        if (
                            char === " " ||
                            char === "," ||
                            char === '"' ||
                            char === "=" ||
                            char === "$" ||
                            char === "`"
                        ) {
                            humanDelay += Math.floor(Math.random() * 60);
                        }

                        timer = setTimeout(typeNextChar, humanDelay);
                    } else {
                        const finishedLine = codeLinesWithoutComment[lineIdx];

                        lineIdx++;
                        charIdx = 0;

                        if (lineIdx < codeLinesWithoutComment.length) {
                            currentLines.push("");
                            setCurrentLineIndex(lineIdx);

                            const pauseTime = finishedLine.includes("return")
                                ? 600
                                : 450;

                            timer = setTimeout(typeNextChar, pauseTime);
                        } else {
                            setIsFullyTyped(true);
                            setIsTyping(false);

                            timer = setTimeout(startDeleting, 15000);
                        }
                    }
                }
            };

            timer = setTimeout(typeNextChar, 800);
        };

        runTypingAndDeletingCycle();

        return () => {
            isMounted = false;
            clearTimeout(timer);
        };
    }, []);

    return {
        displayedLines,
        currentLineIndex,
        isFullyTyped,
        isTyping,
    };
}
