module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/client/components/IntroAnimation.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IntroAnimation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/gsap/index.js [app-ssr] (ecmascript) <locals>");
"use client";
;
;
;
const WORDS = [
    "Merancang",
    "Ruang,",
    "Membentuk",
    "Kehidupan."
];
function IntroAnimation({ onComplete }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    // Separate layers so they can be animated independently
    const bgRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // dark background — fades out at end
    const contentRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null); // words + logo — stays solid during outro
    const wordRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const logoWrapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (sessionStorage.getItem("intro_done")) {
            setMounted(false);
            onComplete?.();
            return;
        }
        document.body.style.overflow = "hidden";
        const ctx = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].context(()=>{
            // ── Initial states ──────────────────────────────────
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(wordRef.current, {
                autoAlpha: 0,
                y: 50
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].set(logoWrapRef.current, {
                opacity: 0,
                visibility: "hidden"
            });
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].timeline();
            // ── 1. Words one-by-one ─────────────────────────────
            WORDS.forEach((word, i)=>{
                tl.call(()=>{
                    if (wordRef.current) wordRef.current.textContent = word;
                });
                tl.to(wordRef.current, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.55,
                    ease: "power3.out"
                });
                tl.to({}, {
                    duration: 0.55
                });
                if (i < WORDS.length - 1) {
                    tl.to(wordRef.current, {
                        autoAlpha: 0,
                        y: -45,
                        duration: 0.4,
                        ease: "power2.in"
                    });
                    tl.set(wordRef.current, {
                        y: 50
                    });
                }
            });
            // Last word out
            tl.to(wordRef.current, {
                autoAlpha: 0,
                y: -45,
                duration: 0.5,
                ease: "power2.in"
            });
            // ── 2. Logo fades in ────────────────────────────────
            tl.to(logoWrapRef.current, {
                opacity: 1,
                visibility: "visible",
                duration: 0.9,
                ease: "power2.out"
            }, "-=0.1");
            tl.to({}, {
                duration: 1.0
            });
            // ── 3. OUTRO ────────────────────────────────────────
            // Calculate nav logo position, store in vars
            let _dx = 0, _dy = 0, _scale = 0.15;
            tl.call(()=>{
                const introLogo = logoWrapRef.current;
                const navLogo = document.querySelector(".brand-logo");
                if (!introLogo || !navLogo) return;
                const iR = introLogo.getBoundingClientRect();
                const nR = navLogo.getBoundingClientRect();
                _dx = nR.left + nR.width / 2 - (iR.left + iR.width / 2);
                _dy = nR.top + nR.height / 2 - (iR.top + iR.height / 2);
                _scale = Math.min(nR.width / iR.width, nR.height / iR.height);
            });
            // Logo flies to navbar — FULL OPACITY throughout, only position/scale changes
            tl.to(logoWrapRef.current, {
                x: ()=>_dx,
                y: ()=>_dy,
                scale: ()=>_scale,
                duration: 1.2,
                ease: "power4.inOut",
                transformOrigin: "center center"
            });
            // Background fades independently — starts 0.5s into the logo move
            // "-=0.7" means: start this 0.7s before logo tween ends = 0.5s after logo starts
            tl.to(bgRef.current, {
                autoAlpha: 0,
                duration: 0.7,
                ease: "power2.in"
            }, "-=0.7");
            tl.call(()=>{
                document.body.style.overflow = "";
                sessionStorage.setItem("intro_done", "1");
                setMounted(false);
                onComplete?.();
            });
        });
        return ()=>{
            ctx.revert();
            document.body.style.overflow = "";
        };
    }, [
        onComplete
    ]);
    if (!mounted) return null;
    const sharedFixed = {
        position: "fixed",
        inset: 0,
        overflow: "hidden"
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: bgRef,
                style: {
                    ...sharedFixed,
                    zIndex: 9998,
                    background: "#1a1a1a"
                }
            }, void 0, false, {
                fileName: "[project]/client/components/IntroAnimation.jsx",
                lineNumber: 113,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: contentRef,
                style: {
                    ...sharedFixed,
                    zIndex: 9999,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        ref: wordRef,
                        "aria-live": "polite",
                        style: {
                            position: "absolute",
                            fontFamily: "'Archivo', sans-serif",
                            fontSize: "clamp(42px, 8vw, 120px)",
                            fontWeight: 800,
                            lineHeight: 1.05,
                            letterSpacing: "-0.03em",
                            color: "#f5f5f5",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            userSelect: "none"
                        }
                    }, void 0, false, {
                        fileName: "[project]/client/components/IntroAnimation.jsx",
                        lineNumber: 134,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: logoWrapRef,
                        style: {
                            position: "absolute",
                            width: "clamp(200px, 24vw, 340px)",
                            opacity: 0,
                            visibility: "hidden",
                            transformOrigin: "center center"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: "/edra-logo.png",
                            alt: "EDRA Arsitek Indonesia",
                            style: {
                                width: "100%",
                                height: "auto",
                                filter: "invert(1) brightness(10)",
                                display: "block"
                            }
                        }, void 0, false, {
                            fileName: "[project]/client/components/IntroAnimation.jsx",
                            lineNumber: 162,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/components/IntroAnimation.jsx",
                        lineNumber: 152,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/components/IntroAnimation.jsx",
                lineNumber: 123,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
"[project]/client/components/BodyWrapper.jsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BodyWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$IntroAnimation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/components/IntroAnimation.jsx [app-ssr] (ecmascript)");
"use client";
;
;
;
function BodyWrapper({ children }) {
    const [introPlaying, setIntroPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            introPlaying && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$IntroAnimation$2e$jsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                onComplete: ()=>setIntroPlaying(false)
            }, void 0, false, {
                fileName: "[project]/client/components/BodyWrapper.jsx",
                lineNumber: 10,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    visibility: introPlaying ? "hidden" : "visible"
                },
                children: children
            }, void 0, false, {
                fileName: "[project]/client/components/BodyWrapper.jsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__c72d7980._.js.map