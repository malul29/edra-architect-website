(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/hooks/useApi.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "apiDelete",
    ()=>apiDelete,
    "apiPost",
    ()=>apiPost,
    "apiPut",
    ()=>apiPut,
    "useApi",
    ()=>useApi
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature();
;
const BASE = "/api";
// Module-level in-memory cache: persists across component mounts for the session
const _cache = new Map(); // endpoint → data
const _pending = new Map(); // endpoint → Promise (dedup concurrent requests)
function useApi(endpoint) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(_cache.get(endpoint) ?? []);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(!_cache.has(endpoint));
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const fetchData = (force = false)=>{
        if (!force && _cache.has(endpoint)) {
            setData(_cache.get(endpoint));
            setLoading(false);
            return;
        }
        setLoading(true);
        // Reuse in-flight request for same endpoint
        if (!_pending.has(endpoint)) {
            const promise = fetch(`${BASE}${endpoint}`).then((r)=>{
                if (!r.ok) throw new Error(r.statusText);
                return r.json();
            }).then((d)=>{
                _cache.set(endpoint, d);
                _pending.delete(endpoint);
                return d;
            }).catch((e)=>{
                _pending.delete(endpoint);
                throw e;
            });
            _pending.set(endpoint, promise);
        }
        _pending.get(endpoint).then((d)=>{
            setData(d);
            setLoading(false);
        }).catch((e)=>{
            setError(e.message);
            setLoading(false);
        });
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useApi.useEffect": ()=>{
            fetchData();
        }
    }["useApi.useEffect"], [
        endpoint
    ]);
    // refetch clears cache entry and forces a fresh fetch
    const refetch = ()=>{
        _cache.delete(endpoint);
        fetchData(true);
    };
    return {
        data,
        loading,
        error,
        refetch
    };
}
_s(useApi, "PeydAjPlxUqe2GjVHjuUkt9wcrI=");
async function apiPost(endpoint, body) {
    const res = await fetch(`${BASE}${endpoint}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(await res.text());
    // Invalidate cache for this endpoint
    _cache.delete(endpoint);
    return res.json();
}
async function apiDelete(endpoint, id) {
    const res = await fetch(`${BASE}${endpoint}/${id}`, {
        method: "DELETE"
    });
    if (!res.ok) throw new Error(await res.text());
    // Invalidate cache
    _cache.delete(endpoint);
    return res.json();
}
async function apiPut(endpoint, id, body) {
    const res = await fetch(`${BASE}${endpoint}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
    });
    if (!res.ok) throw new Error(await res.text());
    // Invalidate cache
    _cache.delete(endpoint);
    return res.json();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/components/RichTextEditor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RichTextEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$menus$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/react/dist/menus/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-placeholder/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
