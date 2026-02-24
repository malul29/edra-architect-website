"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

const WORDS = ["Merancang", "Ruang,", "Membentuk", "Kehidupan."];

export default function IntroAnimation({ onComplete }) {
    const [mounted, setMounted] = useState(true);

    // Separate layers so they can be animated independently
    const bgRef = useRef(null); // dark background — fades out at end
    const contentRef = useRef(null); // words + logo — stays solid during outro
    const wordRef = useRef(null);
    const logoWrapRef = useRef(null);

    useEffect(() => {
        if (sessionStorage.getItem("intro_done")) {
            setMounted(false);
            onComplete?.();
            return;
        }

        document.body.style.overflow = "hidden";

        const ctx = gsap.context(() => {
            // ── Initial states ──────────────────────────────────
            gsap.set(wordRef.current, { autoAlpha: 0, y: 50 });
            gsap.set(logoWrapRef.current, { opacity: 0, visibility: "hidden" });

            const tl = gsap.timeline();

            // ── 1. Words one-by-one ─────────────────────────────
            WORDS.forEach((word, i) => {
                tl.call(() => {
                    if (wordRef.current) wordRef.current.textContent = word;
                });
                tl.to(wordRef.current, { autoAlpha: 1, y: 0, duration: 0.55, ease: "power3.out" });
                tl.to({}, { duration: 0.55 });
                if (i < WORDS.length - 1) {
                    tl.to(wordRef.current, { autoAlpha: 0, y: -45, duration: 0.4, ease: "power2.in" });
                    tl.set(wordRef.current, { y: 50 });
                }
            });

            // Last word out
            tl.to(wordRef.current, { autoAlpha: 0, y: -45, duration: 0.5, ease: "power2.in" });

            // ── 2. Logo fades in ────────────────────────────────
            tl.to(logoWrapRef.current, { opacity: 1, visibility: "visible", duration: 0.9, ease: "power2.out" }, "-=0.1");
            tl.to({}, { duration: 1.0 });

            // ── 3. OUTRO ────────────────────────────────────────
            // Calculate nav logo position, store in vars
            let _dx = 0, _dy = 0, _scale = 0.15;

            tl.call(() => {
                const introLogo = logoWrapRef.current;
                const navLogo = document.querySelector(".brand-logo");
                if (!introLogo || !navLogo) return;

                const iR = introLogo.getBoundingClientRect();
                const nR = navLogo.getBoundingClientRect();

                _dx = (nR.left + nR.width / 2) - (iR.left + iR.width / 2);
                _dy = (nR.top + nR.height / 2) - (iR.top + iR.height / 2);
                _scale = Math.min(nR.width / iR.width, nR.height / iR.height);
            });

            // Logo flies to navbar — FULL OPACITY throughout, only position/scale changes
            tl.to(logoWrapRef.current, {
                x: () => _dx,
                y: () => _dy,
                scale: () => _scale,
                duration: 1.2,
                ease: "power4.inOut",
                transformOrigin: "center center",
            });

            // Background fades independently — starts 0.5s into the logo move
            // "-=0.7" means: start this 0.7s before logo tween ends = 0.5s after logo starts
            tl.to(bgRef.current, {
                autoAlpha: 0,
                duration: 0.7,
                ease: "power2.in",
            }, "-=0.7");

            tl.call(() => {
                document.body.style.overflow = "";
                sessionStorage.setItem("intro_done", "1");
                setMounted(false);
                onComplete?.();
            });
        });

        return () => {
            ctx.revert();
            document.body.style.overflow = "";
        };
    }, [onComplete]);

    if (!mounted) return null;

    const sharedFixed = {
        position: "fixed",
        inset: 0,
        overflow: "hidden",
    };

    return (
        <>
            {/* ── Background layer (dark) — fades out at outro ── */}
            <div
                ref={bgRef}
                style={{
                    ...sharedFixed,
                    zIndex: 9998,
                    background: "#1a1a1a",
                }}
            />

            {/* ── Content layer (words + logo) — stays opaque during outro ── */}
            <div
                ref={contentRef}
                style={{
                    ...sharedFixed,
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                {/* Single word slot */}
                <span
                    ref={wordRef}
                    aria-live="polite"
                    style={{
                        position: "absolute",
                        fontFamily: "'Archivo', sans-serif",
                        fontSize: "clamp(42px, 8vw, 120px)",
                        fontWeight: 800,
                        lineHeight: 1.05,
                        letterSpacing: "-0.03em",
                        color: "#f5f5f5",
                        textAlign: "center",
                        whiteSpace: "nowrap",
                        userSelect: "none",
                    }}
                />

                {/* EDRA logo — hidden via CSS until logo phase */}
                <div
                    ref={logoWrapRef}
                    style={{
                        position: "absolute",
                        width: "clamp(200px, 24vw, 340px)",
                        opacity: 0,
                        visibility: "hidden",
                        transformOrigin: "center center",
                    }}
                >
                    <img
                        src="/edra-logo.png"
                        alt="EDRA Arsitek Indonesia"
                        style={{
                            width: "100%",
                            height: "auto",
                            filter: "invert(1) brightness(10)",
                            display: "block",
                        }}
                    />
                </div>
            </div>
        </>
    );
}