// Helper to convert legacy block array to HTML
function convertLegacyContentToHTML(contentArray) {
    if (!Array.isArray(contentArray)) return contentArray || "";
    return contentArray.map((block)=>{
        switch(block.type){
            case "heading":
                return `<h2>${block.content || ""}</h2>`;
            case "paragraph":
                return `<p>${block.content || ""}</p>`;
            case "quote":
                return `<blockquote>${block.content || ""}</blockquote>`;
            case "image":
                return `<img src="${block.content || ""}" alt="${block.caption || ""}" />${block.caption ? `<p><em>${block.caption}</em></p>` : ""}`;
            case "image-grid":
                // Simplified fallback for image grids in Tiptap
                const images = Array.isArray(block.content) ? block.content : [];
                return images.filter((img)=>img).map((img)=>`<img src="${img}" alt="Grid Image" />`).join("");
            default:
                return "";
        }
    }).join("");
}
function RichTextEditor({ value, onChange }) {
    _s();
    const [isMounted, setIsMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize editor content once
    // Convert legacy array format to HTML string if needed
    const initialContent = Array.isArray(value) ? convertLegacyContentToHTML(value) : value || "";
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"])({
        immediatelyRender: false,
        extensions: [
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$starter$2d$kit$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                heading: {
                    levels: [
                        1,
                        2,
                        3
                    ]
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$placeholder$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].configure({
                placeholder: "Tell your story...",
                emptyEditorClass: "is-editor-empty"
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$image$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                HTMLAttributes: {
                    class: "editor-image"
                }
            }),
            __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].configure({
                openOnClick: false,
                HTMLAttributes: {
                    class: "editor-link"
                }
            })
        ],
        content: initialContent,
        onUpdate: {
            "RichTextEditor.useEditor[editor]": ({ editor })=>{
                onChange(editor.getHTML());
            }
        }["RichTextEditor.useEditor[editor]"]
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "RichTextEditor.useEffect": ()=>{
            setIsMounted(true);
        }
    }["RichTextEditor.useEffect"], []);
    const handleImageUpload = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RichTextEditor.useCallback[handleImageUpload]": (e)=>{
            const file = e.target.files?.[0];
            if (file && editor) {
                const reader = new FileReader();
                reader.onloadend = ({
                    "RichTextEditor.useCallback[handleImageUpload]": ()=>{
                        editor.chain().focus().setImage({
                            src: reader.result
                        }).run();
                    }
                })["RichTextEditor.useCallback[handleImageUpload]"];
                reader.readAsDataURL(file);
            }
        }
    }["RichTextEditor.useCallback[handleImageUpload]"], [
        editor
    ]);
    const triggerFileInput = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RichTextEditor.useCallback[triggerFileInput]": ()=>{
            fileInputRef.current?.click();
        }
    }["RichTextEditor.useCallback[triggerFileInput]"], []);
    const setLink = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "RichTextEditor.useCallback[setLink]": ()=>{
            if (!editor) return;
            const previousUrl = editor.getAttributes('link').href;
            const url = window.prompt('URL', previousUrl);
            // cancelled
            if (url === null) {
                return;
            }
            // empty
            if (url === '') {
                editor.chain().focus().extendMarkRange('link').unsetLink().run();
                return;
            }
            // update link
            editor.chain().focus().extendMarkRange('link').setLink({
                href: url
            }).run();
        }
    }["RichTextEditor.useCallback[setLink]"], [
        editor
    ]);
    if (!isMounted || !editor) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "editor-loading",
            children: "Loading editor..."
        }, void 0, false, {
            fileName: "[project]/client/components/RichTextEditor.jsx",
            lineNumber: 120,
            columnNumber: 12
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "medium-editor-container",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "file",
                ref: fileInputRef,
                onChange: handleImageUpload,
                accept: "image/*",
                style: {
                    display: "none"
                }
            }, void 0, false, {
                fileName: "[project]/client/components/RichTextEditor.jsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            editor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$menus$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BubbleMenu"], {
                className: "medium-bubble-menu",
                editor: editor,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleBold().run(),
                        className: editor.isActive("bold") ? "is-active" : "",
                        children: "B"
                    }, void 0, false, {
                        fileName: "[project]/client/components/RichTextEditor.jsx",
                        lineNumber: 137,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleItalic().run(),
                        className: editor.isActive("italic") ? "is-active" : "",
                        children: "i"
                    }, void 0, false, {
                        fileName: "[project]/client/components/RichTextEditor.jsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: setLink,
                        className: editor.isActive("link") ? "is-active" : "",
                        children: "🔗"
                    }, void 0, false, {
                        fileName: "[project]/client/components/RichTextEditor.jsx",
                        lineNumber: 151,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "divider"
                    }, void 0, false, {
                        fileName: "[project]/client/components/RichTextEditor.jsx",
                        lineNumber: 158,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 2
                            }).run(),
                        className: editor.isActive("heading", {
                            level: 2
                        }) ? "is-active" : "",
                        children: "T"
                    }, void 0, false, {
                        fileName: "[project]/client/components/RichTextEditor.jsx",
                        lineNumber: 159,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 3
                            }).run(),
                        className: editor.isActive("heading", {
                            level: 3
                        }) ? "is-active" : "",
                        children: "t"
                    }, void 0, false, {
                        fileName: "[project]/client/components/RichTextEditor.jsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: ()=>editor.chain().focus().toggleBlockquote().run(),
                        className: editor.isActive("blockquote") ? "is-active" : "",
                        children: '"'
                    }, void 0, false, {
                        fileName: "[project]/client/components/RichTextEditor.jsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/components/RichTextEditor.jsx",
                lineNumber: 136,
                columnNumber: 9
            }, this),
            editor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$menus$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FloatingMenu"], {
                className: "medium-floating-menu",
                editor: editor,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "floating-menu-btn",
                        onClick: ()=>triggerFileInput(),
                        title: "Add an Image",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            width: "24",
                            height: "24",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                                    x: "3",
                                    y: "3",
                                    width: "18",
                                    height: "18",
                                    rx: "2",
                                    ry: "2"
                                }, void 0, false, {
                                    fileName: "[project]/client/components/RichTextEditor.jsx",
                                    lineNumber: 193,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                    cx: "8.5",
                                    cy: "8.5",
                                    r: "1.5"
                                }, void 0, false, {
                                    fileName: "[project]/client/components/RichTextEditor.jsx",
                                    lineNumber: 194,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                    points: "21 15 16 10 5 21"
                                }, void 0, false, {
                                    fileName: "[project]/client/components/RichTextEditor.jsx",
                                    lineNumber: 195,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/components/RichTextEditor.jsx",
                            lineNumber: 192,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/client/components/RichTextEditor.jsx",
                        lineNumber: 186,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "floating-menu-btn",
                        onClick: ()=>editor.chain().focus().toggleHeading({
                                level: 2
                            }).run(),
                        title: "Add a Title",
                        children: "T"
                    }, void 0, false, {
                        fileName: "[project]/client/components/RichTextEditor.jsx",
                        lineNumber: 198,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/components/RichTextEditor.jsx",
                lineNumber: 185,
                columnNumber: 9
            }, this),
            "      ",
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"], {
                editor: editor,
                className: "medium-editor-content"
            }, void 0, false, {
                fileName: "[project]/client/components/RichTextEditor.jsx",
                lineNumber: 208,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/components/RichTextEditor.jsx",
        lineNumber: 124,
        columnNumber: 5
    }, this);
}
_s(RichTextEditor, "M9BtqwDiEOsGnpq+mdgMP9009H0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"]
    ];
});
_c = RichTextEditor;
var _c;
__turbopack_context__.k.register(_c, "RichTextEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/client/app/admin/dashboard/page.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/hooks/useApi.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$RichTextEditor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/components/RichTextEditor.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function DashboardPage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("projects");
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingItem, setEditingItem] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [hasUnsavedChanges, setHasUnsavedChanges] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // Check authentication
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!localStorage.getItem("edra_admin")) {
                router.push("/admin/login");
            }
        }
    }["DashboardPage.useEffect"], [
        router
    ]);
    const handleLogout = ()=>{
        localStorage.removeItem("edra_admin");
        router.push("/admin/login");
    };
    const handleTabChange = (newTab)=>{
        if (hasUnsavedChanges && showForm) {
            if (!window.confirm("You have unsaved changes. Are you sure you want to leave?")) {
                return;
            }
            setHasUnsavedChanges(false);
        }
        setActiveTab(newTab);
        setShowForm(false);
        setEditingItem(null);
        // Scroll dashboard main back to top
        const main = document.querySelector(".dashboard-main");
        if (main) main.scrollTop = 0;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "dashboard",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: "dashboard-sidebar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "sidebar-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                src: "/edra-logo.png",
                                alt: "EDRA",
                                className: "sidebar-logo",
                                width: 80,
                                height: 80
                            }, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 48,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                children: "CMS Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 49,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 47,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                        className: "sidebar-nav",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `sidebar-nav-item ${activeTab === "projects" ? "active" : ""}`,
                                onClick: ()=>handleTabChange("projects"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📁"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                        lineNumber: 57,
                                        columnNumber: 25
                                    }, this),
                                    " Projects"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `sidebar-nav-item ${activeTab === "blogs" ? "active" : ""}`,
                                onClick: ()=>handleTabChange("blogs"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "📝"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                        lineNumber: 63,
                                        columnNumber: 25
                                    }, this),
                                    " Blog Articles"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 59,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: `sidebar-nav-item ${activeTab === "settings" ? "active" : ""}`,
                                onClick: ()=>handleTabChange("settings"),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: "⚙️"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                        lineNumber: 70,
                                        columnNumber: 25
                                    }, this),
                                    " Settings"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 66,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 52,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "sidebar-view-site",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🌐"
                            }, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 75,
                                columnNumber: 21
                            }, this),
                            " View Site"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 74,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "sidebar-logout",
                        onClick: handleLogout,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "🚪"
                            }, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 79,
                                columnNumber: 21
                            }, this),
                            " Logout"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 78,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 46,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "dashboard-main",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dashboard-header",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "dashboard-title",
                                        children: [
                                            activeTab === "projects" && "Manage Projects",
                                            activeTab === "blogs" && "Manage Blog Articles",
                                            activeTab === "settings" && "Settings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                        lineNumber: 87,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "dashboard-subtitle",
                                        children: [
                                            activeTab === "projects" && "Add, edit, or remove portfolio projects",
                                            activeTab === "blogs" && "Create and manage blog articles",
                                            activeTab === "settings" && "Configure dashboard settings"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                        lineNumber: 92,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 86,
                                columnNumber: 21
                            }, this),
                            (activeTab === "projects" || activeTab === "blogs") && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "btn-add-new",
                                onClick: ()=>setShowForm(true),
                                children: "+ Add New"
                            }, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 100,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 85,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "dashboard-content",
                        children: [
                            activeTab === "projects" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ProjectsManager, {
                                showForm: showForm,
                                setShowForm: setShowForm,
                                editingItem: editingItem,
                                setEditingItem: setEditingItem,
                                setHasUnsavedChanges: setHasUnsavedChanges
                            }, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 108,
                                columnNumber: 25
                            }, this),
                            activeTab === "blogs" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BlogsManager, {
                                showForm: showForm,
                                setShowForm: setShowForm,
                                editingItem: editingItem,
                                setEditingItem: setEditingItem,
                                setHasUnsavedChanges: setHasUnsavedChanges
                            }, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this),
                            activeTab === "settings" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SettingsPanel, {}, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 126,
                                columnNumber: 50
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 106,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 84,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/admin/dashboard/page.jsx",
        lineNumber: 44,
        columnNumber: 9
    }, this);
}
_s(DashboardPage, "dvBaoa81oXO0jI2zF5pgq0vhRs8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = DashboardPage;
// ── Skeleton Loader ──────────────────────────────────────────────────────────
function SkeletonCard() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "item-card skeleton-card",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "skeleton skeleton-image"
            }, void 0, false, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 137,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "item-content",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton skeleton-title"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 139,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton skeleton-meta"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 140,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "skeleton skeleton-badge"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 141,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 138,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/admin/dashboard/page.jsx",
        lineNumber: 136,
        columnNumber: 9
    }, this);
}
_c1 = SkeletonCard;
// ── Projects Manager ─────────────────────────────────────────────────────────
function ProjectsManager({ showForm, setShowForm, editingItem, setEditingItem, setHasUnsavedChanges }) {
    _s1();
    const { data: projects, loading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApi"])("/portfolio");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        location: "",
        category: "",
        year: "",
        image: "",
        description: "",
        gallery: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsManager.useEffect": ()=>{
            if (editingItem) {
                setFormData({
                    ...editingItem,
                    gallery: editingItem.gallery || []
                });
                setShowForm(true);
            }
        }
    }["ProjectsManager.useEffect"], [
        editingItem,
        setShowForm
    ]);
    const handleInputChange = (field, value)=>{
        setFormData({
            ...formData,
            [field]: value
        });
        setHasUnsavedChanges(true);
    };
    const handleFileUpload = (e)=>{
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setFormData({
                    ...formData,
                    image: reader.result
                });
                setHasUnsavedChanges(true);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleGalleryUpload = (e)=>{
        const files = Array.from(e.target.files);
        if (files.length === 0) return;
        const readers = files.map((file)=>{
            return new Promise((resolve)=>{
                const reader = new FileReader();
                reader.onloadend = ()=>resolve(reader.result);
                reader.readAsDataURL(file);
            });
        });
        Promise.all(readers).then((images)=>{
            setFormData({
                ...formData,
                gallery: [
                    ...formData.gallery,
                    ...images
                ]
            });
            setHasUnsavedChanges(true);
        });
    };
    const removeGalleryImage = (index)=>{
        const newGallery = formData.gallery.filter((_, i)=>i !== index);
        setFormData({
            ...formData,
            gallery: newGallery
        });
        setHasUnsavedChanges(true);
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            if (editingItem) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPut"])("/portfolio", editingItem.id, formData);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/portfolio", formData);
            }
            setFormData({
                title: "",
                location: "",
                category: "",
                year: "",
                image: "",
                description: "",
                gallery: []
            });
            setShowForm(false);
            setEditingItem(null);
            setHasUnsavedChanges(false);
            refetch();
        } catch (error) {
            alert("Error saving project: " + error.message);
        }
    };
    const handleDelete = async (id)=>{
        if (!window.confirm("Delete this project?")) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiDelete"])("/portfolio", id);
            refetch();
        } catch (error) {
            alert("Error deleting project");
        }
    };
    const handleCancel = ()=>{
        setShowForm(false);
        setEditingItem(null);
        setFormData({
            title: "",
            location: "",
            category: "",
            year: "",
            image: "",
            description: "",
            gallery: []
        });
        setHasUnsavedChanges(false);
    };
    if (showForm) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: editingItem ? "Edit Project" : "Add New Project"
                }, void 0, false, {
                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                    lineNumber: 249,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "dashboard-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Project Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 253,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.title,
                                            onChange: (e)=>handleInputChange("title", e.target.value),
                                            placeholder: "e.g., Modern Villa",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 254,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 252,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Location *"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 264,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.location,
                                            onChange: (e)=>handleInputChange("location", e.target.value),
                                            placeholder: "e.g., Jakarta, Indonesia",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 265,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 263,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Category *"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 275,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: formData.category,
                                            onChange: (e)=>handleInputChange("category", e.target.value),
                                            required: true,
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    children: "Select category"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 281,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "High Rise",
                                                    children: "High Rise"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 282,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Mall",
                                                    children: "Mall"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 283,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Residence",
                                                    children: "Residence"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 284,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Private House",
                                                    children: "Private House"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 285,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Office",
                                                    children: "Office"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 286,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Public Facility",
                                                    children: "Public Facility"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 287,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Interior",
                                                    children: "Interior"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 288,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 276,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 274,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Year *"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 293,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.year,
                                            onChange: (e)=>handleInputChange("year", e.target.value),
                                            placeholder: "e.g., 2024",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 294,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 292,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 251,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Image *"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 305,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "image-upload-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: "image/*",
                                            onChange: handleFileUpload,
                                            className: "file-input"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 307,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "upload-separator",
                                            children: "OR"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 313,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "url",
                                            value: formData.image,
                                            onChange: (e)=>handleInputChange("image", e.target.value),
                                            placeholder: "Enter image URL (https://...)",
                                            className: "url-input"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 314,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 306,
                                    columnNumber: 25
                                }, this),
                                formData.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "image-preview",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: formData.image,
                                        alt: "Preview"
                                    }, void 0, false, {
                                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                        lineNumber: 324,
                                        columnNumber: 33
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 323,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 304,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Description"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 330,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.description,
                                    onChange: (e)=>handleInputChange("description", e.target.value),
                                    placeholder: "Project description...",
                                    rows: "4"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 331,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 329,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    children: "Project Gallery"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 340,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "field-hint",
                                    children: "Upload multiple images for the project gallery"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 341,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "file",
                                    accept: "image/*",
                                    multiple: true,
                                    onChange: handleGalleryUpload,
                                    className: "file-input"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 342,
                                    columnNumber: 25
                                }, this),
                                formData.gallery && formData.gallery.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "gallery-preview",
                                    children: formData.gallery.map((img, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "gallery-thumbnail",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: img,
                                                    alt: `Gallery ${index + 1}`
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 353,
                                                    columnNumber: 41
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: "btn-remove-gallery",
                                                    onClick: ()=>removeGalleryImage(index),
                                                    title: "Remove image",
                                                    children: "×"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 354,
                                                    columnNumber: 41
                                                }, this)
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 352,
                                            columnNumber: 37
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 350,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 339,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn-secondary",
                                    onClick: handleCancel,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 369,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn-primary",
                                    children: editingItem ? "Update Project" : "Add Project"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 372,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 368,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                    lineNumber: 250,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/app/admin/dashboard/page.jsx",
            lineNumber: 248,
            columnNumber: 13
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "items-list",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "items-grid",
                children: [
                    1,
                    2,
                    3,
                    4,
                    5,
                    6
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, i, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 385,
                        columnNumber: 50
                    }, this))
            }, void 0, false, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 384,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/app/admin/dashboard/page.jsx",
            lineNumber: 383,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "items-list",
        children: projects?.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "empty-state",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: 'No projects yet. Click "Add New" to create your first project.'
            }, void 0, false, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 395,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/app/admin/dashboard/page.jsx",
            lineNumber: 394,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "items-grid",
            children: projects?.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "item-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: project.image,
                            alt: project.title,
                            className: "item-image"
                        }, void 0, false, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 401,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "item-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: project.title
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 403,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "item-meta",
                                    children: [
                                        project.location,
                                        " • ",
                                        project.year
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 404,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "item-badge",
                                    children: project.category
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 405,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 402,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "item-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `/project/${project.id}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn-view",
                                    children: "View"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 408,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-edit",
                                    onClick: ()=>setEditingItem(project),
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 416,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-delete",
                                    onClick: ()=>handleDelete(project.id),
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 422,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 407,
                            columnNumber: 29
                        }, this)
                    ]
                }, project.id, true, {
                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                    lineNumber: 400,
                    columnNumber: 25
                }, this))
        }, void 0, false, {
            fileName: "[project]/client/app/admin/dashboard/page.jsx",
            lineNumber: 398,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/client/app/admin/dashboard/page.jsx",
        lineNumber: 392,
        columnNumber: 9
    }, this);
}
_s1(ProjectsManager, "OnVwxlRMs1t8XXPaWLdl+DfrnCU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApi"]
    ];
});
_c2 = ProjectsManager;
// ── Blogs Manager ─────────────────────────────────────────────────────────────
function BlogsManager({ showForm, setShowForm, editingItem, setEditingItem, setHasUnsavedChanges }) {
    _s2();
    const { data: blogs, loading, refetch } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApi"])("/blogs");
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        title: "",
        subtitle: "",
        date: "",
        tag: "",
        image: "",
        excerpt: "",
        author: "",
        client: "",
        content: []
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BlogsManager.useEffect": ()=>{
            if (editingItem) {
                setFormData(editingItem);
                setShowForm(true);
            }
        }
    }["BlogsManager.useEffect"], [
        editingItem,
        setShowForm
    ]);
    const handleInputChange = (field, value)=>{
        setFormData({
            ...formData,
            [field]: value
        });
        setHasUnsavedChanges(true);
    };
    const handleFileUpload = (e)=>{
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = ()=>{
                setFormData({
                    ...formData,
                    image: reader.result
                });
                setHasUnsavedChanges(true);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            if (editingItem) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPut"])("/blogs", editingItem.id, formData);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiPost"])("/blogs", formData);
            }
            setFormData({
                title: "",
                subtitle: "",
                date: "",
                tag: "",
                image: "",
                excerpt: "",
                author: "",
                client: "",
                content: []
            });
            setShowForm(false);
            setEditingItem(null);
            setHasUnsavedChanges(false);
            refetch();
        } catch (error) {
            alert("Error saving article: " + error.message);
        }
    };
    const handleDelete = async (id)=>{
        if (!window.confirm("Delete this article?")) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["apiDelete"])("/blogs", id);
            refetch();
        } catch (error) {
            alert("Error deleting article");
        }
    };
    const handleCancel = ()=>{
        setShowForm(false);
        setEditingItem(null);
        setFormData({
            title: "",
            subtitle: "",
            date: "",
            tag: "",
            image: "",
            excerpt: "",
            author: "",
            client: "",
            content: []
        });
        setHasUnsavedChanges(false);
    };
    if (showForm) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "form-panel article-editor-panel",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    children: editingItem ? "Edit Article" : "Write New Article"
                }, void 0, false, {
                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                    lineNumber: 514,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "dashboard-form article-editor-form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "editor-section-title",
                                    children: "Basic Information"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 518,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Article Title *"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 521,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: formData.title,
                                            onChange: (e)=>handleInputChange("title", e.target.value),
                                            placeholder: "e.g., Designing light for a desert hillside residence",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 522,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 520,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Subtitle/Hero Description"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 532,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: formData.subtitle || "",
                                            onChange: (e)=>handleInputChange("subtitle", e.target.value),
                                            placeholder: "A brief description shown in the hero section...",
                                            rows: "2"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 533,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 531,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Published Date *"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 543,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.date,
                                                    onChange: (e)=>handleInputChange("date", e.target.value),
                                                    placeholder: "e.g., Feb 2026",
                                                    required: true
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 544,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 542,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Category *"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 554,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: formData.tag,
                                                    onChange: (e)=>handleInputChange("tag", e.target.value),
                                                    required: true,
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "",
                                                            children: "Select category"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                            lineNumber: 560,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Architecture",
                                                            children: "Architecture"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                            lineNumber: 561,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Interior",
                                                            children: "Interior"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                            lineNumber: 562,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Construction",
                                                            children: "Construction"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                            lineNumber: 563,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Design",
                                                            children: "Design"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                            lineNumber: 564,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Studio",
                                                            children: "Studio"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                            lineNumber: 565,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Projects",
                                                            children: "Projects"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                            lineNumber: 566,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Awards",
                                                            children: "Awards"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                            lineNumber: 567,
                                                            columnNumber: 37
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "Press",
                                                            children: "Press"
                                                        }, void 0, false, {
                                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                            lineNumber: 568,
                                                            columnNumber: 37
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 555,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 553,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 541,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-grid",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Author Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 575,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.author || "",
                                                    onChange: (e)=>handleInputChange("author", e.target.value),
                                                    placeholder: "e.g., Arden Zwerlin"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 576,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 574,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "form-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    children: "Client Name(s)"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 585,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "text",
                                                    value: formData.client || "",
                                                    onChange: (e)=>handleInputChange("client", e.target.value),
                                                    placeholder: "e.g., Joshua Jacobs, Lillian Steele"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 586,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 584,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 573,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Featured Image *"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 596,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "image-upload-group",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "file",
                                                    accept: "image/*",
                                                    onChange: handleFileUpload,
                                                    className: "file-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 598,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "upload-separator",
                                                    children: "OR"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 604,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "url",
                                                    value: formData.image,
                                                    onChange: (e)=>handleInputChange("image", e.target.value),
                                                    placeholder: "Enter image URL (https://...)",
                                                    className: "url-input"
                                                }, void 0, false, {
                                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                    lineNumber: 605,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 597,
                                            columnNumber: 29
                                        }, this),
                                        formData.image && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "image-preview",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                src: formData.image,
                                                alt: "Preview"
                                            }, void 0, false, {
                                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                                lineNumber: 615,
                                                columnNumber: 37
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 614,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 595,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            children: "Article Excerpt *"
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 621,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: formData.excerpt,
                                            onChange: (e)=>handleInputChange("excerpt", e.target.value),
                                            placeholder: "Brief description shown in article listings...",
                                            rows: "3",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                            lineNumber: 622,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 620,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 517,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "editor-section",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    className: "editor-section-title",
                                    children: "Article Content"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 634,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "editor-section-subtitle",
                                    children: "Build your article using content blocks. Add paragraphs, headings, quotes, and images."
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 635,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$components$2f$RichTextEditor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    value: formData.content || [],
                                    onChange: (newContent)=>handleInputChange("content", newContent)
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 639,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 633,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "form-actions article-editor-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    className: "btn-secondary",
                                    onClick: handleCancel,
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 647,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn-primary",
                                    children: editingItem ? "Update Article" : "Publish Article"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 650,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 646,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                    lineNumber: 515,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/client/app/admin/dashboard/page.jsx",
            lineNumber: 513,
            columnNumber: 13
        }, this);
    }
    if (loading) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "items-list",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "items-grid",
                children: [
                    1,
                    2,
                    3,
                    4
                ].map((i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SkeletonCard, {}, i, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 663,
                        columnNumber: 44
                    }, this))
            }, void 0, false, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 662,
                columnNumber: 17
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/app/admin/dashboard/page.jsx",
            lineNumber: 661,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "items-list",
        children: blogs?.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "empty-state",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: 'No articles yet. Click "Add New" to write your first article.'
            }, void 0, false, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 673,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/client/app/admin/dashboard/page.jsx",
            lineNumber: 672,
            columnNumber: 17
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "items-grid",
            children: blogs?.map((blog)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "item-card",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: blog.image,
                            alt: blog.title,
                            className: "item-image"
                        }, void 0, false, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 679,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "item-content",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                    children: blog.title
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 681,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "item-meta",
                                    children: blog.date
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 682,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "item-badge",
                                    children: blog.tag
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 683,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "item-excerpt",
                                    children: blog.excerpt
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 684,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 680,
                            columnNumber: 29
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "item-actions",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: `/blog/${blog.id}`,
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "btn-view",
                                    children: "View"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 687,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-edit",
                                    onClick: ()=>setEditingItem(blog),
                                    children: "Edit"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 695,
                                    columnNumber: 33
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "btn-delete",
                                    onClick: ()=>handleDelete(blog.id),
                                    children: "Delete"
                                }, void 0, false, {
                                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                    lineNumber: 701,
                                    columnNumber: 33
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/client/app/admin/dashboard/page.jsx",
                            lineNumber: 686,
                            columnNumber: 29
                        }, this)
                    ]
                }, blog.id, true, {
                    fileName: "[project]/client/app/admin/dashboard/page.jsx",
                    lineNumber: 678,
                    columnNumber: 25
                }, this))
        }, void 0, false, {
            fileName: "[project]/client/app/admin/dashboard/page.jsx",
            lineNumber: 676,
            columnNumber: 17
        }, this)
    }, void 0, false, {
        fileName: "[project]/client/app/admin/dashboard/page.jsx",
        lineNumber: 670,
        columnNumber: 9
    }, this);
}
_s2(BlogsManager, "QcBZT0dLeoGHyasWi4+CS82nFQY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$hooks$2f$useApi$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useApi"]
    ];
});
_c3 = BlogsManager;
// ── Settings Panel ────────────────────────────────────────────────────────────
function SettingsPanel() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "settings-panel",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Account Information"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 721,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Username: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "admin"
                            }, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 722,
                                columnNumber: 30
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 722,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "Role: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Administrator"
                            }, void 0, false, {
                                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                                lineNumber: 723,
                                columnNumber: 26
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 723,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 720,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "System Info"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 727,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Version: 1.0.0"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 728,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Last Updated: Feb 2026"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 729,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 726,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "settings-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        children: "Quick Links"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 733,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "settings-link",
                        children: "→ View Live Site"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 734,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/projects",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "settings-link",
                        children: "→ View Projects Page"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 737,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/blogs",
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "settings-link",
                        children: "→ View Blog Page"
                    }, void 0, false, {
                        fileName: "[project]/client/app/admin/dashboard/page.jsx",
                        lineNumber: 740,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/client/app/admin/dashboard/page.jsx",
                lineNumber: 732,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/client/app/admin/dashboard/page.jsx",
        lineNumber: 719,
        columnNumber: 9
    }, this);
}
_c4 = SettingsPanel;
var _c, _c1, _c2, _c3, _c4;
__turbopack_context__.k.register(_c, "DashboardPage");
__turbopack_context__.k.register(_c1, "SkeletonCard");
__turbopack_context__.k.register(_c2, "ProjectsManager");
__turbopack_context__.k.register(_c3, "BlogsManager");
__turbopack_context__.k.register(_c4, "SettingsPanel");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=client_b556c26f._.js.map