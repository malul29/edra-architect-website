(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/client/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
"[project]/client/node_modules/next/navigation.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/client/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
}),
"[project]/client/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * A shared function, used on both client and server, to generate a SVG blur placeholder.
 */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImageBlurSvg", {
    enumerable: true,
    get: function() {
        return getImageBlurSvg;
    }
});
function getImageBlurSvg({ widthInt, heightInt, blurWidth, blurHeight, blurDataURL, objectFit }) {
    const std = 20;
    const svgWidth = blurWidth ? blurWidth * 40 : widthInt;
    const svgHeight = blurHeight ? blurHeight * 40 : heightInt;
    const viewBox = svgWidth && svgHeight ? `viewBox='0 0 ${svgWidth} ${svgHeight}'` : '';
    const preserveAspectRatio = viewBox ? 'none' : objectFit === 'contain' ? 'xMidYMid' : objectFit === 'cover' ? 'xMidYMid slice' : 'none';
    return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${viewBox}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='${std}'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${preserveAspectRatio}' style='filter: url(%23b);' href='${blurDataURL}'/%3E%3C/svg%3E`;
} //# sourceMappingURL=image-blur-svg.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VALID_LOADERS: null,
    imageConfigDefault: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VALID_LOADERS: function() {
        return VALID_LOADERS;
    },
    imageConfigDefault: function() {
        return imageConfigDefault;
    }
});
const VALID_LOADERS = [
    'default',
    'imgix',
    'cloudinary',
    'akamai',
    'custom'
];
const imageConfigDefault = {
    deviceSizes: [
        640,
        750,
        828,
        1080,
        1200,
        1920,
        2048,
        3840
    ],
    imageSizes: [
        32,
        48,
        64,
        96,
        128,
        256,
        384
    ],
    path: '/_next/image',
    loader: 'default',
    loaderFile: '',
    /**
   * @deprecated Use `remotePatterns` instead to protect your application from malicious users.
   */ domains: [],
    disableStaticImages: false,
    minimumCacheTTL: 14400,
    formats: [
        'image/webp'
    ],
    maximumRedirects: 3,
    maximumResponseBody: 50000000,
    dangerouslyAllowLocalIP: false,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: `script-src 'none'; frame-src 'none'; sandbox;`,
    contentDispositionType: 'attachment',
    localPatterns: undefined,
    remotePatterns: [],
    qualities: [
        75
    ],
    unoptimized: false
}; //# sourceMappingURL=image-config.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getImgProps", {
    enumerable: true,
    get: function() {
        return getImgProps;
    }
});
const _warnonce = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
const _imageblursvg = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-blur-svg.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const VALID_LOADING_VALUES = [
    'lazy',
    'eager',
    undefined
];
// Object-fit values that are not valid background-size values
const INVALID_BACKGROUND_SIZE_VALUES = [
    '-moz-initial',
    'fill',
    'none',
    'scale-down',
    undefined
];
function isStaticRequire(src) {
    return src.default !== undefined;
}
function isStaticImageData(src) {
    return src.src !== undefined;
}
function isStaticImport(src) {
    return !!src && typeof src === 'object' && (isStaticRequire(src) || isStaticImageData(src));
}
const allImgs = new Map();
let perfObserver;
function getInt(x) {
    if (typeof x === 'undefined') {
        return x;
    }
    if (typeof x === 'number') {
        return Number.isFinite(x) ? x : NaN;
    }
    if (typeof x === 'string' && /^[0-9]+$/.test(x)) {
        return parseInt(x, 10);
    }
    return NaN;
}
function getWidths({ deviceSizes, allSizes }, width, sizes) {
    if (sizes) {
        // Find all the "vw" percent sizes used in the sizes prop
        const viewportWidthRe = /(^|\s)(1?\d?\d)vw/g;
        const percentSizes = [];
        for(let match; match = viewportWidthRe.exec(sizes); match){
            percentSizes.push(parseInt(match[2]));
        }
        if (percentSizes.length) {
            const smallestRatio = Math.min(...percentSizes) * 0.01;
            return {
                widths: allSizes.filter((s)=>s >= deviceSizes[0] * smallestRatio),
                kind: 'w'
            };
        }
        return {
            widths: allSizes,
            kind: 'w'
        };
    }
    if (typeof width !== 'number') {
        return {
            widths: deviceSizes,
            kind: 'w'
        };
    }
    const widths = [
        ...new Set(// > are actually 3x in the green color, but only 1.5x in the red and
        // > blue colors. Showing a 3x resolution image in the app vs a 2x
        // > resolution image will be visually the same, though the 3x image
        // > takes significantly more data. Even true 3x resolution screens are
        // > wasteful as the human eye cannot see that level of detail without
        // > something like a magnifying glass.
        // https://blog.twitter.com/engineering/en_us/topics/infrastructure/2019/capping-image-fidelity-on-ultra-high-resolution-devices.html
        [
            width,
            width * 2 /*, width * 3*/ 
        ].map((w)=>allSizes.find((p)=>p >= w) || allSizes[allSizes.length - 1]))
    ];
    return {
        widths,
        kind: 'x'
    };
}
function generateImgAttrs({ config, src, unoptimized, width, quality, sizes, loader }) {
    if (unoptimized) {
        const deploymentId = (0, _deploymentid.getDeploymentId)();
        if (src.startsWith('/') && !src.startsWith('//') && deploymentId) {
            const sep = src.includes('?') ? '&' : '?';
            src = `${src}${sep}dpl=${deploymentId}`;
        }
        return {
            src,
            srcSet: undefined,
            sizes: undefined
        };
    }
    const { widths, kind } = getWidths(config, width, sizes);
    const last = widths.length - 1;
    return {
        sizes: !sizes && kind === 'w' ? '100vw' : sizes,
        srcSet: widths.map((w, i)=>`${loader({
                config,
                src,
                quality,
                width: w
            })} ${kind === 'w' ? w : i + 1}${kind}`).join(', '),
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        src: loader({
            config,
            src,
            quality,
            width: widths[last]
        })
    };
}
function getImgProps({ src, sizes, unoptimized = false, priority = false, preload = false, loading, className, quality, width, height, fill = false, style, overrideSrc, onLoad, onLoadingComplete, placeholder = 'empty', blurDataURL, fetchPriority, decoding = 'async', layout, objectFit, objectPosition, lazyBoundary, lazyRoot, ...rest }, _state) {
    const { imgConf, showAltText, blurComplete, defaultLoader } = _state;
    let config;
    let c = imgConf || _imageconfig.imageConfigDefault;
    if ('allSizes' in c) {
        config = c;
    } else {
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        config = {
            ...c,
            allSizes,
            deviceSizes,
            qualities
        };
    }
    if (typeof defaultLoader === 'undefined') {
        throw Object.defineProperty(new Error('images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config'), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: false,
            configurable: true
        });
    }
    let loader = rest.loader || defaultLoader;
    // Remove property so it's not spread on <img> element
    delete rest.loader;
    delete rest.srcSet;
    // This special value indicates that the user
    // didn't define a "loader" prop or "loader" config.
    const isDefaultLoader = '__next_img_default' in loader;
    if (isDefaultLoader) {
        if (config.loader === 'custom') {
            throw Object.defineProperty(new Error(`Image with src "${src}" is missing "loader" prop.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: false,
                configurable: true
            });
        }
    } else {
        // The user defined a "loader" prop or config.
        // Since the config object is internal only, we
        // must not pass it to the user-defined "loader".
        const customImageLoader = loader;
        loader = (obj)=>{
            const { config: _, ...opts } = obj;
            return customImageLoader(opts);
        };
    }
    if (layout) {
        if (layout === 'fill') {
            fill = true;
        }
        const layoutToStyle = {
            intrinsic: {
                maxWidth: '100%',
                height: 'auto'
            },
            responsive: {
                width: '100%',
                height: 'auto'
            }
        };
        const layoutToSizes = {
            responsive: '100vw',
            fill: '100vw'
        };
        const layoutStyle = layoutToStyle[layout];
        if (layoutStyle) {
            style = {
                ...style,
                ...layoutStyle
            };
        }
        const layoutSizes = layoutToSizes[layout];
        if (layoutSizes && !sizes) {
            sizes = layoutSizes;
        }
    }
    let staticSrc = '';
    let widthInt = getInt(width);
    let heightInt = getInt(height);
    let blurWidth;
    let blurHeight;
    if (isStaticImport(src)) {
        const staticImageData = isStaticRequire(src) ? src.default : src;
        if (!staticImageData.src) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: false,
                configurable: true
            });
        }
        if (!staticImageData.height || !staticImageData.width) {
            throw Object.defineProperty(new Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(staticImageData)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: false,
                configurable: true
            });
        }
        blurWidth = staticImageData.blurWidth;
        blurHeight = staticImageData.blurHeight;
        blurDataURL = blurDataURL || staticImageData.blurDataURL;
        staticSrc = staticImageData.src;
        if (!fill) {
            if (!widthInt && !heightInt) {
                widthInt = staticImageData.width;
                heightInt = staticImageData.height;
            } else if (widthInt && !heightInt) {
                const ratio = widthInt / staticImageData.width;
                heightInt = Math.round(staticImageData.height * ratio);
            } else if (!widthInt && heightInt) {
                const ratio = heightInt / staticImageData.height;
                widthInt = Math.round(staticImageData.width * ratio);
            }
        }
    }
    src = typeof src === 'string' ? src : staticSrc;
    let isLazy = !priority && !preload && (loading === 'lazy' || typeof loading === 'undefined');
    if (!src || src.startsWith('data:') || src.startsWith('blob:')) {
        // https://developer.mozilla.org/docs/Web/HTTP/Basics_of_HTTP/Data_URIs
        unoptimized = true;
        isLazy = false;
    }
    if (config.unoptimized) {
        unoptimized = true;
    }
    if (isDefaultLoader && !config.dangerouslyAllowSVG && src.split('?', 1)[0].endsWith('.svg')) {
        // Special case to make svg serve as-is to avoid proxying
        // through the built-in Image Optimization API.
        unoptimized = true;
    }
    const qualityInt = getInt(quality);
    if ("TURBOPACK compile-time truthy", 1) {
        if (config.output === 'export' && isDefaultLoader && !unoptimized) {
            throw Object.defineProperty(new Error(`Image Optimization using the default loader is not compatible with \`{ output: 'export' }\`.
  Possible solutions:
    - Remove \`{ output: 'export' }\` and run "next start" to run server mode including the Image Optimization API.
    - Configure \`{ images: { unoptimized: true } }\` in \`next.config.js\` to disable the Image Optimization API.
  Read more: https://nextjs.org/docs/messages/export-image-api`), "__NEXT_ERROR_CODE", {
                value: "E500",
                enumerable: false,
                configurable: true
            });
        }
        if (!src) {
            // React doesn't show the stack trace and there's
            // no `src` to help identify which image, so we
            // instead console.error(ref) during mount.
            unoptimized = true;
        } else {
            if (fill) {
                if (width) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "width" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E96",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (height) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "height" and "fill" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                        value: "E115",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.position && style.position !== 'absolute') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.position" properties. Images with "fill" always use position absolute - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E216",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.width && style.width !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.width" properties. Images with "fill" always use width 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E73",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (style?.height && style.height !== '100%') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has both "fill" and "style.height" properties. Images with "fill" always use height 100% - it cannot be modified.`), "__NEXT_ERROR_CODE", {
                        value: "E404",
                        enumerable: false,
                        configurable: true
                    });
                }
            } else {
                if (typeof widthInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "width" property.`), "__NEXT_ERROR_CODE", {
                        value: "E451",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(widthInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "width" property. Expected a numeric value in pixels but received "${width}".`), "__NEXT_ERROR_CODE", {
                        value: "E66",
                        enumerable: false,
                        configurable: true
                    });
                }
                if (typeof heightInt === 'undefined') {
                    throw Object.defineProperty(new Error(`Image with src "${src}" is missing required "height" property.`), "__NEXT_ERROR_CODE", {
                        value: "E397",
                        enumerable: false,
                        configurable: true
                    });
                } else if (isNaN(heightInt)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "height" property. Expected a numeric value in pixels but received "${height}".`), "__NEXT_ERROR_CODE", {
                        value: "E444",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/^[\x00-\x20]/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot start with a space or control character. Use src.trimStart() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E176",
                        enumerable: false,
                        configurable: true
                    });
                }
                // eslint-disable-next-line no-control-regex
                if (/[\x00-\x20]$/.test(src)) {
                    throw Object.defineProperty(new Error(`Image with src "${src}" cannot end with a space or control character. Use src.trimEnd() to remove it or encodeURIComponent(src) to keep it.`), "__NEXT_ERROR_CODE", {
                        value: "E21",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!VALID_LOADING_VALUES.includes(loading)) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "loading" property. Provided "${loading}" should be one of ${VALID_LOADING_VALUES.map(String).join(',')}.`), "__NEXT_ERROR_CODE", {
                value: "E357",
                enumerable: false,
                configurable: true
            });
        }
        if (priority && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "priority" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E218",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && loading === 'lazy') {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "loading='lazy'" properties. Only one should be used.`), "__NEXT_ERROR_CODE", {
                value: "E803",
                enumerable: false,
                configurable: true
            });
        }
        if (preload && priority) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has both "preload" and "priority" properties. Only "preload" should be used.`), "__NEXT_ERROR_CODE", {
                value: "E802",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty' && placeholder !== 'blur' && !placeholder.startsWith('data:image/')) {
            throw Object.defineProperty(new Error(`Image with src "${src}" has invalid "placeholder" property "${placeholder}".`), "__NEXT_ERROR_CODE", {
                value: "E431",
                enumerable: false,
                configurable: true
            });
        }
        if (placeholder !== 'empty') {
            if (widthInt && heightInt && widthInt * heightInt < 1600) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" is smaller than 40x40. Consider removing the "placeholder" property to improve performance.`);
            }
        }
        if (qualityInt && config.qualities && !config.qualities.includes(qualityInt)) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using quality "${qualityInt}" which is not configured in images.qualities [${config.qualities.join(', ')}]. Please update your config to [${[
                ...config.qualities,
                qualityInt
            ].sort().join(', ')}].` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-qualities`);
        }
        if (placeholder === 'blur' && !blurDataURL) {
            const VALID_BLUR_EXT = [
                'jpeg',
                'png',
                'webp',
                'avif'
            ] // should match next-image-loader
            ;
            throw Object.defineProperty(new Error(`Image with src "${src}" has "placeholder='blur'" property but is missing the "blurDataURL" property.
        Possible solutions:
          - Add a "blurDataURL" property, the contents should be a small Data URL to represent the image
          - Change the "src" property to a static import with one of the supported file types: ${VALID_BLUR_EXT.join(',')} (animated images not supported)
          - Remove the "placeholder" property, effectively no blur effect
        Read more: https://nextjs.org/docs/messages/placeholder-blur-data-url`), "__NEXT_ERROR_CODE", {
                value: "E371",
                enumerable: false,
                configurable: true
            });
        }
        if ('ref' in rest) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using unsupported "ref" property. Consider using the "onLoad" property instead.`);
        }
        if (!unoptimized && !isDefaultLoader) {
            const urlStr = loader({
                config,
                src,
                width: widthInt || 400,
                quality: qualityInt || 75
            });
            let url;
            try {
                url = new URL(urlStr);
            } catch (err) {}
            if (urlStr === src || url && url.pathname === src && !url.search) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has a "loader" property that does not implement width. Please implement it or use the "unoptimized" property instead.` + `\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader-width`);
            }
        }
        if (onLoadingComplete) {
            (0, _warnonce.warnOnce)(`Image with src "${src}" is using deprecated "onLoadingComplete" property. Please use the "onLoad" property instead.`);
        }
        for (const [legacyKey, legacyValue] of Object.entries({
            layout,
            objectFit,
            objectPosition,
            lazyBoundary,
            lazyRoot
        })){
            if (legacyValue) {
                (0, _warnonce.warnOnce)(`Image with src "${src}" has legacy prop "${legacyKey}". Did you forget to run the codemod?` + `\nRead more: https://nextjs.org/docs/messages/next-image-upgrade-to-13`);
            }
        }
        if (typeof window !== 'undefined' && !perfObserver && window.PerformanceObserver) {
            perfObserver = new PerformanceObserver((entryList)=>{
                for (const entry of entryList.getEntries()){
                    // @ts-ignore - missing "LargestContentfulPaint" class with "element" prop
                    const imgSrc = entry?.element?.src || '';
                    const lcpImage = allImgs.get(imgSrc);
                    if (lcpImage && lcpImage.loading === 'lazy' && lcpImage.placeholder === 'empty' && !lcpImage.src.startsWith('data:') && !lcpImage.src.startsWith('blob:')) {
                        // https://web.dev/lcp/#measure-lcp-in-javascript
                        (0, _warnonce.warnOnce)(`Image with src "${lcpImage.src}" was detected as the Largest Contentful Paint (LCP). Please add the \`loading="eager"\` property if this image is above the fold.` + `\nRead more: https://nextjs.org/docs/app/api-reference/components/image#loading`);
                    }
                }
            });
            try {
                perfObserver.observe({
                    type: 'largest-contentful-paint',
                    buffered: true
                });
            } catch (err) {
                // Log error but don't crash the app
                console.error(err);
            }
        }
    }
    const imgStyle = Object.assign(fill ? {
        position: 'absolute',
        height: '100%',
        width: '100%',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        objectFit,
        objectPosition
    } : {}, showAltText ? {} : {
        color: 'transparent'
    }, style);
    const backgroundImage = !blurComplete && placeholder !== 'empty' ? placeholder === 'blur' ? `url("data:image/svg+xml;charset=utf-8,${(0, _imageblursvg.getImageBlurSvg)({
        widthInt,
        heightInt,
        blurWidth,
        blurHeight,
        blurDataURL: blurDataURL || '',
        objectFit: imgStyle.objectFit
    })}")` : `url("${placeholder}")` // assume `data:image/`
     : null;
    const backgroundSize = !INVALID_BACKGROUND_SIZE_VALUES.includes(imgStyle.objectFit) ? imgStyle.objectFit : imgStyle.objectFit === 'fill' ? '100% 100%' // the background-size equivalent of `fill`
     : 'cover';
    let placeholderStyle = backgroundImage ? {
        backgroundSize,
        backgroundPosition: imgStyle.objectPosition || '50% 50%',
        backgroundRepeat: 'no-repeat',
        backgroundImage
    } : {};
    if ("TURBOPACK compile-time truthy", 1) {
        if (placeholderStyle.backgroundImage && placeholder === 'blur' && blurDataURL?.startsWith('/')) {
            // During `next dev`, we don't want to generate blur placeholders with webpack
            // because it can delay starting the dev server. Instead, `next-image-loader.js`
            // will inline a special url to lazily generate the blur placeholder at request time.
            placeholderStyle.backgroundImage = `url("${blurDataURL}")`;
        }
    }
    const imgAttributes = generateImgAttrs({
        config,
        src,
        unoptimized,
        width: widthInt,
        quality: qualityInt,
        sizes,
        loader
    });
    const loadingFinal = isLazy ? 'lazy' : loading;
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== 'undefined') {
            let fullUrl;
            try {
                fullUrl = new URL(imgAttributes.src);
            } catch (e) {
                fullUrl = new URL(imgAttributes.src, window.location.href);
            }
            allImgs.set(fullUrl.href, {
                src,
                loading: loadingFinal,
                placeholder
            });
        }
    }
    const props = {
        ...rest,
        loading: loadingFinal,
        fetchPriority,
        width: widthInt,
        height: heightInt,
        decoding,
        className,
        style: {
            ...imgStyle,
            ...placeholderStyle
        },
        sizes: imgAttributes.sizes,
        srcSet: imgAttributes.srcSet,
        src: overrideSrc || imgAttributes.src
    };
    const meta = {
        unoptimized,
        preload: preload || priority,
        placeholder,
        fill
    };
    return {
        props,
        meta
    };
} //# sourceMappingURL=get-img-props.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return SideEffect;
    }
});
const _react = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
const isServer = typeof window === 'undefined';
const useClientOnlyLayoutEffect = isServer ? ()=>{} : _react.useLayoutEffect;
const useClientOnlyEffect = isServer ? ()=>{} : _react.useEffect;
function SideEffect(props) {
    const { headManager, reduceComponentsToState } = props;
    function emitChange() {
        if (headManager && headManager.mountedInstances) {
            const headElements = _react.Children.toArray(Array.from(headManager.mountedInstances).filter(Boolean));
            headManager.updateHead(reduceComponentsToState(headElements));
        }
    }
    if (isServer) {
        headManager?.mountedInstances?.add(props.children);
        emitChange();
    }
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            headManager?.mountedInstances?.add(props.children);
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    headManager?.mountedInstances?.delete(props.children);
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    // We need to call `updateHead` method whenever the `SideEffect` is trigger in all
    // life-cycles: mount, update, unmount. However, if there are multiple `SideEffect`s
    // being rendered, we only trigger the method from the last one.
    // This is ensured by keeping the last unflushed `updateHead` in the `_pendingUpdate`
    // singleton in the layout effect pass, and actually trigger it in the effect pass.
    useClientOnlyLayoutEffect({
        "SideEffect.useClientOnlyLayoutEffect": ()=>{
            if (headManager) {
                headManager._pendingUpdate = emitChange;
            }
            return ({
                "SideEffect.useClientOnlyLayoutEffect": ()=>{
                    if (headManager) {
                        headManager._pendingUpdate = emitChange;
                    }
                }
            })["SideEffect.useClientOnlyLayoutEffect"];
        }
    }["SideEffect.useClientOnlyLayoutEffect"]);
    useClientOnlyEffect({
        "SideEffect.useClientOnlyEffect": ()=>{
            if (headManager && headManager._pendingUpdate) {
                headManager._pendingUpdate();
                headManager._pendingUpdate = null;
            }
            return ({
                "SideEffect.useClientOnlyEffect": ()=>{
                    if (headManager && headManager._pendingUpdate) {
                        headManager._pendingUpdate();
                        headManager._pendingUpdate = null;
                    }
                }
            })["SideEffect.useClientOnlyEffect"];
        }
    }["SideEffect.useClientOnlyEffect"]);
    return null;
} //# sourceMappingURL=side-effect.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    defaultHead: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    defaultHead: function() {
        return defaultHead;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/client/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/client/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _sideeffect = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/side-effect.js [app-client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
function defaultHead() {
    const head = [
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"),
        /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")
    ];
    return head;
}
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === _react.default.Fragment) {
        return list.concat(_react.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild)=>{
            if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = [
    'name',
    'httpEquiv',
    'charSet',
    'itemProp'
];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/ function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h)=>{
        let isUnique = true;
        let hasKey = false;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            hasKey = true;
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                isUnique = false;
            } else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch(h.type){
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    isUnique = false;
                } else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for(let i = 0, len = METATYPES.length; i < len; i++){
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype)) continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            isUnique = false;
                        } else {
                            metaTypes.add(metatype);
                        }
                    } else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
                            isUnique = false;
                        } else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return isUnique;
    };
}
/**
 *
 * @param headChildrenElements List of children of <Head>
 */ function reduceComponents(headChildrenElements) {
    return headChildrenElements.reduce(onlyReactElement, []).reverse().concat(defaultHead().reverse()).filter(unique()).reverse().map((c, i)=>{
        const key = c.key || i;
        if ("TURBOPACK compile-time truthy", 1) {
            // omit JSON-LD structured data snippets from the warning
            if (c.type === 'script' && c.props['type'] !== 'application/ld+json') {
                const srcMessage = c.props['src'] ? `<script> tag with src="${c.props['src']}"` : `inline <script>`;
                (0, _warnonce.warnOnce)(`Do not add <script> tags using next/head (see ${srcMessage}). Use next/script instead. \nSee more info here: https://nextjs.org/docs/messages/no-script-tags-in-head-component`);
            } else if (c.type === 'link' && c.props['rel'] === 'stylesheet') {
                (0, _warnonce.warnOnce)(`Do not add stylesheets using next/head (see <link rel="stylesheet"> tag with href="${c.props['href']}"). Use Document instead. \nSee more info here: https://nextjs.org/docs/messages/no-stylesheets-in-head-component`);
            }
        }
        return /*#__PURE__*/ _react.default.cloneElement(c, {
            key
        });
    });
}
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */ function Head({ children }) {
    const headManager = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_sideeffect.default, {
        reduceComponentsToState: reduceComponents,
        headManager: headManager,
        children: children
    });
}
const _default = Head;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageConfigContext", {
    enumerable: true,
    get: function() {
        return ImageConfigContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/client/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _imageconfig = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const ImageConfigContext = _react.default.createContext(_imageconfig.imageConfigDefault);
if ("TURBOPACK compile-time truthy", 1) {
    ImageConfigContext.displayName = 'ImageConfigContext';
} //# sourceMappingURL=image-config-context.shared-runtime.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RouterContext", {
    enumerable: true,
    get: function() {
        return RouterContext;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/client/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const RouterContext = _react.default.createContext(null);
if ("TURBOPACK compile-time truthy", 1) {
    RouterContext.displayName = 'RouterContext';
} //# sourceMappingURL=router-context.shared-runtime.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "findClosestQuality", {
    enumerable: true,
    get: function() {
        return findClosestQuality;
    }
});
function findClosestQuality(quality, config) {
    const q = quality || 75;
    if (!config?.qualities?.length) {
        return q;
    }
    return config.qualities.reduce((prev, cur)=>Math.abs(cur - q) < Math.abs(prev - q) ? cur : prev, 0);
} //# sourceMappingURL=find-closest-quality.js.map
}),
"[project]/client/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
(()=>{
    "use strict";
    var t = {
        170: (t, e, u)=>{
            const n = u(510);
            const isWindows = ()=>{
                if (typeof navigator !== "undefined" && navigator.platform) {
                    const t = navigator.platform.toLowerCase();
                    return t === "win32" || t === "windows";
                }
                if (typeof __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"] !== "undefined" && __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform) {
                    return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].platform === "win32";
                }
                return false;
            };
            function picomatch(t, e, u = false) {
                if (e && (e.windows === null || e.windows === undefined)) {
                    e = {
                        ...e,
                        windows: isWindows()
                    };
                }
                return n(t, e, u);
            }
            Object.assign(picomatch, n);
            t.exports = picomatch;
        },
        154: (t)=>{
            const e = "\\\\/";
            const u = `[^${e}]`;
            const n = "\\.";
            const o = "\\+";
            const s = "\\?";
            const r = "\\/";
            const a = "(?=.)";
            const i = "[^/]";
            const c = `(?:${r}|$)`;
            const p = `(?:^|${r})`;
            const l = `${n}{1,2}${c}`;
            const f = `(?!${n})`;
            const A = `(?!${p}${l})`;
            const _ = `(?!${n}{0,1}${c})`;
            const R = `(?!${l})`;
            const E = `[^.${r}]`;
            const h = `${i}*?`;
            const g = "/";
            const b = {
                DOT_LITERAL: n,
                PLUS_LITERAL: o,
                QMARK_LITERAL: s,
                SLASH_LITERAL: r,
                ONE_CHAR: a,
                QMARK: i,
                END_ANCHOR: c,
                DOTS_SLASH: l,
                NO_DOT: f,
                NO_DOTS: A,
                NO_DOT_SLASH: _,
                NO_DOTS_SLASH: R,
                QMARK_NO_DOT: E,
                STAR: h,
                START_ANCHOR: p,
                SEP: g
            };
            const C = {
                ...b,
                SLASH_LITERAL: `[${e}]`,
                QMARK: u,
                STAR: `${u}*?`,
                DOTS_SLASH: `${n}{1,2}(?:[${e}]|$)`,
                NO_DOT: `(?!${n})`,
                NO_DOTS: `(?!(?:^|[${e}])${n}{1,2}(?:[${e}]|$))`,
                NO_DOT_SLASH: `(?!${n}{0,1}(?:[${e}]|$))`,
                NO_DOTS_SLASH: `(?!${n}{1,2}(?:[${e}]|$))`,
                QMARK_NO_DOT: `[^.${e}]`,
                START_ANCHOR: `(?:^|[${e}])`,
                END_ANCHOR: `(?:[${e}]|$)`,
                SEP: "\\"
            };
            const y = {
                alnum: "a-zA-Z0-9",
                alpha: "a-zA-Z",
                ascii: "\\x00-\\x7F",
                blank: " \\t",
                cntrl: "\\x00-\\x1F\\x7F",
                digit: "0-9",
                graph: "\\x21-\\x7E",
                lower: "a-z",
                print: "\\x20-\\x7E ",
                punct: "\\-!\"#$%&'()\\*+,./:;<=>?@[\\]^_`{|}~",
                space: " \\t\\r\\n\\v\\f",
                upper: "A-Z",
                word: "A-Za-z0-9_",
                xdigit: "A-Fa-f0-9"
            };
            t.exports = {
                MAX_LENGTH: 1024 * 64,
                POSIX_REGEX_SOURCE: y,
                REGEX_BACKSLASH: /\\(?![*+?^${}(|)[\]])/g,
                REGEX_NON_SPECIAL_CHARS: /^[^@![\].,$*+?^{}()|\\/]+/,
                REGEX_SPECIAL_CHARS: /[-*+?.^${}(|)[\]]/,
                REGEX_SPECIAL_CHARS_BACKREF: /(\\?)((\W)(\3*))/g,
                REGEX_SPECIAL_CHARS_GLOBAL: /([-*+?.^${}(|)[\]])/g,
                REGEX_REMOVE_BACKSLASH: /(?:\[.*?[^\\]\]|\\(?=.))/g,
                REPLACEMENTS: {
                    "***": "*",
                    "**/**": "**",
                    "**/**/**": "**"
                },
                CHAR_0: 48,
                CHAR_9: 57,
                CHAR_UPPERCASE_A: 65,
                CHAR_LOWERCASE_A: 97,
                CHAR_UPPERCASE_Z: 90,
                CHAR_LOWERCASE_Z: 122,
                CHAR_LEFT_PARENTHESES: 40,
                CHAR_RIGHT_PARENTHESES: 41,
                CHAR_ASTERISK: 42,
                CHAR_AMPERSAND: 38,
                CHAR_AT: 64,
                CHAR_BACKWARD_SLASH: 92,
                CHAR_CARRIAGE_RETURN: 13,
                CHAR_CIRCUMFLEX_ACCENT: 94,
                CHAR_COLON: 58,
                CHAR_COMMA: 44,
                CHAR_DOT: 46,
                CHAR_DOUBLE_QUOTE: 34,
                CHAR_EQUAL: 61,
                CHAR_EXCLAMATION_MARK: 33,
                CHAR_FORM_FEED: 12,
                CHAR_FORWARD_SLASH: 47,
                CHAR_GRAVE_ACCENT: 96,
                CHAR_HASH: 35,
                CHAR_HYPHEN_MINUS: 45,
                CHAR_LEFT_ANGLE_BRACKET: 60,
                CHAR_LEFT_CURLY_BRACE: 123,
                CHAR_LEFT_SQUARE_BRACKET: 91,
                CHAR_LINE_FEED: 10,
                CHAR_NO_BREAK_SPACE: 160,
                CHAR_PERCENT: 37,
                CHAR_PLUS: 43,
                CHAR_QUESTION_MARK: 63,
                CHAR_RIGHT_ANGLE_BRACKET: 62,
                CHAR_RIGHT_CURLY_BRACE: 125,
                CHAR_RIGHT_SQUARE_BRACKET: 93,
                CHAR_SEMICOLON: 59,
                CHAR_SINGLE_QUOTE: 39,
                CHAR_SPACE: 32,
                CHAR_TAB: 9,
                CHAR_UNDERSCORE: 95,
                CHAR_VERTICAL_LINE: 124,
                CHAR_ZERO_WIDTH_NOBREAK_SPACE: 65279,
                extglobChars (t) {
                    return {
                        "!": {
                            type: "negate",
                            open: "(?:(?!(?:",
                            close: `))${t.STAR})`
                        },
                        "?": {
                            type: "qmark",
                            open: "(?:",
                            close: ")?"
                        },
                        "+": {
                            type: "plus",
                            open: "(?:",
                            close: ")+"
                        },
                        "*": {
                            type: "star",
                            open: "(?:",
                            close: ")*"
                        },
                        "@": {
                            type: "at",
                            open: "(?:",
                            close: ")"
                        }
                    };
                },
                globChars (t) {
                    return t === true ? C : b;
                }
            };
        },
        697: (t, e, u)=>{
            const n = u(154);
            const o = u(96);
            const { MAX_LENGTH: s, POSIX_REGEX_SOURCE: r, REGEX_NON_SPECIAL_CHARS: a, REGEX_SPECIAL_CHARS_BACKREF: i, REPLACEMENTS: c } = n;
            const expandRange = (t, e)=>{
                if (typeof e.expandRange === "function") {
                    return e.expandRange(...t, e);
                }
                t.sort();
                const u = `[${t.join("-")}]`;
                try {
                    new RegExp(u);
                } catch (e) {
                    return t.map((t)=>o.escapeRegex(t)).join("..");
                }
                return u;
            };
            const syntaxError = (t, e)=>`Missing ${t}: "${e}" - use "\\\\${e}" to match literal characters`;
            const parse = (t, e)=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected a string");
                }
                t = c[t] || t;
                const u = {
                    ...e
                };
                const p = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                let l = t.length;
                if (l > p) {
                    throw new SyntaxError(`Input length: ${l}, exceeds maximum allowed length: ${p}`);
                }
                const f = {
                    type: "bos",
                    value: "",
                    output: u.prepend || ""
                };
                const A = [
                    f
                ];
                const _ = u.capture ? "" : "?:";
                const R = n.globChars(u.windows);
                const E = n.extglobChars(R);
                const { DOT_LITERAL: h, PLUS_LITERAL: g, SLASH_LITERAL: b, ONE_CHAR: C, DOTS_SLASH: y, NO_DOT: $, NO_DOT_SLASH: x, NO_DOTS_SLASH: S, QMARK: H, QMARK_NO_DOT: v, STAR: d, START_ANCHOR: L } = R;
                const globstar = (t)=>`(${_}(?:(?!${L}${t.dot ? y : h}).)*?)`;
                const T = u.dot ? "" : $;
                const O = u.dot ? H : v;
                let k = u.bash === true ? globstar(u) : d;
                if (u.capture) {
                    k = `(${k})`;
                }
                if (typeof u.noext === "boolean") {
                    u.noextglob = u.noext;
                }
                const m = {
                    input: t,
                    index: -1,
                    start: 0,
                    dot: u.dot === true,
                    consumed: "",
                    output: "",
                    prefix: "",
                    backtrack: false,
                    negated: false,
                    brackets: 0,
                    braces: 0,
                    parens: 0,
                    quotes: 0,
                    globstar: false,
                    tokens: A
                };
                t = o.removePrefix(t, m);
                l = t.length;
                const w = [];
                const N = [];
                const I = [];
                let B = f;
                let G;
                const eos = ()=>m.index === l - 1;
                const D = m.peek = (e = 1)=>t[m.index + e];
                const M = m.advance = ()=>t[++m.index] || "";
                const remaining = ()=>t.slice(m.index + 1);
                const consume = (t = "", e = 0)=>{
                    m.consumed += t;
                    m.index += e;
                };
                const append = (t)=>{
                    m.output += t.output != null ? t.output : t.value;
                    consume(t.value);
                };
                const negate = ()=>{
                    let t = 1;
                    while(D() === "!" && (D(2) !== "(" || D(3) === "?")){
                        M();
                        m.start++;
                        t++;
                    }
                    if (t % 2 === 0) {
                        return false;
                    }
                    m.negated = true;
                    m.start++;
                    return true;
                };
                const increment = (t)=>{
                    m[t]++;
                    I.push(t);
                };
                const decrement = (t)=>{
                    m[t]--;
                    I.pop();
                };
                const push = (t)=>{
                    if (B.type === "globstar") {
                        const e = m.braces > 0 && (t.type === "comma" || t.type === "brace");
                        const u = t.extglob === true || w.length && (t.type === "pipe" || t.type === "paren");
                        if (t.type !== "slash" && t.type !== "paren" && !e && !u) {
                            m.output = m.output.slice(0, -B.output.length);
                            B.type = "star";
                            B.value = "*";
                            B.output = k;
                            m.output += B.output;
                        }
                    }
                    if (w.length && t.type !== "paren") {
                        w[w.length - 1].inner += t.value;
                    }
                    if (t.value || t.output) append(t);
                    if (B && B.type === "text" && t.type === "text") {
                        B.output = (B.output || B.value) + t.value;
                        B.value += t.value;
                        return;
                    }
                    t.prev = B;
                    A.push(t);
                    B = t;
                };
                const extglobOpen = (t, e)=>{
                    const n = {
                        ...E[e],
                        conditions: 1,
                        inner: ""
                    };
                    n.prev = B;
                    n.parens = m.parens;
                    n.output = m.output;
                    const o = (u.capture ? "(" : "") + n.open;
                    increment("parens");
                    push({
                        type: t,
                        value: e,
                        output: m.output ? "" : C
                    });
                    push({
                        type: "paren",
                        extglob: true,
                        value: M(),
                        output: o
                    });
                    w.push(n);
                };
                const extglobClose = (t)=>{
                    let n = t.close + (u.capture ? ")" : "");
                    let o;
                    if (t.type === "negate") {
                        let s = k;
                        if (t.inner && t.inner.length > 1 && t.inner.includes("/")) {
                            s = globstar(u);
                        }
                        if (s !== k || eos() || /^\)+$/.test(remaining())) {
                            n = t.close = `)$))${s}`;
                        }
                        if (t.inner.includes("*") && (o = remaining()) && /^\.[^\\/.]+$/.test(o)) {
                            const u = parse(o, {
                                ...e,
                                fastpaths: false
                            }).output;
                            n = t.close = `)${u})${s})`;
                        }
                        if (t.prev.type === "bos") {
                            m.negatedExtglob = true;
                        }
                    }
                    push({
                        type: "paren",
                        extglob: true,
                        value: G,
                        output: n
                    });
                    decrement("parens");
                };
                if (u.fastpaths !== false && !/(^[*!]|[/()[\]{}"])/.test(t)) {
                    let n = false;
                    let s = t.replace(i, (t, e, u, o, s, r)=>{
                        if (o === "\\") {
                            n = true;
                            return t;
                        }
                        if (o === "?") {
                            if (e) {
                                return e + o + (s ? H.repeat(s.length) : "");
                            }
                            if (r === 0) {
                                return O + (s ? H.repeat(s.length) : "");
                            }
                            return H.repeat(u.length);
                        }
                        if (o === ".") {
                            return h.repeat(u.length);
                        }
                        if (o === "*") {
                            if (e) {
                                return e + o + (s ? k : "");
                            }
                            return k;
                        }
                        return e ? t : `\\${t}`;
                    });
                    if (n === true) {
                        if (u.unescape === true) {
                            s = s.replace(/\\/g, "");
                        } else {
                            s = s.replace(/\\+/g, (t)=>t.length % 2 === 0 ? "\\\\" : t ? "\\" : "");
                        }
                    }
                    if (s === t && u.contains === true) {
                        m.output = t;
                        return m;
                    }
                    m.output = o.wrapOutput(s, m, e);
                    return m;
                }
                while(!eos()){
                    G = M();
                    if (G === "\0") {
                        continue;
                    }
                    if (G === "\\") {
                        const t = D();
                        if (t === "/" && u.bash !== true) {
                            continue;
                        }
                        if (t === "." || t === ";") {
                            continue;
                        }
                        if (!t) {
                            G += "\\";
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                        const e = /^\\+/.exec(remaining());
                        let n = 0;
                        if (e && e[0].length > 2) {
                            n = e[0].length;
                            m.index += n;
                            if (n % 2 !== 0) {
                                G += "\\";
                            }
                        }
                        if (u.unescape === true) {
                            G = M();
                        } else {
                            G += M();
                        }
                        if (m.brackets === 0) {
                            push({
                                type: "text",
                                value: G
                            });
                            continue;
                        }
                    }
                    if (m.brackets > 0 && (G !== "]" || B.value === "[" || B.value === "[^")) {
                        if (u.posix !== false && G === ":") {
                            const t = B.value.slice(1);
                            if (t.includes("[")) {
                                B.posix = true;
                                if (t.includes(":")) {
                                    const t = B.value.lastIndexOf("[");
                                    const e = B.value.slice(0, t);
                                    const u = B.value.slice(t + 2);
                                    const n = r[u];
                                    if (n) {
                                        B.value = e + n;
                                        m.backtrack = true;
                                        M();
                                        if (!f.output && A.indexOf(B) === 1) {
                                            f.output = C;
                                        }
                                        continue;
                                    }
                                }
                            }
                        }
                        if (G === "[" && D() !== ":" || G === "-" && D() === "]") {
                            G = `\\${G}`;
                        }
                        if (G === "]" && (B.value === "[" || B.value === "[^")) {
                            G = `\\${G}`;
                        }
                        if (u.posix === true && G === "!" && B.value === "[") {
                            G = "^";
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (m.quotes === 1 && G !== '"') {
                        G = o.escapeRegex(G);
                        B.value += G;
                        append({
                            value: G
                        });
                        continue;
                    }
                    if (G === '"') {
                        m.quotes = m.quotes === 1 ? 0 : 1;
                        if (u.keepQuotes === true) {
                            push({
                                type: "text",
                                value: G
                            });
                        }
                        continue;
                    }
                    if (G === "(") {
                        increment("parens");
                        push({
                            type: "paren",
                            value: G
                        });
                        continue;
                    }
                    if (G === ")") {
                        if (m.parens === 0 && u.strictBrackets === true) {
                            throw new SyntaxError(syntaxError("opening", "("));
                        }
                        const t = w[w.length - 1];
                        if (t && m.parens === t.parens + 1) {
                            extglobClose(w.pop());
                            continue;
                        }
                        push({
                            type: "paren",
                            value: G,
                            output: m.parens ? ")" : "\\)"
                        });
                        decrement("parens");
                        continue;
                    }
                    if (G === "[") {
                        if (u.nobracket === true || !remaining().includes("]")) {
                            if (u.nobracket !== true && u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("closing", "]"));
                            }
                            G = `\\${G}`;
                        } else {
                            increment("brackets");
                        }
                        push({
                            type: "bracket",
                            value: G
                        });
                        continue;
                    }
                    if (G === "]") {
                        if (u.nobracket === true || B && B.type === "bracket" && B.value.length === 1) {
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        if (m.brackets === 0) {
                            if (u.strictBrackets === true) {
                                throw new SyntaxError(syntaxError("opening", "["));
                            }
                            push({
                                type: "text",
                                value: G,
                                output: `\\${G}`
                            });
                            continue;
                        }
                        decrement("brackets");
                        const t = B.value.slice(1);
                        if (B.posix !== true && t[0] === "^" && !t.includes("/")) {
                            G = `/${G}`;
                        }
                        B.value += G;
                        append({
                            value: G
                        });
                        if (u.literalBrackets === false || o.hasRegexChars(t)) {
                            continue;
                        }
                        const e = o.escapeRegex(B.value);
                        m.output = m.output.slice(0, -B.value.length);
                        if (u.literalBrackets === true) {
                            m.output += e;
                            B.value = e;
                            continue;
                        }
                        B.value = `(${_}${e}|${B.value})`;
                        m.output += B.value;
                        continue;
                    }
                    if (G === "{" && u.nobrace !== true) {
                        increment("braces");
                        const t = {
                            type: "brace",
                            value: G,
                            output: "(",
                            outputIndex: m.output.length,
                            tokensIndex: m.tokens.length
                        };
                        N.push(t);
                        push(t);
                        continue;
                    }
                    if (G === "}") {
                        const t = N[N.length - 1];
                        if (u.nobrace === true || !t) {
                            push({
                                type: "text",
                                value: G,
                                output: G
                            });
                            continue;
                        }
                        let e = ")";
                        if (t.dots === true) {
                            const t = A.slice();
                            const n = [];
                            for(let e = t.length - 1; e >= 0; e--){
                                A.pop();
                                if (t[e].type === "brace") {
                                    break;
                                }
                                if (t[e].type !== "dots") {
                                    n.unshift(t[e].value);
                                }
                            }
                            e = expandRange(n, u);
                            m.backtrack = true;
                        }
                        if (t.comma !== true && t.dots !== true) {
                            const u = m.output.slice(0, t.outputIndex);
                            const n = m.tokens.slice(t.tokensIndex);
                            t.value = t.output = "\\{";
                            G = e = "\\}";
                            m.output = u;
                            for (const t of n){
                                m.output += t.output || t.value;
                            }
                        }
                        push({
                            type: "brace",
                            value: G,
                            output: e
                        });
                        decrement("braces");
                        N.pop();
                        continue;
                    }
                    if (G === "|") {
                        if (w.length > 0) {
                            w[w.length - 1].conditions++;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G === ",") {
                        let t = G;
                        const e = N[N.length - 1];
                        if (e && I[I.length - 1] === "braces") {
                            e.comma = true;
                            t = "|";
                        }
                        push({
                            type: "comma",
                            value: G,
                            output: t
                        });
                        continue;
                    }
                    if (G === "/") {
                        if (B.type === "dot" && m.index === m.start + 1) {
                            m.start = m.index + 1;
                            m.consumed = "";
                            m.output = "";
                            A.pop();
                            B = f;
                            continue;
                        }
                        push({
                            type: "slash",
                            value: G,
                            output: b
                        });
                        continue;
                    }
                    if (G === ".") {
                        if (m.braces > 0 && B.type === "dot") {
                            if (B.value === ".") B.output = h;
                            const t = N[N.length - 1];
                            B.type = "dots";
                            B.output += G;
                            B.value += G;
                            t.dots = true;
                            continue;
                        }
                        if (m.braces + m.parens === 0 && B.type !== "bos" && B.type !== "slash") {
                            push({
                                type: "text",
                                value: G,
                                output: h
                            });
                            continue;
                        }
                        push({
                            type: "dot",
                            value: G,
                            output: h
                        });
                        continue;
                    }
                    if (G === "?") {
                        const t = B && B.value === "(";
                        if (!t && u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("qmark", G);
                            continue;
                        }
                        if (B && B.type === "paren") {
                            const t = D();
                            let e = G;
                            if (B.value === "(" && !/[!=<:]/.test(t) || t === "<" && !/<([!=]|\w+>)/.test(remaining())) {
                                e = `\\${G}`;
                            }
                            push({
                                type: "text",
                                value: G,
                                output: e
                            });
                            continue;
                        }
                        if (u.dot !== true && (B.type === "slash" || B.type === "bos")) {
                            push({
                                type: "qmark",
                                value: G,
                                output: v
                            });
                            continue;
                        }
                        push({
                            type: "qmark",
                            value: G,
                            output: H
                        });
                        continue;
                    }
                    if (G === "!") {
                        if (u.noextglob !== true && D() === "(") {
                            if (D(2) !== "?" || !/[!=<:]/.test(D(3))) {
                                extglobOpen("negate", G);
                                continue;
                            }
                        }
                        if (u.nonegate !== true && m.index === 0) {
                            negate();
                            continue;
                        }
                    }
                    if (G === "+") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            extglobOpen("plus", G);
                            continue;
                        }
                        if (B && B.value === "(" || u.regex === false) {
                            push({
                                type: "plus",
                                value: G,
                                output: g
                            });
                            continue;
                        }
                        if (B && (B.type === "bracket" || B.type === "paren" || B.type === "brace") || m.parens > 0) {
                            push({
                                type: "plus",
                                value: G
                            });
                            continue;
                        }
                        push({
                            type: "plus",
                            value: g
                        });
                        continue;
                    }
                    if (G === "@") {
                        if (u.noextglob !== true && D() === "(" && D(2) !== "?") {
                            push({
                                type: "at",
                                extglob: true,
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (G !== "*") {
                        if (G === "$" || G === "^") {
                            G = `\\${G}`;
                        }
                        const t = a.exec(remaining());
                        if (t) {
                            G += t[0];
                            m.index += t[0].length;
                        }
                        push({
                            type: "text",
                            value: G
                        });
                        continue;
                    }
                    if (B && (B.type === "globstar" || B.star === true)) {
                        B.type = "star";
                        B.star = true;
                        B.value += G;
                        B.output = k;
                        m.backtrack = true;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    let e = remaining();
                    if (u.noextglob !== true && /^\([^?]/.test(e)) {
                        extglobOpen("star", G);
                        continue;
                    }
                    if (B.type === "star") {
                        if (u.noglobstar === true) {
                            consume(G);
                            continue;
                        }
                        const n = B.prev;
                        const o = n.prev;
                        const s = n.type === "slash" || n.type === "bos";
                        const r = o && (o.type === "star" || o.type === "globstar");
                        if (u.bash === true && (!s || e[0] && e[0] !== "/")) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        const a = m.braces > 0 && (n.type === "comma" || n.type === "brace");
                        const i = w.length && (n.type === "pipe" || n.type === "paren");
                        if (!s && n.type !== "paren" && !a && !i) {
                            push({
                                type: "star",
                                value: G,
                                output: ""
                            });
                            continue;
                        }
                        while(e.slice(0, 3) === "/**"){
                            const u = t[m.index + 4];
                            if (u && u !== "/") {
                                break;
                            }
                            e = e.slice(3);
                            consume("/**", 3);
                        }
                        if (n.type === "bos" && eos()) {
                            B.type = "globstar";
                            B.value += G;
                            B.output = globstar(u);
                            m.output = B.output;
                            m.globstar = true;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && !r && eos()) {
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = globstar(u) + (u.strictSlashes ? ")" : "|$)");
                            B.value += G;
                            m.globstar = true;
                            m.output += n.output + B.output;
                            consume(G);
                            continue;
                        }
                        if (n.type === "slash" && n.prev.type !== "bos" && e[0] === "/") {
                            const t = e[1] !== void 0 ? "|$" : "";
                            m.output = m.output.slice(0, -(n.output + B.output).length);
                            n.output = `(?:${n.output}`;
                            B.type = "globstar";
                            B.output = `${globstar(u)}${b}|${b}${t})`;
                            B.value += G;
                            m.output += n.output + B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        if (n.type === "bos" && e[0] === "/") {
                            B.type = "globstar";
                            B.value += G;
                            B.output = `(?:^|${b}|${globstar(u)}${b})`;
                            m.output = B.output;
                            m.globstar = true;
                            consume(G + M());
                            push({
                                type: "slash",
                                value: "/",
                                output: ""
                            });
                            continue;
                        }
                        m.output = m.output.slice(0, -B.output.length);
                        B.type = "globstar";
                        B.output = globstar(u);
                        B.value += G;
                        m.output += B.output;
                        m.globstar = true;
                        consume(G);
                        continue;
                    }
                    const n = {
                        type: "star",
                        value: G,
                        output: k
                    };
                    if (u.bash === true) {
                        n.output = ".*?";
                        if (B.type === "bos" || B.type === "slash") {
                            n.output = T + n.output;
                        }
                        push(n);
                        continue;
                    }
                    if (B && (B.type === "bracket" || B.type === "paren") && u.regex === true) {
                        n.output = G;
                        push(n);
                        continue;
                    }
                    if (m.index === m.start || B.type === "slash" || B.type === "dot") {
                        if (B.type === "dot") {
                            m.output += x;
                            B.output += x;
                        } else if (u.dot === true) {
                            m.output += S;
                            B.output += S;
                        } else {
                            m.output += T;
                            B.output += T;
                        }
                        if (D() !== "*") {
                            m.output += C;
                            B.output += C;
                        }
                    }
                    push(n);
                }
                while(m.brackets > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "]"));
                    m.output = o.escapeLast(m.output, "[");
                    decrement("brackets");
                }
                while(m.parens > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", ")"));
                    m.output = o.escapeLast(m.output, "(");
                    decrement("parens");
                }
                while(m.braces > 0){
                    if (u.strictBrackets === true) throw new SyntaxError(syntaxError("closing", "}"));
                    m.output = o.escapeLast(m.output, "{");
                    decrement("braces");
                }
                if (u.strictSlashes !== true && (B.type === "star" || B.type === "bracket")) {
                    push({
                        type: "maybe_slash",
                        value: "",
                        output: `${b}?`
                    });
                }
                if (m.backtrack === true) {
                    m.output = "";
                    for (const t of m.tokens){
                        m.output += t.output != null ? t.output : t.value;
                        if (t.suffix) {
                            m.output += t.suffix;
                        }
                    }
                }
                return m;
            };
            parse.fastpaths = (t, e)=>{
                const u = {
                    ...e
                };
                const r = typeof u.maxLength === "number" ? Math.min(s, u.maxLength) : s;
                const a = t.length;
                if (a > r) {
                    throw new SyntaxError(`Input length: ${a}, exceeds maximum allowed length: ${r}`);
                }
                t = c[t] || t;
                const { DOT_LITERAL: i, SLASH_LITERAL: p, ONE_CHAR: l, DOTS_SLASH: f, NO_DOT: A, NO_DOTS: _, NO_DOTS_SLASH: R, STAR: E, START_ANCHOR: h } = n.globChars(u.windows);
                const g = u.dot ? _ : A;
                const b = u.dot ? R : A;
                const C = u.capture ? "" : "?:";
                const y = {
                    negated: false,
                    prefix: ""
                };
                let $ = u.bash === true ? ".*?" : E;
                if (u.capture) {
                    $ = `(${$})`;
                }
                const globstar = (t)=>{
                    if (t.noglobstar === true) return $;
                    return `(${C}(?:(?!${h}${t.dot ? f : i}).)*?)`;
                };
                const create = (t)=>{
                    switch(t){
                        case "*":
                            return `${g}${l}${$}`;
                        case ".*":
                            return `${i}${l}${$}`;
                        case "*.*":
                            return `${g}${$}${i}${l}${$}`;
                        case "*/*":
                            return `${g}${$}${p}${l}${b}${$}`;
                        case "**":
                            return g + globstar(u);
                        case "**/*":
                            return `(?:${g}${globstar(u)}${p})?${b}${l}${$}`;
                        case "**/*.*":
                            return `(?:${g}${globstar(u)}${p})?${b}${$}${i}${l}${$}`;
                        case "**/.*":
                            return `(?:${g}${globstar(u)}${p})?${i}${l}${$}`;
                        default:
                            {
                                const e = /^(.*?)\.(\w+)$/.exec(t);
                                if (!e) return;
                                const u = create(e[1]);
                                if (!u) return;
                                return u + i + e[2];
                            }
                    }
                };
                const x = o.removePrefix(t, y);
                let S = create(x);
                if (S && u.strictSlashes !== true) {
                    S += `${p}?`;
                }
                return S;
            };
            t.exports = parse;
        },
        510: (t, e, u)=>{
            const n = u(716);
            const o = u(697);
            const s = u(96);
            const r = u(154);
            const isObject = (t)=>t && typeof t === "object" && !Array.isArray(t);
            const picomatch = (t, e, u = false)=>{
                if (Array.isArray(t)) {
                    const n = t.map((t)=>picomatch(t, e, u));
                    const arrayMatcher = (t)=>{
                        for (const e of n){
                            const u = e(t);
                            if (u) return u;
                        }
                        return false;
                    };
                    return arrayMatcher;
                }
                const n = isObject(t) && t.tokens && t.input;
                if (t === "" || typeof t !== "string" && !n) {
                    throw new TypeError("Expected pattern to be a non-empty string");
                }
                const o = e || {};
                const s = o.windows;
                const r = n ? picomatch.compileRe(t, e) : picomatch.makeRe(t, e, false, true);
                const a = r.state;
                delete r.state;
                let isIgnored = ()=>false;
                if (o.ignore) {
                    const t = {
                        ...e,
                        ignore: null,
                        onMatch: null,
                        onResult: null
                    };
                    isIgnored = picomatch(o.ignore, t, u);
                }
                const matcher = (u, n = false)=>{
                    const { isMatch: i, match: c, output: p } = picomatch.test(u, r, e, {
                        glob: t,
                        posix: s
                    });
                    const l = {
                        glob: t,
                        state: a,
                        regex: r,
                        posix: s,
                        input: u,
                        output: p,
                        match: c,
                        isMatch: i
                    };
                    if (typeof o.onResult === "function") {
                        o.onResult(l);
                    }
                    if (i === false) {
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (isIgnored(u)) {
                        if (typeof o.onIgnore === "function") {
                            o.onIgnore(l);
                        }
                        l.isMatch = false;
                        return n ? l : false;
                    }
                    if (typeof o.onMatch === "function") {
                        o.onMatch(l);
                    }
                    return n ? l : true;
                };
                if (u) {
                    matcher.state = a;
                }
                return matcher;
            };
            picomatch.test = (t, e, u, { glob: n, posix: o } = {})=>{
                if (typeof t !== "string") {
                    throw new TypeError("Expected input to be a string");
                }
                if (t === "") {
                    return {
                        isMatch: false,
                        output: ""
                    };
                }
                const r = u || {};
                const a = r.format || (o ? s.toPosixSlashes : null);
                let i = t === n;
                let c = i && a ? a(t) : t;
                if (i === false) {
                    c = a ? a(t) : t;
                    i = c === n;
                }
                if (i === false || r.capture === true) {
                    if (r.matchBase === true || r.basename === true) {
                        i = picomatch.matchBase(t, e, u, o);
                    } else {
                        i = e.exec(c);
                    }
                }
                return {
                    isMatch: Boolean(i),
                    match: i,
                    output: c
                };
            };
            picomatch.matchBase = (t, e, u)=>{
                const n = e instanceof RegExp ? e : picomatch.makeRe(e, u);
                return n.test(s.basename(t));
            };
            picomatch.isMatch = (t, e, u)=>picomatch(e, u)(t);
            picomatch.parse = (t, e)=>{
                if (Array.isArray(t)) return t.map((t)=>picomatch.parse(t, e));
                return o(t, {
                    ...e,
                    fastpaths: false
                });
            };
            picomatch.scan = (t, e)=>n(t, e);
            picomatch.compileRe = (t, e, u = false, n = false)=>{
                if (u === true) {
                    return t.output;
                }
                const o = e || {};
                const s = o.contains ? "" : "^";
                const r = o.contains ? "" : "$";
                let a = `${s}(?:${t.output})${r}`;
                if (t && t.negated === true) {
                    a = `^(?!${a}).*$`;
                }
                const i = picomatch.toRegex(a, e);
                if (n === true) {
                    i.state = t;
                }
                return i;
            };
            picomatch.makeRe = (t, e = {}, u = false, n = false)=>{
                if (!t || typeof t !== "string") {
                    throw new TypeError("Expected a non-empty string");
                }
                let s = {
                    negated: false,
                    fastpaths: true
                };
                if (e.fastpaths !== false && (t[0] === "." || t[0] === "*")) {
                    s.output = o.fastpaths(t, e);
                }
                if (!s.output) {
                    s = o(t, e);
                }
                return picomatch.compileRe(s, e, u, n);
            };
            picomatch.toRegex = (t, e)=>{
                try {
                    const u = e || {};
                    return new RegExp(t, u.flags || (u.nocase ? "i" : ""));
                } catch (t) {
                    if (e && e.debug === true) throw t;
                    return /$^/;
                }
            };
            picomatch.constants = r;
            t.exports = picomatch;
        },
        716: (t, e, u)=>{
            const n = u(96);
            const { CHAR_ASTERISK: o, CHAR_AT: s, CHAR_BACKWARD_SLASH: r, CHAR_COMMA: a, CHAR_DOT: i, CHAR_EXCLAMATION_MARK: c, CHAR_FORWARD_SLASH: p, CHAR_LEFT_CURLY_BRACE: l, CHAR_LEFT_PARENTHESES: f, CHAR_LEFT_SQUARE_BRACKET: A, CHAR_PLUS: _, CHAR_QUESTION_MARK: R, CHAR_RIGHT_CURLY_BRACE: E, CHAR_RIGHT_PARENTHESES: h, CHAR_RIGHT_SQUARE_BRACKET: g } = u(154);
            const isPathSeparator = (t)=>t === p || t === r;
            const depth = (t)=>{
                if (t.isPrefix !== true) {
                    t.depth = t.isGlobstar ? Infinity : 1;
                }
            };
            const scan = (t, e)=>{
                const u = e || {};
                const b = t.length - 1;
                const C = u.parts === true || u.scanToEnd === true;
                const y = [];
                const $ = [];
                const x = [];
                let S = t;
                let H = -1;
                let v = 0;
                let d = 0;
                let L = false;
                let T = false;
                let O = false;
                let k = false;
                let m = false;
                let w = false;
                let N = false;
                let I = false;
                let B = false;
                let G = false;
                let D = 0;
                let M;
                let P;
                let K = {
                    value: "",
                    depth: 0,
                    isGlob: false
                };
                const eos = ()=>H >= b;
                const peek = ()=>S.charCodeAt(H + 1);
                const advance = ()=>{
                    M = P;
                    return S.charCodeAt(++H);
                };
                while(H < b){
                    P = advance();
                    let t;
                    if (P === r) {
                        N = K.backslashes = true;
                        P = advance();
                        if (P === l) {
                            w = true;
                        }
                        continue;
                    }
                    if (w === true || P === l) {
                        D++;
                        while(eos() !== true && (P = advance())){
                            if (P === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (P === l) {
                                D++;
                                continue;
                            }
                            if (w !== true && P === i && (P = advance()) === i) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (w !== true && P === a) {
                                L = K.isBrace = true;
                                O = K.isGlob = true;
                                G = true;
                                if (C === true) {
                                    continue;
                                }
                                break;
                            }
                            if (P === E) {
                                D--;
                                if (D === 0) {
                                    w = false;
                                    L = K.isBrace = true;
                                    G = true;
                                    break;
                                }
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === p) {
                        y.push(H);
                        $.push(K);
                        K = {
                            value: "",
                            depth: 0,
                            isGlob: false
                        };
                        if (G === true) continue;
                        if (M === i && H === v + 1) {
                            v += 2;
                            continue;
                        }
                        d = H + 1;
                        continue;
                    }
                    if (u.noext !== true) {
                        const t = P === _ || P === s || P === o || P === R || P === c;
                        if (t === true && peek() === f) {
                            O = K.isGlob = true;
                            k = K.isExtglob = true;
                            G = true;
                            if (P === c && H === v) {
                                B = true;
                            }
                            if (C === true) {
                                while(eos() !== true && (P = advance())){
                                    if (P === r) {
                                        N = K.backslashes = true;
                                        P = advance();
                                        continue;
                                    }
                                    if (P === h) {
                                        O = K.isGlob = true;
                                        G = true;
                                        break;
                                    }
                                }
                                continue;
                            }
                            break;
                        }
                    }
                    if (P === o) {
                        if (M === o) m = K.isGlobstar = true;
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === R) {
                        O = K.isGlob = true;
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (P === A) {
                        while(eos() !== true && (t = advance())){
                            if (t === r) {
                                N = K.backslashes = true;
                                advance();
                                continue;
                            }
                            if (t === g) {
                                T = K.isBracket = true;
                                O = K.isGlob = true;
                                G = true;
                                break;
                            }
                        }
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                    if (u.nonegate !== true && P === c && H === v) {
                        I = K.negated = true;
                        v++;
                        continue;
                    }
                    if (u.noparen !== true && P === f) {
                        O = K.isGlob = true;
                        if (C === true) {
                            while(eos() !== true && (P = advance())){
                                if (P === f) {
                                    N = K.backslashes = true;
                                    P = advance();
                                    continue;
                                }
                                if (P === h) {
                                    G = true;
                                    break;
                                }
                            }
                            continue;
                        }
                        break;
                    }
                    if (O === true) {
                        G = true;
                        if (C === true) {
                            continue;
                        }
                        break;
                    }
                }
                if (u.noext === true) {
                    k = false;
                    O = false;
                }
                let U = S;
                let X = "";
                let F = "";
                if (v > 0) {
                    X = S.slice(0, v);
                    S = S.slice(v);
                    d -= v;
                }
                if (U && O === true && d > 0) {
                    U = S.slice(0, d);
                    F = S.slice(d);
                } else if (O === true) {
                    U = "";
                    F = S;
                } else {
                    U = S;
                }
                if (U && U !== "" && U !== "/" && U !== S) {
                    if (isPathSeparator(U.charCodeAt(U.length - 1))) {
                        U = U.slice(0, -1);
                    }
                }
                if (u.unescape === true) {
                    if (F) F = n.removeBackslashes(F);
                    if (U && N === true) {
                        U = n.removeBackslashes(U);
                    }
                }
                const Q = {
                    prefix: X,
                    input: t,
                    start: v,
                    base: U,
                    glob: F,
                    isBrace: L,
                    isBracket: T,
                    isGlob: O,
                    isExtglob: k,
                    isGlobstar: m,
                    negated: I,
                    negatedExtglob: B
                };
                if (u.tokens === true) {
                    Q.maxDepth = 0;
                    if (!isPathSeparator(P)) {
                        $.push(K);
                    }
                    Q.tokens = $;
                }
                if (u.parts === true || u.tokens === true) {
                    let e;
                    for(let n = 0; n < y.length; n++){
                        const o = e ? e + 1 : v;
                        const s = y[n];
                        const r = t.slice(o, s);
                        if (u.tokens) {
                            if (n === 0 && v !== 0) {
                                $[n].isPrefix = true;
                                $[n].value = X;
                            } else {
                                $[n].value = r;
                            }
                            depth($[n]);
                            Q.maxDepth += $[n].depth;
                        }
                        if (n !== 0 || r !== "") {
                            x.push(r);
                        }
                        e = s;
                    }
                    if (e && e + 1 < t.length) {
                        const n = t.slice(e + 1);
                        x.push(n);
                        if (u.tokens) {
                            $[$.length - 1].value = n;
                            depth($[$.length - 1]);
                            Q.maxDepth += $[$.length - 1].depth;
                        }
                    }
                    Q.slashes = y;
                    Q.parts = x;
                }
                return Q;
            };
            t.exports = scan;
        },
        96: (t, e, u)=>{
            const { REGEX_BACKSLASH: n, REGEX_REMOVE_BACKSLASH: o, REGEX_SPECIAL_CHARS: s, REGEX_SPECIAL_CHARS_GLOBAL: r } = u(154);
            e.isObject = (t)=>t !== null && typeof t === "object" && !Array.isArray(t);
            e.hasRegexChars = (t)=>s.test(t);
            e.isRegexChar = (t)=>t.length === 1 && e.hasRegexChars(t);
            e.escapeRegex = (t)=>t.replace(r, "\\$1");
            e.toPosixSlashes = (t)=>t.replace(n, "/");
            e.removeBackslashes = (t)=>t.replace(o, (t)=>t === "\\" ? "" : t);
            e.escapeLast = (t, u, n)=>{
                const o = t.lastIndexOf(u, n);
                if (o === -1) return t;
                if (t[o - 1] === "\\") return e.escapeLast(t, u, o - 1);
                return `${t.slice(0, o)}\\${t.slice(o)}`;
            };
            e.removePrefix = (t, e = {})=>{
                let u = t;
                if (u.startsWith("./")) {
                    u = u.slice(2);
                    e.prefix = "./";
                }
                return u;
            };
            e.wrapOutput = (t, e = {}, u = {})=>{
                const n = u.contains ? "" : "^";
                const o = u.contains ? "" : "$";
                let s = `${n}(?:${t})${o}`;
                if (e.negated === true) {
                    s = `(?:^(?!${s}).*$)`;
                }
                return s;
            };
            e.basename = (t, { windows: e } = {})=>{
                const u = t.split(e ? /[\\/]/ : "/");
                const n = u[u.length - 1];
                if (n === "") {
                    return u[u.length - 2];
                }
                return n;
            };
        }
    };
    var e = {};
    function __nccwpck_require__(u) {
        var n = e[u];
        if (n !== undefined) {
            return n.exports;
        }
        var o = e[u] = {
            exports: {}
        };
        var s = true;
        try {
            t[u](o, o.exports, __nccwpck_require__);
            s = false;
        } finally{
            if (s) delete e[u];
        }
        return o.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/client/node_modules/next/dist/compiled/picomatch") + "/";
    var u = __nccwpck_require__(170);
    module.exports = u;
})();
}),
"[project]/client/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasLocalMatch: null,
    matchLocalPattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasLocalMatch: function() {
        return hasLocalMatch;
    },
    matchLocalPattern: function() {
        return matchLocalPattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchLocalPattern(pattern, url) {
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasLocalMatch(localPatterns, urlPathAndQuery) {
    if (!localPatterns) {
        // if the user didn't define "localPatterns", we allow all local images
        return true;
    }
    const url = new URL(urlPathAndQuery, 'http://n');
    return localPatterns.some((p)=>matchLocalPattern(p, url));
} //# sourceMappingURL=match-local-pattern.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    hasRemoteMatch: null,
    matchRemotePattern: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    hasRemoteMatch: function() {
        return hasRemoteMatch;
    },
    matchRemotePattern: function() {
        return matchRemotePattern;
    }
});
const _picomatch = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/picomatch/index.js [app-client] (ecmascript)");
function matchRemotePattern(pattern, url) {
    if (pattern.protocol !== undefined) {
        if (pattern.protocol.replace(/:$/, '') !== url.protocol.replace(/:$/, '')) {
            return false;
        }
    }
    if (pattern.port !== undefined) {
        if (pattern.port !== url.port) {
            return false;
        }
    }
    if (pattern.hostname === undefined) {
        throw Object.defineProperty(new Error(`Pattern should define hostname but found\n${JSON.stringify(pattern)}`), "__NEXT_ERROR_CODE", {
            value: "E410",
            enumerable: false,
            configurable: true
        });
    } else {
        if (!(0, _picomatch.makeRe)(pattern.hostname).test(url.hostname)) {
            return false;
        }
    }
    if (pattern.search !== undefined) {
        if (pattern.search !== url.search) {
            return false;
        }
    }
    // Should be the same as writeImagesManifest()
    if (!(0, _picomatch.makeRe)(pattern.pathname ?? '**', {
        dot: true
    }).test(url.pathname)) {
        return false;
    }
    return true;
}
function hasRemoteMatch(domains, remotePatterns, url) {
    return domains.some((domain)=>url.hostname === domain) || remotePatterns.some((p)=>matchRemotePattern(p, url));
} //# sourceMappingURL=match-remote-pattern.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _findclosestquality = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/find-closest-quality.js [app-client] (ecmascript)");
const _deploymentid = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/deployment-id.js [app-client] (ecmascript)");
function defaultLoader({ config, src, width, quality }) {
    if (src.startsWith('/') && src.includes('?') && config.localPatterns?.length === 1 && config.localPatterns[0].pathname === '**' && config.localPatterns[0].search === '') {
        throw Object.defineProperty(new Error(`Image with src "${src}" is using a query string which is not configured in images.localPatterns.` + `\nRead more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const missingValues = [];
        // these should always be provided but make sure they are
        if (!src) missingValues.push('src');
        if (!width) missingValues.push('width');
        if (missingValues.length > 0) {
            throw Object.defineProperty(new Error(`Next Image Optimization requires ${missingValues.join(', ')} to be provided. Make sure you pass them as props to the \`next/image\` component. Received: ${JSON.stringify({
                src,
                width,
                quality
            })}`), "__NEXT_ERROR_CODE", {
                value: "E188",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('//')) {
            throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, protocol-relative URL (//) must be changed to an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                value: "E360",
                enumerable: false,
                configurable: true
            });
        }
        if (src.startsWith('/') && config.localPatterns) {
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasLocalMatch } = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/match-local-pattern.js [app-client] (ecmascript)");
                if (!hasLocalMatch(config.localPatterns, src)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\` does not match \`images.localPatterns\` configured in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
                        value: "E426",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
        if (!src.startsWith('/') && (config.domains || config.remotePatterns)) {
            let parsedSrc;
            try {
                parsedSrc = new URL(src);
            } catch (err) {
                console.error(err);
                throw Object.defineProperty(new Error(`Failed to parse src "${src}" on \`next/image\`, if using relative image it must start with a leading slash "/" or be an absolute URL (http:// or https://)`), "__NEXT_ERROR_CODE", {
                    value: "E63",
                    enumerable: false,
                    configurable: true
                });
            }
            if ("TURBOPACK compile-time truthy", 1) {
                // We use dynamic require because this should only error in development
                const { hasRemoteMatch } = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/match-remote-pattern.js [app-client] (ecmascript)");
                if (!hasRemoteMatch(config.domains, config.remotePatterns, parsedSrc)) {
                    throw Object.defineProperty(new Error(`Invalid src prop (${src}) on \`next/image\`, hostname "${parsedSrc.hostname}" is not configured under images in your \`next.config.js\`\n` + `See more info: https://nextjs.org/docs/messages/next-image-unconfigured-host`), "__NEXT_ERROR_CODE", {
                        value: "E231",
                        enumerable: false,
                        configurable: true
                    });
                }
            }
        }
    }
    const q = (0, _findclosestquality.findClosestQuality)(quality, config);
    let deploymentId = (0, _deploymentid.getDeploymentId)();
    return `${config.path}?url=${encodeURIComponent(src)}&w=${width}&q=${q}${src.startsWith('/') && deploymentId ? `&dpl=${deploymentId}` : ''}`;
}
// We use this to determine if the import is the default loader
// or a custom loader defined by the user in next.config.js
defaultLoader.__next_img_default = true;
const _default = defaultLoader; //# sourceMappingURL=image-loader.js.map
}),
"[project]/client/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-merged-ref.js.map
}),
"[project]/client/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Image", {
    enumerable: true,
    get: function() {
        return Image;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/client/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _interop_require_wildcard = __turbopack_context__.r("[project]/client/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"));
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)"));
const _head = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/head.js [app-client] (ecmascript)"));
const _getimgprops = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imageconfig = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-config.js [app-client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [app-client] (ecmascript)");
const _warnonce = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _routercontextsharedruntime = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
const _usemergedref = __turbopack_context__.r("[project]/client/node_modules/next/dist/client/use-merged-ref.js [app-client] (ecmascript)");
// This is replaced by webpack define plugin
const configEnv = ("TURBOPACK compile-time value", {
    "deviceSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 640),
        ("TURBOPACK compile-time value", 750),
        ("TURBOPACK compile-time value", 828),
        ("TURBOPACK compile-time value", 1080),
        ("TURBOPACK compile-time value", 1200),
        ("TURBOPACK compile-time value", 1920),
        ("TURBOPACK compile-time value", 2048),
        ("TURBOPACK compile-time value", 3840)
    ]),
    "imageSizes": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 32),
        ("TURBOPACK compile-time value", 48),
        ("TURBOPACK compile-time value", 64),
        ("TURBOPACK compile-time value", 96),
        ("TURBOPACK compile-time value", 128),
        ("TURBOPACK compile-time value", 256),
        ("TURBOPACK compile-time value", 384)
    ]),
    "qualities": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", 75)
    ]),
    "path": ("TURBOPACK compile-time value", "/_next/image"),
    "loader": ("TURBOPACK compile-time value", "default"),
    "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
    "unoptimized": ("TURBOPACK compile-time value", false),
    "domains": ("TURBOPACK compile-time value", []),
    "remotePatterns": ("TURBOPACK compile-time value", []),
    "localPatterns": ("TURBOPACK compile-time value", [
        ("TURBOPACK compile-time value", {
            "pathname": ("TURBOPACK compile-time value", "**"),
            "search": ("TURBOPACK compile-time value", "")
        })
    ])
});
if (typeof window === 'undefined') {
    ;
    globalThis.__NEXT_IMAGE_IMPORTED = true;
}
// See https://stackoverflow.com/q/39777833/266535 for why we use this ref
// handler instead of the img's onLoad attribute.
function handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput) {
    const src = img?.src;
    if (!img || img['data-loaded-src'] === src) {
        return;
    }
    img['data-loaded-src'] = src;
    const p = 'decode' in img ? img.decode() : Promise.resolve();
    p.catch(()=>{}).then(()=>{
        if (!img.parentElement || !img.isConnected) {
            // Exit early in case of race condition:
            // - onload() is called
            // - decode() is called but incomplete
            // - unmount is called
            // - decode() completes
            return;
        }
        if (placeholder !== 'empty') {
            setBlurComplete(true);
        }
        if (onLoadRef?.current) {
            // Since we don't have the SyntheticEvent here,
            // we must create one with the same shape.
            // See https://reactjs.org/docs/events.html
            const event = new Event('load');
            Object.defineProperty(event, 'target', {
                writable: false,
                value: img
            });
            let prevented = false;
            let stopped = false;
            onLoadRef.current({
                ...event,
                nativeEvent: event,
                currentTarget: img,
                target: img,
                isDefaultPrevented: ()=>prevented,
                isPropagationStopped: ()=>stopped,
                persist: ()=>{},
                preventDefault: ()=>{
                    prevented = true;
                    event.preventDefault();
                },
                stopPropagation: ()=>{
                    stopped = true;
                    event.stopPropagation();
                }
            });
        }
        if (onLoadingCompleteRef?.current) {
            onLoadingCompleteRef.current(img);
        }
        if ("TURBOPACK compile-time truthy", 1) {
            const origSrc = new URL(src, 'http://n').searchParams.get('url') || src;
            if (img.getAttribute('data-nimg') === 'fill') {
                if (!unoptimized && (!sizesInput || sizesInput === '100vw')) {
                    let widthViewportRatio = img.getBoundingClientRect().width / window.innerWidth;
                    if (widthViewportRatio < 0.6) {
                        if (sizesInput === '100vw') {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" prop and "sizes" prop of "100vw", but image is not rendered at full viewport width. Please adjust "sizes" to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        } else {
                            (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" but is missing "sizes" prop. Please add it to improve page performance. Read more: https://nextjs.org/docs/api-reference/next/image#sizes`);
                        }
                    }
                }
                if (img.parentElement) {
                    const { position } = window.getComputedStyle(img.parentElement);
                    const valid = [
                        'absolute',
                        'fixed',
                        'relative'
                    ];
                    if (!valid.includes(position)) {
                        (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and parent element with invalid "position". Provided "${position}" should be one of ${valid.map(String).join(',')}.`);
                    }
                }
                if (img.height === 0) {
                    (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has "fill" and a height value of 0. This is likely because the parent element of the image has not been styled to have a set height.`);
                }
            }
            const heightModified = img.height.toString() !== img.getAttribute('height');
            const widthModified = img.width.toString() !== img.getAttribute('width');
            if (heightModified && !widthModified || !heightModified && widthModified) {
                (0, _warnonce.warnOnce)(`Image with src "${origSrc}" has either width or height modified, but not the other. If you use CSS to change the size of your image, also include the styles 'width: "auto"' or 'height: "auto"' to maintain the aspect ratio.`);
            }
        }
    });
}
function getDynamicProps(fetchPriority) {
    if (Boolean(_react.use)) {
        // In React 19.0.0 or newer, we must use camelCase
        // prop to avoid "Warning: Invalid DOM property".
        // See https://github.com/facebook/react/pull/25927
        return {
            fetchPriority
        };
    }
    // In React 18.2.0 or older, we must use lowercase prop
    // to avoid "Warning: Invalid DOM property".
    return {
        fetchpriority: fetchPriority
    };
}
const ImageElement = /*#__PURE__*/ (0, _react.forwardRef)(({ src, srcSet, sizes, height, width, decoding, className, style, fetchPriority, placeholder, loading, unoptimized, fill, onLoadRef, onLoadingCompleteRef, setBlurComplete, setShowAltText, sizesInput, onLoad, onError, ...rest }, forwardedRef)=>{
    const ownRef = (0, _react.useCallback)((img)=>{
        if (!img) {
            return;
        }
        if (onError) {
            // If the image has an error before react hydrates, then the error is lost.
            // The workaround is to wait until the image is mounted which is after hydration,
            // then we set the src again to trigger the error handler (if there was an error).
            // eslint-disable-next-line no-self-assign
            img.src = img.src;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            if (!src) {
                console.error(`Image is missing required "src" property:`, img);
            }
            if (img.getAttribute('alt') === null) {
                console.error(`Image is missing required "alt" property. Please add Alternative Text to describe the image for screen readers and search engines.`);
            }
        }
        if (img.complete) {
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        }
    }, [
        src,
        placeholder,
        onLoadRef,
        onLoadingCompleteRef,
        setBlurComplete,
        onError,
        unoptimized,
        sizesInput
    ]);
    const ref = (0, _usemergedref.useMergedRef)(forwardedRef, ownRef);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("img", {
        ...rest,
        ...getDynamicProps(fetchPriority),
        // It's intended to keep `loading` before `src` because React updates
        // props in order which causes Safari/Firefox to not lazy load properly.
        // See https://github.com/facebook/react/issues/25883
        loading: loading,
        width: width,
        height: height,
        decoding: decoding,
        "data-nimg": fill ? 'fill' : '1',
        className: className,
        style: style,
        // It's intended to keep `src` the last attribute because React updates
        // attributes in order. If we keep `src` the first one, Safari will
        // immediately start to fetch `src`, before `sizes` and `srcSet` are even
        // updated by React. That causes multiple unnecessary requests if `srcSet`
        // and `sizes` are defined.
        // This bug cannot be reproduced in Chrome or Firefox.
        sizes: sizes,
        srcSet: srcSet,
        src: src,
        ref: ref,
        onLoad: (event)=>{
            const img = event.currentTarget;
            handleLoading(img, placeholder, onLoadRef, onLoadingCompleteRef, setBlurComplete, unoptimized, sizesInput);
        },
        onError: (event)=>{
            // if the real image fails to load, this will ensure "alt" is visible
            setShowAltText(true);
            if (placeholder !== 'empty') {
                // If the real image fails to load, this will still remove the placeholder.
                setBlurComplete(true);
            }
            if (onError) {
                onError(event);
            }
        }
    });
});
function ImagePreload({ isAppRouter, imgAttributes }) {
    const opts = {
        as: 'image',
        imageSrcSet: imgAttributes.srcSet,
        imageSizes: imgAttributes.sizes,
        crossOrigin: imgAttributes.crossOrigin,
        referrerPolicy: imgAttributes.referrerPolicy,
        ...getDynamicProps(imgAttributes.fetchPriority)
    };
    if (isAppRouter && _reactdom.default.preload) {
        _reactdom.default.preload(imgAttributes.src, opts);
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_head.default, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "preload",
            // Note how we omit the `href` attribute, as it would only be relevant
            // for browsers that do not support `imagesrcset`, and in those cases
            // it would cause the incorrect image to be preloaded.
            //
            // https://html.spec.whatwg.org/multipage/semantics.html#attr-link-imagesrcset
            href: imgAttributes.srcSet ? undefined : imgAttributes.src,
            ...opts
        }, '__nimg-' + imgAttributes.src + imgAttributes.srcSet + imgAttributes.sizes)
    });
}
const Image = /*#__PURE__*/ (0, _react.forwardRef)((props, forwardedRef)=>{
    const pagesRouter = (0, _react.useContext)(_routercontextsharedruntime.RouterContext);
    // We're in the app directory if there is no pages router.
    const isAppRouter = !pagesRouter;
    const configContext = (0, _react.useContext)(_imageconfigcontextsharedruntime.ImageConfigContext);
    const config = (0, _react.useMemo)(()=>{
        const c = configEnv || configContext || _imageconfig.imageConfigDefault;
        const allSizes = [
            ...c.deviceSizes,
            ...c.imageSizes
        ].sort((a, b)=>a - b);
        const deviceSizes = c.deviceSizes.sort((a, b)=>a - b);
        const qualities = c.qualities?.sort((a, b)=>a - b);
        return {
            ...c,
            allSizes,
            deviceSizes,
            qualities,
            // During the SSR, configEnv (__NEXT_IMAGE_OPTS) does not include
            // security sensitive configs like `localPatterns`, which is needed
            // during the server render to ensure it's validated. Therefore use
            // configContext, which holds the config from the server for validation.
            localPatterns: typeof window === 'undefined' ? configContext?.localPatterns : c.localPatterns
        };
    }, [
        configContext
    ]);
    const { onLoad, onLoadingComplete } = props;
    const onLoadRef = (0, _react.useRef)(onLoad);
    (0, _react.useEffect)(()=>{
        onLoadRef.current = onLoad;
    }, [
        onLoad
    ]);
    const onLoadingCompleteRef = (0, _react.useRef)(onLoadingComplete);
    (0, _react.useEffect)(()=>{
        onLoadingCompleteRef.current = onLoadingComplete;
    }, [
        onLoadingComplete
    ]);
    const [blurComplete, setBlurComplete] = (0, _react.useState)(false);
    const [showAltText, setShowAltText] = (0, _react.useState)(false);
    const { props: imgAttributes, meta: imgMeta } = (0, _getimgprops.getImgProps)(props, {
        defaultLoader: _imageloader.default,
        imgConf: config,
        blurComplete,
        showAltText
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(ImageElement, {
                ...imgAttributes,
                unoptimized: imgMeta.unoptimized,
                placeholder: imgMeta.placeholder,
                fill: imgMeta.fill,
                onLoadRef: onLoadRef,
                onLoadingCompleteRef: onLoadingCompleteRef,
                setBlurComplete: setBlurComplete,
                setShowAltText: setShowAltText,
                sizesInput: props.sizes,
                ref: forwardedRef
            }),
            imgMeta.preload ? /*#__PURE__*/ (0, _jsxruntime.jsx)(ImagePreload, {
                isAppRouter: isAppRouter,
                imgAttributes: imgAttributes
            }) : null
        ]
    });
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=image-component.js.map
}),
"[project]/client/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    getImageProps: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    getImageProps: function() {
        return getImageProps;
    }
});
const _interop_require_default = __turbopack_context__.r("[project]/client/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _getimgprops = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/get-img-props.js [app-client] (ecmascript)");
const _imagecomponent = __turbopack_context__.r("[project]/client/node_modules/next/dist/client/image-component.js [app-client] (ecmascript)");
const _imageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-loader.js [app-client] (ecmascript)"));
function getImageProps(imgProps) {
    const { props } = (0, _getimgprops.getImgProps)(imgProps, {
        defaultLoader: _imageloader.default,
        // This is replaced by webpack define plugin
        imgConf: ("TURBOPACK compile-time value", {
            "deviceSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 640),
                ("TURBOPACK compile-time value", 750),
                ("TURBOPACK compile-time value", 828),
                ("TURBOPACK compile-time value", 1080),
                ("TURBOPACK compile-time value", 1200),
                ("TURBOPACK compile-time value", 1920),
                ("TURBOPACK compile-time value", 2048),
                ("TURBOPACK compile-time value", 3840)
            ]),
            "imageSizes": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 32),
                ("TURBOPACK compile-time value", 48),
                ("TURBOPACK compile-time value", 64),
                ("TURBOPACK compile-time value", 96),
                ("TURBOPACK compile-time value", 128),
                ("TURBOPACK compile-time value", 256),
                ("TURBOPACK compile-time value", 384)
            ]),
            "qualities": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", 75)
            ]),
            "path": ("TURBOPACK compile-time value", "/_next/image"),
            "loader": ("TURBOPACK compile-time value", "default"),
            "dangerouslyAllowSVG": ("TURBOPACK compile-time value", false),
            "unoptimized": ("TURBOPACK compile-time value", false),
            "domains": ("TURBOPACK compile-time value", []),
            "remotePatterns": ("TURBOPACK compile-time value", []),
            "localPatterns": ("TURBOPACK compile-time value", [
                ("TURBOPACK compile-time value", {
                    "pathname": ("TURBOPACK compile-time value", "**"),
                    "search": ("TURBOPACK compile-time value", "")
                })
            ])
        })
    });
    // Normally we don't care about undefined props because we pass to JSX,
    // but this exported function could be used by the end user for anything
    // so we delete undefined props to clean it up a little.
    for (const [key, value] of Object.entries(props)){
        if (value === undefined) {
            delete props[key];
        }
    }
    return {
        props
    };
}
const _default = _imagecomponent.Image; //# sourceMappingURL=image-external.js.map
}),
"[project]/client/node_modules/next/image.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/client/node_modules/next/dist/shared/lib/image-external.js [app-client] (ecmascript)");
}),
"[project]/client/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    function useSyncExternalStore$2(subscribe, getSnapshot) {
        didWarnOld18Alpha || void 0 === React.startTransition || (didWarnOld18Alpha = !0, console.error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
        var value = getSnapshot();
        if (!didWarnUncachedGetSnapshot) {
            var cachedValue = getSnapshot();
            objectIs(value, cachedValue) || (console.error("The result of getSnapshot should be cached to avoid an infinite loop"), didWarnUncachedGetSnapshot = !0);
        }
        cachedValue = useState({
            inst: {
                value: value,
                getSnapshot: getSnapshot
            }
        });
        var inst = cachedValue[0].inst, forceUpdate = cachedValue[1];
        useLayoutEffect({
            "useSyncExternalStore$2.useLayoutEffect": function() {
                inst.value = value;
                inst.getSnapshot = getSnapshot;
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
            }
        }["useSyncExternalStore$2.useLayoutEffect"], [
            subscribe,
            value,
            getSnapshot
        ]);
        useEffect({
            "useSyncExternalStore$2.useEffect": function() {
                checkIfSnapshotChanged(inst) && forceUpdate({
                    inst: inst
                });
                return subscribe({
                    "useSyncExternalStore$2.useEffect": function() {
                        checkIfSnapshotChanged(inst) && forceUpdate({
                            inst: inst
                        });
                    }
                }["useSyncExternalStore$2.useEffect"]);
            }
        }["useSyncExternalStore$2.useEffect"], [
            subscribe
        ]);
        useDebugValue(value);
        return value;
    }
    function checkIfSnapshotChanged(inst) {
        var latestGetSnapshot = inst.getSnapshot;
        inst = inst.value;
        try {
            var nextValue = latestGetSnapshot();
            return !objectIs(inst, nextValue);
        } catch (error) {
            return !0;
        }
    }
    function useSyncExternalStore$1(subscribe, getSnapshot) {
        return getSnapshot();
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue, didWarnOld18Alpha = !1, didWarnUncachedGetSnapshot = !1, shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
    exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/client/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/client/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js [app-client] (ecmascript)");
}
}),
"[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandManager",
    ()=>CommandManager,
    "Editor",
    ()=>Editor,
    "Extendable",
    ()=>Extendable,
    "Extension",
    ()=>Extension,
    "Fragment",
    ()=>Fragment6,
    "InputRule",
    ()=>InputRule,
    "MappablePosition",
    ()=>MappablePosition,
    "Mark",
    ()=>Mark,
    "MarkView",
    ()=>MarkView,
    "Node",
    ()=>Node3,
    "NodePos",
    ()=>NodePos,
    "NodeView",
    ()=>NodeView,
    "PasteRule",
    ()=>PasteRule,
    "ResizableNodeView",
    ()=>ResizableNodeView,
    "ResizableNodeview",
    ()=>ResizableNodeview,
    "Tracker",
    ()=>Tracker,
    "callOrReturn",
    ()=>callOrReturn,
    "canInsertNode",
    ()=>canInsertNode,
    "combineTransactionSteps",
    ()=>combineTransactionSteps,
    "commands",
    ()=>commands_exports,
    "createAtomBlockMarkdownSpec",
    ()=>createAtomBlockMarkdownSpec,
    "createBlockMarkdownSpec",
    ()=>createBlockMarkdownSpec,
    "createChainableState",
    ()=>createChainableState,
    "createDocument",
    ()=>createDocument,
    "createElement",
    ()=>h,
    "createInlineMarkdownSpec",
    ()=>createInlineMarkdownSpec,
    "createMappablePosition",
    ()=>createMappablePosition,
    "createNodeFromContent",
    ()=>createNodeFromContent,
    "createStyleTag",
    ()=>createStyleTag,
    "defaultBlockAt",
    ()=>defaultBlockAt,
    "deleteProps",
    ()=>deleteProps,
    "elementFromString",
    ()=>elementFromString,
    "escapeForRegEx",
    ()=>escapeForRegEx,
    "extensions",
    ()=>extensions_exports,
    "findChildren",
    ()=>findChildren,
    "findChildrenInRange",
    ()=>findChildrenInRange,
    "findDuplicates",
    ()=>findDuplicates,
    "findParentNode",
    ()=>findParentNode,
    "findParentNodeClosestToPos",
    ()=>findParentNodeClosestToPos,
    "flattenExtensions",
    ()=>flattenExtensions,
    "fromString",
    ()=>fromString,
    "generateHTML",
    ()=>generateHTML,
    "generateJSON",
    ()=>generateJSON,
    "generateText",
    ()=>generateText,
    "getAttributes",
    ()=>getAttributes,
    "getAttributesFromExtensions",
    ()=>getAttributesFromExtensions,
    "getChangedRanges",
    ()=>getChangedRanges,
    "getDebugJSON",
    ()=>getDebugJSON,
    "getExtensionField",
    ()=>getExtensionField,
    "getHTMLFromFragment",
    ()=>getHTMLFromFragment,
    "getMarkAttributes",
    ()=>getMarkAttributes,
    "getMarkRange",
    ()=>getMarkRange,
    "getMarkType",
    ()=>getMarkType,
    "getMarksBetween",
    ()=>getMarksBetween,
    "getNodeAtPosition",
    ()=>getNodeAtPosition,
    "getNodeAttributes",
    ()=>getNodeAttributes,
    "getNodeType",
    ()=>getNodeType,
    "getRenderedAttributes",
    ()=>getRenderedAttributes,
    "getSchema",
    ()=>getSchema,
    "getSchemaByResolvedExtensions",
    ()=>getSchemaByResolvedExtensions,
    "getSchemaTypeByName",
    ()=>getSchemaTypeByName,
    "getSchemaTypeNameByName",
    ()=>getSchemaTypeNameByName,
    "getSplittedAttributes",
    ()=>getSplittedAttributes,
    "getText",
    ()=>getText,
    "getTextBetween",
    ()=>getTextBetween,
    "getTextContentFromNodes",
    ()=>getTextContentFromNodes,
    "getTextSerializersFromSchema",
    ()=>getTextSerializersFromSchema,
    "getUpdatedPosition",
    ()=>getUpdatedPosition,
    "h",
    ()=>h,
    "injectExtensionAttributesToParseRule",
    ()=>injectExtensionAttributesToParseRule,
    "inputRulesPlugin",
    ()=>inputRulesPlugin,
    "isActive",
    ()=>isActive,
    "isAndroid",
    ()=>isAndroid,
    "isAtEndOfNode",
    ()=>isAtEndOfNode,
    "isAtStartOfNode",
    ()=>isAtStartOfNode,
    "isEmptyObject",
    ()=>isEmptyObject,
    "isExtensionRulesEnabled",
    ()=>isExtensionRulesEnabled,
    "isFirefox",
    ()=>isFirefox,
    "isFunction",
    ()=>isFunction,
    "isList",
    ()=>isList,
    "isMacOS",
    ()=>isMacOS,
    "isMarkActive",
    ()=>isMarkActive,
    "isNodeActive",
    ()=>isNodeActive,
    "isNodeEmpty",
    ()=>isNodeEmpty,
    "isNodeSelection",
    ()=>isNodeSelection,
    "isNumber",
    ()=>isNumber,
    "isPlainObject",
    ()=>isPlainObject,
    "isRegExp",
    ()=>isRegExp,
    "isSafari",
    ()=>isSafari,
    "isString",
    ()=>isString,
    "isTextSelection",
    ()=>isTextSelection,
    "isiOS",
    ()=>isiOS,
    "markInputRule",
    ()=>markInputRule,
    "markPasteRule",
    ()=>markPasteRule,
    "markdown",
    ()=>markdown_exports,
    "mergeAttributes",
    ()=>mergeAttributes,
    "mergeDeep",
    ()=>mergeDeep,
    "minMax",
    ()=>minMax,
    "nodeInputRule",
    ()=>nodeInputRule,
    "nodePasteRule",
    ()=>nodePasteRule,
    "objectIncludes",
    ()=>objectIncludes,
    "parseAttributes",
    ()=>parseAttributes,
    "parseIndentedBlocks",
    ()=>parseIndentedBlocks,
    "pasteRulesPlugin",
    ()=>pasteRulesPlugin,
    "posToDOMRect",
    ()=>posToDOMRect,
    "removeDuplicates",
    ()=>removeDuplicates,
    "renderNestedMarkdownContent",
    ()=>renderNestedMarkdownContent,
    "resolveExtensions",
    ()=>resolveExtensions,
    "resolveFocusPosition",
    ()=>resolveFocusPosition,
    "rewriteUnknownContent",
    ()=>rewriteUnknownContent,
    "selectionToInsertionEnd",
    ()=>selectionToInsertionEnd,
    "serializeAttributes",
    ()=>serializeAttributes,
    "sortExtensions",
    ()=>sortExtensions,
    "splitExtensions",
    ()=>splitExtensions,
    "textInputRule",
    ()=>textInputRule,
    "textPasteRule",
    ()=>textPasteRule,
    "textblockTypeInputRule",
    ()=>textblockTypeInputRule,
    "updateMarkViewAttributes",
    ()=>updateMarkViewAttributes,
    "wrappingInputRule",
    ()=>wrappingInputRule
]);
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/transform'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/commands'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/state'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/model'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/schema-list'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/view'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/keymap'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
// src/helpers/createChainableState.ts
function createChainableState(config) {
    const { state, transaction } = config;
    let { selection } = transaction;
    let { doc } = transaction;
    let { storedMarks } = transaction;
    return {
        ...state,
        apply: state.apply.bind(state),
        applyTransaction: state.applyTransaction.bind(state),
        plugins: state.plugins,
        schema: state.schema,
        reconfigure: state.reconfigure.bind(state),
        toJSON: state.toJSON.bind(state),
        get storedMarks () {
            return storedMarks;
        },
        get selection () {
            return selection;
        },
        get doc () {
            return doc;
        },
        get tr () {
            selection = transaction.selection;
            doc = transaction.doc;
            storedMarks = transaction.storedMarks;
            return transaction;
        }
    };
}
// src/CommandManager.ts
var CommandManager = class {
    constructor(props){
        this.editor = props.editor;
        this.rawCommands = this.editor.extensionManager.commands;
        this.customState = props.state;
    }
    get hasCustomState() {
        return !!this.customState;
    }
    get state() {
        return this.customState || this.editor.state;
    }
    get commands() {
        const { rawCommands, editor, state } = this;
        const { view } = editor;
        const { tr } = state;
        const props = this.buildProps(tr);
        return Object.fromEntries(Object.entries(rawCommands).map(([name, command2])=>{
            const method = (...args)=>{
                const callback = command2(...args)(props);
                if (!tr.getMeta("preventDispatch") && !this.hasCustomState) {
                    view.dispatch(tr);
                }
                return callback;
            };
            return [
                name,
                method
            ];
        }));
    }
    get chain() {
        return ()=>this.createChain();
    }
    get can() {
        return ()=>this.createCan();
    }
    createChain(startTr, shouldDispatch = true) {
        const { rawCommands, editor, state } = this;
        const { view } = editor;
        const callbacks = [];
        const hasStartTransaction = !!startTr;
        const tr = startTr || state.tr;
        const run3 = ()=>{
            if (!hasStartTransaction && shouldDispatch && !tr.getMeta("preventDispatch") && !this.hasCustomState) {
                view.dispatch(tr);
            }
            return callbacks.every((callback)=>callback === true);
        };
        const chain = {
            ...Object.fromEntries(Object.entries(rawCommands).map(([name, command2])=>{
                const chainedCommand = (...args)=>{
                    const props = this.buildProps(tr, shouldDispatch);
                    const callback = command2(...args)(props);
                    callbacks.push(callback);
                    return chain;
                };
                return [
                    name,
                    chainedCommand
                ];
            })),
            run: run3
        };
        return chain;
    }
    createCan(startTr) {
        const { rawCommands, state } = this;
        const dispatch = false;
        const tr = startTr || state.tr;
        const props = this.buildProps(tr, dispatch);
        const formattedCommands = Object.fromEntries(Object.entries(rawCommands).map(([name, command2])=>{
            return [
                name,
                (...args)=>command2(...args)({
                        ...props,
                        dispatch: void 0
                    })
            ];
        }));
        return {
            ...formattedCommands,
            chain: ()=>this.createChain(tr, dispatch)
        };
    }
    buildProps(tr, shouldDispatch = true) {
        const { rawCommands, editor, state } = this;
        const { view } = editor;
        const props = {
            tr,
            editor,
            view,
            state: createChainableState({
                state,
                transaction: tr
            }),
            dispatch: shouldDispatch ? ()=>void 0 : void 0,
            chain: ()=>this.createChain(tr, shouldDispatch),
            can: ()=>this.createCan(tr),
            get commands () {
                return Object.fromEntries(Object.entries(rawCommands).map(([name, command2])=>{
                    return [
                        name,
                        (...args)=>command2(...args)(props)
                    ];
                }));
            }
        };
        return props;
    }
};
// src/commands/index.ts
var commands_exports = {};
__export(commands_exports, {
    blur: ()=>blur,
    clearContent: ()=>clearContent,
    clearNodes: ()=>clearNodes,
    command: ()=>command,
    createParagraphNear: ()=>createParagraphNear,
    cut: ()=>cut,
    deleteCurrentNode: ()=>deleteCurrentNode,
    deleteNode: ()=>deleteNode,
    deleteRange: ()=>deleteRange,
    deleteSelection: ()=>deleteSelection,
    enter: ()=>enter,
    exitCode: ()=>exitCode,
    extendMarkRange: ()=>extendMarkRange,
    first: ()=>first,
    focus: ()=>focus,
    forEach: ()=>forEach,
    insertContent: ()=>insertContent,
    insertContentAt: ()=>insertContentAt,
    joinBackward: ()=>joinBackward,
    joinDown: ()=>joinDown,
    joinForward: ()=>joinForward,
    joinItemBackward: ()=>joinItemBackward,
    joinItemForward: ()=>joinItemForward,
    joinTextblockBackward: ()=>joinTextblockBackward,
    joinTextblockForward: ()=>joinTextblockForward,
    joinUp: ()=>joinUp,
    keyboardShortcut: ()=>keyboardShortcut,
    lift: ()=>lift,
    liftEmptyBlock: ()=>liftEmptyBlock,
    liftListItem: ()=>liftListItem,
    newlineInCode: ()=>newlineInCode,
    resetAttributes: ()=>resetAttributes,
    scrollIntoView: ()=>scrollIntoView,
    selectAll: ()=>selectAll,
    selectNodeBackward: ()=>selectNodeBackward,
    selectNodeForward: ()=>selectNodeForward,
    selectParentNode: ()=>selectParentNode,
    selectTextblockEnd: ()=>selectTextblockEnd,
    selectTextblockStart: ()=>selectTextblockStart,
    setContent: ()=>setContent,
    setMark: ()=>setMark,
    setMeta: ()=>setMeta,
    setNode: ()=>setNode,
    setNodeSelection: ()=>setNodeSelection,
    setTextDirection: ()=>setTextDirection,
    setTextSelection: ()=>setTextSelection,
    sinkListItem: ()=>sinkListItem,
    splitBlock: ()=>splitBlock,
    splitListItem: ()=>splitListItem,
    toggleList: ()=>toggleList,
    toggleMark: ()=>toggleMark,
    toggleNode: ()=>toggleNode,
    toggleWrap: ()=>toggleWrap,
    undoInputRule: ()=>undoInputRule,
    unsetAllMarks: ()=>unsetAllMarks,
    unsetMark: ()=>unsetMark,
    unsetTextDirection: ()=>unsetTextDirection,
    updateAttributes: ()=>updateAttributes,
    wrapIn: ()=>wrapIn,
    wrapInList: ()=>wrapInList
});
// src/commands/blur.ts
var blur = ()=>({ editor, view })=>{
        requestAnimationFrame(()=>{
            var _a;
            if (!editor.isDestroyed) {
                ;
                view.dom.blur();
                (_a = window == null ? void 0 : window.getSelection()) == null ? void 0 : _a.removeAllRanges();
            }
        });
        return true;
    };
// src/commands/clearContent.ts
var clearContent = (emitUpdate = true)=>({ commands })=>{
        return commands.setContent("", {
            emitUpdate
        });
    };
;
var clearNodes = ()=>({ state, tr, dispatch })=>{
        const { selection } = tr;
        const { ranges } = selection;
        if (!dispatch) {
            return true;
        }
        ranges.forEach(({ $from, $to })=>{
            state.doc.nodesBetween($from.pos, $to.pos, (node, pos)=>{
                if (node.type.isText) {
                    return;
                }
                const { doc, mapping } = tr;
                const $mappedFrom = doc.resolve(mapping.map(pos));
                const $mappedTo = doc.resolve(mapping.map(pos + node.nodeSize));
                const nodeRange = $mappedFrom.blockRange($mappedTo);
                if (!nodeRange) {
                    return;
                }
                const targetLiftDepth = liftTarget(nodeRange);
                if (node.type.isTextblock) {
                    const { defaultType } = $mappedFrom.parent.contentMatchAt($mappedFrom.index());
                    tr.setNodeMarkup(nodeRange.start, defaultType);
                }
                if (targetLiftDepth || targetLiftDepth === 0) {
                    tr.lift(nodeRange, targetLiftDepth);
                }
            });
        });
        return true;
    };
// src/commands/command.ts
var command = (fn)=>(props)=>{
        return fn(props);
    };
;
var createParagraphNear = ()=>({ state, dispatch })=>{
        return originalCreateParagraphNear(state, dispatch);
    };
;
var cut = (originRange, targetPos)=>({ editor, tr })=>{
        const { state } = editor;
        const contentSlice = state.doc.slice(originRange.from, originRange.to);
        tr.deleteRange(originRange.from, originRange.to);
        const newPos = tr.mapping.map(targetPos);
        tr.insert(newPos, contentSlice.content);
        tr.setSelection(new TextSelection(tr.doc.resolve(Math.max(newPos - 1, 0))));
        return true;
    };
// src/commands/deleteCurrentNode.ts
var deleteCurrentNode = ()=>({ tr, dispatch })=>{
        const { selection } = tr;
        const currentNode = selection.$anchor.node();
        if (currentNode.content.size > 0) {
            return false;
        }
        const $pos = tr.selection.$anchor;
        for(let depth = $pos.depth; depth > 0; depth -= 1){
            const node = $pos.node(depth);
            if (node.type === currentNode.type) {
                if (dispatch) {
                    const from = $pos.before(depth);
                    const to = $pos.after(depth);
                    tr.delete(from, to).scrollIntoView();
                }
                return true;
            }
        }
        return false;
    };
// src/helpers/getNodeType.ts
function getNodeType(nameOrType, schema) {
    if (typeof nameOrType === "string") {
        if (!schema.nodes[nameOrType]) {
            throw Error(`There is no node type named '${nameOrType}'. Maybe you forgot to add the extension?`);
        }
        return schema.nodes[nameOrType];
    }
    return nameOrType;
}
// src/commands/deleteNode.ts
var deleteNode = (typeOrName)=>({ tr, state, dispatch })=>{
        const type = getNodeType(typeOrName, state.schema);
        const $pos = tr.selection.$anchor;
        for(let depth = $pos.depth; depth > 0; depth -= 1){
            const node = $pos.node(depth);
            if (node.type === type) {
                if (dispatch) {
                    const from = $pos.before(depth);
                    const to = $pos.after(depth);
                    tr.delete(from, to).scrollIntoView();
                }
                return true;
            }
        }
        return false;
    };
// src/commands/deleteRange.ts
var deleteRange = (range)=>({ tr, dispatch })=>{
        const { from, to } = range;
        if (dispatch) {
            tr.delete(from, to);
        }
        return true;
    };
;
var deleteSelection = ()=>({ state, dispatch })=>{
        return originalDeleteSelection(state, dispatch);
    };
// src/commands/enter.ts
var enter = ()=>({ commands })=>{
        return commands.keyboardShortcut("Enter");
    };
;
var exitCode = ()=>({ state, dispatch })=>{
        return originalExitCode(state, dispatch);
    };
;
// src/utilities/isRegExp.ts
function isRegExp(value) {
    return Object.prototype.toString.call(value) === "[object RegExp]";
}
// src/utilities/objectIncludes.ts
function objectIncludes(object1, object2, options = {
    strict: true
}) {
    const keys = Object.keys(object2);
    if (!keys.length) {
        return true;
    }
    return keys.every((key)=>{
        if (options.strict) {
            return object2[key] === object1[key];
        }
        if (isRegExp(object2[key])) {
            return object2[key].test(object1[key]);
        }
        return object2[key] === object1[key];
    });
}
// src/helpers/getMarkRange.ts
function findMarkInSet(marks, type, attributes = {}) {
    return marks.find((item)=>{
        return item.type === type && objectIncludes(// Only check equality for the attributes that are provided
        Object.fromEntries(Object.keys(attributes).map((k)=>[
                k,
                item.attrs[k]
            ])), attributes);
    });
}
function isMarkInSet(marks, type, attributes = {}) {
    return !!findMarkInSet(marks, type, attributes);
}
function getMarkRange($pos, type, attributes) {
    var _a;
    if (!$pos || !type) {
        return;
    }
    let start = $pos.parent.childAfter($pos.parentOffset);
    if (!start.node || !start.node.marks.some((mark2)=>mark2.type === type)) {
        start = $pos.parent.childBefore($pos.parentOffset);
    }
    if (!start.node || !start.node.marks.some((mark2)=>mark2.type === type)) {
        return;
    }
    attributes = attributes || ((_a = start.node.marks[0]) == null ? void 0 : _a.attrs);
    const mark = findMarkInSet([
        ...start.node.marks
    ], type, attributes);
    if (!mark) {
        return;
    }
    let startIndex = start.index;
    let startPos = $pos.start() + start.offset;
    let endIndex = startIndex + 1;
    let endPos = startPos + start.node.nodeSize;
    while(startIndex > 0 && isMarkInSet([
        ...$pos.parent.child(startIndex - 1).marks
    ], type, attributes)){
        startIndex -= 1;
        startPos -= $pos.parent.child(startIndex).nodeSize;
    }
    while(endIndex < $pos.parent.childCount && isMarkInSet([
        ...$pos.parent.child(endIndex).marks
    ], type, attributes)){
        endPos += $pos.parent.child(endIndex).nodeSize;
        endIndex += 1;
    }
    return {
        from: startPos,
        to: endPos
    };
}
// src/helpers/getMarkType.ts
function getMarkType(nameOrType, schema) {
    if (typeof nameOrType === "string") {
        if (!schema.marks[nameOrType]) {
            throw Error(`There is no mark type named '${nameOrType}'. Maybe you forgot to add the extension?`);
        }
        return schema.marks[nameOrType];
    }
    return nameOrType;
}
// src/commands/extendMarkRange.ts
var extendMarkRange = (typeOrName, attributes = {})=>({ tr, state, dispatch })=>{
        const type = getMarkType(typeOrName, state.schema);
        const { doc, selection } = tr;
        const { $from, from, to } = selection;
        if (dispatch) {
            const range = getMarkRange($from, type, attributes);
            if (range && range.from <= from && range.to >= to) {
                const newSelection = TextSelection2.create(doc, range.from, range.to);
                tr.setSelection(newSelection);
            }
        }
        return true;
    };
// src/commands/first.ts
var first = (commands)=>(props)=>{
        const items = typeof commands === "function" ? commands(props) : commands;
        for(let i = 0; i < items.length; i += 1){
            if (items[i](props)) {
                return true;
            }
        }
        return false;
    };
;
function isTextSelection(value) {
    return value instanceof TextSelection3;
}
;
// src/utilities/minMax.ts
function minMax(value = 0, min = 0, max = 0) {
    return Math.min(Math.max(value, min), max);
}
// src/helpers/resolveFocusPosition.ts
function resolveFocusPosition(doc, position = null) {
    if (!position) {
        return null;
    }
    const selectionAtStart = Selection.atStart(doc);
    const selectionAtEnd = Selection.atEnd(doc);
    if (position === "start" || position === true) {
        return selectionAtStart;
    }
    if (position === "end") {
        return selectionAtEnd;
    }
    const minPos = selectionAtStart.from;
    const maxPos = selectionAtEnd.to;
    if (position === "all") {
        return TextSelection4.create(doc, minMax(0, minPos, maxPos), minMax(doc.content.size, minPos, maxPos));
    }
    return TextSelection4.create(doc, minMax(position, minPos, maxPos), minMax(position, minPos, maxPos));
}
// src/utilities/isAndroid.ts
function isAndroid() {
    return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
// src/utilities/isiOS.ts
function isiOS() {
    return [
        "iPad Simulator",
        "iPhone Simulator",
        "iPod Simulator",
        "iPad",
        "iPhone",
        "iPod"
    ].includes(navigator.platform) || // iPad on iOS 13 detection
    navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
// src/utilities/isSafari.ts
function isSafari() {
    return typeof navigator !== "undefined" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : false;
}
// src/commands/focus.ts
var focus = (position = null, options = {})=>({ editor, view, tr, dispatch })=>{
        options = {
            scrollIntoView: true,
            ...options
        };
        const delayedFocus = ()=>{
            if (isiOS() || isAndroid()) {
                ;
                view.dom.focus();
            }
            if (isSafari() && !isiOS() && !isAndroid()) {
                ;
                view.dom.focus({
                    preventScroll: true
                });
            }
            requestAnimationFrame(()=>{
                if (!editor.isDestroyed) {
                    view.focus();
                    if (options == null ? void 0 : options.scrollIntoView) {
                        editor.commands.scrollIntoView();
                    }
                }
            });
        };
        try {
            if (view.hasFocus() && position === null || position === false) {
                return true;
            }
        } catch  {
            return false;
        }
        if (dispatch && position === null && !isTextSelection(editor.state.selection)) {
            delayedFocus();
            return true;
        }
        const selection = resolveFocusPosition(tr.doc, position) || editor.state.selection;
        const isSameSelection = editor.state.selection.eq(selection);
        if (dispatch) {
            if (!isSameSelection) {
                tr.setSelection(selection);
            }
            if (isSameSelection && tr.storedMarks) {
                tr.setStoredMarks(tr.storedMarks);
            }
            delayedFocus();
        }
        return true;
    };
// src/commands/forEach.ts
var forEach = (items, fn)=>(props)=>{
        return items.every((item, index)=>fn(item, {
                ...props,
                index
            }));
    };
// src/commands/insertContent.ts
var insertContent = (value, options)=>({ tr, commands })=>{
        return commands.insertContentAt({
            from: tr.selection.from,
            to: tr.selection.to
        }, value, options);
    };
;
;
// src/utilities/elementFromString.ts
var removeWhitespaces = (node)=>{
    const children = node.childNodes;
    for(let i = children.length - 1; i >= 0; i -= 1){
        const child = children[i];
        if (child.nodeType === 3 && child.nodeValue && /^(\n\s\s|\n)$/.test(child.nodeValue)) {
            node.removeChild(child);
        } else if (child.nodeType === 1) {
            removeWhitespaces(child);
        }
    }
    return node;
};
function elementFromString(value) {
    if (typeof window === "undefined") {
        throw new Error("[tiptap error]: there is no window object available, so this function cannot be used");
    }
    const wrappedValue = `<body>${value}</body>`;
    const html = new window.DOMParser().parseFromString(wrappedValue, "text/html").body;
    return removeWhitespaces(html);
}
// src/helpers/createNodeFromContent.ts
function createNodeFromContent(content, schema, options) {
    if (content instanceof ProseMirrorNode || content instanceof Fragment) {
        return content;
    }
    options = {
        slice: true,
        parseOptions: {},
        ...options
    };
    const isJSONContent = typeof content === "object" && content !== null;
    const isTextContent = typeof content === "string";
    if (isJSONContent) {
        try {
            const isArrayContent = Array.isArray(content) && content.length > 0;
            if (isArrayContent) {
                return Fragment.fromArray(content.map((item)=>schema.nodeFromJSON(item)));
            }
            const node = schema.nodeFromJSON(content);
            if (options.errorOnInvalidContent) {
                node.check();
            }
            return node;
        } catch (error) {
            if (options.errorOnInvalidContent) {
                throw new Error("[tiptap error]: Invalid JSON content", {
                    cause: error
                });
            }
            console.warn("[tiptap warn]: Invalid content.", "Passed value:", content, "Error:", error);
            return createNodeFromContent("", schema, options);
        }
    }
    if (isTextContent) {
        if (options.errorOnInvalidContent) {
            let hasInvalidContent = false;
            let invalidContent = "";
            const contentCheckSchema = new Schema({
                topNode: schema.spec.topNode,
                marks: schema.spec.marks,
                // Prosemirror's schemas are executed such that: the last to execute, matches last
                // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
                nodes: schema.spec.nodes.append({
                    __tiptap__private__unknown__catch__all__node: {
                        content: "inline*",
                        group: "block",
                        parseDOM: [
                            {
                                tag: "*",
                                getAttrs: (e)=>{
                                    hasInvalidContent = true;
                                    invalidContent = typeof e === "string" ? e : e.outerHTML;
                                    return null;
                                }
                            }
                        ]
                    }
                })
            });
            if (options.slice) {
                DOMParser.fromSchema(contentCheckSchema).parseSlice(elementFromString(content), options.parseOptions);
            } else {
                DOMParser.fromSchema(contentCheckSchema).parse(elementFromString(content), options.parseOptions);
            }
            if (options.errorOnInvalidContent && hasInvalidContent) {
                throw new Error("[tiptap error]: Invalid HTML content", {
                    cause: new Error(`Invalid element found: ${invalidContent}`)
                });
            }
        }
        const parser = DOMParser.fromSchema(schema);
        if (options.slice) {
            return parser.parseSlice(elementFromString(content), options.parseOptions).content;
        }
        return parser.parse(elementFromString(content), options.parseOptions);
    }
    return createNodeFromContent("", schema, options);
}
;
;
function selectionToInsertionEnd(tr, startLen, bias) {
    const last = tr.steps.length - 1;
    if (last < startLen) {
        return;
    }
    const step = tr.steps[last];
    if (!(step instanceof ReplaceStep || step instanceof ReplaceAroundStep)) {
        return;
    }
    const map = tr.mapping.maps[last];
    let end = 0;
    map.forEach((_from, _to, _newFrom, newTo)=>{
        if (end === 0) {
            end = newTo;
        }
    });
    tr.setSelection(Selection2.near(tr.doc.resolve(end), bias));
}
// src/commands/insertContentAt.ts
var isFragment = (nodeOrFragment)=>{
    return !("type" in nodeOrFragment);
};
var insertContentAt = (position, value, options)=>({ tr, dispatch, editor })=>{
        var _a;
        if (dispatch) {
            options = {
                parseOptions: editor.options.parseOptions,
                updateSelection: true,
                applyInputRules: false,
                applyPasteRules: false,
                ...options
            };
            let content;
            const emitContentError = (error)=>{
                editor.emit("contentError", {
                    editor,
                    error,
                    disableCollaboration: ()=>{
                        if ("collaboration" in editor.storage && typeof editor.storage.collaboration === "object" && editor.storage.collaboration) {
                            ;
                            editor.storage.collaboration.isDisabled = true;
                        }
                    }
                });
            };
            const parseOptions = {
                preserveWhitespace: "full",
                ...options.parseOptions
            };
            if (!options.errorOnInvalidContent && !editor.options.enableContentCheck && editor.options.emitContentError) {
                try {
                    createNodeFromContent(value, editor.schema, {
                        parseOptions,
                        errorOnInvalidContent: true
                    });
                } catch (e) {
                    emitContentError(e);
                }
            }
            try {
                content = createNodeFromContent(value, editor.schema, {
                    parseOptions,
                    errorOnInvalidContent: (_a = options.errorOnInvalidContent) != null ? _a : editor.options.enableContentCheck
                });
            } catch (e) {
                emitContentError(e);
                return false;
            }
            let { from, to } = typeof position === "number" ? {
                from: position,
                to: position
            } : {
                from: position.from,
                to: position.to
            };
            let isOnlyTextContent = true;
            let isOnlyBlockContent = true;
            const nodes = isFragment(content) ? content : [
                content
            ];
            nodes.forEach((node)=>{
                node.check();
                isOnlyTextContent = isOnlyTextContent ? node.isText && node.marks.length === 0 : false;
                isOnlyBlockContent = isOnlyBlockContent ? node.isBlock : false;
            });
            if (from === to && isOnlyBlockContent) {
                const { parent } = tr.doc.resolve(from);
                const isEmptyTextBlock = parent.isTextblock && !parent.type.spec.code && !parent.childCount;
                if (isEmptyTextBlock) {
                    from -= 1;
                    to += 1;
                }
            }
            let newContent;
            if (isOnlyTextContent) {
                if (Array.isArray(value)) {
                    newContent = value.map((v)=>v.text || "").join("");
                } else if (value instanceof Fragment2) {
                    let text = "";
                    value.forEach((node)=>{
                        if (node.text) {
                            text += node.text;
                        }
                    });
                    newContent = text;
                } else if (typeof value === "object" && !!value && !!value.text) {
                    newContent = value.text;
                } else {
                    newContent = value;
                }
                tr.insertText(newContent, from, to);
            } else {
                newContent = content;
                const $from = tr.doc.resolve(from);
                const $fromNode = $from.node();
                const fromSelectionAtStart = $from.parentOffset === 0;
                const isTextSelection2 = $fromNode.isText || $fromNode.isTextblock;
                const hasContent = $fromNode.content.size > 0;
                if (fromSelectionAtStart && isTextSelection2 && hasContent) {
                    from = Math.max(0, from - 1);
                }
                tr.replaceWith(from, to, newContent);
            }
            if (options.updateSelection) {
                selectionToInsertionEnd(tr, tr.steps.length - 1, -1);
            }
            if (options.applyInputRules) {
                tr.setMeta("applyInputRules", {
                    from,
                    text: newContent
                });
            }
            if (options.applyPasteRules) {
                tr.setMeta("applyPasteRules", {
                    from,
                    text: newContent
                });
            }
        }
        return true;
    };
;
var joinUp = ()=>({ state, dispatch })=>{
        return originalJoinUp(state, dispatch);
    };
var joinDown = ()=>({ state, dispatch })=>{
        return originalJoinDown(state, dispatch);
    };
var joinBackward = ()=>({ state, dispatch })=>{
        return originalJoinBackward(state, dispatch);
    };
var joinForward = ()=>({ state, dispatch })=>{
        return originalJoinForward(state, dispatch);
    };
;
var joinItemBackward = ()=>({ state, dispatch, tr })=>{
        try {
            const point = joinPoint(state.doc, state.selection.$from.pos, -1);
            if (point === null || point === void 0) {
                return false;
            }
            tr.join(point, 2);
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        } catch  {
            return false;
        }
    };
;
var joinItemForward = ()=>({ state, dispatch, tr })=>{
        try {
            const point = joinPoint2(state.doc, state.selection.$from.pos, 1);
            if (point === null || point === void 0) {
                return false;
            }
            tr.join(point, 2);
            if (dispatch) {
                dispatch(tr);
            }
            return true;
        } catch  {
            return false;
        }
    };
;
var joinTextblockBackward = ()=>({ state, dispatch })=>{
        return originalCommand(state, dispatch);
    };
;
var joinTextblockForward = ()=>({ state, dispatch })=>{
        return originalCommand2(state, dispatch);
    };
// src/utilities/isMacOS.ts
function isMacOS() {
    return typeof navigator !== "undefined" ? /Mac/.test(navigator.platform) : false;
}
// src/commands/keyboardShortcut.ts
function normalizeKeyName(name) {
    const parts = name.split(/-(?!$)/);
    let result = parts[parts.length - 1];
    if (result === "Space") {
        result = " ";
    }
    let alt;
    let ctrl;
    let shift;
    let meta;
    for(let i = 0; i < parts.length - 1; i += 1){
        const mod = parts[i];
        if (/^(cmd|meta|m)$/i.test(mod)) {
            meta = true;
        } else if (/^a(lt)?$/i.test(mod)) {
            alt = true;
        } else if (/^(c|ctrl|control)$/i.test(mod)) {
            ctrl = true;
        } else if (/^s(hift)?$/i.test(mod)) {
            shift = true;
        } else if (/^mod$/i.test(mod)) {
            if (isiOS() || isMacOS()) {
                meta = true;
            } else {
                ctrl = true;
            }
        } else {
            throw new Error(`Unrecognized modifier name: ${mod}`);
        }
    }
    if (alt) {
        result = `Alt-${result}`;
    }
    if (ctrl) {
        result = `Ctrl-${result}`;
    }
    if (meta) {
        result = `Meta-${result}`;
    }
    if (shift) {
        result = `Shift-${result}`;
    }
    return result;
}
var keyboardShortcut = (name)=>({ editor, view, tr, dispatch })=>{
        const keys = normalizeKeyName(name).split(/-(?!$)/);
        const key = keys.find((item)=>![
                "Alt",
                "Ctrl",
                "Meta",
                "Shift"
            ].includes(item));
        const event = new KeyboardEvent("keydown", {
            key: key === "Space" ? " " : key,
            altKey: keys.includes("Alt"),
            ctrlKey: keys.includes("Ctrl"),
            metaKey: keys.includes("Meta"),
            shiftKey: keys.includes("Shift"),
            bubbles: true,
            cancelable: true
        });
        const capturedTransaction = editor.captureTransaction(()=>{
            view.someProp("handleKeyDown", (f)=>f(view, event));
        });
        capturedTransaction == null ? void 0 : capturedTransaction.steps.forEach((step)=>{
            const newStep = step.map(tr.mapping);
            if (newStep && dispatch) {
                tr.maybeStep(newStep);
            }
        });
        return true;
    };
;
// src/helpers/isNodeActive.ts
function isNodeActive(state, typeOrName, attributes = {}) {
    const { from, to, empty } = state.selection;
    const type = typeOrName ? getNodeType(typeOrName, state.schema) : null;
    const nodeRanges = [];
    state.doc.nodesBetween(from, to, (node, pos)=>{
        if (node.isText) {
            return;
        }
        const relativeFrom = Math.max(from, pos);
        const relativeTo = Math.min(to, pos + node.nodeSize);
        nodeRanges.push({
            node,
            from: relativeFrom,
            to: relativeTo
        });
    });
    const selectionRange = to - from;
    const matchedNodeRanges = nodeRanges.filter((nodeRange)=>{
        if (!type) {
            return true;
        }
        return type.name === nodeRange.node.type.name;
    }).filter((nodeRange)=>objectIncludes(nodeRange.node.attrs, attributes, {
            strict: false
        }));
    if (empty) {
        return !!matchedNodeRanges.length;
    }
    const range = matchedNodeRanges.reduce((sum, nodeRange)=>sum + nodeRange.to - nodeRange.from, 0);
    return range >= selectionRange;
}
// src/commands/lift.ts
var lift = (typeOrName, attributes = {})=>({ state, dispatch })=>{
        const type = getNodeType(typeOrName, state.schema);
        const isActive2 = isNodeActive(state, type, attributes);
        if (!isActive2) {
            return false;
        }
        return originalLift(state, dispatch);
    };
;
var liftEmptyBlock = ()=>({ state, dispatch })=>{
        return originalLiftEmptyBlock(state, dispatch);
    };
;
var liftListItem = (typeOrName)=>({ state, dispatch })=>{
        const type = getNodeType(typeOrName, state.schema);
        return originalLiftListItem(type)(state, dispatch);
    };
;
var newlineInCode = ()=>({ state, dispatch })=>{
        return originalNewlineInCode(state, dispatch);
    };
// src/helpers/getSchemaTypeNameByName.ts
function getSchemaTypeNameByName(name, schema) {
    if (schema.nodes[name]) {
        return "node";
    }
    if (schema.marks[name]) {
        return "mark";
    }
    return null;
}
// src/utilities/deleteProps.ts
function deleteProps(obj, propOrProps) {
    const props = typeof propOrProps === "string" ? [
        propOrProps
    ] : propOrProps;
    return Object.keys(obj).reduce((newObj, prop)=>{
        if (!props.includes(prop)) {
            newObj[prop] = obj[prop];
        }
        return newObj;
    }, {});
}
// src/commands/resetAttributes.ts
var resetAttributes = (typeOrName, attributes)=>({ tr, state, dispatch })=>{
        let nodeType = null;
        let markType = null;
        const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
        if (!schemaType) {
            return false;
        }
        if (schemaType === "node") {
            nodeType = getNodeType(typeOrName, state.schema);
        }
        if (schemaType === "mark") {
            markType = getMarkType(typeOrName, state.schema);
        }
        let canReset = false;
        tr.selection.ranges.forEach((range)=>{
            state.doc.nodesBetween(range.$from.pos, range.$to.pos, (node, pos)=>{
                if (nodeType && nodeType === node.type) {
                    canReset = true;
                    if (dispatch) {
                        tr.setNodeMarkup(pos, void 0, deleteProps(node.attrs, attributes));
                    }
                }
                if (markType && node.marks.length) {
                    node.marks.forEach((mark)=>{
                        if (markType === mark.type) {
                            canReset = true;
                            if (dispatch) {
                                tr.addMark(pos, pos + node.nodeSize, markType.create(deleteProps(mark.attrs, attributes)));
                            }
                        }
                    });
                }
            });
        });
        return canReset;
    };
// src/commands/scrollIntoView.ts
var scrollIntoView = ()=>({ tr, dispatch })=>{
        if (dispatch) {
            tr.scrollIntoView();
        }
        return true;
    };
;
var selectAll = ()=>({ tr, dispatch })=>{
        if (dispatch) {
            const selection = new AllSelection(tr.doc);
            tr.setSelection(selection);
        }
        return true;
    };
;
var selectNodeBackward = ()=>({ state, dispatch })=>{
        return originalSelectNodeBackward(state, dispatch);
    };
;
var selectNodeForward = ()=>({ state, dispatch })=>{
        return originalSelectNodeForward(state, dispatch);
    };
;
var selectParentNode = ()=>({ state, dispatch })=>{
        return originalSelectParentNode(state, dispatch);
    };
;
var selectTextblockEnd = ()=>({ state, dispatch })=>{
        return originalSelectTextblockEnd(state, dispatch);
    };
;
var selectTextblockStart = ()=>({ state, dispatch })=>{
        return originalSelectTextblockStart(state, dispatch);
    };
// src/helpers/createDocument.ts
function createDocument(content, schema, parseOptions = {}, options = {}) {
    return createNodeFromContent(content, schema, {
        slice: false,
        parseOptions,
        errorOnInvalidContent: options.errorOnInvalidContent
    });
}
// src/commands/setContent.ts
var setContent = (content, { errorOnInvalidContent, emitUpdate = true, parseOptions = {} } = {})=>({ editor, tr, dispatch, commands })=>{
        const { doc } = tr;
        if (parseOptions.preserveWhitespace !== "full") {
            const document2 = createDocument(content, editor.schema, parseOptions, {
                errorOnInvalidContent: errorOnInvalidContent != null ? errorOnInvalidContent : editor.options.enableContentCheck
            });
            if (dispatch) {
                tr.replaceWith(0, doc.content.size, document2).setMeta("preventUpdate", !emitUpdate);
            }
            return true;
        }
        if (dispatch) {
            tr.setMeta("preventUpdate", !emitUpdate);
        }
        return commands.insertContentAt({
            from: 0,
            to: doc.content.size
        }, content, {
            parseOptions,
            errorOnInvalidContent: errorOnInvalidContent != null ? errorOnInvalidContent : editor.options.enableContentCheck
        });
    };
// src/helpers/getMarkAttributes.ts
function getMarkAttributes(state, typeOrName) {
    const type = getMarkType(typeOrName, state.schema);
    const { from, to, empty } = state.selection;
    const marks = [];
    if (empty) {
        if (state.storedMarks) {
            marks.push(...state.storedMarks);
        }
        marks.push(...state.selection.$head.marks());
    } else {
        state.doc.nodesBetween(from, to, (node)=>{
            marks.push(...node.marks);
        });
    }
    const mark = marks.find((markItem)=>markItem.type.name === type.name);
    if (!mark) {
        return {};
    }
    return {
        ...mark.attrs
    };
}
;
function combineTransactionSteps(oldDoc, transactions) {
    const transform = new Transform(oldDoc);
    transactions.forEach((transaction)=>{
        transaction.steps.forEach((step)=>{
            transform.step(step);
        });
    });
    return transform;
}
// src/helpers/defaultBlockAt.ts
function defaultBlockAt(match) {
    for(let i = 0; i < match.edgeCount; i += 1){
        const { type } = match.edge(i);
        if (type.isTextblock && !type.hasRequiredAttrs()) {
            return type;
        }
    }
    return null;
}
// src/helpers/findChildren.ts
function findChildren(node, predicate) {
    const nodesWithPos = [];
    node.descendants((child, pos)=>{
        if (predicate(child)) {
            nodesWithPos.push({
                node: child,
                pos
            });
        }
    });
    return nodesWithPos;
}
// src/helpers/findChildrenInRange.ts
function findChildrenInRange(node, range, predicate) {
    const nodesWithPos = [];
    node.nodesBetween(range.from, range.to, (child, pos)=>{
        if (predicate(child)) {
            nodesWithPos.push({
                node: child,
                pos
            });
        }
    });
    return nodesWithPos;
}
// src/helpers/findParentNodeClosestToPos.ts
function findParentNodeClosestToPos($pos, predicate) {
    for(let i = $pos.depth; i > 0; i -= 1){
        const node = $pos.node(i);
        if (predicate(node)) {
            return {
                pos: i > 0 ? $pos.before(i) : 0,
                start: $pos.start(i),
                depth: i,
                node
            };
        }
    }
}
// src/helpers/findParentNode.ts
function findParentNode(predicate) {
    return (selection)=>findParentNodeClosestToPos(selection.$from, predicate);
}
// src/helpers/getExtensionField.ts
function getExtensionField(extension, field, context) {
    if (extension.config[field] === void 0 && extension.parent) {
        return getExtensionField(extension.parent, field, context);
    }
    if (typeof extension.config[field] === "function") {
        const value = extension.config[field].bind({
            ...context,
            parent: extension.parent ? getExtensionField(extension.parent, field, context) : null
        });
        return value;
    }
    return extension.config[field];
}
// src/helpers/flattenExtensions.ts
function flattenExtensions(extensions) {
    return extensions.map((extension)=>{
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage
        };
        const addExtensions = getExtensionField(extension, "addExtensions", context);
        if (addExtensions) {
            return [
                extension,
                ...flattenExtensions(addExtensions())
            ];
        }
        return extension;
    }).flat(10);
}
;
;
function getHTMLFromFragment(fragment, schema) {
    const documentFragment = DOMSerializer.fromSchema(schema).serializeFragment(fragment);
    const temporaryDocument = document.implementation.createHTMLDocument();
    const container = temporaryDocument.createElement("div");
    container.appendChild(documentFragment);
    return container.innerHTML;
}
;
// src/utilities/isFunction.ts
function isFunction(value) {
    return typeof value === "function";
}
// src/utilities/callOrReturn.ts
function callOrReturn(value, context = void 0, ...props) {
    if (isFunction(value)) {
        if (context) {
            return value.bind(context)(...props);
        }
        return value(...props);
    }
    return value;
}
// src/utilities/isEmptyObject.ts
function isEmptyObject(value = {}) {
    return Object.keys(value).length === 0 && value.constructor === Object;
}
// src/helpers/splitExtensions.ts
function splitExtensions(extensions) {
    const baseExtensions = extensions.filter((extension)=>extension.type === "extension");
    const nodeExtensions = extensions.filter((extension)=>extension.type === "node");
    const markExtensions = extensions.filter((extension)=>extension.type === "mark");
    return {
        baseExtensions,
        nodeExtensions,
        markExtensions
    };
}
// src/helpers/getAttributesFromExtensions.ts
function getAttributesFromExtensions(extensions) {
    const extensionAttributes = [];
    const { nodeExtensions, markExtensions } = splitExtensions(extensions);
    const nodeAndMarkExtensions = [
        ...nodeExtensions,
        ...markExtensions
    ];
    const defaultAttribute = {
        default: null,
        validate: void 0,
        rendered: true,
        renderHTML: null,
        parseHTML: null,
        keepOnSplit: true,
        isRequired: false
    };
    const nodeExtensionTypes = nodeExtensions.filter((ext)=>ext.name !== "text").map((ext)=>ext.name);
    const markExtensionTypes = markExtensions.map((ext)=>ext.name);
    const allExtensionTypes = [
        ...nodeExtensionTypes,
        ...markExtensionTypes
    ];
    extensions.forEach((extension)=>{
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage,
            extensions: nodeAndMarkExtensions
        };
        const addGlobalAttributes = getExtensionField(extension, "addGlobalAttributes", context);
        if (!addGlobalAttributes) {
            return;
        }
        const globalAttributes = addGlobalAttributes();
        globalAttributes.forEach((globalAttribute)=>{
            let resolvedTypes;
            if (Array.isArray(globalAttribute.types)) {
                resolvedTypes = globalAttribute.types;
            } else if (globalAttribute.types === "*") {
                resolvedTypes = allExtensionTypes;
            } else if (globalAttribute.types === "nodes") {
                resolvedTypes = nodeExtensionTypes;
            } else if (globalAttribute.types === "marks") {
                resolvedTypes = markExtensionTypes;
            } else {
                resolvedTypes = [];
            }
            resolvedTypes.forEach((type)=>{
                Object.entries(globalAttribute.attributes).forEach(([name, attribute])=>{
                    extensionAttributes.push({
                        type,
                        name,
                        attribute: {
                            ...defaultAttribute,
                            ...attribute
                        }
                    });
                });
            });
        });
    });
    nodeAndMarkExtensions.forEach((extension)=>{
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage
        };
        const addAttributes = getExtensionField(extension, "addAttributes", context);
        if (!addAttributes) {
            return;
        }
        const attributes = addAttributes();
        Object.entries(attributes).forEach(([name, attribute])=>{
            const mergedAttr = {
                ...defaultAttribute,
                ...attribute
            };
            if (typeof (mergedAttr == null ? void 0 : mergedAttr.default) === "function") {
                mergedAttr.default = mergedAttr.default();
            }
            if ((mergedAttr == null ? void 0 : mergedAttr.isRequired) && (mergedAttr == null ? void 0 : mergedAttr.default) === void 0) {
                delete mergedAttr.default;
            }
            extensionAttributes.push({
                type: extension.name,
                name,
                attribute: mergedAttr
            });
        });
    });
    return extensionAttributes;
}
// src/utilities/mergeAttributes.ts
function mergeAttributes(...objects) {
    return objects.filter((item)=>!!item).reduce((items, item)=>{
        const mergedAttributes = {
            ...items
        };
        Object.entries(item).forEach(([key, value])=>{
            const exists = mergedAttributes[key];
            if (!exists) {
                mergedAttributes[key] = value;
                return;
            }
            if (key === "class") {
                const valueClasses = value ? String(value).split(" ") : [];
                const existingClasses = mergedAttributes[key] ? mergedAttributes[key].split(" ") : [];
                const insertClasses = valueClasses.filter((valueClass)=>!existingClasses.includes(valueClass));
                mergedAttributes[key] = [
                    ...existingClasses,
                    ...insertClasses
                ].join(" ");
            } else if (key === "style") {
                const newStyles = value ? value.split(";").map((style2)=>style2.trim()).filter(Boolean) : [];
                const existingStyles = mergedAttributes[key] ? mergedAttributes[key].split(";").map((style2)=>style2.trim()).filter(Boolean) : [];
                const styleMap = /* @__PURE__ */ new Map();
                existingStyles.forEach((style2)=>{
                    const [property, val] = style2.split(":").map((part)=>part.trim());
                    styleMap.set(property, val);
                });
                newStyles.forEach((style2)=>{
                    const [property, val] = style2.split(":").map((part)=>part.trim());
                    styleMap.set(property, val);
                });
                mergedAttributes[key] = Array.from(styleMap.entries()).map(([property, val])=>`${property}: ${val}`).join("; ");
            } else {
                mergedAttributes[key] = value;
            }
        });
        return mergedAttributes;
    }, {});
}
// src/helpers/getRenderedAttributes.ts
function getRenderedAttributes(nodeOrMark, extensionAttributes) {
    return extensionAttributes.filter((attribute)=>attribute.type === nodeOrMark.type.name).filter((item)=>item.attribute.rendered).map((item)=>{
        if (!item.attribute.renderHTML) {
            return {
                [item.name]: nodeOrMark.attrs[item.name]
            };
        }
        return item.attribute.renderHTML(nodeOrMark.attrs) || {};
    }).reduce((attributes, attribute)=>mergeAttributes(attributes, attribute), {});
}
// src/utilities/fromString.ts
function fromString(value) {
    if (typeof value !== "string") {
        return value;
    }
    if (value.match(/^[+-]?(?:\d*\.)?\d+$/)) {
        return Number(value);
    }
    if (value === "true") {
        return true;
    }
    if (value === "false") {
        return false;
    }
    return value;
}
// src/helpers/injectExtensionAttributesToParseRule.ts
function injectExtensionAttributesToParseRule(parseRule, extensionAttributes) {
    if ("style" in parseRule) {
        return parseRule;
    }
    return {
        ...parseRule,
        getAttrs: (node)=>{
            const oldAttributes = parseRule.getAttrs ? parseRule.getAttrs(node) : parseRule.attrs;
            if (oldAttributes === false) {
                return false;
            }
            const newAttributes = extensionAttributes.reduce((items, item)=>{
                const value = item.attribute.parseHTML ? item.attribute.parseHTML(node) : fromString(node.getAttribute(item.name));
                if (value === null || value === void 0) {
                    return items;
                }
                return {
                    ...items,
                    [item.name]: value
                };
            }, {});
            return {
                ...oldAttributes,
                ...newAttributes
            };
        }
    };
}
// src/helpers/getSchemaByResolvedExtensions.ts
function cleanUpSchemaItem(data) {
    return Object.fromEntries(// @ts-ignore
    Object.entries(data).filter(([key, value])=>{
        if (key === "attrs" && isEmptyObject(value)) {
            return false;
        }
        return value !== null && value !== void 0;
    }));
}
function buildAttributeSpec(extensionAttribute) {
    var _a, _b;
    const spec = {};
    if (!((_a = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _a.isRequired) && "default" in ((extensionAttribute == null ? void 0 : extensionAttribute.attribute) || {})) {
        spec.default = extensionAttribute.attribute.default;
    }
    if (((_b = extensionAttribute == null ? void 0 : extensionAttribute.attribute) == null ? void 0 : _b.validate) !== void 0) {
        spec.validate = extensionAttribute.attribute.validate;
    }
    return [
        extensionAttribute.name,
        spec
    ];
}
function getSchemaByResolvedExtensions(extensions, editor) {
    var _a;
    const allAttributes = getAttributesFromExtensions(extensions);
    const { nodeExtensions, markExtensions } = splitExtensions(extensions);
    const topNode = (_a = nodeExtensions.find((extension)=>getExtensionField(extension, "topNode"))) == null ? void 0 : _a.name;
    const nodes = Object.fromEntries(nodeExtensions.map((extension)=>{
        const extensionAttributes = allAttributes.filter((attribute)=>attribute.type === extension.name);
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage,
            editor
        };
        const extraNodeFields = extensions.reduce((fields, e)=>{
            const extendNodeSchema = getExtensionField(e, "extendNodeSchema", context);
            return {
                ...fields,
                ...extendNodeSchema ? extendNodeSchema(extension) : {}
            };
        }, {});
        const schema = cleanUpSchemaItem({
            ...extraNodeFields,
            content: callOrReturn(getExtensionField(extension, "content", context)),
            marks: callOrReturn(getExtensionField(extension, "marks", context)),
            group: callOrReturn(getExtensionField(extension, "group", context)),
            inline: callOrReturn(getExtensionField(extension, "inline", context)),
            atom: callOrReturn(getExtensionField(extension, "atom", context)),
            selectable: callOrReturn(getExtensionField(extension, "selectable", context)),
            draggable: callOrReturn(getExtensionField(extension, "draggable", context)),
            code: callOrReturn(getExtensionField(extension, "code", context)),
            whitespace: callOrReturn(getExtensionField(extension, "whitespace", context)),
            linebreakReplacement: callOrReturn(getExtensionField(extension, "linebreakReplacement", context)),
            defining: callOrReturn(getExtensionField(extension, "defining", context)),
            isolating: callOrReturn(getExtensionField(extension, "isolating", context)),
            attrs: Object.fromEntries(extensionAttributes.map(buildAttributeSpec))
        });
        const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
        if (parseHTML) {
            schema.parseDOM = parseHTML.map((parseRule)=>injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
        }
        const renderHTML = getExtensionField(extension, "renderHTML", context);
        if (renderHTML) {
            schema.toDOM = (node)=>renderHTML({
                    node,
                    HTMLAttributes: getRenderedAttributes(node, extensionAttributes)
                });
        }
        const renderText = getExtensionField(extension, "renderText", context);
        if (renderText) {
            schema.toText = renderText;
        }
        return [
            extension.name,
            schema
        ];
    }));
    const marks = Object.fromEntries(markExtensions.map((extension)=>{
        const extensionAttributes = allAttributes.filter((attribute)=>attribute.type === extension.name);
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage,
            editor
        };
        const extraMarkFields = extensions.reduce((fields, e)=>{
            const extendMarkSchema = getExtensionField(e, "extendMarkSchema", context);
            return {
                ...fields,
                ...extendMarkSchema ? extendMarkSchema(extension) : {}
            };
        }, {});
        const schema = cleanUpSchemaItem({
            ...extraMarkFields,
            inclusive: callOrReturn(getExtensionField(extension, "inclusive", context)),
            excludes: callOrReturn(getExtensionField(extension, "excludes", context)),
            group: callOrReturn(getExtensionField(extension, "group", context)),
            spanning: callOrReturn(getExtensionField(extension, "spanning", context)),
            code: callOrReturn(getExtensionField(extension, "code", context)),
            attrs: Object.fromEntries(extensionAttributes.map(buildAttributeSpec))
        });
        const parseHTML = callOrReturn(getExtensionField(extension, "parseHTML", context));
        if (parseHTML) {
            schema.parseDOM = parseHTML.map((parseRule)=>injectExtensionAttributesToParseRule(parseRule, extensionAttributes));
        }
        const renderHTML = getExtensionField(extension, "renderHTML", context);
        if (renderHTML) {
            schema.toDOM = (mark)=>renderHTML({
                    mark,
                    HTMLAttributes: getRenderedAttributes(mark, extensionAttributes)
                });
        }
        return [
            extension.name,
            schema
        ];
    }));
    return new Schema2({
        topNode,
        nodes,
        marks
    });
}
// src/utilities/findDuplicates.ts
function findDuplicates(items) {
    const filtered = items.filter((el, index)=>items.indexOf(el) !== index);
    return Array.from(new Set(filtered));
}
// src/helpers/sortExtensions.ts
function sortExtensions(extensions) {
    const defaultPriority = 100;
    return extensions.sort((a, b)=>{
        const priorityA = getExtensionField(a, "priority") || defaultPriority;
        const priorityB = getExtensionField(b, "priority") || defaultPriority;
        if (priorityA > priorityB) {
            return -1;
        }
        if (priorityA < priorityB) {
            return 1;
        }
        return 0;
    });
}
// src/helpers/resolveExtensions.ts
function resolveExtensions(extensions) {
    const resolvedExtensions = sortExtensions(flattenExtensions(extensions));
    const duplicatedNames = findDuplicates(resolvedExtensions.map((extension)=>extension.name));
    if (duplicatedNames.length) {
        console.warn(`[tiptap warn]: Duplicate extension names found: [${duplicatedNames.map((item)=>`'${item}'`).join(", ")}]. This can lead to issues.`);
    }
    return resolvedExtensions;
}
// src/helpers/getSchema.ts
function getSchema(extensions, editor) {
    const resolvedExtensions = resolveExtensions(extensions);
    return getSchemaByResolvedExtensions(resolvedExtensions, editor);
}
// src/helpers/generateHTML.ts
function generateHTML(doc, extensions) {
    const schema = getSchema(extensions);
    const contentNode = Node.fromJSON(schema, doc);
    return getHTMLFromFragment(contentNode.content, schema);
}
;
function generateJSON(html, extensions) {
    const schema = getSchema(extensions);
    const dom = elementFromString(html);
    return DOMParser2.fromSchema(schema).parse(dom).toJSON();
}
;
// src/helpers/getTextBetween.ts
function getTextBetween(startNode, range, options) {
    const { from, to } = range;
    const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
    let text = "";
    startNode.nodesBetween(from, to, (node, pos, parent, index)=>{
        var _a;
        if (node.isBlock && pos > from) {
            text += blockSeparator;
        }
        const textSerializer = textSerializers == null ? void 0 : textSerializers[node.type.name];
        if (textSerializer) {
            if (parent) {
                text += textSerializer({
                    node,
                    pos,
                    parent,
                    index,
                    range
                });
            }
            return false;
        }
        if (node.isText) {
            text += (_a = node == null ? void 0 : node.text) == null ? void 0 : _a.slice(Math.max(from, pos) - pos, to - pos);
        }
    });
    return text;
}
// src/helpers/getText.ts
function getText(node, options) {
    const range = {
        from: 0,
        to: node.content.size
    };
    return getTextBetween(node, range, options);
}
// src/helpers/getTextSerializersFromSchema.ts
function getTextSerializersFromSchema(schema) {
    return Object.fromEntries(Object.entries(schema.nodes).filter(([, node])=>node.spec.toText).map(([name, node])=>[
            name,
            node.spec.toText
        ]));
}
// src/helpers/generateText.ts
function generateText(doc, extensions, options) {
    const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
    const schema = getSchema(extensions);
    const contentNode = Node2.fromJSON(schema, doc);
    return getText(contentNode, {
        blockSeparator,
        textSerializers: {
            ...getTextSerializersFromSchema(schema),
            ...textSerializers
        }
    });
}
// src/helpers/getNodeAttributes.ts
function getNodeAttributes(state, typeOrName) {
    const type = getNodeType(typeOrName, state.schema);
    const { from, to } = state.selection;
    const nodes = [];
    state.doc.nodesBetween(from, to, (node2)=>{
        nodes.push(node2);
    });
    const node = nodes.reverse().find((nodeItem)=>nodeItem.type.name === type.name);
    if (!node) {
        return {};
    }
    return {
        ...node.attrs
    };
}
// src/helpers/getAttributes.ts
function getAttributes(state, typeOrName) {
    const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
    if (schemaType === "node") {
        return getNodeAttributes(state, typeOrName);
    }
    if (schemaType === "mark") {
        return getMarkAttributes(state, typeOrName);
    }
    return {};
}
// src/utilities/removeDuplicates.ts
function removeDuplicates(array, by = JSON.stringify) {
    const seen = {};
    return array.filter((item)=>{
        const key = by(item);
        return Object.prototype.hasOwnProperty.call(seen, key) ? false : seen[key] = true;
    });
}
// src/helpers/getChangedRanges.ts
function simplifyChangedRanges(changes) {
    const uniqueChanges = removeDuplicates(changes);
    return uniqueChanges.length === 1 ? uniqueChanges : uniqueChanges.filter((change, index)=>{
        const rest = uniqueChanges.filter((_, i)=>i !== index);
        return !rest.some((otherChange)=>{
            return change.oldRange.from >= otherChange.oldRange.from && change.oldRange.to <= otherChange.oldRange.to && change.newRange.from >= otherChange.newRange.from && change.newRange.to <= otherChange.newRange.to;
        });
    });
}
function getChangedRanges(transform) {
    const { mapping, steps } = transform;
    const changes = [];
    mapping.maps.forEach((stepMap, index)=>{
        const ranges = [];
        if (!stepMap.ranges.length) {
            const { from, to } = steps[index];
            if (from === void 0 || to === void 0) {
                return;
            }
            ranges.push({
                from,
                to
            });
        } else {
            stepMap.forEach((from, to)=>{
                ranges.push({
                    from,
                    to
                });
            });
        }
        ranges.forEach(({ from, to })=>{
            const newStart = mapping.slice(index).map(from, -1);
            const newEnd = mapping.slice(index).map(to);
            const oldStart = mapping.invert().map(newStart, -1);
            const oldEnd = mapping.invert().map(newEnd);
            changes.push({
                oldRange: {
                    from: oldStart,
                    to: oldEnd
                },
                newRange: {
                    from: newStart,
                    to: newEnd
                }
            });
        });
    });
    return simplifyChangedRanges(changes);
}
// src/helpers/getDebugJSON.ts
function getDebugJSON(node, startOffset = 0) {
    const isTopNode = node.type === node.type.schema.topNodeType;
    const increment = isTopNode ? 0 : 1;
    const from = startOffset;
    const to = from + node.nodeSize;
    const marks = node.marks.map((mark)=>{
        const output2 = {
            type: mark.type.name
        };
        if (Object.keys(mark.attrs).length) {
            output2.attrs = {
                ...mark.attrs
            };
        }
        return output2;
    });
    const attrs = {
        ...node.attrs
    };
    const output = {
        type: node.type.name,
        from,
        to
    };
    if (Object.keys(attrs).length) {
        output.attrs = attrs;
    }
    if (marks.length) {
        output.marks = marks;
    }
    if (node.content.childCount) {
        output.content = [];
        node.forEach((child, offset)=>{
            var _a;
            (_a = output.content) == null ? void 0 : _a.push(getDebugJSON(child, startOffset + offset + increment));
        });
    }
    if (node.text) {
        output.text = node.text;
    }
    return output;
}
// src/helpers/getMarksBetween.ts
function getMarksBetween(from, to, doc) {
    const marks = [];
    if (from === to) {
        doc.resolve(from).marks().forEach((mark)=>{
            const $pos = doc.resolve(from);
            const range = getMarkRange($pos, mark.type);
            if (!range) {
                return;
            }
            marks.push({
                mark,
                ...range
            });
        });
    } else {
        doc.nodesBetween(from, to, (node, pos)=>{
            if (!node || (node == null ? void 0 : node.nodeSize) === void 0) {
                return;
            }
            marks.push(...node.marks.map((mark)=>({
                    from: pos,
                    to: pos + node.nodeSize,
                    mark
                })));
        });
    }
    return marks;
}
// src/helpers/getNodeAtPosition.ts
var getNodeAtPosition = (state, typeOrName, pos, maxDepth = 20)=>{
    const $pos = state.doc.resolve(pos);
    let currentDepth = maxDepth;
    let node = null;
    while(currentDepth > 0 && node === null){
        const currentNode = $pos.node(currentDepth);
        if ((currentNode == null ? void 0 : currentNode.type.name) === typeOrName) {
            node = currentNode;
        } else {
            currentDepth -= 1;
        }
    }
    return [
        node,
        currentDepth
    ];
};
// src/helpers/getSchemaTypeByName.ts
function getSchemaTypeByName(name, schema) {
    return schema.nodes[name] || schema.marks[name] || null;
}
// src/helpers/getSplittedAttributes.ts
function getSplittedAttributes(extensionAttributes, typeName, attributes) {
    return Object.fromEntries(Object.entries(attributes).filter(([name])=>{
        const extensionAttribute = extensionAttributes.find((item)=>{
            return item.type === typeName && item.name === name;
        });
        if (!extensionAttribute) {
            return false;
        }
        return extensionAttribute.attribute.keepOnSplit;
    }));
}
// src/helpers/getTextContentFromNodes.ts
var getTextContentFromNodes = ($from, maxMatch = 500)=>{
    let textBefore = "";
    const sliceEndPos = $from.parentOffset;
    $from.parent.nodesBetween(Math.max(0, sliceEndPos - maxMatch), sliceEndPos, (node, pos, parent, index)=>{
        var _a, _b;
        const chunk = ((_b = (_a = node.type.spec).toText) == null ? void 0 : _b.call(_a, {
            node,
            pos,
            parent,
            index
        })) || node.textContent || "%leaf%";
        textBefore += node.isAtom && !node.isText ? chunk : chunk.slice(0, Math.max(0, sliceEndPos - pos));
    });
    return textBefore;
};
// src/helpers/isMarkActive.ts
function isMarkActive(state, typeOrName, attributes = {}) {
    const { empty, ranges } = state.selection;
    const type = typeOrName ? getMarkType(typeOrName, state.schema) : null;
    if (empty) {
        return !!(state.storedMarks || state.selection.$from.marks()).filter((mark)=>{
            if (!type) {
                return true;
            }
            return type.name === mark.type.name;
        }).find((mark)=>objectIncludes(mark.attrs, attributes, {
                strict: false
            }));
    }
    let selectionRange = 0;
    const markRanges = [];
    ranges.forEach(({ $from, $to })=>{
        const from = $from.pos;
        const to = $to.pos;
        state.doc.nodesBetween(from, to, (node, pos)=>{
            if (type && node.inlineContent && !node.type.allowsMarkType(type)) {
                return false;
            }
            if (!node.isText && !node.marks.length) {
                return;
            }
            const relativeFrom = Math.max(from, pos);
            const relativeTo = Math.min(to, pos + node.nodeSize);
            const range2 = relativeTo - relativeFrom;
            selectionRange += range2;
            markRanges.push(...node.marks.map((mark)=>({
                    mark,
                    from: relativeFrom,
                    to: relativeTo
                })));
        });
    });
    if (selectionRange === 0) {
        return false;
    }
    const matchedRange = markRanges.filter((markRange)=>{
        if (!type) {
            return true;
        }
        return type.name === markRange.mark.type.name;
    }).filter((markRange)=>objectIncludes(markRange.mark.attrs, attributes, {
            strict: false
        })).reduce((sum, markRange)=>sum + markRange.to - markRange.from, 0);
    const excludedRange = markRanges.filter((markRange)=>{
        if (!type) {
            return true;
        }
        return markRange.mark.type !== type && markRange.mark.type.excludes(type);
    }).reduce((sum, markRange)=>sum + markRange.to - markRange.from, 0);
    const range = matchedRange > 0 ? matchedRange + excludedRange : matchedRange;
    return range >= selectionRange;
}
// src/helpers/isActive.ts
function isActive(state, name, attributes = {}) {
    if (!name) {
        return isNodeActive(state, null, attributes) || isMarkActive(state, null, attributes);
    }
    const schemaType = getSchemaTypeNameByName(name, state.schema);
    if (schemaType === "node") {
        return isNodeActive(state, name, attributes);
    }
    if (schemaType === "mark") {
        return isMarkActive(state, name, attributes);
    }
    return false;
}
// src/helpers/isAtEndOfNode.ts
var isAtEndOfNode = (state, nodeType)=>{
    const { $from, $to, $anchor } = state.selection;
    if (nodeType) {
        const parentNode = findParentNode((node)=>node.type.name === nodeType)(state.selection);
        if (!parentNode) {
            return false;
        }
        const $parentPos = state.doc.resolve(parentNode.pos + 1);
        if ($anchor.pos + 1 === $parentPos.end()) {
            return true;
        }
        return false;
    }
    if ($to.parentOffset < $to.parent.nodeSize - 2 || $from.pos !== $to.pos) {
        return false;
    }
    return true;
};
// src/helpers/isAtStartOfNode.ts
var isAtStartOfNode = (state)=>{
    const { $from, $to } = state.selection;
    if ($from.parentOffset > 0 || $from.pos !== $to.pos) {
        return false;
    }
    return true;
};
// src/helpers/isExtensionRulesEnabled.ts
function isExtensionRulesEnabled(extension, enabled) {
    if (Array.isArray(enabled)) {
        return enabled.some((enabledExtension)=>{
            const name = typeof enabledExtension === "string" ? enabledExtension : enabledExtension.name;
            return name === extension.name;
        });
    }
    return enabled;
}
// src/helpers/isList.ts
function isList(name, extensions) {
    const { nodeExtensions } = splitExtensions(extensions);
    const extension = nodeExtensions.find((item)=>item.name === name);
    if (!extension) {
        return false;
    }
    const context = {
        name: extension.name,
        options: extension.options,
        storage: extension.storage
    };
    const group = callOrReturn(getExtensionField(extension, "group", context));
    if (typeof group !== "string") {
        return false;
    }
    return group.split(" ").includes("list");
}
// src/helpers/isNodeEmpty.ts
function isNodeEmpty(node, { checkChildren = true, ignoreWhitespace = false } = {}) {
    var _a;
    if (ignoreWhitespace) {
        if (node.type.name === "hardBreak") {
            return true;
        }
        if (node.isText) {
            return /^\s*$/m.test((_a = node.text) != null ? _a : "");
        }
    }
    if (node.isText) {
        return !node.text;
    }
    if (node.isAtom || node.isLeaf) {
        return false;
    }
    if (node.content.childCount === 0) {
        return true;
    }
    if (checkChildren) {
        let isContentEmpty = true;
        node.content.forEach((childNode)=>{
            if (isContentEmpty === false) {
                return;
            }
            if (!isNodeEmpty(childNode, {
                ignoreWhitespace,
                checkChildren
            })) {
                isContentEmpty = false;
            }
        });
        return isContentEmpty;
    }
    return false;
}
;
function isNodeSelection(value) {
    return value instanceof NodeSelection;
}
// src/helpers/MappablePosition.ts
var MappablePosition = class _MappablePosition {
    constructor(position){
        this.position = position;
    }
    /**
   * Creates a MappablePosition from a JSON object.
   */ static fromJSON(json) {
        return new _MappablePosition(json.position);
    }
    /**
   * Converts the MappablePosition to a JSON object.
   */ toJSON() {
        return {
            position: this.position
        };
    }
};
function getUpdatedPosition(position, transaction) {
    const mapResult = transaction.mapping.mapResult(position.position);
    return {
        position: new MappablePosition(mapResult.pos),
        mapResult
    };
}
function createMappablePosition(position) {
    return new MappablePosition(position);
}
// src/helpers/posToDOMRect.ts
function posToDOMRect(view, from, to) {
    const minPos = 0;
    const maxPos = view.state.doc.content.size;
    const resolvedFrom = minMax(from, minPos, maxPos);
    const resolvedEnd = minMax(to, minPos, maxPos);
    const start = view.coordsAtPos(resolvedFrom);
    const end = view.coordsAtPos(resolvedEnd, -1);
    const top = Math.min(start.top, end.top);
    const bottom = Math.max(start.bottom, end.bottom);
    const left = Math.min(start.left, end.left);
    const right = Math.max(start.right, end.right);
    const width = right - left;
    const height = bottom - top;
    const x = left;
    const y = top;
    const data = {
        top,
        bottom,
        left,
        right,
        width,
        height,
        x,
        y
    };
    return {
        ...data,
        toJSON: ()=>data
    };
}
// src/helpers/rewriteUnknownContent.ts
function rewriteUnknownContentInner({ json, validMarks, validNodes, options, rewrittenContent = [] }) {
    if (json.marks && Array.isArray(json.marks)) {
        json.marks = json.marks.filter((mark)=>{
            const name = typeof mark === "string" ? mark : mark.type;
            if (validMarks.has(name)) {
                return true;
            }
            rewrittenContent.push({
                original: JSON.parse(JSON.stringify(mark)),
                unsupported: name
            });
            return false;
        });
    }
    if (json.content && Array.isArray(json.content)) {
        json.content = json.content.map((value)=>rewriteUnknownContentInner({
                json: value,
                validMarks,
                validNodes,
                options,
                rewrittenContent
            }).json).filter((a)=>a !== null && a !== void 0);
    }
    if (json.type && !validNodes.has(json.type)) {
        rewrittenContent.push({
            original: JSON.parse(JSON.stringify(json)),
            unsupported: json.type
        });
        if (json.content && Array.isArray(json.content) && (options == null ? void 0 : options.fallbackToParagraph) !== false) {
            json.type = "paragraph";
            return {
                json,
                rewrittenContent
            };
        }
        return {
            json: null,
            rewrittenContent
        };
    }
    return {
        json,
        rewrittenContent
    };
}
function rewriteUnknownContent(json, schema, options) {
    return rewriteUnknownContentInner({
        json,
        validNodes: new Set(Object.keys(schema.nodes)),
        validMarks: new Set(Object.keys(schema.marks)),
        options
    });
}
// src/commands/setMark.ts
function canSetMark(state, tr, newMarkType) {
    var _a;
    const { selection } = tr;
    let cursor = null;
    if (isTextSelection(selection)) {
        cursor = selection.$cursor;
    }
    if (cursor) {
        const currentMarks = (_a = state.storedMarks) != null ? _a : cursor.marks();
        const parentAllowsMarkType = cursor.parent.type.allowsMarkType(newMarkType);
        return parentAllowsMarkType && (!!newMarkType.isInSet(currentMarks) || !currentMarks.some((mark)=>mark.type.excludes(newMarkType)));
    }
    const { ranges } = selection;
    return ranges.some(({ $from, $to })=>{
        let someNodeSupportsMark = $from.depth === 0 ? state.doc.inlineContent && state.doc.type.allowsMarkType(newMarkType) : false;
        state.doc.nodesBetween($from.pos, $to.pos, (node, _pos, parent)=>{
            if (someNodeSupportsMark) {
                return false;
            }
            if (node.isInline) {
                const parentAllowsMarkType = !parent || parent.type.allowsMarkType(newMarkType);
                const currentMarksAllowMarkType = !!newMarkType.isInSet(node.marks) || !node.marks.some((otherMark)=>otherMark.type.excludes(newMarkType));
                someNodeSupportsMark = parentAllowsMarkType && currentMarksAllowMarkType;
            }
            return !someNodeSupportsMark;
        });
        return someNodeSupportsMark;
    });
}
var setMark = (typeOrName, attributes = {})=>({ tr, state, dispatch })=>{
        const { selection } = tr;
        const { empty, ranges } = selection;
        const type = getMarkType(typeOrName, state.schema);
        if (dispatch) {
            if (empty) {
                const oldAttributes = getMarkAttributes(state, type);
                tr.addStoredMark(type.create({
                    ...oldAttributes,
                    ...attributes
                }));
            } else {
                ranges.forEach((range)=>{
                    const from = range.$from.pos;
                    const to = range.$to.pos;
                    state.doc.nodesBetween(from, to, (node, pos)=>{
                        const trimmedFrom = Math.max(pos, from);
                        const trimmedTo = Math.min(pos + node.nodeSize, to);
                        const someHasMark = node.marks.find((mark)=>mark.type === type);
                        if (someHasMark) {
                            node.marks.forEach((mark)=>{
                                if (type === mark.type) {
                                    tr.addMark(trimmedFrom, trimmedTo, type.create({
                                        ...mark.attrs,
                                        ...attributes
                                    }));
                                }
                            });
                        } else {
                            tr.addMark(trimmedFrom, trimmedTo, type.create(attributes));
                        }
                    });
                });
            }
        }
        return canSetMark(state, tr, type);
    };
// src/commands/setMeta.ts
var setMeta = (key, value)=>({ tr })=>{
        tr.setMeta(key, value);
        return true;
    };
;
var setNode = (typeOrName, attributes = {})=>({ state, dispatch, chain })=>{
        const type = getNodeType(typeOrName, state.schema);
        let attributesToCopy;
        if (state.selection.$anchor.sameParent(state.selection.$head)) {
            attributesToCopy = state.selection.$anchor.parent.attrs;
        }
        if (!type.isTextblock) {
            console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.');
            return false;
        }
        return chain().command(({ commands })=>{
            const canSetBlock = setBlockType(type, {
                ...attributesToCopy,
                ...attributes
            })(state);
            if (canSetBlock) {
                return true;
            }
            return commands.clearNodes();
        }).command(({ state: updatedState })=>{
            return setBlockType(type, {
                ...attributesToCopy,
                ...attributes
            })(updatedState, dispatch);
        }).run();
    };
;
var setNodeSelection = (position)=>({ tr, dispatch })=>{
        if (dispatch) {
            const { doc } = tr;
            const from = minMax(position, 0, doc.content.size);
            const selection = NodeSelection2.create(doc, from);
            tr.setSelection(selection);
        }
        return true;
    };
// src/commands/setTextDirection.ts
var setTextDirection = (direction, position)=>({ tr, state, dispatch })=>{
        const { selection } = state;
        let from;
        let to;
        if (typeof position === "number") {
            from = position;
            to = position;
        } else if (position && "from" in position && "to" in position) {
            from = position.from;
            to = position.to;
        } else {
            from = selection.from;
            to = selection.to;
        }
        if (dispatch) {
            tr.doc.nodesBetween(from, to, (node, pos)=>{
                if (node.isText) {
                    return;
                }
                tr.setNodeMarkup(pos, void 0, {
                    ...node.attrs,
                    dir: direction
                });
            });
        }
        return true;
    };
;
var setTextSelection = (position)=>({ tr, dispatch })=>{
        if (dispatch) {
            const { doc } = tr;
            const { from, to } = typeof position === "number" ? {
                from: position,
                to: position
            } : position;
            const minPos = TextSelection5.atStart(doc).from;
            const maxPos = TextSelection5.atEnd(doc).to;
            const resolvedFrom = minMax(from, minPos, maxPos);
            const resolvedEnd = minMax(to, minPos, maxPos);
            const selection = TextSelection5.create(doc, resolvedFrom, resolvedEnd);
            tr.setSelection(selection);
        }
        return true;
    };
;
var sinkListItem = (typeOrName)=>({ state, dispatch })=>{
        const type = getNodeType(typeOrName, state.schema);
        return originalSinkListItem(type)(state, dispatch);
    };
;
;
function ensureMarks(state, splittableMarks) {
    const marks = state.storedMarks || state.selection.$to.parentOffset && state.selection.$from.marks();
    if (marks) {
        const filteredMarks = marks.filter((mark)=>splittableMarks == null ? void 0 : splittableMarks.includes(mark.type.name));
        state.tr.ensureMarks(filteredMarks);
    }
}
var splitBlock = ({ keepMarks = true } = {})=>({ tr, state, dispatch, editor })=>{
        const { selection, doc } = tr;
        const { $from, $to } = selection;
        const extensionAttributes = editor.extensionManager.attributes;
        const newAttributes = getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs);
        if (selection instanceof NodeSelection3 && selection.node.isBlock) {
            if (!$from.parentOffset || !canSplit(doc, $from.pos)) {
                return false;
            }
            if (dispatch) {
                if (keepMarks) {
                    ensureMarks(state, editor.extensionManager.splittableMarks);
                }
                tr.split($from.pos).scrollIntoView();
            }
            return true;
        }
        if (!$from.parent.isBlock) {
            return false;
        }
        const atEnd = $to.parentOffset === $to.parent.content.size;
        const deflt = $from.depth === 0 ? void 0 : defaultBlockAt($from.node(-1).contentMatchAt($from.indexAfter(-1)));
        let types = atEnd && deflt ? [
            {
                type: deflt,
                attrs: newAttributes
            }
        ] : void 0;
        let can = canSplit(tr.doc, tr.mapping.map($from.pos), 1, types);
        if (!types && !can && canSplit(tr.doc, tr.mapping.map($from.pos), 1, deflt ? [
            {
                type: deflt
            }
        ] : void 0)) {
            can = true;
            types = deflt ? [
                {
                    type: deflt,
                    attrs: newAttributes
                }
            ] : void 0;
        }
        if (dispatch) {
            if (can) {
                if (selection instanceof TextSelection6) {
                    tr.deleteSelection();
                }
                tr.split(tr.mapping.map($from.pos), 1, types);
                if (deflt && !atEnd && !$from.parentOffset && $from.parent.type !== deflt) {
                    const first2 = tr.mapping.map($from.before());
                    const $first = tr.doc.resolve(first2);
                    if ($from.node(-1).canReplaceWith($first.index(), $first.index() + 1, deflt)) {
                        tr.setNodeMarkup(tr.mapping.map($from.before()), deflt);
                    }
                }
            }
            if (keepMarks) {
                ensureMarks(state, editor.extensionManager.splittableMarks);
            }
            tr.scrollIntoView();
        }
        return can;
    };
;
;
;
var splitListItem = (typeOrName, overrideAttrs = {})=>({ tr, state, dispatch, editor })=>{
        var _a;
        const type = getNodeType(typeOrName, state.schema);
        const { $from, $to } = state.selection;
        const node = state.selection.node;
        if (node && node.isBlock || $from.depth < 2 || !$from.sameParent($to)) {
            return false;
        }
        const grandParent = $from.node(-1);
        if (grandParent.type !== type) {
            return false;
        }
        const extensionAttributes = editor.extensionManager.attributes;
        if ($from.parent.content.size === 0 && $from.node(-1).childCount === $from.indexAfter(-1)) {
            if ($from.depth === 2 || $from.node(-3).type !== type || $from.index(-2) !== $from.node(-2).childCount - 1) {
                return false;
            }
            if (dispatch) {
                let wrap = Fragment3.empty;
                const depthBefore = $from.index(-1) ? 1 : $from.index(-2) ? 2 : 3;
                for(let d = $from.depth - depthBefore; d >= $from.depth - 3; d -= 1){
                    wrap = Fragment3.from($from.node(d).copy(wrap));
                }
                const depthAfter = // eslint-disable-next-line no-nested-ternary
                $from.indexAfter(-1) < $from.node(-2).childCount ? 1 : $from.indexAfter(-2) < $from.node(-3).childCount ? 2 : 3;
                const newNextTypeAttributes2 = {
                    ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
                    ...overrideAttrs
                };
                const nextType2 = ((_a = type.contentMatch.defaultType) == null ? void 0 : _a.createAndFill(newNextTypeAttributes2)) || void 0;
                wrap = wrap.append(Fragment3.from(type.createAndFill(null, nextType2) || void 0));
                const start = $from.before($from.depth - (depthBefore - 1));
                tr.replace(start, $from.after(-depthAfter), new Slice(wrap, 4 - depthBefore, 0));
                let sel = -1;
                tr.doc.nodesBetween(start, tr.doc.content.size, (n, pos)=>{
                    if (sel > -1) {
                        return false;
                    }
                    if (n.isTextblock && n.content.size === 0) {
                        sel = pos + 1;
                    }
                });
                if (sel > -1) {
                    tr.setSelection(TextSelection7.near(tr.doc.resolve(sel)));
                }
                tr.scrollIntoView();
            }
            return true;
        }
        const nextType = $to.pos === $from.end() ? grandParent.contentMatchAt(0).defaultType : null;
        const newTypeAttributes = {
            ...getSplittedAttributes(extensionAttributes, grandParent.type.name, grandParent.attrs),
            ...overrideAttrs
        };
        const newNextTypeAttributes = {
            ...getSplittedAttributes(extensionAttributes, $from.node().type.name, $from.node().attrs),
            ...overrideAttrs
        };
        tr.delete($from.pos, $to.pos);
        const types = nextType ? [
            {
                type,
                attrs: newTypeAttributes
            },
            {
                type: nextType,
                attrs: newNextTypeAttributes
            }
        ] : [
            {
                type,
                attrs: newTypeAttributes
            }
        ];
        if (!canSplit2(tr.doc, $from.pos, 2)) {
            return false;
        }
        if (dispatch) {
            const { selection, storedMarks } = state;
            const { splittableMarks } = editor.extensionManager;
            const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
            tr.split($from.pos, 2, types).scrollIntoView();
            if (!marks || !dispatch) {
                return true;
            }
            const filteredMarks = marks.filter((mark)=>splittableMarks.includes(mark.type.name));
            tr.ensureMarks(filteredMarks);
        }
        return true;
    };
;
var joinListBackwards = (tr, listType)=>{
    const list = findParentNode((node)=>node.type === listType)(tr.selection);
    if (!list) {
        return true;
    }
    const before = tr.doc.resolve(Math.max(0, list.pos - 1)).before(list.depth);
    if (before === void 0) {
        return true;
    }
    const nodeBefore = tr.doc.nodeAt(before);
    const canJoinBackwards = list.node.type === (nodeBefore == null ? void 0 : nodeBefore.type) && canJoin(tr.doc, list.pos);
    if (!canJoinBackwards) {
        return true;
    }
    tr.join(list.pos);
    return true;
};
var joinListForwards = (tr, listType)=>{
    const list = findParentNode((node)=>node.type === listType)(tr.selection);
    if (!list) {
        return true;
    }
    const after = tr.doc.resolve(list.start).after(list.depth);
    if (after === void 0) {
        return true;
    }
    const nodeAfter = tr.doc.nodeAt(after);
    const canJoinForwards = list.node.type === (nodeAfter == null ? void 0 : nodeAfter.type) && canJoin(tr.doc, after);
    if (!canJoinForwards) {
        return true;
    }
    tr.join(after);
    return true;
};
var toggleList = (listTypeOrName, itemTypeOrName, keepMarks, attributes = {})=>({ editor, tr, state, dispatch, chain, commands, can })=>{
        const { extensions, splittableMarks } = editor.extensionManager;
        const listType = getNodeType(listTypeOrName, state.schema);
        const itemType = getNodeType(itemTypeOrName, state.schema);
        const { selection, storedMarks } = state;
        const { $from, $to } = selection;
        const range = $from.blockRange($to);
        const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
        if (!range) {
            return false;
        }
        const parentList = findParentNode((node)=>isList(node.type.name, extensions))(selection);
        if (range.depth >= 1 && parentList && range.depth - parentList.depth <= 1) {
            if (parentList.node.type === listType) {
                return commands.liftListItem(itemType);
            }
            if (isList(parentList.node.type.name, extensions) && listType.validContent(parentList.node.content) && dispatch) {
                return chain().command(()=>{
                    tr.setNodeMarkup(parentList.pos, listType);
                    return true;
                }).command(()=>joinListBackwards(tr, listType)).command(()=>joinListForwards(tr, listType)).run();
            }
        }
        if (!keepMarks || !marks || !dispatch) {
            return chain().command(()=>{
                const canWrapInList = can().wrapInList(listType, attributes);
                if (canWrapInList) {
                    return true;
                }
                return commands.clearNodes();
            }).wrapInList(listType, attributes).command(()=>joinListBackwards(tr, listType)).command(()=>joinListForwards(tr, listType)).run();
        }
        return chain().command(()=>{
            const canWrapInList = can().wrapInList(listType, attributes);
            const filteredMarks = marks.filter((mark)=>splittableMarks.includes(mark.type.name));
            tr.ensureMarks(filteredMarks);
            if (canWrapInList) {
                return true;
            }
            return commands.clearNodes();
        }).wrapInList(listType, attributes).command(()=>joinListBackwards(tr, listType)).command(()=>joinListForwards(tr, listType)).run();
    };
// src/commands/toggleMark.ts
var toggleMark = (typeOrName, attributes = {}, options = {})=>({ state, commands })=>{
        const { extendEmptyMarkRange = false } = options;
        const type = getMarkType(typeOrName, state.schema);
        const isActive2 = isMarkActive(state, type, attributes);
        if (isActive2) {
            return commands.unsetMark(type, {
                extendEmptyMarkRange
            });
        }
        return commands.setMark(type, attributes);
    };
// src/commands/toggleNode.ts
var toggleNode = (typeOrName, toggleTypeOrName, attributes = {})=>({ state, commands })=>{
        const type = getNodeType(typeOrName, state.schema);
        const toggleType = getNodeType(toggleTypeOrName, state.schema);
        const isActive2 = isNodeActive(state, type, attributes);
        let attributesToCopy;
        if (state.selection.$anchor.sameParent(state.selection.$head)) {
            attributesToCopy = state.selection.$anchor.parent.attrs;
        }
        if (isActive2) {
            return commands.setNode(toggleType, attributesToCopy);
        }
        return commands.setNode(type, {
            ...attributesToCopy,
            ...attributes
        });
    };
// src/commands/toggleWrap.ts
var toggleWrap = (typeOrName, attributes = {})=>({ state, commands })=>{
        const type = getNodeType(typeOrName, state.schema);
        const isActive2 = isNodeActive(state, type, attributes);
        if (isActive2) {
            return commands.lift(type);
        }
        return commands.wrapIn(type, attributes);
    };
// src/commands/undoInputRule.ts
var undoInputRule = ()=>({ state, dispatch })=>{
        const plugins = state.plugins;
        for(let i = 0; i < plugins.length; i += 1){
            const plugin = plugins[i];
            let undoable;
            if (plugin.spec.isInputRules && (undoable = plugin.getState(state))) {
                if (dispatch) {
                    const tr = state.tr;
                    const toUndo = undoable.transform;
                    for(let j = toUndo.steps.length - 1; j >= 0; j -= 1){
                        tr.step(toUndo.steps[j].invert(toUndo.docs[j]));
                    }
                    if (undoable.text) {
                        const marks = tr.doc.resolve(undoable.from).marks();
                        tr.replaceWith(undoable.from, undoable.to, state.schema.text(undoable.text, marks));
                    } else {
                        tr.delete(undoable.from, undoable.to);
                    }
                }
                return true;
            }
        }
        return false;
    };
// src/commands/unsetAllMarks.ts
var unsetAllMarks = ()=>({ tr, dispatch })=>{
        const { selection } = tr;
        const { empty, ranges } = selection;
        if (empty) {
            return true;
        }
        if (dispatch) {
            ranges.forEach((range)=>{
                tr.removeMark(range.$from.pos, range.$to.pos);
            });
        }
        return true;
    };
// src/commands/unsetMark.ts
var unsetMark = (typeOrName, options = {})=>({ tr, state, dispatch })=>{
        var _a;
        const { extendEmptyMarkRange = false } = options;
        const { selection } = tr;
        const type = getMarkType(typeOrName, state.schema);
        const { $from, empty, ranges } = selection;
        if (!dispatch) {
            return true;
        }
        if (empty && extendEmptyMarkRange) {
            let { from, to } = selection;
            const attrs = (_a = $from.marks().find((mark)=>mark.type === type)) == null ? void 0 : _a.attrs;
            const range = getMarkRange($from, type, attrs);
            if (range) {
                from = range.from;
                to = range.to;
            }
            tr.removeMark(from, to, type);
        } else {
            ranges.forEach((range)=>{
                tr.removeMark(range.$from.pos, range.$to.pos, type);
            });
        }
        tr.removeStoredMark(type);
        return true;
    };
// src/commands/unsetTextDirection.ts
var unsetTextDirection = (position)=>({ tr, state, dispatch })=>{
        const { selection } = state;
        let from;
        let to;
        if (typeof position === "number") {
            from = position;
            to = position;
        } else if (position && "from" in position && "to" in position) {
            from = position.from;
            to = position.to;
        } else {
            from = selection.from;
            to = selection.to;
        }
        if (dispatch) {
            tr.doc.nodesBetween(from, to, (node, pos)=>{
                if (node.isText) {
                    return;
                }
                const newAttrs = {
                    ...node.attrs
                };
                delete newAttrs.dir;
                tr.setNodeMarkup(pos, void 0, newAttrs);
            });
        }
        return true;
    };
// src/commands/updateAttributes.ts
var updateAttributes = (typeOrName, attributes = {})=>({ tr, state, dispatch })=>{
        let nodeType = null;
        let markType = null;
        const schemaType = getSchemaTypeNameByName(typeof typeOrName === "string" ? typeOrName : typeOrName.name, state.schema);
        if (!schemaType) {
            return false;
        }
        if (schemaType === "node") {
            nodeType = getNodeType(typeOrName, state.schema);
        }
        if (schemaType === "mark") {
            markType = getMarkType(typeOrName, state.schema);
        }
        let canUpdate = false;
        tr.selection.ranges.forEach((range)=>{
            const from = range.$from.pos;
            const to = range.$to.pos;
            let lastPos;
            let lastNode;
            let trimmedFrom;
            let trimmedTo;
            if (tr.selection.empty) {
                state.doc.nodesBetween(from, to, (node, pos)=>{
                    if (nodeType && nodeType === node.type) {
                        canUpdate = true;
                        trimmedFrom = Math.max(pos, from);
                        trimmedTo = Math.min(pos + node.nodeSize, to);
                        lastPos = pos;
                        lastNode = node;
                    }
                });
            } else {
                state.doc.nodesBetween(from, to, (node, pos)=>{
                    if (pos < from && nodeType && nodeType === node.type) {
                        canUpdate = true;
                        trimmedFrom = Math.max(pos, from);
                        trimmedTo = Math.min(pos + node.nodeSize, to);
                        lastPos = pos;
                        lastNode = node;
                    }
                    if (pos >= from && pos <= to) {
                        if (nodeType && nodeType === node.type) {
                            canUpdate = true;
                            if (dispatch) {
                                tr.setNodeMarkup(pos, void 0, {
                                    ...node.attrs,
                                    ...attributes
                                });
                            }
                        }
                        if (markType && node.marks.length) {
                            node.marks.forEach((mark)=>{
                                if (markType === mark.type) {
                                    canUpdate = true;
                                    if (dispatch) {
                                        const trimmedFrom2 = Math.max(pos, from);
                                        const trimmedTo2 = Math.min(pos + node.nodeSize, to);
                                        tr.addMark(trimmedFrom2, trimmedTo2, markType.create({
                                            ...mark.attrs,
                                            ...attributes
                                        }));
                                    }
                                }
                            });
                        }
                    }
                });
            }
            if (lastNode) {
                if (lastPos !== void 0 && dispatch) {
                    tr.setNodeMarkup(lastPos, void 0, {
                        ...lastNode.attrs,
                        ...attributes
                    });
                }
                if (markType && lastNode.marks.length) {
                    lastNode.marks.forEach((mark)=>{
                        if (markType === mark.type && dispatch) {
                            tr.addMark(trimmedFrom, trimmedTo, markType.create({
                                ...mark.attrs,
                                ...attributes
                            }));
                        }
                    });
                }
            }
        });
        return canUpdate;
    };
;
var wrapIn = (typeOrName, attributes = {})=>({ state, dispatch })=>{
        const type = getNodeType(typeOrName, state.schema);
        return originalWrapIn(type, attributes)(state, dispatch);
    };
;
var wrapInList = (typeOrName, attributes = {})=>({ state, dispatch })=>{
        const type = getNodeType(typeOrName, state.schema);
        return originalWrapInList(type, attributes)(state, dispatch);
    };
;
;
// src/EventEmitter.ts
var EventEmitter = class {
    constructor(){
        this.callbacks = {};
    }
    on(event, fn) {
        if (!this.callbacks[event]) {
            this.callbacks[event] = [];
        }
        this.callbacks[event].push(fn);
        return this;
    }
    emit(event, ...args) {
        const callbacks = this.callbacks[event];
        if (callbacks) {
            callbacks.forEach((callback)=>callback.apply(this, args));
        }
        return this;
    }
    off(event, fn) {
        const callbacks = this.callbacks[event];
        if (callbacks) {
            if (fn) {
                this.callbacks[event] = callbacks.filter((callback)=>callback !== fn);
            } else {
                delete this.callbacks[event];
            }
        }
        return this;
    }
    once(event, fn) {
        const onceFn = (...args)=>{
            this.off(event, onceFn);
            fn.apply(this, args);
        };
        return this.on(event, onceFn);
    }
    removeAllListeners() {
        this.callbacks = {};
    }
};
;
;
;
var InputRule = class {
    constructor(config){
        var _a;
        this.find = config.find;
        this.handler = config.handler;
        this.undoable = (_a = config.undoable) != null ? _a : true;
    }
};
var inputRuleMatcherHandler = (text, find)=>{
    if (isRegExp(find)) {
        return find.exec(text);
    }
    const inputRuleMatch = find(text);
    if (!inputRuleMatch) {
        return null;
    }
    const result = [
        inputRuleMatch.text
    ];
    result.index = inputRuleMatch.index;
    result.input = text;
    result.data = inputRuleMatch.data;
    if (inputRuleMatch.replaceWith) {
        if (!inputRuleMatch.text.includes(inputRuleMatch.replaceWith)) {
            console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".');
        }
        result.push(inputRuleMatch.replaceWith);
    }
    return result;
};
function run(config) {
    var _a;
    const { editor, from, to, text, rules, plugin } = config;
    const { view } = editor;
    if (view.composing) {
        return false;
    }
    const $from = view.state.doc.resolve(from);
    if (// check for code node
    $from.parent.type.spec.code || // check for code mark
    !!((_a = $from.nodeBefore || $from.nodeAfter) == null ? void 0 : _a.marks.find((mark)=>mark.type.spec.code))) {
        return false;
    }
    let matched = false;
    const textBefore = getTextContentFromNodes($from) + text;
    rules.forEach((rule)=>{
        if (matched) {
            return;
        }
        const match = inputRuleMatcherHandler(textBefore, rule.find);
        if (!match) {
            return;
        }
        const tr = view.state.tr;
        const state = createChainableState({
            state: view.state,
            transaction: tr
        });
        const range = {
            from: from - (match[0].length - text.length),
            to
        };
        const { commands, chain, can } = new CommandManager({
            editor,
            state
        });
        const handler = rule.handler({
            state,
            range,
            match,
            commands,
            chain,
            can
        });
        if (handler === null || !tr.steps.length) {
            return;
        }
        if (rule.undoable) {
            tr.setMeta(plugin, {
                transform: tr,
                from,
                to,
                text
            });
        }
        view.dispatch(tr);
        matched = true;
    });
    return matched;
}
function inputRulesPlugin(props) {
    const { editor, rules } = props;
    const plugin = new Plugin({
        state: {
            init () {
                return null;
            },
            apply (tr, prev, state) {
                const stored = tr.getMeta(plugin);
                if (stored) {
                    return stored;
                }
                const simulatedInputMeta = tr.getMeta("applyInputRules");
                const isSimulatedInput = !!simulatedInputMeta;
                if (isSimulatedInput) {
                    setTimeout(()=>{
                        let { text } = simulatedInputMeta;
                        if (typeof text === "string") {
                            text = text;
                        } else {
                            text = getHTMLFromFragment(Fragment4.from(text), state.schema);
                        }
                        const { from } = simulatedInputMeta;
                        const to = from + text.length;
                        run({
                            editor,
                            from,
                            to,
                            text,
                            rules,
                            plugin
                        });
                    });
                }
                return tr.selectionSet || tr.docChanged ? null : prev;
            }
        },
        props: {
            handleTextInput (view, from, to, text) {
                return run({
                    editor,
                    from,
                    to,
                    text,
                    rules,
                    plugin
                });
            },
            handleDOMEvents: {
                compositionend: (view)=>{
                    setTimeout(()=>{
                        const { $cursor } = view.state.selection;
                        if ($cursor) {
                            run({
                                editor,
                                from: $cursor.pos,
                                to: $cursor.pos,
                                text: "",
                                rules,
                                plugin
                            });
                        }
                    });
                    return false;
                }
            },
            // add support for input rules to trigger on enter
            // this is useful for example for code blocks
            handleKeyDown (view, event) {
                if (event.key !== "Enter") {
                    return false;
                }
                const { $cursor } = view.state.selection;
                if ($cursor) {
                    return run({
                        editor,
                        from: $cursor.pos,
                        to: $cursor.pos,
                        text: "\n",
                        rules,
                        plugin
                    });
                }
                return false;
            }
        },
        // @ts-ignore
        isInputRules: true
    });
    return plugin;
}
// src/utilities/isPlainObject.ts
function getType(value) {
    return Object.prototype.toString.call(value).slice(8, -1);
}
function isPlainObject(value) {
    if (getType(value) !== "Object") {
        return false;
    }
    return value.constructor === Object && Object.getPrototypeOf(value) === Object.prototype;
}
// src/utilities/mergeDeep.ts
function mergeDeep(target, source) {
    const output = {
        ...target
    };
    if (isPlainObject(target) && isPlainObject(source)) {
        Object.keys(source).forEach((key)=>{
            if (isPlainObject(source[key]) && isPlainObject(target[key])) {
                output[key] = mergeDeep(target[key], source[key]);
            } else {
                output[key] = source[key];
            }
        });
    }
    return output;
}
// src/Extendable.ts
var Extendable = class {
    constructor(config = {}){
        this.type = "extendable";
        this.parent = null;
        this.child = null;
        this.name = "";
        this.config = {
            name: this.name
        };
        this.config = {
            ...this.config,
            ...config
        };
        this.name = this.config.name;
    }
    get options() {
        return {
            ...callOrReturn(getExtensionField(this, "addOptions", {
                name: this.name
            })) || {}
        };
    }
    get storage() {
        return {
            ...callOrReturn(getExtensionField(this, "addStorage", {
                name: this.name,
                options: this.options
            })) || {}
        };
    }
    configure(options = {}) {
        const extension = this.extend({
            ...this.config,
            addOptions: ()=>{
                return mergeDeep(this.options, options);
            }
        });
        extension.name = this.name;
        extension.parent = this.parent;
        return extension;
    }
    extend(extendedConfig = {}) {
        const extension = new this.constructor({
            ...this.config,
            ...extendedConfig
        });
        extension.parent = this;
        this.child = extension;
        extension.name = "name" in extendedConfig ? extendedConfig.name : extension.parent.name;
        return extension;
    }
};
// src/Mark.ts
var Mark = class _Mark extends Extendable {
    constructor(){
        super(...arguments);
        this.type = "mark";
    }
    /**
   * Create a new Mark instance
   * @param config - Mark configuration object or a function that returns a configuration object
   */ static create(config = {}) {
        const resolvedConfig = typeof config === "function" ? config() : config;
        return new _Mark(resolvedConfig);
    }
    static handleExit({ editor, mark }) {
        const { tr } = editor.state;
        const currentPos = editor.state.selection.$from;
        const isAtEnd = currentPos.pos === currentPos.end();
        if (isAtEnd) {
            const currentMarks = currentPos.marks();
            const isInMark = !!currentMarks.find((m)=>(m == null ? void 0 : m.type.name) === mark.name);
            if (!isInMark) {
                return false;
            }
            const removeMark = currentMarks.find((m)=>(m == null ? void 0 : m.type.name) === mark.name);
            if (removeMark) {
                tr.removeStoredMark(removeMark);
            }
            tr.insertText(" ", currentPos.pos);
            editor.view.dispatch(tr);
            return true;
        }
        return false;
    }
    configure(options) {
        return super.configure(options);
    }
    extend(extendedConfig) {
        const resolvedConfig = typeof extendedConfig === "function" ? extendedConfig() : extendedConfig;
        return super.extend(resolvedConfig);
    }
};
;
;
// src/utilities/isNumber.ts
function isNumber(value) {
    return typeof value === "number";
}
// src/PasteRule.ts
var PasteRule = class {
    constructor(config){
        this.find = config.find;
        this.handler = config.handler;
    }
};
var pasteRuleMatcherHandler = (text, find, event)=>{
    if (isRegExp(find)) {
        return [
            ...text.matchAll(find)
        ];
    }
    const matches = find(text, event);
    if (!matches) {
        return [];
    }
    return matches.map((pasteRuleMatch)=>{
        const result = [
            pasteRuleMatch.text
        ];
        result.index = pasteRuleMatch.index;
        result.input = text;
        result.data = pasteRuleMatch.data;
        if (pasteRuleMatch.replaceWith) {
            if (!pasteRuleMatch.text.includes(pasteRuleMatch.replaceWith)) {
                console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".');
            }
            result.push(pasteRuleMatch.replaceWith);
        }
        return result;
    });
};
function run2(config) {
    const { editor, state, from, to, rule, pasteEvent, dropEvent } = config;
    const { commands, chain, can } = new CommandManager({
        editor,
        state
    });
    const handlers = [];
    state.doc.nodesBetween(from, to, (node, pos)=>{
        var _a, _b, _c, _d, _e;
        if (((_b = (_a = node.type) == null ? void 0 : _a.spec) == null ? void 0 : _b.code) || !(node.isText || node.isTextblock || node.isInline)) {
            return;
        }
        const contentSize = (_e = (_d = (_c = node.content) == null ? void 0 : _c.size) != null ? _d : node.nodeSize) != null ? _e : 0;
        const resolvedFrom = Math.max(from, pos);
        const resolvedTo = Math.min(to, pos + contentSize);
        if (resolvedFrom >= resolvedTo) {
            return;
        }
        const textToMatch = node.isText ? node.text || "" : node.textBetween(resolvedFrom - pos, resolvedTo - pos, void 0, "\uFFFC");
        const matches = pasteRuleMatcherHandler(textToMatch, rule.find, pasteEvent);
        matches.forEach((match)=>{
            if (match.index === void 0) {
                return;
            }
            const start = resolvedFrom + match.index + 1;
            const end = start + match[0].length;
            const range = {
                from: state.tr.mapping.map(start),
                to: state.tr.mapping.map(end)
            };
            const handler = rule.handler({
                state,
                range,
                match,
                commands,
                chain,
                can,
                pasteEvent,
                dropEvent
            });
            handlers.push(handler);
        });
    });
    const success = handlers.every((handler)=>handler !== null);
    return success;
}
var tiptapDragFromOtherEditor = null;
var createClipboardPasteEvent = (text)=>{
    var _a;
    const event = new ClipboardEvent("paste", {
        clipboardData: new DataTransfer()
    });
    (_a = event.clipboardData) == null ? void 0 : _a.setData("text/html", text);
    return event;
};
function pasteRulesPlugin(props) {
    const { editor, rules } = props;
    let dragSourceElement = null;
    let isPastedFromProseMirror = false;
    let isDroppedFromProseMirror = false;
    let pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
    let dropEvent;
    try {
        dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
    } catch  {
        dropEvent = null;
    }
    const processEvent = ({ state, from, to, rule, pasteEvt })=>{
        const tr = state.tr;
        const chainableState = createChainableState({
            state,
            transaction: tr
        });
        const handler = run2({
            editor,
            state: chainableState,
            from: Math.max(from - 1, 0),
            to: to.b - 1,
            rule,
            pasteEvent: pasteEvt,
            dropEvent
        });
        if (!handler || !tr.steps.length) {
            return;
        }
        try {
            dropEvent = typeof DragEvent !== "undefined" ? new DragEvent("drop") : null;
        } catch  {
            dropEvent = null;
        }
        pasteEvent = typeof ClipboardEvent !== "undefined" ? new ClipboardEvent("paste") : null;
        return tr;
    };
    const plugins = rules.map((rule)=>{
        return new Plugin2({
            // we register a global drag handler to track the current drag source element
            view (view) {
                const handleDragstart = (event)=>{
                    var _a;
                    dragSourceElement = ((_a = view.dom.parentElement) == null ? void 0 : _a.contains(event.target)) ? view.dom.parentElement : null;
                    if (dragSourceElement) {
                        tiptapDragFromOtherEditor = editor;
                    }
                };
                const handleDragend = ()=>{
                    if (tiptapDragFromOtherEditor) {
                        tiptapDragFromOtherEditor = null;
                    }
                };
                window.addEventListener("dragstart", handleDragstart);
                window.addEventListener("dragend", handleDragend);
                return {
                    destroy () {
                        window.removeEventListener("dragstart", handleDragstart);
                        window.removeEventListener("dragend", handleDragend);
                    }
                };
            },
            props: {
                handleDOMEvents: {
                    drop: (view, event)=>{
                        isDroppedFromProseMirror = dragSourceElement === view.dom.parentElement;
                        dropEvent = event;
                        if (!isDroppedFromProseMirror) {
                            const dragFromOtherEditor = tiptapDragFromOtherEditor;
                            if (dragFromOtherEditor == null ? void 0 : dragFromOtherEditor.isEditable) {
                                setTimeout(()=>{
                                    const selection = dragFromOtherEditor.state.selection;
                                    if (selection) {
                                        dragFromOtherEditor.commands.deleteRange({
                                            from: selection.from,
                                            to: selection.to
                                        });
                                    }
                                }, 10);
                            }
                        }
                        return false;
                    },
                    paste: (_view, event)=>{
                        var _a;
                        const html = (_a = event.clipboardData) == null ? void 0 : _a.getData("text/html");
                        pasteEvent = event;
                        isPastedFromProseMirror = !!(html == null ? void 0 : html.includes("data-pm-slice"));
                        return false;
                    }
                }
            },
            appendTransaction: (transactions, oldState, state)=>{
                const transaction = transactions[0];
                const isPaste = transaction.getMeta("uiEvent") === "paste" && !isPastedFromProseMirror;
                const isDrop = transaction.getMeta("uiEvent") === "drop" && !isDroppedFromProseMirror;
                const simulatedPasteMeta = transaction.getMeta("applyPasteRules");
                const isSimulatedPaste = !!simulatedPasteMeta;
                if (!isPaste && !isDrop && !isSimulatedPaste) {
                    return;
                }
                if (isSimulatedPaste) {
                    let { text } = simulatedPasteMeta;
                    if (typeof text === "string") {
                        text = text;
                    } else {
                        text = getHTMLFromFragment(Fragment5.from(text), state.schema);
                    }
                    const { from: from2 } = simulatedPasteMeta;
                    const to2 = from2 + text.length;
                    const pasteEvt = createClipboardPasteEvent(text);
                    return processEvent({
                        rule,
                        state,
                        from: from2,
                        to: {
                            b: to2
                        },
                        pasteEvt
                    });
                }
                const from = oldState.doc.content.findDiffStart(state.doc.content);
                const to = oldState.doc.content.findDiffEnd(state.doc.content);
                if (!isNumber(from) || !to || from === to.b) {
                    return;
                }
                return processEvent({
                    rule,
                    state,
                    from,
                    to,
                    pasteEvt: pasteEvent
                });
            }
        });
    });
    return plugins;
}
// src/ExtensionManager.ts
var ExtensionManager = class {
    constructor(extensions, editor){
        this.splittableMarks = [];
        this.editor = editor;
        this.baseExtensions = extensions;
        this.extensions = resolveExtensions(extensions);
        this.schema = getSchemaByResolvedExtensions(this.extensions, editor);
        this.setupExtensions();
    }
    /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */ get commands() {
        return this.extensions.reduce((commands, extension)=>{
            const context = {
                name: extension.name,
                options: extension.options,
                storage: this.editor.extensionStorage[extension.name],
                editor: this.editor,
                type: getSchemaTypeByName(extension.name, this.schema)
            };
            const addCommands = getExtensionField(extension, "addCommands", context);
            if (!addCommands) {
                return commands;
            }
            return {
                ...commands,
                ...addCommands()
            };
        }, {});
    }
    /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */ get plugins() {
        const { editor } = this;
        const extensions = sortExtensions([
            ...this.extensions
        ].reverse());
        const allPlugins = extensions.flatMap((extension)=>{
            const context = {
                name: extension.name,
                options: extension.options,
                storage: this.editor.extensionStorage[extension.name],
                editor,
                type: getSchemaTypeByName(extension.name, this.schema)
            };
            const plugins = [];
            const addKeyboardShortcuts = getExtensionField(extension, "addKeyboardShortcuts", context);
            let defaultBindings = {};
            if (extension.type === "mark" && getExtensionField(extension, "exitable", context)) {
                defaultBindings.ArrowRight = ()=>Mark.handleExit({
                        editor,
                        mark: extension
                    });
            }
            if (addKeyboardShortcuts) {
                const bindings = Object.fromEntries(Object.entries(addKeyboardShortcuts()).map(([shortcut, method])=>{
                    return [
                        shortcut,
                        ()=>method({
                                editor
                            })
                    ];
                }));
                defaultBindings = {
                    ...defaultBindings,
                    ...bindings
                };
            }
            const keyMapPlugin = keymap(defaultBindings);
            plugins.push(keyMapPlugin);
            const addInputRules = getExtensionField(extension, "addInputRules", context);
            if (isExtensionRulesEnabled(extension, editor.options.enableInputRules) && addInputRules) {
                const rules = addInputRules();
                if (rules && rules.length) {
                    const inputResult = inputRulesPlugin({
                        editor,
                        rules
                    });
                    const inputPlugins = Array.isArray(inputResult) ? inputResult : [
                        inputResult
                    ];
                    plugins.push(...inputPlugins);
                }
            }
            const addPasteRules = getExtensionField(extension, "addPasteRules", context);
            if (isExtensionRulesEnabled(extension, editor.options.enablePasteRules) && addPasteRules) {
                const rules = addPasteRules();
                if (rules && rules.length) {
                    const pasteRules = pasteRulesPlugin({
                        editor,
                        rules
                    });
                    plugins.push(...pasteRules);
                }
            }
            const addProseMirrorPlugins = getExtensionField(extension, "addProseMirrorPlugins", context);
            if (addProseMirrorPlugins) {
                const proseMirrorPlugins = addProseMirrorPlugins();
                plugins.push(...proseMirrorPlugins);
            }
            return plugins;
        });
        return allPlugins;
    }
    /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */ get attributes() {
        return getAttributesFromExtensions(this.extensions);
    }
    /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */ get nodeViews() {
        const { editor } = this;
        const { nodeExtensions } = splitExtensions(this.extensions);
        return Object.fromEntries(nodeExtensions.filter((extension)=>!!getExtensionField(extension, "addNodeView")).map((extension)=>{
            const extensionAttributes = this.attributes.filter((attribute)=>attribute.type === extension.name);
            const context = {
                name: extension.name,
                options: extension.options,
                storage: this.editor.extensionStorage[extension.name],
                editor,
                type: getNodeType(extension.name, this.schema)
            };
            const addNodeView = getExtensionField(extension, "addNodeView", context);
            if (!addNodeView) {
                return [];
            }
            const nodeViewResult = addNodeView();
            if (!nodeViewResult) {
                return [];
            }
            const nodeview = (node, view, getPos, decorations, innerDecorations)=>{
                const HTMLAttributes = getRenderedAttributes(node, extensionAttributes);
                return nodeViewResult({
                    // pass-through
                    node,
                    view,
                    getPos,
                    decorations,
                    innerDecorations,
                    // tiptap-specific
                    editor,
                    extension,
                    HTMLAttributes
                });
            };
            return [
                extension.name,
                nodeview
            ];
        }));
    }
    /**
   * Get the composed dispatchTransaction function from all extensions.
   * @param baseDispatch The base dispatch function (e.g. from the editor or user props)
   * @returns A composed dispatch function
   */ dispatchTransaction(baseDispatch) {
        const { editor } = this;
        const extensions = sortExtensions([
            ...this.extensions
        ].reverse());
        return extensions.reduceRight((next, extension)=>{
            const context = {
                name: extension.name,
                options: extension.options,
                storage: this.editor.extensionStorage[extension.name],
                editor,
                type: getSchemaTypeByName(extension.name, this.schema)
            };
            const dispatchTransaction = getExtensionField(extension, "dispatchTransaction", context);
            if (!dispatchTransaction) {
                return next;
            }
            return (transaction)=>{
                dispatchTransaction.call(context, {
                    transaction,
                    next
                });
            };
        }, baseDispatch);
    }
    /**
   * Get the composed transformPastedHTML function from all extensions.
   * @param baseTransform The base transform function (e.g. from the editor props)
   * @returns A composed transform function that chains all extension transforms
   */ transformPastedHTML(baseTransform) {
        const { editor } = this;
        const extensions = sortExtensions([
            ...this.extensions
        ]);
        return extensions.reduce((transform, extension)=>{
            const context = {
                name: extension.name,
                options: extension.options,
                storage: this.editor.extensionStorage[extension.name],
                editor,
                type: getSchemaTypeByName(extension.name, this.schema)
            };
            const extensionTransform = getExtensionField(extension, "transformPastedHTML", context);
            if (!extensionTransform) {
                return transform;
            }
            return (html, view)=>{
                const transformedHtml = transform(html, view);
                return extensionTransform.call(context, transformedHtml);
            };
        }, baseTransform || ((html)=>html));
    }
    get markViews() {
        const { editor } = this;
        const { markExtensions } = splitExtensions(this.extensions);
        return Object.fromEntries(markExtensions.filter((extension)=>!!getExtensionField(extension, "addMarkView")).map((extension)=>{
            const extensionAttributes = this.attributes.filter((attribute)=>attribute.type === extension.name);
            const context = {
                name: extension.name,
                options: extension.options,
                storage: this.editor.extensionStorage[extension.name],
                editor,
                type: getMarkType(extension.name, this.schema)
            };
            const addMarkView = getExtensionField(extension, "addMarkView", context);
            if (!addMarkView) {
                return [];
            }
            const markView = (mark, view, inline)=>{
                const HTMLAttributes = getRenderedAttributes(mark, extensionAttributes);
                return addMarkView()({
                    // pass-through
                    mark,
                    view,
                    inline,
                    // tiptap-specific
                    editor,
                    extension,
                    HTMLAttributes,
                    updateAttributes: (attrs)=>{
                        updateMarkViewAttributes(mark, editor, attrs);
                    }
                });
            };
            return [
                extension.name,
                markView
            ];
        }));
    }
    /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */ setupExtensions() {
        const extensions = this.extensions;
        this.editor.extensionStorage = Object.fromEntries(extensions.map((extension)=>[
                extension.name,
                extension.storage
            ]));
        extensions.forEach((extension)=>{
            var _a;
            const context = {
                name: extension.name,
                options: extension.options,
                storage: this.editor.extensionStorage[extension.name],
                editor: this.editor,
                type: getSchemaTypeByName(extension.name, this.schema)
            };
            if (extension.type === "mark") {
                const keepOnSplit = (_a = callOrReturn(getExtensionField(extension, "keepOnSplit", context))) != null ? _a : true;
                if (keepOnSplit) {
                    this.splittableMarks.push(extension.name);
                }
            }
            const onBeforeCreate = getExtensionField(extension, "onBeforeCreate", context);
            const onCreate = getExtensionField(extension, "onCreate", context);
            const onUpdate = getExtensionField(extension, "onUpdate", context);
            const onSelectionUpdate = getExtensionField(extension, "onSelectionUpdate", context);
            const onTransaction = getExtensionField(extension, "onTransaction", context);
            const onFocus = getExtensionField(extension, "onFocus", context);
            const onBlur = getExtensionField(extension, "onBlur", context);
            const onDestroy = getExtensionField(extension, "onDestroy", context);
            if (onBeforeCreate) {
                this.editor.on("beforeCreate", onBeforeCreate);
            }
            if (onCreate) {
                this.editor.on("create", onCreate);
            }
            if (onUpdate) {
                this.editor.on("update", onUpdate);
            }
            if (onSelectionUpdate) {
                this.editor.on("selectionUpdate", onSelectionUpdate);
            }
            if (onTransaction) {
                this.editor.on("transaction", onTransaction);
            }
            if (onFocus) {
                this.editor.on("focus", onFocus);
            }
            if (onBlur) {
                this.editor.on("blur", onBlur);
            }
            if (onDestroy) {
                this.editor.on("destroy", onDestroy);
            }
        });
    }
};
ExtensionManager.resolve = resolveExtensions;
ExtensionManager.sort = sortExtensions;
ExtensionManager.flatten = flattenExtensions;
// src/extensions/index.ts
var extensions_exports = {};
__export(extensions_exports, {
    ClipboardTextSerializer: ()=>ClipboardTextSerializer,
    Commands: ()=>Commands,
    Delete: ()=>Delete,
    Drop: ()=>Drop,
    Editable: ()=>Editable,
    FocusEvents: ()=>FocusEvents,
    Keymap: ()=>Keymap,
    Paste: ()=>Paste,
    Tabindex: ()=>Tabindex,
    TextDirection: ()=>TextDirection,
    focusEventsPluginKey: ()=>focusEventsPluginKey
});
;
// src/Extension.ts
var Extension = class _Extension extends Extendable {
    constructor(){
        super(...arguments);
        this.type = "extension";
    }
    /**
   * Create a new Extension instance
   * @param config - Extension configuration object or a function that returns a configuration object
   */ static create(config = {}) {
        const resolvedConfig = typeof config === "function" ? config() : config;
        return new _Extension(resolvedConfig);
    }
    configure(options) {
        return super.configure(options);
    }
    extend(extendedConfig) {
        const resolvedConfig = typeof extendedConfig === "function" ? extendedConfig() : extendedConfig;
        return super.extend(resolvedConfig);
    }
};
// src/extensions/clipboardTextSerializer.ts
var ClipboardTextSerializer = Extension.create({
    name: "clipboardTextSerializer",
    addOptions () {
        return {
            blockSeparator: void 0
        };
    },
    addProseMirrorPlugins () {
        return [
            new Plugin3({
                key: new PluginKey("clipboardTextSerializer"),
                props: {
                    clipboardTextSerializer: ()=>{
                        const { editor } = this;
                        const { state, schema } = editor;
                        const { doc, selection } = state;
                        const { ranges } = selection;
                        const from = Math.min(...ranges.map((range2)=>range2.$from.pos));
                        const to = Math.max(...ranges.map((range2)=>range2.$to.pos));
                        const textSerializers = getTextSerializersFromSchema(schema);
                        const range = {
                            from,
                            to
                        };
                        return getTextBetween(doc, range, {
                            ...this.options.blockSeparator !== void 0 ? {
                                blockSeparator: this.options.blockSeparator
                            } : {},
                            textSerializers
                        });
                    }
                }
            })
        ];
    }
});
// src/extensions/commands.ts
var Commands = Extension.create({
    name: "commands",
    addCommands () {
        return {
            ...commands_exports
        };
    }
});
;
var Delete = Extension.create({
    name: "delete",
    onUpdate ({ transaction, appendedTransactions }) {
        var _a, _b, _c;
        const callback = ()=>{
            var _a2, _b2, _c2, _d;
            if ((_d = (_c2 = (_b2 = (_a2 = this.editor.options.coreExtensionOptions) == null ? void 0 : _a2.delete) == null ? void 0 : _b2.filterTransaction) == null ? void 0 : _c2.call(_b2, transaction)) != null ? _d : transaction.getMeta("y-sync$")) {
                return;
            }
            const nextTransaction = combineTransactionSteps(transaction.before, [
                transaction,
                ...appendedTransactions
            ]);
            const changes = getChangedRanges(nextTransaction);
            changes.forEach((change)=>{
                if (nextTransaction.mapping.mapResult(change.oldRange.from).deletedAfter && nextTransaction.mapping.mapResult(change.oldRange.to).deletedBefore) {
                    nextTransaction.before.nodesBetween(change.oldRange.from, change.oldRange.to, (node, from)=>{
                        const to = from + node.nodeSize - 2;
                        const isFullyWithinRange = change.oldRange.from <= from && to <= change.oldRange.to;
                        this.editor.emit("delete", {
                            type: "node",
                            node,
                            from,
                            to,
                            newFrom: nextTransaction.mapping.map(from),
                            newTo: nextTransaction.mapping.map(to),
                            deletedRange: change.oldRange,
                            newRange: change.newRange,
                            partial: !isFullyWithinRange,
                            editor: this.editor,
                            transaction,
                            combinedTransform: nextTransaction
                        });
                    });
                }
            });
            const mapping = nextTransaction.mapping;
            nextTransaction.steps.forEach((step, index)=>{
                var _a3, _b3;
                if (step instanceof RemoveMarkStep) {
                    const newStart = mapping.slice(index).map(step.from, -1);
                    const newEnd = mapping.slice(index).map(step.to);
                    const oldStart = mapping.invert().map(newStart, -1);
                    const oldEnd = mapping.invert().map(newEnd);
                    const foundBeforeMark = (_a3 = nextTransaction.doc.nodeAt(newStart - 1)) == null ? void 0 : _a3.marks.some((mark)=>mark.eq(step.mark));
                    const foundAfterMark = (_b3 = nextTransaction.doc.nodeAt(newEnd)) == null ? void 0 : _b3.marks.some((mark)=>mark.eq(step.mark));
                    this.editor.emit("delete", {
                        type: "mark",
                        mark: step.mark,
                        from: step.from,
                        to: step.to,
                        deletedRange: {
                            from: oldStart,
                            to: oldEnd
                        },
                        newRange: {
                            from: newStart,
                            to: newEnd
                        },
                        partial: Boolean(foundAfterMark || foundBeforeMark),
                        editor: this.editor,
                        transaction,
                        combinedTransform: nextTransaction
                    });
                }
            });
        };
        if ((_c = (_b = (_a = this.editor.options.coreExtensionOptions) == null ? void 0 : _a.delete) == null ? void 0 : _b.async) != null ? _c : true) {
            setTimeout(callback, 0);
        } else {
            callback();
        }
    }
});
;
var Drop = Extension.create({
    name: "drop",
    addProseMirrorPlugins () {
        return [
            new Plugin4({
                key: new PluginKey2("tiptapDrop"),
                props: {
                    handleDrop: (_, e, slice, moved)=>{
                        this.editor.emit("drop", {
                            editor: this.editor,
                            event: e,
                            slice,
                            moved
                        });
                    }
                }
            })
        ];
    }
});
;
var Editable = Extension.create({
    name: "editable",
    addProseMirrorPlugins () {
        return [
            new Plugin5({
                key: new PluginKey3("editable"),
                props: {
                    editable: ()=>this.editor.options.editable
                }
            })
        ];
    }
});
;
var focusEventsPluginKey = new PluginKey4("focusEvents");
var FocusEvents = Extension.create({
    name: "focusEvents",
    addProseMirrorPlugins () {
        const { editor } = this;
        return [
            new Plugin6({
                key: focusEventsPluginKey,
                props: {
                    handleDOMEvents: {
                        focus: (view, event)=>{
                            editor.isFocused = true;
                            const transaction = editor.state.tr.setMeta("focus", {
                                event
                            }).setMeta("addToHistory", false);
                            view.dispatch(transaction);
                            return false;
                        },
                        blur: (view, event)=>{
                            editor.isFocused = false;
                            const transaction = editor.state.tr.setMeta("blur", {
                                event
                            }).setMeta("addToHistory", false);
                            view.dispatch(transaction);
                            return false;
                        }
                    }
                }
            })
        ];
    }
});
;
var Keymap = Extension.create({
    name: "keymap",
    addKeyboardShortcuts () {
        const handleBackspace = ()=>this.editor.commands.first(({ commands })=>[
                    ()=>commands.undoInputRule(),
                    // maybe convert first text block node to default node
                    ()=>commands.command(({ tr })=>{
                            const { selection, doc } = tr;
                            const { empty, $anchor } = selection;
                            const { pos, parent } = $anchor;
                            const $parentPos = $anchor.parent.isTextblock && pos > 0 ? tr.doc.resolve(pos - 1) : $anchor;
                            const parentIsIsolating = $parentPos.parent.type.spec.isolating;
                            const parentPos = $anchor.pos - $anchor.parentOffset;
                            const isAtStart = parentIsIsolating && $parentPos.parent.childCount === 1 ? parentPos === $anchor.pos : Selection3.atStart(doc).from === pos;
                            if (!empty || !parent.type.isTextblock || parent.textContent.length || !isAtStart || isAtStart && $anchor.parent.type.name === "paragraph") {
                                return false;
                            }
                            return commands.clearNodes();
                        }),
                    ()=>commands.deleteSelection(),
                    ()=>commands.joinBackward(),
                    ()=>commands.selectNodeBackward()
                ]);
        const handleDelete = ()=>this.editor.commands.first(({ commands })=>[
                    ()=>commands.deleteSelection(),
                    ()=>commands.deleteCurrentNode(),
                    ()=>commands.joinForward(),
                    ()=>commands.selectNodeForward()
                ]);
        const handleEnter = ()=>this.editor.commands.first(({ commands })=>[
                    ()=>commands.newlineInCode(),
                    ()=>commands.createParagraphNear(),
                    ()=>commands.liftEmptyBlock(),
                    ()=>commands.splitBlock()
                ]);
        const baseKeymap = {
            Enter: handleEnter,
            "Mod-Enter": ()=>this.editor.commands.exitCode(),
            Backspace: handleBackspace,
            "Mod-Backspace": handleBackspace,
            "Shift-Backspace": handleBackspace,
            Delete: handleDelete,
            "Mod-Delete": handleDelete,
            "Mod-a": ()=>this.editor.commands.selectAll()
        };
        const pcKeymap = {
            ...baseKeymap
        };
        const macKeymap = {
            ...baseKeymap,
            "Ctrl-h": handleBackspace,
            "Alt-Backspace": handleBackspace,
            "Ctrl-d": handleDelete,
            "Ctrl-Alt-Backspace": handleDelete,
            "Alt-Delete": handleDelete,
            "Alt-d": handleDelete,
            "Ctrl-a": ()=>this.editor.commands.selectTextblockStart(),
            "Ctrl-e": ()=>this.editor.commands.selectTextblockEnd()
        };
        if (isiOS() || isMacOS()) {
            return macKeymap;
        }
        return pcKeymap;
    },
    addProseMirrorPlugins () {
        return [
            // With this plugin we check if the whole document was selected and deleted.
            // In this case we will additionally call `clearNodes()` to convert e.g. a heading
            // to a paragraph if necessary.
            // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
            // with many other commands.
            new Plugin7({
                key: new PluginKey5("clearDocument"),
                appendTransaction: (transactions, oldState, newState)=>{
                    if (transactions.some((tr2)=>tr2.getMeta("composition"))) {
                        return;
                    }
                    const docChanges = transactions.some((transaction)=>transaction.docChanged) && !oldState.doc.eq(newState.doc);
                    const ignoreTr = transactions.some((transaction)=>transaction.getMeta("preventClearDocument"));
                    if (!docChanges || ignoreTr) {
                        return;
                    }
                    const { empty, from, to } = oldState.selection;
                    const allFrom = Selection3.atStart(oldState.doc).from;
                    const allEnd = Selection3.atEnd(oldState.doc).to;
                    const allWasSelected = from === allFrom && to === allEnd;
                    if (empty || !allWasSelected) {
                        return;
                    }
                    const isEmpty = isNodeEmpty(newState.doc);
                    if (!isEmpty) {
                        return;
                    }
                    const tr = newState.tr;
                    const state = createChainableState({
                        state: newState,
                        transaction: tr
                    });
                    const { commands } = new CommandManager({
                        editor: this.editor,
                        state
                    });
                    commands.clearNodes();
                    if (!tr.steps.length) {
                        return;
                    }
                    return tr;
                }
            })
        ];
    }
});
;
var Paste = Extension.create({
    name: "paste",
    addProseMirrorPlugins () {
        return [
            new Plugin8({
                key: new PluginKey6("tiptapPaste"),
                props: {
                    handlePaste: (_view, e, slice)=>{
                        this.editor.emit("paste", {
                            editor: this.editor,
                            event: e,
                            slice
                        });
                    }
                }
            })
        ];
    }
});
;
var Tabindex = Extension.create({
    name: "tabindex",
    addProseMirrorPlugins () {
        return [
            new Plugin9({
                key: new PluginKey7("tabindex"),
                props: {
                    attributes: ()=>this.editor.isEditable ? {
                            tabindex: "0"
                        } : {}
                }
            })
        ];
    }
});
;
var TextDirection = Extension.create({
    name: "textDirection",
    addOptions () {
        return {
            direction: void 0
        };
    },
    addGlobalAttributes () {
        if (!this.options.direction) {
            return [];
        }
        const { nodeExtensions } = splitExtensions(this.extensions);
        return [
            {
                types: nodeExtensions.filter((extension)=>extension.name !== "text").map((extension)=>extension.name),
                attributes: {
                    dir: {
                        default: this.options.direction,
                        parseHTML: (element)=>{
                            const dir = element.getAttribute("dir");
                            if (dir && (dir === "ltr" || dir === "rtl" || dir === "auto")) {
                                return dir;
                            }
                            return this.options.direction;
                        },
                        renderHTML: (attributes)=>{
                            if (!attributes.dir) {
                                return {};
                            }
                            return {
                                dir: attributes.dir
                            };
                        }
                    }
                }
            }
        ];
    },
    addProseMirrorPlugins () {
        return [
            new Plugin10({
                key: new PluginKey8("textDirection"),
                props: {
                    attributes: ()=>{
                        const direction = this.options.direction;
                        if (!direction) {
                            return {};
                        }
                        return {
                            dir: direction
                        };
                    }
                }
            })
        ];
    }
});
// src/NodePos.ts
var NodePos = class _NodePos {
    constructor(pos, editor, isBlock = false, node = null){
        this.currentNode = null;
        this.actualDepth = null;
        this.isBlock = isBlock;
        this.resolvedPos = pos;
        this.editor = editor;
        this.currentNode = node;
    }
    get name() {
        return this.node.type.name;
    }
    get node() {
        return this.currentNode || this.resolvedPos.node();
    }
    get element() {
        return this.editor.view.domAtPos(this.pos).node;
    }
    get depth() {
        var _a;
        return (_a = this.actualDepth) != null ? _a : this.resolvedPos.depth;
    }
    get pos() {
        return this.resolvedPos.pos;
    }
    get content() {
        return this.node.content;
    }
    set content(content) {
        let from = this.from;
        let to = this.to;
        if (this.isBlock) {
            if (this.content.size === 0) {
                console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
                return;
            }
            from = this.from + 1;
            to = this.to - 1;
        }
        this.editor.commands.insertContentAt({
            from,
            to
        }, content);
    }
    get attributes() {
        return this.node.attrs;
    }
    get textContent() {
        return this.node.textContent;
    }
    get size() {
        return this.node.nodeSize;
    }
    get from() {
        if (this.isBlock) {
            return this.pos;
        }
        return this.resolvedPos.start(this.resolvedPos.depth);
    }
    get range() {
        return {
            from: this.from,
            to: this.to
        };
    }
    get to() {
        if (this.isBlock) {
            return this.pos + this.size;
        }
        return this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
    }
    get parent() {
        if (this.depth === 0) {
            return null;
        }
        const parentPos = this.resolvedPos.start(this.resolvedPos.depth - 1);
        const $pos = this.resolvedPos.doc.resolve(parentPos);
        return new _NodePos($pos, this.editor);
    }
    get before() {
        let $pos = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
        if ($pos.depth !== this.depth) {
            $pos = this.resolvedPos.doc.resolve(this.from - 3);
        }
        return new _NodePos($pos, this.editor);
    }
    get after() {
        let $pos = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
        if ($pos.depth !== this.depth) {
            $pos = this.resolvedPos.doc.resolve(this.to + 3);
        }
        return new _NodePos($pos, this.editor);
    }
    get children() {
        const children = [];
        this.node.content.forEach((node, offset)=>{
            const isBlock = node.isBlock && !node.isTextblock;
            const isNonTextAtom = node.isAtom && !node.isText;
            const isInline = node.isInline;
            const targetPos = this.pos + offset + (isNonTextAtom ? 0 : 1);
            if (targetPos < 0 || targetPos > this.resolvedPos.doc.nodeSize - 2) {
                return;
            }
            const $pos = this.resolvedPos.doc.resolve(targetPos);
            if (!isBlock && !isInline && $pos.depth <= this.depth) {
                return;
            }
            const childNodePos = new _NodePos($pos, this.editor, isBlock, isBlock || isInline ? node : null);
            if (isBlock) {
                childNodePos.actualDepth = this.depth + 1;
            }
            children.push(childNodePos);
        });
        return children;
    }
    get firstChild() {
        return this.children[0] || null;
    }
    get lastChild() {
        const children = this.children;
        return children[children.length - 1] || null;
    }
    closest(selector, attributes = {}) {
        let node = null;
        let currentNode = this.parent;
        while(currentNode && !node){
            if (currentNode.node.type.name === selector) {
                if (Object.keys(attributes).length > 0) {
                    const nodeAttributes = currentNode.node.attrs;
                    const attrKeys = Object.keys(attributes);
                    for(let index = 0; index < attrKeys.length; index += 1){
                        const key = attrKeys[index];
                        if (nodeAttributes[key] !== attributes[key]) {
                            break;
                        }
                    }
                } else {
                    node = currentNode;
                }
            }
            currentNode = currentNode.parent;
        }
        return node;
    }
    querySelector(selector, attributes = {}) {
        return this.querySelectorAll(selector, attributes, true)[0] || null;
    }
    querySelectorAll(selector, attributes = {}, firstItemOnly = false) {
        let nodes = [];
        if (!this.children || this.children.length === 0) {
            return nodes;
        }
        const attrKeys = Object.keys(attributes);
        this.children.forEach((childPos)=>{
            if (firstItemOnly && nodes.length > 0) {
                return;
            }
            if (childPos.node.type.name === selector) {
                const doesAllAttributesMatch = attrKeys.every((key)=>attributes[key] === childPos.node.attrs[key]);
                if (doesAllAttributesMatch) {
                    nodes.push(childPos);
                }
            }
            if (firstItemOnly && nodes.length > 0) {
                return;
            }
            nodes = nodes.concat(childPos.querySelectorAll(selector, attributes, firstItemOnly));
        });
        return nodes;
    }
    setAttribute(attributes) {
        const { tr } = this.editor.state;
        tr.setNodeMarkup(this.from, void 0, {
            ...this.node.attrs,
            ...attributes
        });
        this.editor.view.dispatch(tr);
    }
};
// src/style.ts
var style = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}`;
// src/utilities/createStyleTag.ts
function createStyleTag(style2, nonce, suffix) {
    const tiptapStyleTag = document.querySelector(`style[data-tiptap-style${suffix ? `-${suffix}` : ""}]`);
    if (tiptapStyleTag !== null) {
        return tiptapStyleTag;
    }
    const styleNode = document.createElement("style");
    if (nonce) {
        styleNode.setAttribute("nonce", nonce);
    }
    styleNode.setAttribute(`data-tiptap-style${suffix ? `-${suffix}` : ""}`, "");
    styleNode.innerHTML = style2;
    document.getElementsByTagName("head")[0].appendChild(styleNode);
    return styleNode;
}
// src/Editor.ts
var Editor = class extends EventEmitter {
    constructor(options = {}){
        super();
        this.css = null;
        this.className = "tiptap";
        this.editorView = null;
        this.isFocused = false;
        /**
     * The editor is considered initialized after the `create` event has been emitted.
     */ this.isInitialized = false;
        this.extensionStorage = {};
        /**
     * A unique ID for this editor instance.
     */ this.instanceId = Math.random().toString(36).slice(2, 9);
        this.options = {
            element: typeof document !== "undefined" ? document.createElement("div") : null,
            content: "",
            injectCSS: true,
            injectNonce: void 0,
            extensions: [],
            autofocus: false,
            editable: true,
            textDirection: void 0,
            editorProps: {},
            parseOptions: {},
            coreExtensionOptions: {},
            enableInputRules: true,
            enablePasteRules: true,
            enableCoreExtensions: true,
            enableContentCheck: false,
            emitContentError: false,
            onBeforeCreate: ()=>null,
            onCreate: ()=>null,
            onMount: ()=>null,
            onUnmount: ()=>null,
            onUpdate: ()=>null,
            onSelectionUpdate: ()=>null,
            onTransaction: ()=>null,
            onFocus: ()=>null,
            onBlur: ()=>null,
            onDestroy: ()=>null,
            onContentError: ({ error })=>{
                throw error;
            },
            onPaste: ()=>null,
            onDrop: ()=>null,
            onDelete: ()=>null,
            enableExtensionDispatchTransaction: true
        };
        this.isCapturingTransaction = false;
        this.capturedTransaction = null;
        /**
     * Returns a set of utilities for working with positions and ranges.
     */ this.utils = {
            getUpdatedPosition,
            createMappablePosition
        };
        this.setOptions(options);
        this.createExtensionManager();
        this.createCommandManager();
        this.createSchema();
        this.on("beforeCreate", this.options.onBeforeCreate);
        this.emit("beforeCreate", {
            editor: this
        });
        this.on("mount", this.options.onMount);
        this.on("unmount", this.options.onUnmount);
        this.on("contentError", this.options.onContentError);
        this.on("create", this.options.onCreate);
        this.on("update", this.options.onUpdate);
        this.on("selectionUpdate", this.options.onSelectionUpdate);
        this.on("transaction", this.options.onTransaction);
        this.on("focus", this.options.onFocus);
        this.on("blur", this.options.onBlur);
        this.on("destroy", this.options.onDestroy);
        this.on("drop", ({ event, slice, moved })=>this.options.onDrop(event, slice, moved));
        this.on("paste", ({ event, slice })=>this.options.onPaste(event, slice));
        this.on("delete", this.options.onDelete);
        const initialDoc = this.createDoc();
        const selection = resolveFocusPosition(initialDoc, this.options.autofocus);
        this.editorState = EditorState.create({
            doc: initialDoc,
            schema: this.schema,
            selection: selection || void 0
        });
        if (this.options.element) {
            this.mount(this.options.element);
        }
    }
    /**
   * Attach the editor to the DOM, creating a new editor view.
   */ mount(el) {
        if (typeof document === "undefined") {
            throw new Error(`[tiptap error]: The editor cannot be mounted because there is no 'document' defined in this environment.`);
        }
        this.createView(el);
        this.emit("mount", {
            editor: this
        });
        if (this.css && !document.head.contains(this.css)) {
            document.head.appendChild(this.css);
        }
        window.setTimeout(()=>{
            if (this.isDestroyed) {
                return;
            }
            if (this.options.autofocus !== false && this.options.autofocus !== null) {
                this.commands.focus(this.options.autofocus);
            }
            this.emit("create", {
                editor: this
            });
            this.isInitialized = true;
        }, 0);
    }
    /**
   * Remove the editor from the DOM, but still allow remounting at a different point in time
   */ unmount() {
        if (this.editorView) {
            const dom = this.editorView.dom;
            if (dom == null ? void 0 : dom.editor) {
                delete dom.editor;
            }
            this.editorView.destroy();
        }
        this.editorView = null;
        this.isInitialized = false;
        if (this.css && !document.querySelectorAll(`.${this.className}`).length) {
            try {
                if (typeof this.css.remove === "function") {
                    this.css.remove();
                } else if (this.css.parentNode) {
                    this.css.parentNode.removeChild(this.css);
                }
            } catch (error) {
                console.warn("Failed to remove CSS element:", error);
            }
        }
        this.css = null;
        this.emit("unmount", {
            editor: this
        });
    }
    /**
   * Returns the editor storage.
   */ get storage() {
        return this.extensionStorage;
    }
    /**
   * An object of all registered commands.
   */ get commands() {
        return this.commandManager.commands;
    }
    /**
   * Create a command chain to call multiple commands at once.
   */ chain() {
        return this.commandManager.chain();
    }
    /**
   * Check if a command or a command chain can be executed. Without executing it.
   */ can() {
        return this.commandManager.can();
    }
    /**
   * Inject CSS styles.
   */ injectCSS() {
        if (this.options.injectCSS && typeof document !== "undefined") {
            this.css = createStyleTag(style, this.options.injectNonce);
        }
    }
    /**
   * Update editor options.
   *
   * @param options A list of options
   */ setOptions(options = {}) {
        this.options = {
            ...this.options,
            ...options
        };
        if (!this.editorView || !this.state || this.isDestroyed) {
            return;
        }
        if (this.options.editorProps) {
            this.view.setProps(this.options.editorProps);
        }
        this.view.updateState(this.state);
    }
    /**
   * Update editable state of the editor.
   */ setEditable(editable, emitUpdate = true) {
        this.setOptions({
            editable
        });
        if (emitUpdate) {
            this.emit("update", {
                editor: this,
                transaction: this.state.tr,
                appendedTransactions: []
            });
        }
    }
    /**
   * Returns whether the editor is editable.
   */ get isEditable() {
        return this.options.editable && this.view && this.view.editable;
    }
    /**
   * Returns the editor view.
   */ get view() {
        if (this.editorView) {
            return this.editorView;
        }
        return new Proxy({
            state: this.editorState,
            updateState: (state)=>{
                this.editorState = state;
            },
            dispatch: (tr)=>{
                this.dispatchTransaction(tr);
            },
            // Stub some commonly accessed properties to prevent errors
            composing: false,
            dragging: null,
            editable: true,
            isDestroyed: false
        }, {
            get: (obj, key)=>{
                if (this.editorView) {
                    return this.editorView[key];
                }
                if (key === "state") {
                    return this.editorState;
                }
                if (key in obj) {
                    return Reflect.get(obj, key);
                }
                throw new Error(`[tiptap error]: The editor view is not available. Cannot access view['${key}']. The editor may not be mounted yet.`);
            }
        });
    }
    /**
   * Returns the editor state.
   */ get state() {
        if (this.editorView) {
            this.editorState = this.view.state;
        }
        return this.editorState;
    }
    /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */ registerPlugin(plugin, handlePlugins) {
        const plugins = isFunction(handlePlugins) ? handlePlugins(plugin, [
            ...this.state.plugins
        ]) : [
            ...this.state.plugins,
            plugin
        ];
        const state = this.state.reconfigure({
            plugins
        });
        this.view.updateState(state);
        return state;
    }
    /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */ unregisterPlugin(nameOrPluginKeyToRemove) {
        if (this.isDestroyed) {
            return void 0;
        }
        const prevPlugins = this.state.plugins;
        let plugins = prevPlugins;
        [].concat(nameOrPluginKeyToRemove).forEach((nameOrPluginKey)=>{
            const name = typeof nameOrPluginKey === "string" ? `${nameOrPluginKey}$` : nameOrPluginKey.key;
            plugins = plugins.filter((plugin)=>!plugin.key.startsWith(name));
        });
        if (prevPlugins.length === plugins.length) {
            return void 0;
        }
        const state = this.state.reconfigure({
            plugins
        });
        this.view.updateState(state);
        return state;
    }
    /**
   * Creates an extension manager.
   */ createExtensionManager() {
        var _a, _b;
        const coreExtensions = this.options.enableCoreExtensions ? [
            Editable,
            ClipboardTextSerializer.configure({
                blockSeparator: (_b = (_a = this.options.coreExtensionOptions) == null ? void 0 : _a.clipboardTextSerializer) == null ? void 0 : _b.blockSeparator
            }),
            Commands,
            FocusEvents,
            Keymap,
            Tabindex,
            Drop,
            Paste,
            Delete,
            TextDirection.configure({
                direction: this.options.textDirection
            })
        ].filter((ext)=>{
            if (typeof this.options.enableCoreExtensions === "object") {
                return this.options.enableCoreExtensions[ext.name] !== false;
            }
            return true;
        }) : [];
        const allExtensions = [
            ...coreExtensions,
            ...this.options.extensions
        ].filter((extension)=>{
            return [
                "extension",
                "node",
                "mark"
            ].includes(extension == null ? void 0 : extension.type);
        });
        this.extensionManager = new ExtensionManager(allExtensions, this);
    }
    /**
   * Creates an command manager.
   */ createCommandManager() {
        this.commandManager = new CommandManager({
            editor: this
        });
    }
    /**
   * Creates a ProseMirror schema.
   */ createSchema() {
        this.schema = this.extensionManager.schema;
    }
    /**
   * Creates the initial document.
   */ createDoc() {
        let doc;
        try {
            doc = createDocument(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: this.options.enableContentCheck
            });
        } catch (e) {
            if (!(e instanceof Error) || ![
                "[tiptap error]: Invalid JSON content",
                "[tiptap error]: Invalid HTML content"
            ].includes(e.message)) {
                throw e;
            }
            this.emit("contentError", {
                editor: this,
                error: e,
                disableCollaboration: ()=>{
                    if ("collaboration" in this.storage && typeof this.storage.collaboration === "object" && this.storage.collaboration) {
                        ;
                        this.storage.collaboration.isDisabled = true;
                    }
                    this.options.extensions = this.options.extensions.filter((extension)=>extension.name !== "collaboration");
                    this.createExtensionManager();
                }
            });
            doc = createDocument(this.options.content, this.schema, this.options.parseOptions, {
                errorOnInvalidContent: false
            });
        }
        return doc;
    }
    /**
   * Creates a ProseMirror view.
   */ createView(element) {
        const { editorProps, enableExtensionDispatchTransaction } = this.options;
        const baseDispatch = editorProps.dispatchTransaction || this.dispatchTransaction.bind(this);
        const dispatch = enableExtensionDispatchTransaction ? this.extensionManager.dispatchTransaction(baseDispatch) : baseDispatch;
        const baseTransformPastedHTML = editorProps.transformPastedHTML;
        const transformPastedHTML = this.extensionManager.transformPastedHTML(baseTransformPastedHTML);
        this.editorView = new EditorView(element, {
            ...editorProps,
            attributes: {
                // add `role="textbox"` to the editor element
                role: "textbox",
                ...editorProps == null ? void 0 : editorProps.attributes
            },
            dispatchTransaction: dispatch,
            transformPastedHTML,
            state: this.editorState,
            markViews: this.extensionManager.markViews,
            nodeViews: this.extensionManager.nodeViews
        });
        const newState = this.state.reconfigure({
            plugins: this.extensionManager.plugins
        });
        this.view.updateState(newState);
        this.prependClass();
        this.injectCSS();
        const dom = this.view.dom;
        dom.editor = this;
    }
    /**
   * Creates all node and mark views.
   */ createNodeViews() {
        if (this.view.isDestroyed) {
            return;
        }
        this.view.setProps({
            markViews: this.extensionManager.markViews,
            nodeViews: this.extensionManager.nodeViews
        });
    }
    /**
   * Prepend class name to element.
   */ prependClass() {
        this.view.dom.className = `${this.className} ${this.view.dom.className}`;
    }
    captureTransaction(fn) {
        this.isCapturingTransaction = true;
        fn();
        this.isCapturingTransaction = false;
        const tr = this.capturedTransaction;
        this.capturedTransaction = null;
        return tr;
    }
    /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */ dispatchTransaction(transaction) {
        if (this.view.isDestroyed) {
            return;
        }
        if (this.isCapturingTransaction) {
            if (!this.capturedTransaction) {
                this.capturedTransaction = transaction;
                return;
            }
            transaction.steps.forEach((step)=>{
                var _a;
                return (_a = this.capturedTransaction) == null ? void 0 : _a.step(step);
            });
            return;
        }
        const { state, transactions } = this.state.applyTransaction(transaction);
        const selectionHasChanged = !this.state.selection.eq(state.selection);
        const rootTrWasApplied = transactions.includes(transaction);
        const prevState = this.state;
        this.emit("beforeTransaction", {
            editor: this,
            transaction,
            nextState: state
        });
        if (!rootTrWasApplied) {
            return;
        }
        this.view.updateState(state);
        this.emit("transaction", {
            editor: this,
            transaction,
            appendedTransactions: transactions.slice(1)
        });
        if (selectionHasChanged) {
            this.emit("selectionUpdate", {
                editor: this,
                transaction
            });
        }
        const mostRecentFocusTr = transactions.findLast((tr)=>tr.getMeta("focus") || tr.getMeta("blur"));
        const focus2 = mostRecentFocusTr == null ? void 0 : mostRecentFocusTr.getMeta("focus");
        const blur2 = mostRecentFocusTr == null ? void 0 : mostRecentFocusTr.getMeta("blur");
        if (focus2) {
            this.emit("focus", {
                editor: this,
                event: focus2.event,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                transaction: mostRecentFocusTr
            });
        }
        if (blur2) {
            this.emit("blur", {
                editor: this,
                event: blur2.event,
                // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
                transaction: mostRecentFocusTr
            });
        }
        if (transaction.getMeta("preventUpdate") || !transactions.some((tr)=>tr.docChanged) || prevState.doc.eq(state.doc)) {
            return;
        }
        this.emit("update", {
            editor: this,
            transaction,
            appendedTransactions: transactions.slice(1)
        });
    }
    /**
   * Get attributes of the currently selected node or mark.
   */ getAttributes(nameOrType) {
        return getAttributes(this.state, nameOrType);
    }
    isActive(nameOrAttributes, attributesOrUndefined) {
        const name = typeof nameOrAttributes === "string" ? nameOrAttributes : null;
        const attributes = typeof nameOrAttributes === "string" ? attributesOrUndefined : nameOrAttributes;
        return isActive(this.state, name, attributes);
    }
    /**
   * Get the document as JSON.
   */ getJSON() {
        return this.state.doc.toJSON();
    }
    /**
   * Get the document as HTML.
   */ getHTML() {
        return getHTMLFromFragment(this.state.doc.content, this.schema);
    }
    /**
   * Get the document as text.
   */ getText(options) {
        const { blockSeparator = "\n\n", textSerializers = {} } = options || {};
        return getText(this.state.doc, {
            blockSeparator,
            textSerializers: {
                ...getTextSerializersFromSchema(this.schema),
                ...textSerializers
            }
        });
    }
    /**
   * Check if there is no content.
   */ get isEmpty() {
        return isNodeEmpty(this.state.doc);
    }
    /**
   * Destroy the editor.
   */ destroy() {
        this.emit("destroy");
        this.unmount();
        this.removeAllListeners();
    }
    /**
   * Check if the editor is already destroyed.
   */ get isDestroyed() {
        var _a, _b;
        return (_b = (_a = this.editorView) == null ? void 0 : _a.isDestroyed) != null ? _b : true;
    }
    $node(selector, attributes) {
        var _a;
        return ((_a = this.$doc) == null ? void 0 : _a.querySelector(selector, attributes)) || null;
    }
    $nodes(selector, attributes) {
        var _a;
        return ((_a = this.$doc) == null ? void 0 : _a.querySelectorAll(selector, attributes)) || null;
    }
    $pos(pos) {
        const $pos = this.state.doc.resolve(pos);
        return new NodePos($pos, this);
    }
    get $doc() {
        return this.$pos(0);
    }
};
// src/inputRules/markInputRule.ts
function markInputRule(config) {
    return new InputRule({
        find: config.find,
        handler: ({ state, range, match })=>{
            const attributes = callOrReturn(config.getAttributes, void 0, match);
            if (attributes === false || attributes === null) {
                return null;
            }
            const { tr } = state;
            const captureGroup = match[match.length - 1];
            const fullMatch = match[0];
            if (captureGroup) {
                const startSpaces = fullMatch.search(/\S/);
                const textStart = range.from + fullMatch.indexOf(captureGroup);
                const textEnd = textStart + captureGroup.length;
                const excludedMarks = getMarksBetween(range.from, range.to, state.doc).filter((item)=>{
                    const excluded = item.mark.type.excluded;
                    return excluded.find((type)=>type === config.type && type !== item.mark.type);
                }).filter((item)=>item.to > textStart);
                if (excludedMarks.length) {
                    return null;
                }
                if (textEnd < range.to) {
                    tr.delete(textEnd, range.to);
                }
                if (textStart > range.from) {
                    tr.delete(range.from + startSpaces, textStart);
                }
                const markEnd = range.from + startSpaces + captureGroup.length;
                tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
                tr.removeStoredMark(config.type);
            }
        },
        undoable: config.undoable
    });
}
// src/inputRules/nodeInputRule.ts
function nodeInputRule(config) {
    return new InputRule({
        find: config.find,
        handler: ({ state, range, match })=>{
            const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
            const { tr } = state;
            const start = range.from;
            let end = range.to;
            const newNode = config.type.create(attributes);
            if (match[1]) {
                const offset = match[0].lastIndexOf(match[1]);
                let matchStart = start + offset;
                if (matchStart > end) {
                    matchStart = end;
                } else {
                    end = matchStart + match[1].length;
                }
                const lastChar = match[0][match[0].length - 1];
                tr.insertText(lastChar, start + match[0].length - 1);
                tr.replaceWith(matchStart, end, newNode);
            } else if (match[0]) {
                const insertionStart = config.type.isInline ? start : start - 1;
                tr.insert(insertionStart, config.type.create(attributes)).delete(tr.mapping.map(start), tr.mapping.map(end));
            }
            tr.scrollIntoView();
        },
        undoable: config.undoable
    });
}
// src/inputRules/textblockTypeInputRule.ts
function textblockTypeInputRule(config) {
    return new InputRule({
        find: config.find,
        handler: ({ state, range, match })=>{
            const $start = state.doc.resolve(range.from);
            const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
            if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), config.type)) {
                return null;
            }
            state.tr.delete(range.from, range.to).setBlockType(range.from, range.from, config.type, attributes);
        },
        undoable: config.undoable
    });
}
// src/inputRules/textInputRule.ts
function textInputRule(config) {
    return new InputRule({
        find: config.find,
        handler: ({ state, range, match })=>{
            let insert = config.replace;
            let start = range.from;
            const end = range.to;
            if (match[1]) {
                const offset = match[0].lastIndexOf(match[1]);
                insert += match[0].slice(offset + match[1].length);
                start += offset;
                const cutOff = start - end;
                if (cutOff > 0) {
                    insert = match[0].slice(offset - cutOff, offset) + insert;
                    start = end;
                }
            }
            state.tr.insertText(insert, start, end);
        },
        undoable: config.undoable
    });
}
;
function wrappingInputRule(config) {
    return new InputRule({
        find: config.find,
        handler: ({ state, range, match, chain })=>{
            const attributes = callOrReturn(config.getAttributes, void 0, match) || {};
            const tr = state.tr.delete(range.from, range.to);
            const $start = tr.doc.resolve(range.from);
            const blockRange = $start.blockRange();
            const wrapping = blockRange && findWrapping(blockRange, config.type, attributes);
            if (!wrapping) {
                return null;
            }
            tr.wrap(blockRange, wrapping);
            if (config.keepMarks && config.editor) {
                const { selection, storedMarks } = state;
                const { splittableMarks } = config.editor.extensionManager;
                const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
                if (marks) {
                    const filteredMarks = marks.filter((mark)=>splittableMarks.includes(mark.type.name));
                    tr.ensureMarks(filteredMarks);
                }
            }
            if (config.keepAttributes) {
                const nodeType = config.type.name === "bulletList" || config.type.name === "orderedList" ? "listItem" : "taskList";
                chain().updateAttributes(nodeType, attributes).run();
            }
            const before = tr.doc.resolve(range.from - 1).nodeBefore;
            if (before && before.type === config.type && canJoin2(tr.doc, range.from - 1) && (!config.joinPredicate || config.joinPredicate(match, before))) {
                tr.join(range.from - 1);
            }
        },
        undoable: config.undoable
    });
}
// src/jsx-runtime.ts
function Fragment6(props) {
    return props.children;
}
var h = (tag, attributes)=>{
    if (tag === "slot") {
        return 0;
    }
    if (tag instanceof Function) {
        return tag(attributes);
    }
    const { children, ...rest } = attributes != null ? attributes : {};
    if (tag === "svg") {
        throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
    }
    return [
        tag,
        rest,
        children
    ];
};
// src/lib/ResizableNodeView.ts
var isTouchEvent = (e)=>{
    return "touches" in e;
};
var ResizableNodeView = class {
    /**
   * Creates a new ResizableNodeView instance.
   *
   * The constructor sets up the resize handles, applies initial sizing from
   * node attributes, and configures all resize behavior options.
   *
   * @param options - Configuration options for the resizable node view
   */ constructor(options){
        /** Active resize handle directions */ this.directions = [
            "bottom-left",
            "bottom-right",
            "top-left",
            "top-right"
        ];
        /** Minimum allowed dimensions */ this.minSize = {
            height: 8,
            width: 8
        };
        /** Whether to always preserve aspect ratio */ this.preserveAspectRatio = false;
        /** CSS class names for elements */ this.classNames = {
            container: "",
            wrapper: "",
            handle: "",
            resizing: ""
        };
        /** Initial width of the element (for aspect ratio calculation) */ this.initialWidth = 0;
        /** Initial height of the element (for aspect ratio calculation) */ this.initialHeight = 0;
        /** Calculated aspect ratio (width / height) */ this.aspectRatio = 1;
        /** Whether a resize operation is currently active */ this.isResizing = false;
        /** The handle currently being dragged */ this.activeHandle = null;
        /** Starting mouse X position when resize began */ this.startX = 0;
        /** Starting mouse Y position when resize began */ this.startY = 0;
        /** Element width when resize began */ this.startWidth = 0;
        /** Element height when resize began */ this.startHeight = 0;
        /** Whether Shift key is currently pressed (for temporary aspect ratio lock) */ this.isShiftKeyPressed = false;
        /** Last known editable state of the editor */ this.lastEditableState = void 0;
        /** Map of handle elements by direction */ this.handleMap = /* @__PURE__ */ new Map();
        /**
     * Handles mouse movement during an active resize.
     *
     * Calculates the delta from the starting position, computes new dimensions
     * based on the active handle direction, applies constraints and aspect ratio,
     * then updates the element's style and calls the onResize callback.
     *
     * @param event - The mouse move event
     */ this.handleMouseMove = (event)=>{
            if (!this.isResizing || !this.activeHandle) {
                return;
            }
            const deltaX = event.clientX - this.startX;
            const deltaY = event.clientY - this.startY;
            this.handleResize(deltaX, deltaY);
        };
        this.handleTouchMove = (event)=>{
            if (!this.isResizing || !this.activeHandle) {
                return;
            }
            const touch = event.touches[0];
            if (!touch) {
                return;
            }
            const deltaX = touch.clientX - this.startX;
            const deltaY = touch.clientY - this.startY;
            this.handleResize(deltaX, deltaY);
        };
        /**
     * Completes the resize operation when the mouse button is released.
     *
     * Captures final dimensions, calls the onCommit callback to persist changes,
     * removes the resizing state and class, and cleans up document-level listeners.
     */ this.handleMouseUp = ()=>{
            if (!this.isResizing) {
                return;
            }
            const finalWidth = this.element.offsetWidth;
            const finalHeight = this.element.offsetHeight;
            this.onCommit(finalWidth, finalHeight);
            this.isResizing = false;
            this.activeHandle = null;
            this.container.dataset.resizeState = "false";
            if (this.classNames.resizing) {
                this.container.classList.remove(this.classNames.resizing);
            }
            document.removeEventListener("mousemove", this.handleMouseMove);
            document.removeEventListener("mouseup", this.handleMouseUp);
            document.removeEventListener("keydown", this.handleKeyDown);
            document.removeEventListener("keyup", this.handleKeyUp);
        };
        /**
     * Tracks Shift key state to enable temporary aspect ratio locking.
     *
     * When Shift is pressed during resize, aspect ratio is preserved even if
     * preserveAspectRatio is false.
     *
     * @param event - The keyboard event
     */ this.handleKeyDown = (event)=>{
            if (event.key === "Shift") {
                this.isShiftKeyPressed = true;
            }
        };
        /**
     * Tracks Shift key release to disable temporary aspect ratio locking.
     *
     * @param event - The keyboard event
     */ this.handleKeyUp = (event)=>{
            if (event.key === "Shift") {
                this.isShiftKeyPressed = false;
            }
        };
        var _a, _b, _c, _d, _e, _f;
        this.node = options.node;
        this.editor = options.editor;
        this.element = options.element;
        this.contentElement = options.contentElement;
        this.getPos = options.getPos;
        this.onResize = options.onResize;
        this.onCommit = options.onCommit;
        this.onUpdate = options.onUpdate;
        if ((_a = options.options) == null ? void 0 : _a.min) {
            this.minSize = {
                ...this.minSize,
                ...options.options.min
            };
        }
        if ((_b = options.options) == null ? void 0 : _b.max) {
            this.maxSize = options.options.max;
        }
        if ((_c = options == null ? void 0 : options.options) == null ? void 0 : _c.directions) {
            this.directions = options.options.directions;
        }
        if ((_d = options.options) == null ? void 0 : _d.preserveAspectRatio) {
            this.preserveAspectRatio = options.options.preserveAspectRatio;
        }
        if ((_e = options.options) == null ? void 0 : _e.className) {
            this.classNames = {
                container: options.options.className.container || "",
                wrapper: options.options.className.wrapper || "",
                handle: options.options.className.handle || "",
                resizing: options.options.className.resizing || ""
            };
        }
        if ((_f = options.options) == null ? void 0 : _f.createCustomHandle) {
            this.createCustomHandle = options.options.createCustomHandle;
        }
        this.wrapper = this.createWrapper();
        this.container = this.createContainer();
        this.applyInitialSize();
        this.attachHandles();
        this.editor.on("update", this.handleEditorUpdate.bind(this));
    }
    /**
   * Returns the top-level DOM node that should be placed in the editor.
   *
   * This is required by the ProseMirror NodeView interface. The container
   * includes the wrapper, handles, and the actual content element.
   *
   * @returns The container element to be inserted into the editor
   */ get dom() {
        return this.container;
    }
    get contentDOM() {
        var _a;
        return (_a = this.contentElement) != null ? _a : null;
    }
    handleEditorUpdate() {
        const isEditable = this.editor.isEditable;
        if (isEditable === this.lastEditableState) {
            return;
        }
        this.lastEditableState = isEditable;
        if (!isEditable) {
            this.removeHandles();
        } else if (isEditable && this.handleMap.size === 0) {
            this.attachHandles();
        }
    }
    /**
   * Called when the node's content or attributes change.
   *
   * Updates the internal node reference. If a custom `onUpdate` callback
   * was provided, it will be called to handle additional update logic.
   *
   * @param node - The new/updated node
   * @param decorations - Node decorations
   * @param innerDecorations - Inner decorations
   * @returns `false` if the node type has changed (requires full rebuild), otherwise the result of `onUpdate` or `true`
   */ update(node, decorations, innerDecorations) {
        if (node.type !== this.node.type) {
            return false;
        }
        this.node = node;
        if (this.onUpdate) {
            return this.onUpdate(node, decorations, innerDecorations);
        }
        return true;
    }
    /**
   * Cleanup method called when the node view is being removed.
   *
   * Removes all event listeners to prevent memory leaks. This is required
   * by the ProseMirror NodeView interface. If a resize is active when
   * destroy is called, it will be properly cancelled.
   */ destroy() {
        if (this.isResizing) {
            this.container.dataset.resizeState = "false";
            if (this.classNames.resizing) {
                this.container.classList.remove(this.classNames.resizing);
            }
            document.removeEventListener("mousemove", this.handleMouseMove);
            document.removeEventListener("mouseup", this.handleMouseUp);
            document.removeEventListener("keydown", this.handleKeyDown);
            document.removeEventListener("keyup", this.handleKeyUp);
            this.isResizing = false;
            this.activeHandle = null;
        }
        this.editor.off("update", this.handleEditorUpdate.bind(this));
        this.container.remove();
    }
    /**
   * Creates the outer container element.
   *
   * The container is the top-level element returned by the NodeView and
   * wraps the entire resizable node. It's set up with flexbox to handle
   * alignment and includes data attributes for styling and identification.
   *
   * @returns The container element
   */ createContainer() {
        const element = document.createElement("div");
        element.dataset.resizeContainer = "";
        element.dataset.node = this.node.type.name;
        element.style.display = "flex";
        if (this.classNames.container) {
            element.className = this.classNames.container;
        }
        element.appendChild(this.wrapper);
        return element;
    }
    /**
   * Creates the wrapper element that contains the content and handles.
   *
   * The wrapper uses relative positioning so that resize handles can be
   * positioned absolutely within it. This is the direct parent of the
   * content element being made resizable.
   *
   * @returns The wrapper element
   */ createWrapper() {
        const element = document.createElement("div");
        element.style.position = "relative";
        element.style.display = "block";
        element.dataset.resizeWrapper = "";
        if (this.classNames.wrapper) {
            element.className = this.classNames.wrapper;
        }
        element.appendChild(this.element);
        return element;
    }
    /**
   * Creates a resize handle element for a specific direction.
   *
   * Each handle is absolutely positioned and includes a data attribute
   * identifying its direction for styling purposes.
   *
   * @param direction - The resize direction for this handle
   * @returns The handle element
   */ createHandle(direction) {
        const handle = document.createElement("div");
        handle.dataset.resizeHandle = direction;
        handle.style.position = "absolute";
        if (this.classNames.handle) {
            handle.className = this.classNames.handle;
        }
        return handle;
    }
    /**
   * Positions a handle element according to its direction.
   *
   * Corner handles (e.g., 'top-left') are positioned at the intersection
   * of two edges. Edge handles (e.g., 'top') span the full width or height.
   *
   * @param handle - The handle element to position
   * @param direction - The direction determining the position
   */ positionHandle(handle, direction) {
        const isTop = direction.includes("top");
        const isBottom = direction.includes("bottom");
        const isLeft = direction.includes("left");
        const isRight = direction.includes("right");
        if (isTop) {
            handle.style.top = "0";
        }
        if (isBottom) {
            handle.style.bottom = "0";
        }
        if (isLeft) {
            handle.style.left = "0";
        }
        if (isRight) {
            handle.style.right = "0";
        }
        if (direction === "top" || direction === "bottom") {
            handle.style.left = "0";
            handle.style.right = "0";
        }
        if (direction === "left" || direction === "right") {
            handle.style.top = "0";
            handle.style.bottom = "0";
        }
    }
    /**
   * Creates and attaches all resize handles to the wrapper.
   *
   * Iterates through the configured directions, creates a handle for each,
   * positions it, attaches the mousedown listener, and appends it to the DOM.
   */ attachHandles() {
        this.directions.forEach((direction)=>{
            let handle;
            if (this.createCustomHandle) {
                handle = this.createCustomHandle(direction);
            } else {
                handle = this.createHandle(direction);
            }
            if (!(handle instanceof HTMLElement)) {
                console.warn(`[ResizableNodeView] createCustomHandle("${direction}") did not return an HTMLElement. Falling back to default handle.`);
                handle = this.createHandle(direction);
            }
            if (!this.createCustomHandle) {
                this.positionHandle(handle, direction);
            }
            handle.addEventListener("mousedown", (event)=>this.handleResizeStart(event, direction));
            handle.addEventListener("touchstart", (event)=>this.handleResizeStart(event, direction));
            this.handleMap.set(direction, handle);
            this.wrapper.appendChild(handle);
        });
    }
    /**
   * Removes all resize handles from the wrapper.
   *
   * Cleans up the handle map and removes each handle element from the DOM.
   */ removeHandles() {
        this.handleMap.forEach((el)=>el.remove());
        this.handleMap.clear();
    }
    /**
   * Applies initial sizing from node attributes to the element.
   *
   * If width/height attributes exist on the node, they're applied to the element.
   * Otherwise, the element's natural/current dimensions are measured. The aspect
   * ratio is calculated for later use in aspect-ratio-preserving resizes.
   */ applyInitialSize() {
        const width = this.node.attrs.width;
        const height = this.node.attrs.height;
        if (width) {
            this.element.style.width = `${width}px`;
            this.initialWidth = width;
        } else {
            this.initialWidth = this.element.offsetWidth;
        }
        if (height) {
            this.element.style.height = `${height}px`;
            this.initialHeight = height;
        } else {
            this.initialHeight = this.element.offsetHeight;
        }
        if (this.initialWidth > 0 && this.initialHeight > 0) {
            this.aspectRatio = this.initialWidth / this.initialHeight;
        }
    }
    /**
   * Initiates a resize operation when a handle is clicked.
   *
   * Captures the starting mouse position and element dimensions, sets up
   * the resize state, adds the resizing class and state attribute, and
   * attaches document-level listeners for mouse movement and keyboard input.
   *
   * @param event - The mouse down event
   * @param direction - The direction of the handle being dragged
   */ handleResizeStart(event, direction) {
        event.preventDefault();
        event.stopPropagation();
        this.isResizing = true;
        this.activeHandle = direction;
        if (isTouchEvent(event)) {
            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;
        } else {
            this.startX = event.clientX;
            this.startY = event.clientY;
        }
        this.startWidth = this.element.offsetWidth;
        this.startHeight = this.element.offsetHeight;
        if (this.startWidth > 0 && this.startHeight > 0) {
            this.aspectRatio = this.startWidth / this.startHeight;
        }
        const pos = this.getPos();
        if (pos !== void 0) {}
        this.container.dataset.resizeState = "true";
        if (this.classNames.resizing) {
            this.container.classList.add(this.classNames.resizing);
        }
        document.addEventListener("mousemove", this.handleMouseMove);
        document.addEventListener("touchmove", this.handleTouchMove);
        document.addEventListener("mouseup", this.handleMouseUp);
        document.addEventListener("keydown", this.handleKeyDown);
        document.addEventListener("keyup", this.handleKeyUp);
    }
    handleResize(deltaX, deltaY) {
        if (!this.activeHandle) {
            return;
        }
        const shouldPreserveAspectRatio = this.preserveAspectRatio || this.isShiftKeyPressed;
        const { width, height } = this.calculateNewDimensions(this.activeHandle, deltaX, deltaY);
        const constrained = this.applyConstraints(width, height, shouldPreserveAspectRatio);
        this.element.style.width = `${constrained.width}px`;
        this.element.style.height = `${constrained.height}px`;
        if (this.onResize) {
            this.onResize(constrained.width, constrained.height);
        }
    }
    /**
   * Calculates new dimensions based on mouse delta and resize direction.
   *
   * Takes the starting dimensions and applies the mouse movement delta
   * according to the handle direction. For corner handles, both dimensions
   * are affected. For edge handles, only one dimension changes. If aspect
   * ratio should be preserved, delegates to applyAspectRatio.
   *
   * @param direction - The active resize handle direction
   * @param deltaX - Horizontal mouse movement since resize start
   * @param deltaY - Vertical mouse movement since resize start
   * @returns The calculated width and height
   */ calculateNewDimensions(direction, deltaX, deltaY) {
        let newWidth = this.startWidth;
        let newHeight = this.startHeight;
        const isRight = direction.includes("right");
        const isLeft = direction.includes("left");
        const isBottom = direction.includes("bottom");
        const isTop = direction.includes("top");
        if (isRight) {
            newWidth = this.startWidth + deltaX;
        } else if (isLeft) {
            newWidth = this.startWidth - deltaX;
        }
        if (isBottom) {
            newHeight = this.startHeight + deltaY;
        } else if (isTop) {
            newHeight = this.startHeight - deltaY;
        }
        if (direction === "right" || direction === "left") {
            newWidth = this.startWidth + (isRight ? deltaX : -deltaX);
        }
        if (direction === "top" || direction === "bottom") {
            newHeight = this.startHeight + (isBottom ? deltaY : -deltaY);
        }
        const shouldPreserveAspectRatio = this.preserveAspectRatio || this.isShiftKeyPressed;
        if (shouldPreserveAspectRatio) {
            return this.applyAspectRatio(newWidth, newHeight, direction);
        }
        return {
            width: newWidth,
            height: newHeight
        };
    }
    /**
   * Applies min/max constraints to dimensions.
   *
   * When aspect ratio is NOT preserved, constraints are applied independently
   * to width and height. When aspect ratio IS preserved, constraints are
   * applied while maintaining the aspect ratio—if one dimension hits a limit,
   * the other is recalculated proportionally.
   *
   * This ensures that aspect ratio is never broken when constrained.
   *
   * @param width - The unconstrained width
   * @param height - The unconstrained height
   * @param preserveAspectRatio - Whether to maintain aspect ratio while constraining
   * @returns The constrained dimensions
   */ applyConstraints(width, height, preserveAspectRatio) {
        var _a, _b, _c, _d;
        if (!preserveAspectRatio) {
            let constrainedWidth2 = Math.max(this.minSize.width, width);
            let constrainedHeight2 = Math.max(this.minSize.height, height);
            if ((_a = this.maxSize) == null ? void 0 : _a.width) {
                constrainedWidth2 = Math.min(this.maxSize.width, constrainedWidth2);
            }
            if ((_b = this.maxSize) == null ? void 0 : _b.height) {
                constrainedHeight2 = Math.min(this.maxSize.height, constrainedHeight2);
            }
            return {
                width: constrainedWidth2,
                height: constrainedHeight2
            };
        }
        let constrainedWidth = width;
        let constrainedHeight = height;
        if (constrainedWidth < this.minSize.width) {
            constrainedWidth = this.minSize.width;
            constrainedHeight = constrainedWidth / this.aspectRatio;
        }
        if (constrainedHeight < this.minSize.height) {
            constrainedHeight = this.minSize.height;
            constrainedWidth = constrainedHeight * this.aspectRatio;
        }
        if (((_c = this.maxSize) == null ? void 0 : _c.width) && constrainedWidth > this.maxSize.width) {
            constrainedWidth = this.maxSize.width;
            constrainedHeight = constrainedWidth / this.aspectRatio;
        }
        if (((_d = this.maxSize) == null ? void 0 : _d.height) && constrainedHeight > this.maxSize.height) {
            constrainedHeight = this.maxSize.height;
            constrainedWidth = constrainedHeight * this.aspectRatio;
        }
        return {
            width: constrainedWidth,
            height: constrainedHeight
        };
    }
    /**
   * Adjusts dimensions to maintain the original aspect ratio.
   *
   * For horizontal handles (left/right), uses width as the primary dimension
   * and calculates height from it. For vertical handles (top/bottom), uses
   * height as primary and calculates width. For corner handles, uses width
   * as the primary dimension.
   *
   * @param width - The new width
   * @param height - The new height
   * @param direction - The active resize direction
   * @returns Dimensions adjusted to preserve aspect ratio
   */ applyAspectRatio(width, height, direction) {
        const isHorizontal = direction === "left" || direction === "right";
        const isVertical = direction === "top" || direction === "bottom";
        if (isHorizontal) {
            return {
                width,
                height: width / this.aspectRatio
            };
        }
        if (isVertical) {
            return {
                width: height * this.aspectRatio,
                height
            };
        }
        return {
            width,
            height: width / this.aspectRatio
        };
    }
};
var ResizableNodeview = ResizableNodeView;
;
function canInsertNode(state, nodeType) {
    const { selection } = state;
    const { $from } = selection;
    if (selection instanceof NodeSelection4) {
        const index = $from.index();
        const parent = $from.parent;
        return parent.canReplaceWith(index, index + 1, nodeType);
    }
    let depth = $from.depth;
    while(depth >= 0){
        const index = $from.index(depth);
        const parent = $from.node(depth);
        const match = parent.contentMatchAt(index);
        if (match.matchType(nodeType)) {
            return true;
        }
        depth -= 1;
    }
    return false;
}
// src/utilities/escapeForRegEx.ts
function escapeForRegEx(string) {
    return string.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
}
// src/utilities/isFirefox.ts
function isFirefox() {
    return typeof navigator !== "undefined" ? /Firefox/.test(navigator.userAgent) : false;
}
// src/utilities/isString.ts
function isString(value) {
    return typeof value === "string";
}
// src/utilities/markdown/index.ts
var markdown_exports = {};
__export(markdown_exports, {
    createAtomBlockMarkdownSpec: ()=>createAtomBlockMarkdownSpec,
    createBlockMarkdownSpec: ()=>createBlockMarkdownSpec,
    createInlineMarkdownSpec: ()=>createInlineMarkdownSpec,
    parseAttributes: ()=>parseAttributes,
    parseIndentedBlocks: ()=>parseIndentedBlocks,
    renderNestedMarkdownContent: ()=>renderNestedMarkdownContent,
    serializeAttributes: ()=>serializeAttributes
});
// src/utilities/markdown/attributeUtils.ts
function parseAttributes(attrString) {
    if (!(attrString == null ? void 0 : attrString.trim())) {
        return {};
    }
    const attributes = {};
    const quotedStrings = [];
    const tempString = attrString.replace(/["']([^"']*)["']/g, (match)=>{
        quotedStrings.push(match);
        return `__QUOTED_${quotedStrings.length - 1}__`;
    });
    const classMatches = tempString.match(/(?:^|\s)\.([a-zA-Z][\w-]*)/g);
    if (classMatches) {
        const classes = classMatches.map((match)=>match.trim().slice(1));
        attributes.class = classes.join(" ");
    }
    const idMatch = tempString.match(/(?:^|\s)#([a-zA-Z][\w-]*)/);
    if (idMatch) {
        attributes.id = idMatch[1];
    }
    const kvRegex = /([a-zA-Z][\w-]*)\s*=\s*(__QUOTED_\d+__)/g;
    const kvMatches = Array.from(tempString.matchAll(kvRegex));
    kvMatches.forEach(([, key, quotedRef])=>{
        var _a;
        const quotedIndex = parseInt(((_a = quotedRef.match(/__QUOTED_(\d+)__/)) == null ? void 0 : _a[1]) || "0", 10);
        const quotedValue = quotedStrings[quotedIndex];
        if (quotedValue) {
            attributes[key] = quotedValue.slice(1, -1);
        }
    });
    const cleanString = tempString.replace(/(?:^|\s)\.([a-zA-Z][\w-]*)/g, "").replace(/(?:^|\s)#([a-zA-Z][\w-]*)/g, "").replace(/([a-zA-Z][\w-]*)\s*=\s*__QUOTED_\d+__/g, "").trim();
    if (cleanString) {
        const booleanAttrs = cleanString.split(/\s+/).filter(Boolean);
        booleanAttrs.forEach((attr)=>{
            if (attr.match(/^[a-zA-Z][\w-]*$/)) {
                attributes[attr] = true;
            }
        });
    }
    return attributes;
}
function serializeAttributes(attributes) {
    if (!attributes || Object.keys(attributes).length === 0) {
        return "";
    }
    const parts = [];
    if (attributes.class) {
        const classes = String(attributes.class).split(/\s+/).filter(Boolean);
        classes.forEach((cls)=>parts.push(`.${cls}`));
    }
    if (attributes.id) {
        parts.push(`#${attributes.id}`);
    }
    Object.entries(attributes).forEach(([key, value])=>{
        if (key === "class" || key === "id") {
            return;
        }
        if (value === true) {
            parts.push(key);
        } else if (value !== false && value != null) {
            parts.push(`${key}="${String(value)}"`);
        }
    });
    return parts.join(" ");
}
// src/utilities/markdown/createAtomBlockMarkdownSpec.ts
function createAtomBlockMarkdownSpec(options) {
    const { nodeName, name: markdownName, parseAttributes: parseAttributes2 = parseAttributes, serializeAttributes: serializeAttributes2 = serializeAttributes, defaultAttributes = {}, requiredAttributes = [], allowedAttributes } = options;
    const blockName = markdownName || nodeName;
    const filterAttributes = (attrs)=>{
        if (!allowedAttributes) {
            return attrs;
        }
        const filtered = {};
        allowedAttributes.forEach((key)=>{
            if (key in attrs) {
                filtered[key] = attrs[key];
            }
        });
        return filtered;
    };
    return {
        parseMarkdown: (token, h2)=>{
            const attrs = {
                ...defaultAttributes,
                ...token.attributes
            };
            return h2.createNode(nodeName, attrs, []);
        },
        markdownTokenizer: {
            name: nodeName,
            level: "block",
            start (src) {
                var _a;
                const regex = new RegExp(`^:::${blockName}(?:\\s|$)`, "m");
                const index = (_a = src.match(regex)) == null ? void 0 : _a.index;
                return index !== void 0 ? index : -1;
            },
            tokenize (src, _tokens, _lexer) {
                const regex = new RegExp(`^:::${blockName}(?:\\s+\\{([^}]*)\\})?\\s*:::(?:\\n|$)`);
                const match = src.match(regex);
                if (!match) {
                    return void 0;
                }
                const attrString = match[1] || "";
                const attributes = parseAttributes2(attrString);
                const missingRequired = requiredAttributes.find((required)=>!(required in attributes));
                if (missingRequired) {
                    return void 0;
                }
                return {
                    type: nodeName,
                    raw: match[0],
                    attributes
                };
            }
        },
        renderMarkdown: (node)=>{
            const filteredAttrs = filterAttributes(node.attrs || {});
            const attrs = serializeAttributes2(filteredAttrs);
            const attrString = attrs ? ` {${attrs}}` : "";
            return `:::${blockName}${attrString} :::`;
        }
    };
}
// src/utilities/markdown/createBlockMarkdownSpec.ts
function createBlockMarkdownSpec(options) {
    const { nodeName, name: markdownName, getContent, parseAttributes: parseAttributes2 = parseAttributes, serializeAttributes: serializeAttributes2 = serializeAttributes, defaultAttributes = {}, content = "block", allowedAttributes } = options;
    const blockName = markdownName || nodeName;
    const filterAttributes = (attrs)=>{
        if (!allowedAttributes) {
            return attrs;
        }
        const filtered = {};
        allowedAttributes.forEach((key)=>{
            if (key in attrs) {
                filtered[key] = attrs[key];
            }
        });
        return filtered;
    };
    return {
        parseMarkdown: (token, h2)=>{
            let nodeContent;
            if (getContent) {
                const contentResult = getContent(token);
                nodeContent = typeof contentResult === "string" ? [
                    {
                        type: "text",
                        text: contentResult
                    }
                ] : contentResult;
            } else if (content === "block") {
                nodeContent = h2.parseChildren(token.tokens || []);
            } else {
                nodeContent = h2.parseInline(token.tokens || []);
            }
            const attrs = {
                ...defaultAttributes,
                ...token.attributes
            };
            return h2.createNode(nodeName, attrs, nodeContent);
        },
        markdownTokenizer: {
            name: nodeName,
            level: "block",
            start (src) {
                var _a;
                const regex = new RegExp(`^:::${blockName}`, "m");
                const index = (_a = src.match(regex)) == null ? void 0 : _a.index;
                return index !== void 0 ? index : -1;
            },
            tokenize (src, _tokens, lexer) {
                var _a;
                const openingRegex = new RegExp(`^:::${blockName}(?:\\s+\\{([^}]*)\\})?\\s*\\n`);
                const openingMatch = src.match(openingRegex);
                if (!openingMatch) {
                    return void 0;
                }
                const [openingTag, attrString = ""] = openingMatch;
                const attributes = parseAttributes2(attrString);
                let level = 1;
                const position = openingTag.length;
                let matchedContent = "";
                const blockPattern = /^:::([\w-]*)(\s.*)?/gm;
                const remaining = src.slice(position);
                blockPattern.lastIndex = 0;
                for(;;){
                    const match = blockPattern.exec(remaining);
                    if (match === null) {
                        break;
                    }
                    const matchPos = match.index;
                    const blockType = match[1];
                    if ((_a = match[2]) == null ? void 0 : _a.endsWith(":::")) {
                        continue;
                    }
                    if (blockType) {
                        level += 1;
                    } else {
                        level -= 1;
                        if (level === 0) {
                            const rawContent = remaining.slice(0, matchPos);
                            matchedContent = rawContent.trim();
                            const fullMatch = src.slice(0, position + matchPos + match[0].length);
                            let contentTokens = [];
                            if (matchedContent) {
                                if (content === "block") {
                                    contentTokens = lexer.blockTokens(rawContent);
                                    contentTokens.forEach((token)=>{
                                        if (token.text && (!token.tokens || token.tokens.length === 0)) {
                                            token.tokens = lexer.inlineTokens(token.text);
                                        }
                                    });
                                    while(contentTokens.length > 0){
                                        const lastToken = contentTokens[contentTokens.length - 1];
                                        if (lastToken.type === "paragraph" && (!lastToken.text || lastToken.text.trim() === "")) {
                                            contentTokens.pop();
                                        } else {
                                            break;
                                        }
                                    }
                                } else {
                                    contentTokens = lexer.inlineTokens(matchedContent);
                                }
                            }
                            return {
                                type: nodeName,
                                raw: fullMatch,
                                attributes,
                                content: matchedContent,
                                tokens: contentTokens
                            };
                        }
                    }
                }
                return void 0;
            }
        },
        renderMarkdown: (node, h2)=>{
            const filteredAttrs = filterAttributes(node.attrs || {});
            const attrs = serializeAttributes2(filteredAttrs);
            const attrString = attrs ? ` {${attrs}}` : "";
            const renderedContent = h2.renderChildren(node.content || [], "\n\n");
            return `:::${blockName}${attrString}

${renderedContent}

:::`;
        }
    };
}
// src/utilities/markdown/createInlineMarkdownSpec.ts
function parseShortcodeAttributes(attrString) {
    if (!attrString.trim()) {
        return {};
    }
    const attributes = {};
    const regex = /(\w+)=(?:"([^"]*)"|'([^']*)')/g;
    let match = regex.exec(attrString);
    while(match !== null){
        const [, key, doubleQuoted, singleQuoted] = match;
        attributes[key] = doubleQuoted || singleQuoted;
        match = regex.exec(attrString);
    }
    return attributes;
}
function serializeShortcodeAttributes(attrs) {
    return Object.entries(attrs).filter(([, value])=>value !== void 0 && value !== null).map(([key, value])=>`${key}="${value}"`).join(" ");
}
function createInlineMarkdownSpec(options) {
    const { nodeName, name: shortcodeName, getContent, parseAttributes: parseAttributes2 = parseShortcodeAttributes, serializeAttributes: serializeAttributes2 = serializeShortcodeAttributes, defaultAttributes = {}, selfClosing = false, allowedAttributes } = options;
    const shortcode = shortcodeName || nodeName;
    const filterAttributes = (attrs)=>{
        if (!allowedAttributes) {
            return attrs;
        }
        const filtered = {};
        allowedAttributes.forEach((attr)=>{
            const attrName = typeof attr === "string" ? attr : attr.name;
            const skipIfDefault = typeof attr === "string" ? void 0 : attr.skipIfDefault;
            if (attrName in attrs) {
                const value = attrs[attrName];
                if (skipIfDefault !== void 0 && value === skipIfDefault) {
                    return;
                }
                filtered[attrName] = value;
            }
        });
        return filtered;
    };
    const escapedShortcode = shortcode.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return {
        parseMarkdown: (token, h2)=>{
            const attrs = {
                ...defaultAttributes,
                ...token.attributes
            };
            if (selfClosing) {
                return h2.createNode(nodeName, attrs);
            }
            const content = getContent ? getContent(token) : token.content || "";
            if (content) {
                return h2.createNode(nodeName, attrs, [
                    h2.createTextNode(content)
                ]);
            }
            return h2.createNode(nodeName, attrs, []);
        },
        markdownTokenizer: {
            name: nodeName,
            level: "inline",
            start (src) {
                const startPattern = selfClosing ? new RegExp(`\\[${escapedShortcode}\\s*[^\\]]*\\]`) : new RegExp(`\\[${escapedShortcode}\\s*[^\\]]*\\][\\s\\S]*?\\[\\/${escapedShortcode}\\]`);
                const match = src.match(startPattern);
                const index = match == null ? void 0 : match.index;
                return index !== void 0 ? index : -1;
            },
            tokenize (src, _tokens, _lexer) {
                const tokenPattern = selfClosing ? new RegExp(`^\\[${escapedShortcode}\\s*([^\\]]*)\\]`) : new RegExp(`^\\[${escapedShortcode}\\s*([^\\]]*)\\]([\\s\\S]*?)\\[\\/${escapedShortcode}\\]`);
                const match = src.match(tokenPattern);
                if (!match) {
                    return void 0;
                }
                let content = "";
                let attrString = "";
                if (selfClosing) {
                    const [, attrs] = match;
                    attrString = attrs;
                } else {
                    const [, attrs, contentMatch] = match;
                    attrString = attrs;
                    content = contentMatch || "";
                }
                const attributes = parseAttributes2(attrString.trim());
                return {
                    type: nodeName,
                    raw: match[0],
                    content: content.trim(),
                    attributes
                };
            }
        },
        renderMarkdown: (node)=>{
            let content = "";
            if (getContent) {
                content = getContent(node);
            } else if (node.content && node.content.length > 0) {
                content = node.content.filter((child)=>child.type === "text").map((child)=>child.text).join("");
            }
            const filteredAttrs = filterAttributes(node.attrs || {});
            const attrs = serializeAttributes2(filteredAttrs);
            const attrString = attrs ? ` ${attrs}` : "";
            if (selfClosing) {
                return `[${shortcode}${attrString}]`;
            }
            return `[${shortcode}${attrString}]${content}[/${shortcode}]`;
        }
    };
}
// src/utilities/markdown/parseIndentedBlocks.ts
function parseIndentedBlocks(src, config, lexer) {
    var _a, _b, _c, _d;
    const lines = src.split("\n");
    const items = [];
    let totalRaw = "";
    let i = 0;
    const baseIndentSize = config.baseIndentSize || 2;
    while(i < lines.length){
        const currentLine = lines[i];
        const itemMatch = currentLine.match(config.itemPattern);
        if (!itemMatch) {
            if (items.length > 0) {
                break;
            } else if (currentLine.trim() === "") {
                i += 1;
                totalRaw = `${totalRaw}${currentLine}
`;
                continue;
            } else {
                return void 0;
            }
        }
        const itemData = config.extractItemData(itemMatch);
        const { indentLevel, mainContent } = itemData;
        totalRaw = `${totalRaw}${currentLine}
`;
        const itemContent = [
            mainContent
        ];
        i += 1;
        while(i < lines.length){
            const nextLine = lines[i];
            if (nextLine.trim() === "") {
                const nextNonEmptyIndex = lines.slice(i + 1).findIndex((l)=>l.trim() !== "");
                if (nextNonEmptyIndex === -1) {
                    break;
                }
                const nextNonEmpty = lines[i + 1 + nextNonEmptyIndex];
                const nextIndent2 = ((_b = (_a = nextNonEmpty.match(/^(\s*)/)) == null ? void 0 : _a[1]) == null ? void 0 : _b.length) || 0;
                if (nextIndent2 > indentLevel) {
                    itemContent.push(nextLine);
                    totalRaw = `${totalRaw}${nextLine}
`;
                    i += 1;
                    continue;
                } else {
                    break;
                }
            }
            const nextIndent = ((_d = (_c = nextLine.match(/^(\s*)/)) == null ? void 0 : _c[1]) == null ? void 0 : _d.length) || 0;
            if (nextIndent > indentLevel) {
                itemContent.push(nextLine);
                totalRaw = `${totalRaw}${nextLine}
`;
                i += 1;
            } else {
                break;
            }
        }
        let nestedTokens;
        const nestedContent = itemContent.slice(1);
        if (nestedContent.length > 0) {
            const dedentedNested = nestedContent.map((nestedLine)=>nestedLine.slice(indentLevel + baseIndentSize)).join("\n");
            if (dedentedNested.trim()) {
                if (config.customNestedParser) {
                    nestedTokens = config.customNestedParser(dedentedNested);
                } else {
                    nestedTokens = lexer.blockTokens(dedentedNested);
                }
            }
        }
        const token = config.createToken(itemData, nestedTokens);
        items.push(token);
    }
    if (items.length === 0) {
        return void 0;
    }
    return {
        items,
        raw: totalRaw
    };
}
// src/utilities/markdown/renderNestedMarkdownContent.ts
function renderNestedMarkdownContent(node, h2, prefixOrGenerator, ctx) {
    if (!node || !Array.isArray(node.content)) {
        return "";
    }
    const prefix = typeof prefixOrGenerator === "function" ? prefixOrGenerator(ctx) : prefixOrGenerator;
    const [content, ...children] = node.content;
    const mainContent = h2.renderChildren([
        content
    ]);
    const output = [
        `${prefix}${mainContent}`
    ];
    if (children && children.length > 0) {
        children.forEach((child)=>{
            const childContent = h2.renderChildren([
                child
            ]);
            if (childContent) {
                const indentedChild = childContent.split("\n").map((line)=>line ? h2.indent(line) : "").join("\n");
                output.push(indentedChild);
            }
        });
    }
    return output.join("\n");
}
// src/MarkView.ts
function updateMarkViewAttributes(checkMark, editor, attrs = {}) {
    const { state } = editor;
    const { doc, tr } = state;
    const thisMark = checkMark;
    doc.descendants((node, pos)=>{
        const from = tr.mapping.map(pos);
        const to = tr.mapping.map(pos) + node.nodeSize;
        let foundMark = null;
        node.marks.forEach((mark)=>{
            if (mark !== thisMark) {
                return false;
            }
            foundMark = mark;
        });
        if (!foundMark) {
            return;
        }
        let needsUpdate = false;
        Object.keys(attrs).forEach((k)=>{
            if (attrs[k] !== foundMark.attrs[k]) {
                needsUpdate = true;
            }
        });
        if (needsUpdate) {
            const updatedMark = checkMark.type.create({
                ...checkMark.attrs,
                ...attrs
            });
            tr.removeMark(from, to, checkMark.type);
            tr.addMark(from, to, updatedMark);
        }
    });
    if (tr.docChanged) {
        editor.view.dispatch(tr);
    }
}
var MarkView = class {
    constructor(component, props, options){
        this.component = component;
        this.editor = props.editor;
        this.options = {
            ...options
        };
        this.mark = props.mark;
        this.HTMLAttributes = props.HTMLAttributes;
    }
    get dom() {
        return this.editor.view.dom;
    }
    get contentDOM() {
        return null;
    }
    /**
   * Update the attributes of the mark in the document.
   * @param attrs The attributes to update.
   */ updateAttributes(attrs, checkMark) {
        updateMarkViewAttributes(checkMark || this.mark, this.editor, attrs);
    }
    ignoreMutation(mutation) {
        if (!this.dom || !this.contentDOM) {
            return true;
        }
        if (typeof this.options.ignoreMutation === "function") {
            return this.options.ignoreMutation({
                mutation
            });
        }
        if (mutation.type === "selection") {
            return false;
        }
        if (this.dom.contains(mutation.target) && mutation.type === "childList" && (isiOS() || isAndroid()) && this.editor.isFocused) {
            const changedNodes = [
                ...Array.from(mutation.addedNodes),
                ...Array.from(mutation.removedNodes)
            ];
            if (changedNodes.every((node)=>node.isContentEditable)) {
                return false;
            }
        }
        if (this.contentDOM === mutation.target && mutation.type === "attributes") {
            return true;
        }
        if (this.contentDOM.contains(mutation.target)) {
            return false;
        }
        return true;
    }
};
// src/Node.ts
var Node3 = class _Node extends Extendable {
    constructor(){
        super(...arguments);
        this.type = "node";
    }
    /**
   * Create a new Node instance
   * @param config - Node configuration object or a function that returns a configuration object
   */ static create(config = {}) {
        const resolvedConfig = typeof config === "function" ? config() : config;
        return new _Node(resolvedConfig);
    }
    configure(options) {
        return super.configure(options);
    }
    extend(extendedConfig) {
        const resolvedConfig = typeof extendedConfig === "function" ? extendedConfig() : extendedConfig;
        return super.extend(resolvedConfig);
    }
};
;
var NodeView = class {
    constructor(component, props, options){
        this.isDragging = false;
        this.component = component;
        this.editor = props.editor;
        this.options = {
            stopEvent: null,
            ignoreMutation: null,
            ...options
        };
        this.extension = props.extension;
        this.node = props.node;
        this.decorations = props.decorations;
        this.innerDecorations = props.innerDecorations;
        this.view = props.view;
        this.HTMLAttributes = props.HTMLAttributes;
        this.getPos = props.getPos;
        this.mount();
    }
    mount() {
        return;
    }
    get dom() {
        return this.editor.view.dom;
    }
    get contentDOM() {
        return null;
    }
    onDragStart(event) {
        var _a, _b, _c, _d, _e, _f, _g;
        const { view } = this.editor;
        const target = event.target;
        const dragHandle = target.nodeType === 3 ? (_a = target.parentElement) == null ? void 0 : _a.closest("[data-drag-handle]") : target.closest("[data-drag-handle]");
        if (!this.dom || ((_b = this.contentDOM) == null ? void 0 : _b.contains(target)) || !dragHandle) {
            return;
        }
        let x = 0;
        let y = 0;
        if (this.dom !== dragHandle) {
            const domBox = this.dom.getBoundingClientRect();
            const handleBox = dragHandle.getBoundingClientRect();
            const offsetX = (_d = event.offsetX) != null ? _d : (_c = event.nativeEvent) == null ? void 0 : _c.offsetX;
            const offsetY = (_f = event.offsetY) != null ? _f : (_e = event.nativeEvent) == null ? void 0 : _e.offsetY;
            x = handleBox.x - domBox.x + offsetX;
            y = handleBox.y - domBox.y + offsetY;
        }
        const clonedNode = this.dom.cloneNode(true);
        try {
            const domBox = this.dom.getBoundingClientRect();
            clonedNode.style.width = `${Math.round(domBox.width)}px`;
            clonedNode.style.height = `${Math.round(domBox.height)}px`;
            clonedNode.style.boxSizing = "border-box";
            clonedNode.style.pointerEvents = "none";
        } catch  {}
        let dragImageWrapper = null;
        try {
            dragImageWrapper = document.createElement("div");
            dragImageWrapper.style.position = "absolute";
            dragImageWrapper.style.top = "-9999px";
            dragImageWrapper.style.left = "-9999px";
            dragImageWrapper.style.pointerEvents = "none";
            dragImageWrapper.appendChild(clonedNode);
            document.body.appendChild(dragImageWrapper);
            (_g = event.dataTransfer) == null ? void 0 : _g.setDragImage(clonedNode, x, y);
        } finally{
            if (dragImageWrapper) {
                setTimeout(()=>{
                    try {
                        dragImageWrapper == null ? void 0 : dragImageWrapper.remove();
                    } catch  {}
                }, 0);
            }
        }
        const pos = this.getPos();
        if (typeof pos !== "number") {
            return;
        }
        const selection = NodeSelection5.create(view.state.doc, pos);
        const transaction = view.state.tr.setSelection(selection);
        view.dispatch(transaction);
    }
    stopEvent(event) {
        var _a;
        if (!this.dom) {
            return false;
        }
        if (typeof this.options.stopEvent === "function") {
            return this.options.stopEvent({
                event
            });
        }
        const target = event.target;
        const isInElement = this.dom.contains(target) && !((_a = this.contentDOM) == null ? void 0 : _a.contains(target));
        if (!isInElement) {
            return false;
        }
        const isDragEvent = event.type.startsWith("drag");
        const isDropEvent = event.type === "drop";
        const isInput = [
            "INPUT",
            "BUTTON",
            "SELECT",
            "TEXTAREA"
        ].includes(target.tagName) || target.isContentEditable;
        if (isInput && !isDropEvent && !isDragEvent) {
            return true;
        }
        const { isEditable } = this.editor;
        const { isDragging } = this;
        const isDraggable = !!this.node.type.spec.draggable;
        const isSelectable = NodeSelection5.isSelectable(this.node);
        const isCopyEvent = event.type === "copy";
        const isPasteEvent = event.type === "paste";
        const isCutEvent = event.type === "cut";
        const isClickEvent = event.type === "mousedown";
        if (!isDraggable && isSelectable && isDragEvent && event.target === this.dom) {
            event.preventDefault();
        }
        if (isDraggable && isDragEvent && !isDragging && event.target === this.dom) {
            event.preventDefault();
            return false;
        }
        if (isDraggable && isEditable && !isDragging && isClickEvent) {
            const dragHandle = target.closest("[data-drag-handle]");
            const isValidDragHandle = dragHandle && (this.dom === dragHandle || this.dom.contains(dragHandle));
            if (isValidDragHandle) {
                this.isDragging = true;
                document.addEventListener("dragend", ()=>{
                    this.isDragging = false;
                }, {
                    once: true
                });
                document.addEventListener("drop", ()=>{
                    this.isDragging = false;
                }, {
                    once: true
                });
                document.addEventListener("mouseup", ()=>{
                    this.isDragging = false;
                }, {
                    once: true
                });
            }
        }
        if (isDragging || isDropEvent || isCopyEvent || isPasteEvent || isCutEvent || isClickEvent && isSelectable) {
            return false;
        }
        return true;
    }
    /**
   * Called when a DOM [mutation](https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver) or a selection change happens within the view.
   * @return `false` if the editor should re-read the selection or re-parse the range around the mutation
   * @return `true` if it can safely be ignored.
   */ ignoreMutation(mutation) {
        if (!this.dom || !this.contentDOM) {
            return true;
        }
        if (typeof this.options.ignoreMutation === "function") {
            return this.options.ignoreMutation({
                mutation
            });
        }
        if (this.node.isLeaf || this.node.isAtom) {
            return true;
        }
        if (mutation.type === "selection") {
            return false;
        }
        if (this.dom.contains(mutation.target) && mutation.type === "childList" && (isiOS() || isAndroid()) && this.editor.isFocused) {
            const changedNodes = [
                ...Array.from(mutation.addedNodes),
                ...Array.from(mutation.removedNodes)
            ];
            if (changedNodes.every((node)=>node.isContentEditable)) {
                return false;
            }
        }
        if (this.contentDOM === mutation.target && mutation.type === "attributes") {
            return true;
        }
        if (this.contentDOM.contains(mutation.target)) {
            return false;
        }
        return true;
    }
    /**
   * Update the attributes of the prosemirror node.
   */ updateAttributes(attributes) {
        this.editor.commands.command(({ tr })=>{
            const pos = this.getPos();
            if (typeof pos !== "number") {
                return false;
            }
            tr.setNodeMarkup(pos, void 0, {
                ...this.node.attrs,
                ...attributes
            });
            return true;
        });
    }
    /**
   * Delete the node.
   */ deleteNode() {
        const from = this.getPos();
        if (typeof from !== "number") {
            return;
        }
        const to = from + this.node.nodeSize;
        this.editor.commands.deleteRange({
            from,
            to
        });
    }
};
// src/pasteRules/markPasteRule.ts
function markPasteRule(config) {
    return new PasteRule({
        find: config.find,
        handler: ({ state, range, match, pasteEvent })=>{
            const attributes = callOrReturn(config.getAttributes, void 0, match, pasteEvent);
            if (attributes === false || attributes === null) {
                return null;
            }
            const { tr } = state;
            const captureGroup = match[match.length - 1];
            const fullMatch = match[0];
            let markEnd = range.to;
            if (captureGroup) {
                const startSpaces = fullMatch.search(/\S/);
                const textStart = range.from + fullMatch.indexOf(captureGroup);
                const textEnd = textStart + captureGroup.length;
                const excludedMarks = getMarksBetween(range.from, range.to, state.doc).filter((item)=>{
                    const excluded = item.mark.type.excluded;
                    return excluded.find((type)=>type === config.type && type !== item.mark.type);
                }).filter((item)=>item.to > textStart);
                if (excludedMarks.length) {
                    return null;
                }
                if (textEnd < range.to) {
                    tr.delete(textEnd, range.to);
                }
                if (textStart > range.from) {
                    tr.delete(range.from + startSpaces, textStart);
                }
                markEnd = range.from + startSpaces + captureGroup.length;
                tr.addMark(range.from + startSpaces, markEnd, config.type.create(attributes || {}));
                tr.removeStoredMark(config.type);
            }
        }
    });
}
// src/pasteRules/nodePasteRule.ts
function nodePasteRule(config) {
    return new PasteRule({
        find: config.find,
        handler ({ match, chain, range, pasteEvent }) {
            const attributes = callOrReturn(config.getAttributes, void 0, match, pasteEvent);
            const content = callOrReturn(config.getContent, void 0, attributes);
            if (attributes === false || attributes === null) {
                return null;
            }
            const node = {
                type: config.type.name,
                attrs: attributes
            };
            if (content) {
                node.content = content;
            }
            if (match.input) {
                chain().deleteRange(range).insertContentAt(range.from, node);
            }
        }
    });
}
// src/pasteRules/textPasteRule.ts
function textPasteRule(config) {
    return new PasteRule({
        find: config.find,
        handler: ({ state, range, match })=>{
            let insert = config.replace;
            let start = range.from;
            const end = range.to;
            if (match[1]) {
                const offset = match[0].lastIndexOf(match[1]);
                insert += match[0].slice(offset + match[1].length);
                start += offset;
                const cutOff = start - end;
                if (cutOff > 0) {
                    insert = match[0].slice(offset - cutOff, offset) + insert;
                    start = end;
                }
            }
            state.tr.insertText(insert, start, end);
        }
    });
}
// src/Tracker.ts
var Tracker = class {
    constructor(transaction){
        this.transaction = transaction;
        this.currentStep = this.transaction.steps.length;
    }
    map(position) {
        let deleted = false;
        const mappedPosition = this.transaction.steps.slice(this.currentStep).reduce((newPosition, step)=>{
            const mapResult = step.getMap().mapResult(newPosition);
            if (mapResult.deleted) {
                deleted = true;
            }
            return mapResult.pos;
        }, position);
        return {
            position: mappedPosition,
            deleted
        };
    }
};
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/fast-equals/dist/es/index.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circularDeepEqual",
    ()=>circularDeepEqual,
    "circularShallowEqual",
    ()=>circularShallowEqual,
    "createCustomEqual",
    ()=>createCustomEqual,
    "deepEqual",
    ()=>deepEqual,
    "sameValueZeroEqual",
    ()=>sameValueZeroEqual,
    "shallowEqual",
    ()=>shallowEqual,
    "strictCircularDeepEqual",
    ()=>strictCircularDeepEqual,
    "strictCircularShallowEqual",
    ()=>strictCircularShallowEqual,
    "strictDeepEqual",
    ()=>strictDeepEqual,
    "strictShallowEqual",
    ()=>strictShallowEqual
]);
const { getOwnPropertyNames, getOwnPropertySymbols } = Object;
// eslint-disable-next-line @typescript-eslint/unbound-method
const { hasOwnProperty } = Object.prototype;
/**
 * Combine two comparators into a single comparators.
 */ function combineComparators(comparatorA, comparatorB) {
    return function isEqual(a, b, state) {
        return comparatorA(a, b, state) && comparatorB(a, b, state);
    };
}
/**
 * Wrap the provided `areItemsEqual` method to manage the circular state, allowing
 * for circular references to be safely included in the comparison without creating
 * stack overflows.
 */ function createIsCircular(areItemsEqual) {
    return function isCircular(a, b, state) {
        if (!a || !b || typeof a !== 'object' || typeof b !== 'object') {
            return areItemsEqual(a, b, state);
        }
        const { cache } = state;
        const cachedA = cache.get(a);
        const cachedB = cache.get(b);
        if (cachedA && cachedB) {
            return cachedA === b && cachedB === a;
        }
        cache.set(a, b);
        cache.set(b, a);
        const result = areItemsEqual(a, b, state);
        cache.delete(a);
        cache.delete(b);
        return result;
    };
}
/**
 * Get the `@@toStringTag` of the value, if it exists.
 */ function getShortTag(value) {
    return value != null ? value[Symbol.toStringTag] : undefined;
}
/**
 * Get the properties to strictly examine, which include both own properties that are
 * not enumerable and symbol properties.
 */ function getStrictProperties(object) {
    return getOwnPropertyNames(object).concat(getOwnPropertySymbols(object));
}
/**
 * Whether the object contains the property passed as an own property.
 */ const hasOwn = // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
Object.hasOwn || ((object, property)=>hasOwnProperty.call(object, property));
/**
 * Whether the values passed are strictly equal or both NaN.
 */ function sameValueZeroEqual(a, b) {
    return a === b || !a && !b && a !== a && b !== b;
}
const PREACT_VNODE = '__v';
const PREACT_OWNER = '__o';
const REACT_OWNER = '_owner';
const { getOwnPropertyDescriptor, keys } = Object;
/**
 * Whether the array buffers are equal in value.
 */ function areArrayBuffersEqual(a, b) {
    return a.byteLength === b.byteLength && areTypedArraysEqual(new Uint8Array(a), new Uint8Array(b));
}
/**
 * Whether the arrays are equal in value.
 */ function areArraysEqual(a, b, state) {
    let index = a.length;
    if (b.length !== index) {
        return false;
    }
    while(index-- > 0){
        if (!state.equals(a[index], b[index], index, index, a, b, state)) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the dataviews are equal in value.
 */ function areDataViewsEqual(a, b) {
    return a.byteLength === b.byteLength && areTypedArraysEqual(new Uint8Array(a.buffer, a.byteOffset, a.byteLength), new Uint8Array(b.buffer, b.byteOffset, b.byteLength));
}
/**
 * Whether the dates passed are equal in value.
 */ function areDatesEqual(a, b) {
    return sameValueZeroEqual(a.getTime(), b.getTime());
}
/**
 * Whether the errors passed are equal in value.
 */ function areErrorsEqual(a, b) {
    return a.name === b.name && a.message === b.message && a.cause === b.cause && a.stack === b.stack;
}
/**
 * Whether the functions passed are equal in value.
 */ function areFunctionsEqual(a, b) {
    return a === b;
}
/**
 * Whether the `Map`s are equal in value.
 */ function areMapsEqual(a, b, state) {
    const size = a.size;
    if (size !== b.size) {
        return false;
    }
    if (!size) {
        return true;
    }
    const matchedIndices = new Array(size);
    const aIterable = a.entries();
    let aResult;
    let bResult;
    let index = 0;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while(aResult = aIterable.next()){
        if (aResult.done) {
            break;
        }
        const bIterable = b.entries();
        let hasMatch = false;
        let matchIndex = 0;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while(bResult = bIterable.next()){
            if (bResult.done) {
                break;
            }
            if (matchedIndices[matchIndex]) {
                matchIndex++;
                continue;
            }
            const aEntry = aResult.value;
            const bEntry = bResult.value;
            if (state.equals(aEntry[0], bEntry[0], index, matchIndex, a, b, state) && state.equals(aEntry[1], bEntry[1], aEntry[0], bEntry[0], a, b, state)) {
                hasMatch = matchedIndices[matchIndex] = true;
                break;
            }
            matchIndex++;
        }
        if (!hasMatch) {
            return false;
        }
        index++;
    }
    return true;
}
/**
 * Whether the numbers are equal in value.
 */ const areNumbersEqual = sameValueZeroEqual;
/**
 * Whether the objects are equal in value.
 */ function areObjectsEqual(a, b, state) {
    const properties = keys(a);
    let index = properties.length;
    if (keys(b).length !== index) {
        return false;
    }
    // Decrementing `while` showed faster results than either incrementing or
    // decrementing `for` loop and than an incrementing `while` loop. Declarative
    // methods like `some` / `every` were not used to avoid incurring the garbage
    // cost of anonymous callbacks.
    while(index-- > 0){
        if (!isPropertyEqual(a, b, state, properties[index])) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the objects are equal in value with strict property checking.
 */ function areObjectsEqualStrict(a, b, state) {
    const properties = getStrictProperties(a);
    let index = properties.length;
    if (getStrictProperties(b).length !== index) {
        return false;
    }
    let property;
    let descriptorA;
    let descriptorB;
    // Decrementing `while` showed faster results than either incrementing or
    // decrementing `for` loop and than an incrementing `while` loop. Declarative
    // methods like `some` / `every` were not used to avoid incurring the garbage
    // cost of anonymous callbacks.
    while(index-- > 0){
        property = properties[index];
        if (!isPropertyEqual(a, b, state, property)) {
            return false;
        }
        descriptorA = getOwnPropertyDescriptor(a, property);
        descriptorB = getOwnPropertyDescriptor(b, property);
        if ((descriptorA || descriptorB) && (!descriptorA || !descriptorB || descriptorA.configurable !== descriptorB.configurable || descriptorA.enumerable !== descriptorB.enumerable || descriptorA.writable !== descriptorB.writable)) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the primitive wrappers passed are equal in value.
 */ function arePrimitiveWrappersEqual(a, b) {
    return sameValueZeroEqual(a.valueOf(), b.valueOf());
}
/**
 * Whether the regexps passed are equal in value.
 */ function areRegExpsEqual(a, b) {
    return a.source === b.source && a.flags === b.flags;
}
/**
 * Whether the `Set`s are equal in value.
 */ function areSetsEqual(a, b, state) {
    const size = a.size;
    if (size !== b.size) {
        return false;
    }
    if (!size) {
        return true;
    }
    const matchedIndices = new Array(size);
    const aIterable = a.values();
    let aResult;
    let bResult;
    // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
    while(aResult = aIterable.next()){
        if (aResult.done) {
            break;
        }
        const bIterable = b.values();
        let hasMatch = false;
        let matchIndex = 0;
        // eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
        while(bResult = bIterable.next()){
            if (bResult.done) {
                break;
            }
            if (!matchedIndices[matchIndex] && state.equals(aResult.value, bResult.value, aResult.value, bResult.value, a, b, state)) {
                hasMatch = matchedIndices[matchIndex] = true;
                break;
            }
            matchIndex++;
        }
        if (!hasMatch) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the TypedArray instances are equal in value.
 */ function areTypedArraysEqual(a, b) {
    let index = a.byteLength;
    if (b.byteLength !== index || a.byteOffset !== b.byteOffset) {
        return false;
    }
    while(index-- > 0){
        if (a[index] !== b[index]) {
            return false;
        }
    }
    return true;
}
/**
 * Whether the URL instances are equal in value.
 */ function areUrlsEqual(a, b) {
    return a.hostname === b.hostname && a.pathname === b.pathname && a.protocol === b.protocol && a.port === b.port && a.hash === b.hash && a.username === b.username && a.password === b.password;
}
function isPropertyEqual(a, b, state, property) {
    if ((property === REACT_OWNER || property === PREACT_OWNER || property === PREACT_VNODE) && (a.$$typeof || b.$$typeof)) {
        return true;
    }
    return hasOwn(b, property) && state.equals(a[property], b[property], property, property, a, b, state);
}
const ARRAY_BUFFER_TAG = '[object ArrayBuffer]';
const ARGUMENTS_TAG = '[object Arguments]';
const BOOLEAN_TAG = '[object Boolean]';
const DATA_VIEW_TAG = '[object DataView]';
const DATE_TAG = '[object Date]';
const ERROR_TAG = '[object Error]';
const MAP_TAG = '[object Map]';
const NUMBER_TAG = '[object Number]';
const OBJECT_TAG = '[object Object]';
const REG_EXP_TAG = '[object RegExp]';
const SET_TAG = '[object Set]';
const STRING_TAG = '[object String]';
const TYPED_ARRAY_TAGS = {
    '[object Int8Array]': true,
    '[object Uint8Array]': true,
    '[object Uint8ClampedArray]': true,
    '[object Int16Array]': true,
    '[object Uint16Array]': true,
    '[object Int32Array]': true,
    '[object Uint32Array]': true,
    '[object Float16Array]': true,
    '[object Float32Array]': true,
    '[object Float64Array]': true,
    '[object BigInt64Array]': true,
    '[object BigUint64Array]': true
};
const URL_TAG = '[object URL]';
// eslint-disable-next-line @typescript-eslint/unbound-method
const toString = Object.prototype.toString;
/**
 * Create a comparator method based on the type-specific equality comparators passed.
 */ function createEqualityComparator({ areArrayBuffersEqual, areArraysEqual, areDataViewsEqual, areDatesEqual, areErrorsEqual, areFunctionsEqual, areMapsEqual, areNumbersEqual, areObjectsEqual, arePrimitiveWrappersEqual, areRegExpsEqual, areSetsEqual, areTypedArraysEqual, areUrlsEqual, unknownTagComparators }) {
    /**
     * compare the value of the two objects and return true if they are equivalent in values
     */ return function comparator(a, b, state) {
        // If the items are strictly equal, no need to do a value comparison.
        if (a === b) {
            return true;
        }
        // If either of the items are nullish and fail the strictly equal check
        // above, then they must be unequal.
        if (a == null || b == null) {
            return false;
        }
        const type = typeof a;
        if (type !== typeof b) {
            return false;
        }
        if (type !== 'object') {
            if (type === 'number') {
                return areNumbersEqual(a, b, state);
            }
            if (type === 'function') {
                return areFunctionsEqual(a, b, state);
            }
            // If a primitive value that is not strictly equal, it must be unequal.
            return false;
        }
        const constructor = a.constructor;
        // Checks are listed in order of commonality of use-case:
        //   1. Common complex object types (plain object, array)
        //   2. Common data values (date, regexp)
        //   3. Less-common complex object types (map, set)
        //   4. Less-common data values (promise, primitive wrappers)
        // Inherently this is both subjective and assumptive, however
        // when reviewing comparable libraries in the wild this order
        // appears to be generally consistent.
        // Constructors should match, otherwise there is potential for false positives
        // between class and subclass or custom object and POJO.
        if (constructor !== b.constructor) {
            return false;
        }
        // `isPlainObject` only checks against the object's own realm. Cross-realm
        // comparisons are rare, and will be handled in the ultimate fallback, so
        // we can avoid capturing the string tag.
        if (constructor === Object) {
            return areObjectsEqual(a, b, state);
        }
        // `isArray()` works on subclasses and is cross-realm, so we can avoid capturing
        // the string tag or doing an `instanceof` check.
        if (Array.isArray(a)) {
            return areArraysEqual(a, b, state);
        }
        // Try to fast-path equality checks for other complex object types in the
        // same realm to avoid capturing the string tag. Strict equality is used
        // instead of `instanceof` because it is more performant for the common
        // use-case. If someone is subclassing a native class, it will be handled
        // with the string tag comparison.
        if (constructor === Date) {
            return areDatesEqual(a, b, state);
        }
        if (constructor === RegExp) {
            return areRegExpsEqual(a, b, state);
        }
        if (constructor === Map) {
            return areMapsEqual(a, b, state);
        }
        if (constructor === Set) {
            return areSetsEqual(a, b, state);
        }
        // Since this is a custom object, capture the string tag to determing its type.
        // This is reasonably performant in modern environments like v8 and SpiderMonkey.
        const tag = toString.call(a);
        if (tag === DATE_TAG) {
            return areDatesEqual(a, b, state);
        }
        // For RegExp, the properties are not enumerable, and therefore will give false positives if
        // tested like a standard object.
        if (tag === REG_EXP_TAG) {
            return areRegExpsEqual(a, b, state);
        }
        if (tag === MAP_TAG) {
            return areMapsEqual(a, b, state);
        }
        if (tag === SET_TAG) {
            return areSetsEqual(a, b, state);
        }
        if (tag === OBJECT_TAG) {
            // The exception for value comparison is custom `Promise`-like class instances. These should
            // be treated the same as standard `Promise` objects, which means strict equality, and if
            // it reaches this point then that strict equality comparison has already failed.
            return typeof a.then !== 'function' && typeof b.then !== 'function' && areObjectsEqual(a, b, state);
        }
        // If a URL tag, it should be tested explicitly. Like RegExp, the properties are not
        // enumerable, and therefore will give false positives if tested like a standard object.
        if (tag === URL_TAG) {
            return areUrlsEqual(a, b, state);
        }
        // If an error tag, it should be tested explicitly. Like RegExp, the properties are not
        // enumerable, and therefore will give false positives if tested like a standard object.
        if (tag === ERROR_TAG) {
            return areErrorsEqual(a, b, state);
        }
        // If an arguments tag, it should be treated as a standard object.
        if (tag === ARGUMENTS_TAG) {
            return areObjectsEqual(a, b, state);
        }
        if (TYPED_ARRAY_TAGS[tag]) {
            return areTypedArraysEqual(a, b, state);
        }
        if (tag === ARRAY_BUFFER_TAG) {
            return areArrayBuffersEqual(a, b, state);
        }
        if (tag === DATA_VIEW_TAG) {
            return areDataViewsEqual(a, b, state);
        }
        // As the penultimate fallback, check if the values passed are primitive wrappers. This
        // is very rare in modern JS, which is why it is deprioritized compared to all other object
        // types.
        if (tag === BOOLEAN_TAG || tag === NUMBER_TAG || tag === STRING_TAG) {
            return arePrimitiveWrappersEqual(a, b, state);
        }
        if (unknownTagComparators) {
            let unknownTagComparator = unknownTagComparators[tag];
            if (!unknownTagComparator) {
                const shortTag = getShortTag(a);
                if (shortTag) {
                    unknownTagComparator = unknownTagComparators[shortTag];
                }
            }
            // If the custom config has an unknown tag comparator that matches the captured tag or the
            // @@toStringTag, it is the source of truth for whether the values are equal.
            if (unknownTagComparator) {
                return unknownTagComparator(a, b, state);
            }
        }
        // If not matching any tags that require a specific type of comparison, then we hard-code false because
        // the only thing remaining is strict equality, which has already been compared. This is for a few reasons:
        //   - Certain types that cannot be introspected (e.g., `WeakMap`). For these types, this is the only
        //     comparison that can be made.
        //   - For types that can be introspected, but rarely have requirements to be compared
        //     (`ArrayBuffer`, `DataView`, etc.), the cost is avoided to prioritize the common
        //     use-cases (may be included in a future release, if requested enough).
        //   - For types that can be introspected but do not have an objective definition of what
        //     equality is (`Error`, etc.), the subjective decision is to be conservative and strictly compare.
        // In all cases, these decisions should be reevaluated based on changes to the language and
        // common development practices.
        return false;
    };
}
/**
 * Create the configuration object used for building comparators.
 */ function createEqualityComparatorConfig({ circular, createCustomConfig, strict }) {
    let config = {
        areArrayBuffersEqual,
        areArraysEqual: strict ? areObjectsEqualStrict : areArraysEqual,
        areDataViewsEqual,
        areDatesEqual: areDatesEqual,
        areErrorsEqual: areErrorsEqual,
        areFunctionsEqual: areFunctionsEqual,
        areMapsEqual: strict ? combineComparators(areMapsEqual, areObjectsEqualStrict) : areMapsEqual,
        areNumbersEqual: areNumbersEqual,
        areObjectsEqual: strict ? areObjectsEqualStrict : areObjectsEqual,
        arePrimitiveWrappersEqual: arePrimitiveWrappersEqual,
        areRegExpsEqual: areRegExpsEqual,
        areSetsEqual: strict ? combineComparators(areSetsEqual, areObjectsEqualStrict) : areSetsEqual,
        areTypedArraysEqual: strict ? combineComparators(areTypedArraysEqual, areObjectsEqualStrict) : areTypedArraysEqual,
        areUrlsEqual: areUrlsEqual,
        unknownTagComparators: undefined
    };
    if (createCustomConfig) {
        config = Object.assign({}, config, createCustomConfig(config));
    }
    if (circular) {
        const areArraysEqual = createIsCircular(config.areArraysEqual);
        const areMapsEqual = createIsCircular(config.areMapsEqual);
        const areObjectsEqual = createIsCircular(config.areObjectsEqual);
        const areSetsEqual = createIsCircular(config.areSetsEqual);
        config = Object.assign({}, config, {
            areArraysEqual,
            areMapsEqual,
            areObjectsEqual,
            areSetsEqual
        });
    }
    return config;
}
/**
 * Default equality comparator pass-through, used as the standard `isEqual` creator for
 * use inside the built comparator.
 */ function createInternalEqualityComparator(compare) {
    return function(a, b, _indexOrKeyA, _indexOrKeyB, _parentA, _parentB, state) {
        return compare(a, b, state);
    };
}
/**
 * Create the `isEqual` function used by the consuming application.
 */ function createIsEqual({ circular, comparator, createState, equals, strict }) {
    if (createState) {
        return function isEqual(a, b) {
            const { cache = circular ? new WeakMap() : undefined, meta } = createState();
            return comparator(a, b, {
                cache,
                equals,
                meta,
                strict
            });
        };
    }
    if (circular) {
        return function isEqual(a, b) {
            return comparator(a, b, {
                cache: new WeakMap(),
                equals,
                meta: undefined,
                strict
            });
        };
    }
    const state = {
        cache: undefined,
        equals,
        meta: undefined,
        strict
    };
    return function isEqual(a, b) {
        return comparator(a, b, state);
    };
}
/**
 * Whether the items passed are deeply-equal in value.
 */ const deepEqual = createCustomEqual();
/**
 * Whether the items passed are deeply-equal in value based on strict comparison.
 */ const strictDeepEqual = createCustomEqual({
    strict: true
});
/**
 * Whether the items passed are deeply-equal in value, including circular references.
 */ const circularDeepEqual = createCustomEqual({
    circular: true
});
/**
 * Whether the items passed are deeply-equal in value, including circular references,
 * based on strict comparison.
 */ const strictCircularDeepEqual = createCustomEqual({
    circular: true,
    strict: true
});
/**
 * Whether the items passed are shallowly-equal in value.
 */ const shallowEqual = createCustomEqual({
    createInternalComparator: ()=>sameValueZeroEqual
});
/**
 * Whether the items passed are shallowly-equal in value based on strict comparison
 */ const strictShallowEqual = createCustomEqual({
    strict: true,
    createInternalComparator: ()=>sameValueZeroEqual
});
/**
 * Whether the items passed are shallowly-equal in value, including circular references.
 */ const circularShallowEqual = createCustomEqual({
    circular: true,
    createInternalComparator: ()=>sameValueZeroEqual
});
/**
 * Whether the items passed are shallowly-equal in value, including circular references,
 * based on strict comparison.
 */ const strictCircularShallowEqual = createCustomEqual({
    circular: true,
    createInternalComparator: ()=>sameValueZeroEqual,
    strict: true
});
/**
 * Create a custom equality comparison method.
 *
 * This can be done to create very targeted comparisons in extreme hot-path scenarios
 * where the standard methods are not performant enough, but can also be used to provide
 * support for legacy environments that do not support expected features like
 * `RegExp.prototype.flags` out of the box.
 */ function createCustomEqual(options = {}) {
    const { circular = false, createInternalComparator: createCustomInternalComparator, createState, strict = false } = options;
    const config = createEqualityComparatorConfig(options);
    const comparator = createEqualityComparator(config);
    const equals = createCustomInternalComparator ? createCustomInternalComparator(comparator) : createInternalEqualityComparator(comparator);
    return createIsEqual({
        circular,
        comparator,
        createState,
        equals,
        strict
    });
}
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/client/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function is(x, y) {
        return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var React = __turbopack_context__.r("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), shim = __turbopack_context__.r("[project]/client/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)"), objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
    exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
        var instRef = useRef(null);
        if (null === instRef.current) {
            var inst = {
                hasValue: !1,
                value: null
            };
            instRef.current = inst;
        } else inst = instRef.current;
        instRef = useMemo(function() {
            function memoizedSelector(nextSnapshot) {
                if (!hasMemo) {
                    hasMemo = !0;
                    memoizedSnapshot = nextSnapshot;
                    nextSnapshot = selector(nextSnapshot);
                    if (void 0 !== isEqual && inst.hasValue) {
                        var currentSelection = inst.value;
                        if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                    }
                    return memoizedSelection = nextSnapshot;
                }
                currentSelection = memoizedSelection;
                if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
                var nextSelection = selector(nextSnapshot);
                if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
                memoizedSnapshot = nextSnapshot;
                return memoizedSelection = nextSelection;
            }
            var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
            return [
                function() {
                    return memoizedSelector(getSnapshot());
                },
                null === maybeGetServerSnapshot ? void 0 : function() {
                    return memoizedSelector(maybeGetServerSnapshot());
                }
            ];
        }, [
            getSnapshot,
            getServerSnapshot,
            selector,
            isEqual
        ]);
        var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
        useEffect(function() {
            inst.hasValue = !0;
            inst.value = value;
        }, [
            value
        ]);
        useDebugValue(value);
        return value;
    };
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
}();
}),
"[project]/client/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/client/node_modules/use-sync-external-store/cjs/use-sync-external-store-shim/with-selector.development.js [app-client] (ecmascript)");
}
}),
"[project]/client/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EditorConsumer",
    ()=>EditorConsumer,
    "EditorContent",
    ()=>EditorContent,
    "EditorContext",
    ()=>EditorContext,
    "EditorProvider",
    ()=>EditorProvider,
    "MarkViewContent",
    ()=>MarkViewContent,
    "NodeViewContent",
    ()=>NodeViewContent,
    "NodeViewWrapper",
    ()=>NodeViewWrapper,
    "PureEditorContent",
    ()=>PureEditorContent,
    "ReactMarkView",
    ()=>ReactMarkView,
    "ReactMarkViewContext",
    ()=>ReactMarkViewContext,
    "ReactMarkViewRenderer",
    ()=>ReactMarkViewRenderer,
    "ReactNodeView",
    ()=>ReactNodeView,
    "ReactNodeViewContentProvider",
    ()=>ReactNodeViewContentProvider,
    "ReactNodeViewContext",
    ()=>ReactNodeViewContext,
    "ReactNodeViewRenderer",
    ()=>ReactNodeViewRenderer,
    "ReactRenderer",
    ()=>ReactRenderer,
    "Tiptap",
    ()=>Tiptap,
    "TiptapContent",
    ()=>TiptapContent,
    "TiptapContext",
    ()=>TiptapContext,
    "TiptapWrapper",
    ()=>TiptapWrapper,
    "useCurrentEditor",
    ()=>useCurrentEditor,
    "useEditor",
    ()=>useEditor,
    "useEditorState",
    ()=>useEditorState,
    "useReactNodeView",
    ()=>useReactNodeView,
    "useTiptap",
    ()=>useTiptap,
    "useTiptapState",
    ()=>useTiptapState
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/client/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
// src/Context.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/use-sync-external-store/shim/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/next/dist/compiled/react/jsx-runtime.js [app-client] (ecmascript)");
// src/useEditor.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
// src/useEditorState.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$fast$2d$equals$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/fast-equals/dist/es/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/use-sync-external-store/shim/with-selector.js [app-client] (ecmascript)");
;
;
;
;
;
var mergeRefs = (...refs)=>{
    return (node)=>{
        refs.forEach((ref)=>{
            if (typeof ref === "function") {
                ref(node);
            } else if (ref) {
                ;
                ref.current = node;
            }
        });
    };
};
var Portals = ({ contentComponent })=>{
    const renderers = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(contentComponent.subscribe, contentComponent.getSnapshot, contentComponent.getServerSnapshot);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: Object.values(renderers)
    });
};
function getInstance() {
    const subscribers = /* @__PURE__ */ new Set();
    let renderers = {};
    return {
        /**
     * Subscribe to the editor instance's changes.
     */ subscribe (callback) {
            subscribers.add(callback);
            return ()=>{
                subscribers.delete(callback);
            };
        },
        getSnapshot () {
            return renderers;
        },
        getServerSnapshot () {
            return renderers;
        },
        /**
     * Adds a new NodeView Renderer to the editor.
     */ setRenderer (id, renderer) {
            renderers = {
                ...renderers,
                [id]: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createPortal(renderer.reactElement, renderer.element, id)
            };
            subscribers.forEach((subscriber)=>subscriber());
        },
        /**
     * Removes a NodeView Renderer from the editor.
     */ removeRenderer (id) {
            const nextRenderers = {
                ...renderers
            };
            delete nextRenderers[id];
            renderers = nextRenderers;
            subscribers.forEach((subscriber)=>subscriber());
        }
    };
}
var PureEditorContent = class extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].Component {
    constructor(props){
        var _a;
        super(props);
        this.editorContentRef = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createRef();
        this.initialized = false;
        this.state = {
            hasContentComponentInitialized: Boolean((_a = props.editor) == null ? void 0 : _a.contentComponent)
        };
    }
    componentDidMount() {
        this.init();
    }
    componentDidUpdate() {
        this.init();
    }
    init() {
        var _a;
        const editor = this.props.editor;
        if (editor && !editor.isDestroyed && ((_a = editor.view.dom) == null ? void 0 : _a.parentNode)) {
            if (editor.contentComponent) {
                return;
            }
            const element = this.editorContentRef.current;
            element.append(...editor.view.dom.parentNode.childNodes);
            editor.setOptions({
                element
            });
            editor.contentComponent = getInstance();
            if (!this.state.hasContentComponentInitialized) {
                this.unsubscribeToContentComponent = editor.contentComponent.subscribe(()=>{
                    this.setState((prevState)=>{
                        if (!prevState.hasContentComponentInitialized) {
                            return {
                                hasContentComponentInitialized: true
                            };
                        }
                        return prevState;
                    });
                    if (this.unsubscribeToContentComponent) {
                        this.unsubscribeToContentComponent();
                    }
                });
            }
            editor.createNodeViews();
            this.initialized = true;
        }
    }
    componentWillUnmount() {
        var _a;
        const editor = this.props.editor;
        if (!editor) {
            return;
        }
        this.initialized = false;
        if (!editor.isDestroyed) {
            editor.view.setProps({
                nodeViews: {}
            });
        }
        if (this.unsubscribeToContentComponent) {
            this.unsubscribeToContentComponent();
        }
        editor.contentComponent = null;
        try {
            if (!((_a = editor.view.dom) == null ? void 0 : _a.parentNode)) {
                return;
            }
            const newElement = document.createElement("div");
            newElement.append(...editor.view.dom.parentNode.childNodes);
            editor.setOptions({
                element: newElement
            });
        } catch  {}
    }
    render() {
        const { editor, innerRef, ...rest } = this.props;
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("div", {
                    ref: mergeRefs(innerRef, this.editorContentRef),
                    ...rest
                }),
                (editor == null ? void 0 : editor.contentComponent) && /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Portals, {
                    contentComponent: editor.contentComponent
                })
            ]
        });
    }
};
var EditorContentWithKey = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])((props, ref)=>{
    const key = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "EditorContentWithKey.useMemo[key]": ()=>{
            return Math.floor(Math.random() * 4294967295).toString();
        }
    }["EditorContentWithKey.useMemo[key]"], [
        props.editor
    ]);
    return __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(PureEditorContent, {
        key,
        innerRef: ref,
        ...props
    });
});
var EditorContent = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(EditorContentWithKey);
;
;
;
;
;
;
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"] : __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"];
var EditorStateManager = class {
    constructor(initialEditor){
        this.transactionNumber = 0;
        this.lastTransactionNumber = 0;
        this.subscribers = /* @__PURE__ */ new Set();
        this.editor = initialEditor;
        this.lastSnapshot = {
            editor: initialEditor,
            transactionNumber: 0
        };
        this.getSnapshot = this.getSnapshot.bind(this);
        this.getServerSnapshot = this.getServerSnapshot.bind(this);
        this.watch = this.watch.bind(this);
        this.subscribe = this.subscribe.bind(this);
    }
    /**
   * Get the current editor instance.
   */ getSnapshot() {
        if (this.transactionNumber === this.lastTransactionNumber) {
            return this.lastSnapshot;
        }
        this.lastTransactionNumber = this.transactionNumber;
        this.lastSnapshot = {
            editor: this.editor,
            transactionNumber: this.transactionNumber
        };
        return this.lastSnapshot;
    }
    /**
   * Always disable the editor on the server-side.
   */ getServerSnapshot() {
        return {
            editor: null,
            transactionNumber: 0
        };
    }
    /**
   * Subscribe to the editor instance's changes.
   */ subscribe(callback) {
        this.subscribers.add(callback);
        return ()=>{
            this.subscribers.delete(callback);
        };
    }
    /**
   * Watch the editor instance for changes.
   */ watch(nextEditor) {
        this.editor = nextEditor;
        if (this.editor) {
            const fn = ()=>{
                this.transactionNumber += 1;
                this.subscribers.forEach((callback)=>callback());
            };
            const currentEditor = this.editor;
            currentEditor.on("transaction", fn);
            return ()=>{
                currentEditor.off("transaction", fn);
            };
        }
        return void 0;
    }
};
function useEditorState(options) {
    var _a;
    const [editorStateManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useEditorState.useState": ()=>new EditorStateManager(options.editor)
    }["useEditorState.useState"]);
    const selectedState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$with$2d$selector$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStoreWithSelector"])(editorStateManager.subscribe, editorStateManager.getSnapshot, editorStateManager.getServerSnapshot, options.selector, (_a = options.equalityFn) != null ? _a : __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$fast$2d$equals$2f$dist$2f$es$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deepEqual"]);
    useIsomorphicLayoutEffect({
        "useEditorState.useIsomorphicLayoutEffect": ()=>{
            return editorStateManager.watch(options.editor);
        }
    }["useEditorState.useIsomorphicLayoutEffect"], [
        options.editor,
        editorStateManager
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(selectedState);
    return selectedState;
}
// src/useEditor.ts
var isDev = ("TURBOPACK compile-time value", "development") !== "production";
var isSSR = typeof window === "undefined";
var isNext = isSSR || Boolean(typeof window !== "undefined" && window.next);
var EditorInstanceManager = class _EditorInstanceManager {
    constructor(options){
        /**
     * The current editor instance.
     */ this.editor = null;
        /**
     * The subscriptions to notify when the editor instance
     * has been created or destroyed.
     */ this.subscriptions = /* @__PURE__ */ new Set();
        /**
     * Whether the editor has been mounted.
     */ this.isComponentMounted = false;
        /**
     * The most recent dependencies array.
     */ this.previousDeps = null;
        /**
     * The unique instance ID. This is used to identify the editor instance. And will be re-generated for each new instance.
     */ this.instanceId = "";
        this.options = options;
        this.subscriptions = /* @__PURE__ */ new Set();
        this.setEditor(this.getInitialEditor());
        this.scheduleDestroy();
        this.getEditor = this.getEditor.bind(this);
        this.getServerSnapshot = this.getServerSnapshot.bind(this);
        this.subscribe = this.subscribe.bind(this);
        this.refreshEditorInstance = this.refreshEditorInstance.bind(this);
        this.scheduleDestroy = this.scheduleDestroy.bind(this);
        this.onRender = this.onRender.bind(this);
        this.createEditor = this.createEditor.bind(this);
    }
    setEditor(editor) {
        this.editor = editor;
        this.instanceId = Math.random().toString(36).slice(2, 9);
        this.subscriptions.forEach((cb)=>cb());
    }
    getInitialEditor() {
        if (this.options.current.immediatelyRender === void 0) {
            if (isSSR || isNext) {
                if ("TURBOPACK compile-time truthy", 1) {
                    throw new Error("Tiptap Error: SSR has been detected, please set `immediatelyRender` explicitly to `false` to avoid hydration mismatches.");
                }
                return null;
            }
            return this.createEditor();
        }
        if (this.options.current.immediatelyRender && isSSR && isDev) {
            throw new Error("Tiptap Error: SSR has been detected, and `immediatelyRender` has been set to `true` this is an unsupported configuration that may result in errors, explicitly set `immediatelyRender` to `false` to avoid hydration mismatches.");
        }
        if (this.options.current.immediatelyRender) {
            return this.createEditor();
        }
        return null;
    }
    /**
   * Create a new editor instance. And attach event listeners.
   */ createEditor() {
        const optionsToApply = {
            ...this.options.current,
            // Always call the most recent version of the callback function by default
            onBeforeCreate: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onBeforeCreate) == null ? void 0 : _b.call(_a, ...args);
            },
            onBlur: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onBlur) == null ? void 0 : _b.call(_a, ...args);
            },
            onCreate: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onCreate) == null ? void 0 : _b.call(_a, ...args);
            },
            onDestroy: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onDestroy) == null ? void 0 : _b.call(_a, ...args);
            },
            onFocus: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onFocus) == null ? void 0 : _b.call(_a, ...args);
            },
            onSelectionUpdate: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onSelectionUpdate) == null ? void 0 : _b.call(_a, ...args);
            },
            onTransaction: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onTransaction) == null ? void 0 : _b.call(_a, ...args);
            },
            onUpdate: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onUpdate) == null ? void 0 : _b.call(_a, ...args);
            },
            onContentError: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onContentError) == null ? void 0 : _b.call(_a, ...args);
            },
            onDrop: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onDrop) == null ? void 0 : _b.call(_a, ...args);
            },
            onPaste: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onPaste) == null ? void 0 : _b.call(_a, ...args);
            },
            onDelete: (...args)=>{
                var _a, _b;
                return (_b = (_a = this.options.current).onDelete) == null ? void 0 : _b.call(_a, ...args);
            }
        };
        const editor = new __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"](optionsToApply);
        return editor;
    }
    /**
   * Get the current editor instance.
   */ getEditor() {
        return this.editor;
    }
    /**
   * Always disable the editor on the server-side.
   */ getServerSnapshot() {
        return null;
    }
    /**
   * Subscribe to the editor instance's changes.
   */ subscribe(onStoreChange) {
        this.subscriptions.add(onStoreChange);
        return ()=>{
            this.subscriptions.delete(onStoreChange);
        };
    }
    static compareOptions(a, b) {
        return Object.keys(a).every((key)=>{
            if ([
                "onCreate",
                "onBeforeCreate",
                "onDestroy",
                "onUpdate",
                "onTransaction",
                "onFocus",
                "onBlur",
                "onSelectionUpdate",
                "onContentError",
                "onDrop",
                "onPaste"
            ].includes(key)) {
                return true;
            }
            if (key === "extensions" && a.extensions && b.extensions) {
                if (a.extensions.length !== b.extensions.length) {
                    return false;
                }
                return a.extensions.every((extension, index)=>{
                    var _a;
                    if (extension !== ((_a = b.extensions) == null ? void 0 : _a[index])) {
                        return false;
                    }
                    return true;
                });
            }
            if (a[key] !== b[key]) {
                return false;
            }
            return true;
        });
    }
    /**
   * On each render, we will create, update, or destroy the editor instance.
   * @param deps The dependencies to watch for changes
   * @returns A cleanup function
   */ onRender(deps) {
        return ()=>{
            this.isComponentMounted = true;
            clearTimeout(this.scheduledDestructionTimeout);
            if (this.editor && !this.editor.isDestroyed && deps.length === 0) {
                if (!_EditorInstanceManager.compareOptions(this.options.current, this.editor.options)) {
                    this.editor.setOptions({
                        ...this.options.current,
                        editable: this.editor.isEditable
                    });
                }
            } else {
                this.refreshEditorInstance(deps);
            }
            return ()=>{
                this.isComponentMounted = false;
                this.scheduleDestroy();
            };
        };
    }
    /**
   * Recreate the editor instance if the dependencies have changed.
   */ refreshEditorInstance(deps) {
        if (this.editor && !this.editor.isDestroyed) {
            if (this.previousDeps === null) {
                this.previousDeps = deps;
                return;
            }
            const depsAreEqual = this.previousDeps.length === deps.length && this.previousDeps.every((dep, index)=>dep === deps[index]);
            if (depsAreEqual) {
                return;
            }
        }
        if (this.editor && !this.editor.isDestroyed) {
            this.editor.destroy();
        }
        this.setEditor(this.createEditor());
        this.previousDeps = deps;
    }
    /**
   * Schedule the destruction of the editor instance.
   * This will only destroy the editor if it was not mounted on the next tick.
   * This is to avoid destroying the editor instance when it's actually still mounted.
   */ scheduleDestroy() {
        const currentInstanceId = this.instanceId;
        const currentEditor = this.editor;
        this.scheduledDestructionTimeout = setTimeout(()=>{
            if (this.isComponentMounted && this.instanceId === currentInstanceId) {
                if (currentEditor) {
                    currentEditor.setOptions(this.options.current);
                }
                return;
            }
            if (currentEditor && !currentEditor.isDestroyed) {
                currentEditor.destroy();
                if (this.instanceId === currentInstanceId) {
                    this.setEditor(null);
                }
            }
        }, 1);
    }
};
function useEditor(options = {}, deps = []) {
    const mostRecentOptions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(options);
    mostRecentOptions.current = options;
    const [instanceManager] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        "useEditor.useState2": ()=>new EditorInstanceManager(mostRecentOptions)
    }["useEditor.useState2"]);
    const editor = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$use$2d$sync$2d$external$2d$store$2f$shim$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(instanceManager.subscribe, instanceManager.getEditor, instanceManager.getServerSnapshot);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDebugValue"])(editor);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])(instanceManager.onRender(deps));
    useEditorState({
        editor,
        selector: {
            "useEditor.useEditorState": ({ transactionNumber })=>{
                if (options.shouldRerenderOnTransaction === false || options.shouldRerenderOnTransaction === void 0) {
                    return null;
                }
                if (options.immediatelyRender && transactionNumber === 0) {
                    return 0;
                }
                return transactionNumber + 1;
            }
        }["useEditor.useEditorState"]
    });
    return editor;
}
;
var EditorContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    editor: null
});
var EditorConsumer = EditorContext.Consumer;
var useCurrentEditor = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(EditorContext);
function EditorProvider({ children, slotAfter, slotBefore, editorContainerProps = {}, ...editorOptions }) {
    const editor = useEditor(editorOptions);
    const contextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "EditorProvider.useMemo[contextValue]": ()=>({
                editor
            })
    }["EditorProvider.useMemo[contextValue]"], [
        editor
    ]);
    if (!editor) {
        return null;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxs"])(EditorContext.Provider, {
        value: contextValue,
        children: [
            slotBefore,
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EditorConsumer, {
                children: ({ editor: currentEditor })=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EditorContent, {
                        editor: currentEditor,
                        ...editorContainerProps
                    })
            }),
            children,
            slotAfter
        ]
    });
}
;
var ReactNodeViewContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    onDragStart: ()=>{},
    nodeViewContentChildren: void 0,
    nodeViewContentRef: ()=>{}
});
var ReactNodeViewContentProvider = ({ children, content })=>{
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(ReactNodeViewContext.Provider, {
        value: {
            nodeViewContentChildren: content
        }
    }, children);
};
var useReactNodeView = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ReactNodeViewContext);
;
function NodeViewContent({ as: Tag = "div", ...props }) {
    const { nodeViewContentRef, nodeViewContentChildren } = useReactNodeView();
    return(// @ts-ignore
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Tag, {
        ...props,
        ref: nodeViewContentRef,
        "data-node-view-content": "",
        style: {
            whiteSpace: "pre-wrap",
            ...props.style
        },
        children: nodeViewContentChildren
    }));
}
;
;
var NodeViewWrapper = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].forwardRef((props, ref)=>{
    const { onDragStart } = useReactNodeView();
    const Tag = props.as || "div";
    return(// @ts-ignore
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Tag, {
        ...props,
        ref,
        "data-node-view-wrapper": "",
        onDragStart,
        style: {
            whiteSpace: "normal",
            ...props.style
        }
    }));
});
;
;
;
;
;
function isClassComponent(Component) {
    return !!(typeof Component === "function" && Component.prototype && Component.prototype.isReactComponent);
}
function isForwardRefComponent(Component) {
    return !!(typeof Component === "object" && Component.$$typeof && (Component.$$typeof.toString() === "Symbol(react.forward_ref)" || Component.$$typeof.description === "react.forward_ref"));
}
function isMemoComponent(Component) {
    return !!(typeof Component === "object" && Component.$$typeof && (Component.$$typeof.toString() === "Symbol(react.memo)" || Component.$$typeof.description === "react.memo"));
}
function canReceiveRef(Component) {
    if (isClassComponent(Component)) {
        return true;
    }
    if (isForwardRefComponent(Component)) {
        return true;
    }
    if (isMemoComponent(Component)) {
        const wrappedComponent = Component.type;
        if (wrappedComponent) {
            return isClassComponent(wrappedComponent) || isForwardRefComponent(wrappedComponent);
        }
    }
    return false;
}
function isReact19Plus() {
    try {
        if (__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"]) {
            const majorVersion = parseInt(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["version"].split(".")[0], 10);
            return majorVersion >= 19;
        }
    } catch  {}
    return false;
}
var ReactRenderer = class {
    /**
   * Immediately creates element and renders the provided React component.
   */ constructor(component, { editor, props = {}, as = "div", className = "" }){
        this.ref = null;
        /**
     * Flag to track if the renderer has been destroyed, preventing queued or asynchronous renders from executing after teardown.
     */ this.destroyed = false;
        this.id = Math.floor(Math.random() * 4294967295).toString();
        this.component = component;
        this.editor = editor;
        this.props = props;
        this.element = document.createElement(as);
        this.element.classList.add("react-renderer");
        if (className) {
            this.element.classList.add(...className.split(" "));
        }
        if (this.editor.isInitialized) {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flushSync"])(()=>{
                this.render();
            });
        } else {
            queueMicrotask(()=>{
                if (this.destroyed) {
                    return;
                }
                this.render();
            });
        }
    }
    /**
   * Render the React component.
   */ render() {
        var _a;
        if (this.destroyed) {
            return;
        }
        const Component = this.component;
        const props = this.props;
        const editor = this.editor;
        const isReact19 = isReact19Plus();
        const componentCanReceiveRef = canReceiveRef(Component);
        const elementProps = {
            ...props
        };
        if (elementProps.ref && !(isReact19 || componentCanReceiveRef)) {
            delete elementProps.ref;
        }
        if (!elementProps.ref && (isReact19 || componentCanReceiveRef)) {
            elementProps.ref = (ref)=>{
                this.ref = ref;
            };
        }
        this.reactElement = /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Component, {
            ...elementProps
        });
        (_a = editor == null ? void 0 : editor.contentComponent) == null ? void 0 : _a.setRenderer(this.id, this);
    }
    /**
   * Re-renders the React component with new props.
   */ updateProps(props = {}) {
        if (this.destroyed) {
            return;
        }
        this.props = {
            ...this.props,
            ...props
        };
        this.render();
    }
    /**
   * Destroy the React component.
   */ destroy() {
        var _a;
        this.destroyed = true;
        const editor = this.editor;
        (_a = editor == null ? void 0 : editor.contentComponent) == null ? void 0 : _a.removeRenderer(this.id);
        try {
            if (this.element && this.element.parentNode) {
                this.element.parentNode.removeChild(this.element);
            }
        } catch  {}
    }
    /**
   * Update the attributes of the element that holds the React component.
   */ updateAttributes(attributes) {
        Object.keys(attributes).forEach((key)=>{
            this.element.setAttribute(key, attributes[key]);
        });
    }
};
;
var ReactMarkViewContext = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createContext({
    markViewContentRef: ()=>{}
});
var MarkViewContent = (props)=>{
    const { as: Tag = "span", ...rest } = props;
    const { markViewContentRef } = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useContext(ReactMarkViewContext);
    return(// @ts-ignore
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(Tag, {
        ...rest,
        ref: markViewContentRef,
        "data-mark-view-content": ""
    }));
};
var ReactMarkView = class extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkView"] {
    constructor(component, props, options){
        super(component, props, options);
        const { as = "span", attrs, className = "" } = options || {};
        const componentProps = {
            ...props,
            updateAttributes: this.updateAttributes.bind(this)
        };
        this.contentDOMElement = document.createElement("span");
        const markViewContentRef = (el)=>{
            if (el && !el.contains(this.contentDOMElement)) {
                el.appendChild(this.contentDOMElement);
            }
        };
        const context = {
            markViewContentRef
        };
        const ReactMarkViewProvider = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo((componentProps2)=>{
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ReactMarkViewContext.Provider, {
                value: context,
                children: __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].createElement(component, componentProps2)
            });
        });
        ReactMarkViewProvider.displayName = "ReactMarkView";
        this.renderer = new ReactRenderer(ReactMarkViewProvider, {
            editor: props.editor,
            props: componentProps,
            as,
            className: `mark-${props.mark.type.name} ${className}`.trim()
        });
        if (attrs) {
            this.renderer.updateAttributes(attrs);
        }
    }
    get dom() {
        return this.renderer.element;
    }
    get contentDOM() {
        return this.contentDOMElement;
    }
};
function ReactMarkViewRenderer(component, options = {}) {
    return (props)=>new ReactMarkView(component, props, options);
}
;
;
;
var ReactNodeView = class extends __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeView"] {
    constructor(component, props, options){
        super(component, props, options);
        /**
     * The requestAnimationFrame ID used for selection updates.
     */ this.selectionRafId = null;
        this.cachedExtensionWithSyncedStorage = null;
        if (!this.node.isLeaf) {
            if (this.options.contentDOMElementTag) {
                this.contentDOMElement = document.createElement(this.options.contentDOMElementTag);
            } else {
                this.contentDOMElement = document.createElement(this.node.isInline ? "span" : "div");
            }
            this.contentDOMElement.dataset.nodeViewContentReact = "";
            this.contentDOMElement.dataset.nodeViewWrapper = "";
            this.contentDOMElement.style.whiteSpace = "inherit";
            const contentTarget = this.dom.querySelector("[data-node-view-content]");
            if (!contentTarget) {
                return;
            }
            contentTarget.appendChild(this.contentDOMElement);
        }
    }
    /**
   * Returns a proxy of the extension that redirects storage access to the editor's mutable storage.
   * This preserves the original prototype chain (instanceof checks, methods like configure/extend work).
   * Cached to avoid proxy creation on every update.
   */ get extensionWithSyncedStorage() {
        if (!this.cachedExtensionWithSyncedStorage) {
            const editor = this.editor;
            const extension = this.extension;
            this.cachedExtensionWithSyncedStorage = new Proxy(extension, {
                get (target, prop, receiver) {
                    var _a;
                    if (prop === "storage") {
                        return (_a = editor.storage[extension.name]) != null ? _a : {};
                    }
                    return Reflect.get(target, prop, receiver);
                }
            });
        }
        return this.cachedExtensionWithSyncedStorage;
    }
    /**
   * Setup the React component.
   * Called on initialization.
   */ mount() {
        const props = {
            editor: this.editor,
            node: this.node,
            decorations: this.decorations,
            innerDecorations: this.innerDecorations,
            view: this.view,
            selected: false,
            extension: this.extensionWithSyncedStorage,
            HTMLAttributes: this.HTMLAttributes,
            getPos: ()=>this.getPos(),
            updateAttributes: (attributes = {})=>this.updateAttributes(attributes),
            deleteNode: ()=>this.deleteNode(),
            ref: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createRef"])()
        };
        if (!this.component.displayName) {
            const capitalizeFirstChar = (string)=>{
                return string.charAt(0).toUpperCase() + string.substring(1);
            };
            this.component.displayName = capitalizeFirstChar(this.extension.name);
        }
        const onDragStart = this.onDragStart.bind(this);
        const nodeViewContentRef = (element)=>{
            if (element && this.contentDOMElement && element.firstChild !== this.contentDOMElement) {
                if (element.hasAttribute("data-node-view-wrapper")) {
                    element.removeAttribute("data-node-view-wrapper");
                }
                element.appendChild(this.contentDOMElement);
            }
        };
        const context = {
            onDragStart,
            nodeViewContentRef
        };
        const Component = this.component;
        const ReactNodeViewProvider = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["memo"])((componentProps)=>{
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(ReactNodeViewContext.Provider, {
                value: context,
                children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"])(Component, componentProps)
            });
        });
        ReactNodeViewProvider.displayName = "ReactNodeView";
        let as = this.node.isInline ? "span" : "div";
        if (this.options.as) {
            as = this.options.as;
        }
        const { className = "" } = this.options;
        this.handleSelectionUpdate = this.handleSelectionUpdate.bind(this);
        this.renderer = new ReactRenderer(ReactNodeViewProvider, {
            editor: this.editor,
            props,
            as,
            className: `node-${this.node.type.name} ${className}`.trim()
        });
        this.editor.on("selectionUpdate", this.handleSelectionUpdate);
        this.updateElementAttributes();
    }
    /**
   * Return the DOM element.
   * This is the element that will be used to display the node view.
   */ get dom() {
        var _a;
        if (this.renderer.element.firstElementChild && !((_a = this.renderer.element.firstElementChild) == null ? void 0 : _a.hasAttribute("data-node-view-wrapper"))) {
            throw Error("Please use the NodeViewWrapper component for your node view.");
        }
        return this.renderer.element;
    }
    /**
   * Return the content DOM element.
   * This is the element that will be used to display the rich-text content of the node.
   */ get contentDOM() {
        if (this.node.isLeaf) {
            return null;
        }
        return this.contentDOMElement;
    }
    /**
   * On editor selection update, check if the node is selected.
   * If it is, call `selectNode`, otherwise call `deselectNode`.
   */ handleSelectionUpdate() {
        if (this.selectionRafId) {
            cancelAnimationFrame(this.selectionRafId);
            this.selectionRafId = null;
        }
        this.selectionRafId = requestAnimationFrame(()=>{
            this.selectionRafId = null;
            const { from, to } = this.editor.state.selection;
            const pos = this.getPos();
            if (typeof pos !== "number") {
                return;
            }
            if (from <= pos && to >= pos + this.node.nodeSize) {
                if (this.renderer.props.selected) {
                    return;
                }
                this.selectNode();
            } else {
                if (!this.renderer.props.selected) {
                    return;
                }
                this.deselectNode();
            }
        });
    }
    /**
   * On update, update the React component.
   * To prevent unnecessary updates, the `update` option can be used.
   */ update(node, decorations, innerDecorations) {
        const rerenderComponent = (props)=>{
            this.renderer.updateProps(props);
            if (typeof this.options.attrs === "function") {
                this.updateElementAttributes();
            }
        };
        if (node.type !== this.node.type) {
            return false;
        }
        if (typeof this.options.update === "function") {
            const oldNode = this.node;
            const oldDecorations = this.decorations;
            const oldInnerDecorations = this.innerDecorations;
            this.node = node;
            this.decorations = decorations;
            this.innerDecorations = innerDecorations;
            return this.options.update({
                oldNode,
                oldDecorations,
                newNode: node,
                newDecorations: decorations,
                oldInnerDecorations,
                innerDecorations,
                updateProps: ()=>rerenderComponent({
                        node,
                        decorations,
                        innerDecorations,
                        extension: this.extensionWithSyncedStorage
                    })
            });
        }
        if (node === this.node && this.decorations === decorations && this.innerDecorations === innerDecorations) {
            return true;
        }
        this.node = node;
        this.decorations = decorations;
        this.innerDecorations = innerDecorations;
        rerenderComponent({
            node,
            decorations,
            innerDecorations,
            extension: this.extensionWithSyncedStorage
        });
        return true;
    }
    /**
   * Select the node.
   * Add the `selected` prop and the `ProseMirror-selectednode` class.
   */ selectNode() {
        this.renderer.updateProps({
            selected: true
        });
        this.renderer.element.classList.add("ProseMirror-selectednode");
    }
    /**
   * Deselect the node.
   * Remove the `selected` prop and the `ProseMirror-selectednode` class.
   */ deselectNode() {
        this.renderer.updateProps({
            selected: false
        });
        this.renderer.element.classList.remove("ProseMirror-selectednode");
    }
    /**
   * Destroy the React component instance.
   */ destroy() {
        this.renderer.destroy();
        this.editor.off("selectionUpdate", this.handleSelectionUpdate);
        this.contentDOMElement = null;
        if (this.selectionRafId) {
            cancelAnimationFrame(this.selectionRafId);
            this.selectionRafId = null;
        }
    }
    /**
   * Update the attributes of the top-level element that holds the React component.
   * Applying the attributes defined in the `attrs` option.
   */ updateElementAttributes() {
        if (this.options.attrs) {
            let attrsObj = {};
            if (typeof this.options.attrs === "function") {
                const extensionAttributes = this.editor.extensionManager.attributes;
                const HTMLAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderedAttributes"])(this.node, extensionAttributes);
                attrsObj = this.options.attrs({
                    node: this.node,
                    HTMLAttributes
                });
            } else {
                attrsObj = this.options.attrs;
            }
            this.renderer.updateAttributes(attrsObj);
        }
    }
};
function ReactNodeViewRenderer(component, options) {
    return (props)=>{
        if (!props.editor.contentComponent) {
            return {};
        }
        return new ReactNodeView(component, props, options);
    };
}
;
;
var TiptapContext = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    get editor () {
        throw new Error("useTiptap must be used within a <Tiptap> provider");
    }
});
TiptapContext.displayName = "TiptapContext";
var useTiptap = ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(TiptapContext);
function useTiptapState(selector, equalityFn) {
    const { editor } = useTiptap();
    return useEditorState({
        editor,
        selector,
        equalityFn
    });
}
function TiptapWrapper({ editor, instance, children }) {
    const resolvedEditor = editor != null ? editor : instance;
    if (!resolvedEditor) {
        throw new Error("Tiptap: An editor instance is required. Pass a non-null `editor` prop.");
    }
    const tiptapContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TiptapWrapper.useMemo2[tiptapContextValue]": ()=>({
                editor: resolvedEditor
            })
    }["TiptapWrapper.useMemo2[tiptapContextValue]"], [
        resolvedEditor
    ]);
    const legacyContextValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "TiptapWrapper.useMemo2[legacyContextValue]": ()=>({
                editor: resolvedEditor
            })
    }["TiptapWrapper.useMemo2[legacyContextValue]"], [
        resolvedEditor
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EditorContext.Provider, {
        value: legacyContextValue,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(TiptapContext.Provider, {
            value: tiptapContextValue,
            children
        })
    });
}
TiptapWrapper.displayName = "Tiptap";
function TiptapContent({ ...rest }) {
    const { editor } = useTiptap();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])(EditorContent, {
        editor,
        ...rest
    });
}
TiptapContent.displayName = "Tiptap.Content";
var Tiptap = Object.assign(TiptapWrapper, {
    /**
   * The Tiptap Content component that renders the EditorContent with the editor instance from the context.
   * @see TiptapContent
   */ Content: TiptapContent
});
;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CommandManager",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CommandManager"],
    "Editor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Editor"],
    "EditorConsumer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorConsumer"],
    "EditorContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContent"],
    "EditorContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorContext"],
    "EditorProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["EditorProvider"],
    "Extendable",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extendable"],
    "Extension",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"],
    "Fragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"],
    "InputRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["InputRule"],
    "MappablePosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MappablePosition"],
    "Mark",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"],
    "MarkView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["MarkView"],
    "MarkViewContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["MarkViewContent"],
    "Node",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"],
    "NodePos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodePos"],
    "NodeView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NodeView"],
    "NodeViewContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NodeViewContent"],
    "NodeViewWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["NodeViewWrapper"],
    "PasteRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PasteRule"],
    "PureEditorContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["PureEditorContent"],
    "ReactMarkView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactMarkView"],
    "ReactMarkViewContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactMarkViewContext"],
    "ReactMarkViewRenderer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactMarkViewRenderer"],
    "ReactNodeView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactNodeView"],
    "ReactNodeViewContentProvider",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactNodeViewContentProvider"],
    "ReactNodeViewContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactNodeViewContext"],
    "ReactNodeViewRenderer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactNodeViewRenderer"],
    "ReactRenderer",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["ReactRenderer"],
    "ResizableNodeView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableNodeView"],
    "ResizableNodeview",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableNodeview"],
    "Tiptap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Tiptap"],
    "TiptapContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TiptapContent"],
    "TiptapContext",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TiptapContext"],
    "TiptapWrapper",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["TiptapWrapper"],
    "Tracker",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tracker"],
    "callOrReturn",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"],
    "canInsertNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertNode"],
    "combineTransactionSteps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineTransactionSteps"],
    "commands",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["commands"],
    "createAtomBlockMarkdownSpec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createAtomBlockMarkdownSpec"],
    "createBlockMarkdownSpec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createBlockMarkdownSpec"],
    "createChainableState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createChainableState"],
    "createDocument",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createDocument"],
    "createElement",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createElement"],
    "createInlineMarkdownSpec",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createInlineMarkdownSpec"],
    "createMappablePosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMappablePosition"],
    "createNodeFromContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createNodeFromContent"],
    "createStyleTag",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createStyleTag"],
    "defaultBlockAt",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultBlockAt"],
    "deleteProps",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteProps"],
    "elementFromString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["elementFromString"],
    "escapeForRegEx",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["escapeForRegEx"],
    "extensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["extensions"],
    "findChildren",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChildren"],
    "findChildrenInRange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChildrenInRange"],
    "findDuplicates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findDuplicates"],
    "findParentNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNode"],
    "findParentNodeClosestToPos",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findParentNodeClosestToPos"],
    "flattenExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["flattenExtensions"],
    "fromString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fromString"],
    "generateHTML",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateHTML"],
    "generateJSON",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateJSON"],
    "generateText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["generateText"],
    "getAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttributes"],
    "getAttributesFromExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttributesFromExtensions"],
    "getChangedRanges",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChangedRanges"],
    "getDebugJSON",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDebugJSON"],
    "getExtensionField",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"],
    "getHTMLFromFragment",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getHTMLFromFragment"],
    "getMarkAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkAttributes"],
    "getMarkRange",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkRange"],
    "getMarkType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarkType"],
    "getMarksBetween",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarksBetween"],
    "getNodeAtPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeAtPosition"],
    "getNodeAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeAttributes"],
    "getNodeType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"],
    "getRenderedAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderedAttributes"],
    "getSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchema"],
    "getSchemaByResolvedExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaByResolvedExtensions"],
    "getSchemaTypeByName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaTypeByName"],
    "getSchemaTypeNameByName",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSchemaTypeNameByName"],
    "getSplittedAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSplittedAttributes"],
    "getText",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getText"],
    "getTextBetween",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextBetween"],
    "getTextContentFromNodes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextContentFromNodes"],
    "getTextSerializersFromSchema",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTextSerializersFromSchema"],
    "getUpdatedPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getUpdatedPosition"],
    "h",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["h"],
    "injectExtensionAttributesToParseRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["injectExtensionAttributesToParseRule"],
    "inputRulesPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["inputRulesPlugin"],
    "isActive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isActive"],
    "isAndroid",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAndroid"],
    "isAtEndOfNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAtEndOfNode"],
    "isAtStartOfNode",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAtStartOfNode"],
    "isEmptyObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isEmptyObject"],
    "isExtensionRulesEnabled",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isExtensionRulesEnabled"],
    "isFirefox",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFirefox"],
    "isFunction",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isFunction"],
    "isList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isList"],
    "isMacOS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMacOS"],
    "isMarkActive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isMarkActive"],
    "isNodeActive",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeActive"],
    "isNodeEmpty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeEmpty"],
    "isNodeSelection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeSelection"],
    "isNumber",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNumber"],
    "isPlainObject",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isPlainObject"],
    "isRegExp",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isRegExp"],
    "isSafari",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSafari"],
    "isString",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isString"],
    "isTextSelection",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTextSelection"],
    "isiOS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isiOS"],
    "markInputRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markInputRule"],
    "markPasteRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPasteRule"],
    "markdown",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markdown"],
    "mergeAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"],
    "mergeDeep",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDeep"],
    "minMax",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["minMax"],
    "nodeInputRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeInputRule"],
    "nodePasteRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodePasteRule"],
    "objectIncludes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["objectIncludes"],
    "parseAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseAttributes"],
    "parseIndentedBlocks",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIndentedBlocks"],
    "pasteRulesPlugin",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["pasteRulesPlugin"],
    "posToDOMRect",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["posToDOMRect"],
    "removeDuplicates",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["removeDuplicates"],
    "renderNestedMarkdownContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNestedMarkdownContent"],
    "resolveExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveExtensions"],
    "resolveFocusPosition",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resolveFocusPosition"],
    "rewriteUnknownContent",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["rewriteUnknownContent"],
    "selectionToInsertionEnd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["selectionToInsertionEnd"],
    "serializeAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["serializeAttributes"],
    "sortExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sortExtensions"],
    "splitExtensions",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["splitExtensions"],
    "textInputRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textInputRule"],
    "textPasteRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textPasteRule"],
    "textblockTypeInputRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textblockTypeInputRule"],
    "updateMarkViewAttributes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMarkViewAttributes"],
    "useCurrentEditor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useCurrentEditor"],
    "useEditor",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditor"],
    "useEditorState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useEditorState"],
    "useReactNodeView",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useReactNodeView"],
    "useTiptap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTiptap"],
    "useTiptapState",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["useTiptapState"],
    "wrappingInputRule",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$react$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/react/dist/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
}),
"[project]/client/node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Fragment",
    ()=>Fragment,
    "createElement",
    ()=>h,
    "h",
    ()=>h,
    "jsx",
    ()=>h,
    "jsxDEV",
    ()=>h,
    "jsxs",
    ()=>h
]);
// src/jsx-runtime.ts
function Fragment(props) {
    return props.children;
}
var h = (tag, attributes)=>{
    if (tag === "slot") {
        return 0;
    }
    if (tag instanceof Function) {
        return tag(attributes);
    }
    const { children, ...rest } = attributes != null ? attributes : {};
    if (tag === "svg") {
        throw new Error("SVG elements are not supported in the JSX syntax, use the array syntax instead");
    }
    return [
        tag,
        rest,
        children
    ];
};
;
 //# sourceMappingURL=jsx-runtime.js.map
}),
"[project]/client/node_modules/@tiptap/extension-blockquote/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Blockquote",
    ()=>Blockquote,
    "default",
    ()=>index_default,
    "inputRegex",
    ()=>inputRegex
]);
// src/blockquote.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$jsx$2d$runtime$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js [app-client] (ecmascript)");
;
;
var inputRegex = /^\s*>\s$/;
var Blockquote = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "blockquote",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    content: "block+",
    group: "block",
    defining: true,
    parseHTML () {
        return [
            {
                tag: "blockquote"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$jsx$2d$runtime$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("blockquote", {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$jsx$2d$runtime$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("slot", {})
        });
    },
    parseMarkdown: (token, helpers)=>{
        return helpers.createNode("blockquote", void 0, helpers.parseChildren(token.tokens || []));
    },
    renderMarkdown: (node, h)=>{
        if (!node.content) {
            return "";
        }
        const prefix = ">";
        const result = [];
        node.content.forEach((child)=>{
            const childContent = h.renderChildren([
                child
            ]);
            const lines = childContent.split("\n");
            const linesWithPrefix = lines.map((line)=>{
                if (line.trim() === "") {
                    return prefix;
                }
                return `${prefix} ${line}`;
            });
            result.push(linesWithPrefix.join("\n"));
        });
        return result.join(`
${prefix}
`);
    },
    addCommands () {
        return {
            setBlockquote: ()=>({ commands })=>{
                    return commands.wrapIn(this.name);
                },
            toggleBlockquote: ()=>({ commands })=>{
                    return commands.toggleWrap(this.name);
                },
            unsetBlockquote: ()=>({ commands })=>{
                    return commands.lift(this.name);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-b": ()=>this.editor.commands.toggleBlockquote()
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])({
                find: inputRegex,
                type: this.type
            })
        ];
    }
});
// src/index.ts
var index_default = Blockquote;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-bold/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Bold",
    ()=>Bold,
    "default",
    ()=>index_default,
    "starInputRegex",
    ()=>starInputRegex,
    "starPasteRegex",
    ()=>starPasteRegex,
    "underscoreInputRegex",
    ()=>underscoreInputRegex,
    "underscorePasteRegex",
    ()=>underscorePasteRegex
]);
// src/bold.tsx
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$jsx$2d$runtime$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/jsx-runtime/jsx-runtime.js [app-client] (ecmascript)");
;
;
var starInputRegex = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/;
var starPasteRegex = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g;
var underscoreInputRegex = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/;
var underscorePasteRegex = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g;
var Bold = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].create({
    name: "bold",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "strong"
            },
            {
                tag: "b",
                getAttrs: (node)=>node.style.fontWeight !== "normal" && null
            },
            {
                style: "font-weight=400",
                clearMark: (mark)=>mark.type.name === this.name
            },
            {
                style: "font-weight",
                getAttrs: (value)=>/^(bold(er)?|[5-9]\d{2,})$/.test(value) && null
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$jsx$2d$runtime$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("strong", {
            ...(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$jsx$2d$runtime$2f$jsx$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsx"])("slot", {})
        });
    },
    markdownTokenName: "strong",
    parseMarkdown: (token, helpers)=>{
        return helpers.applyMark("bold", helpers.parseInline(token.tokens || []));
    },
    renderMarkdown: (node, h)=>{
        return `**${h.renderChildren(node)}**`;
    },
    addCommands () {
        return {
            setBold: ()=>({ commands })=>{
                    return commands.setMark(this.name);
                },
            toggleBold: ()=>({ commands })=>{
                    return commands.toggleMark(this.name);
                },
            unsetBold: ()=>({ commands })=>{
                    return commands.unsetMark(this.name);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-b": ()=>this.editor.commands.toggleBold(),
            "Mod-B": ()=>this.editor.commands.toggleBold()
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markInputRule"])({
                find: starInputRegex,
                type: this.type
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markInputRule"])({
                find: underscoreInputRegex,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPasteRule"])({
                find: starPasteRegex,
                type: this.type
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPasteRule"])({
                find: underscorePasteRegex,
                type: this.type
            })
        ];
    }
});
// src/index.ts
var index_default = Bold;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-code/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Code",
    ()=>Code,
    "default",
    ()=>index_default,
    "inputRegex",
    ()=>inputRegex,
    "pasteRegex",
    ()=>pasteRegex
]);
// src/code.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var inputRegex = /(^|[^`])`([^`]+)`(?!`)$/;
var pasteRegex = /(^|[^`])`([^`]+)`(?!`)/g;
var Code = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].create({
    name: "code",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    excludes: "_",
    code: true,
    exitable: true,
    parseHTML () {
        return [
            {
                tag: "code"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "code",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    markdownTokenName: "codespan",
    parseMarkdown: (token, helpers)=>{
        return helpers.applyMark("code", [
            {
                type: "text",
                text: token.text || ""
            }
        ]);
    },
    renderMarkdown: (node, h)=>{
        if (!node.content) {
            return "";
        }
        return `\`${h.renderChildren(node.content)}\``;
    },
    addCommands () {
        return {
            setCode: ()=>({ commands })=>{
                    return commands.setMark(this.name);
                },
            toggleCode: ()=>({ commands })=>{
                    return commands.toggleMark(this.name);
                },
            unsetCode: ()=>({ commands })=>{
                    return commands.unsetMark(this.name);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-e": ()=>this.editor.commands.toggleCode()
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markInputRule"])({
                find: inputRegex,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPasteRule"])({
                find: pasteRegex,
                type: this.type
            })
        ];
    }
});
// src/index.ts
var index_default = Code;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-code-block/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CodeBlock",
    ()=>CodeBlock,
    "backtickInputRegex",
    ()=>backtickInputRegex,
    "default",
    ()=>index_default,
    "tildeInputRegex",
    ()=>tildeInputRegex
]);
// src/code-block.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/state'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
var DEFAULT_TAB_SIZE = 4;
var backtickInputRegex = /^```([a-z]+)?[\s\n]$/;
var tildeInputRegex = /^~~~([a-z]+)?[\s\n]$/;
var CodeBlock = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "codeBlock",
    addOptions () {
        return {
            languageClassPrefix: "language-",
            exitOnTripleEnter: true,
            exitOnArrowDown: true,
            defaultLanguage: null,
            enableTabIndentation: false,
            tabSize: DEFAULT_TAB_SIZE,
            HTMLAttributes: {}
        };
    },
    content: "text*",
    marks: "",
    group: "block",
    code: true,
    defining: true,
    addAttributes () {
        return {
            language: {
                default: this.options.defaultLanguage,
                parseHTML: (element)=>{
                    var _a;
                    const { languageClassPrefix } = this.options;
                    if (!languageClassPrefix) {
                        return null;
                    }
                    const classNames = [
                        ...((_a = element.firstElementChild) == null ? void 0 : _a.classList) || []
                    ];
                    const languages = classNames.filter((className)=>className.startsWith(languageClassPrefix)).map((className)=>className.replace(languageClassPrefix, ""));
                    const language = languages[0];
                    if (!language) {
                        return null;
                    }
                    return language;
                },
                rendered: false
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "pre",
                preserveWhitespace: "full"
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "pre",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            [
                "code",
                {
                    class: node.attrs.language ? this.options.languageClassPrefix + node.attrs.language : null
                },
                0
            ]
        ];
    },
    markdownTokenName: "code",
    parseMarkdown: (token, helpers)=>{
        var _a;
        if (((_a = token.raw) == null ? void 0 : _a.startsWith("```")) === false && token.codeBlockStyle !== "indented") {
            return [];
        }
        return helpers.createNode("codeBlock", {
            language: token.lang || null
        }, token.text ? [
            helpers.createTextNode(token.text)
        ] : []);
    },
    renderMarkdown: (node, h)=>{
        var _a;
        let output = "";
        const language = ((_a = node.attrs) == null ? void 0 : _a.language) || "";
        if (!node.content) {
            output = `\`\`\`${language}

\`\`\``;
        } else {
            const lines = [
                `\`\`\`${language}`,
                h.renderChildren(node.content),
                "```"
            ];
            output = lines.join("\n");
        }
        return output;
    },
    addCommands () {
        return {
            setCodeBlock: (attributes)=>({ commands })=>{
                    return commands.setNode(this.name, attributes);
                },
            toggleCodeBlock: (attributes)=>({ commands })=>{
                    return commands.toggleNode(this.name, "paragraph", attributes);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-c": ()=>this.editor.commands.toggleCodeBlock(),
            // remove code block when at start of document or code block is empty
            Backspace: ()=>{
                const { empty, $anchor } = this.editor.state.selection;
                const isAtStart = $anchor.pos === 1;
                if (!empty || $anchor.parent.type.name !== this.name) {
                    return false;
                }
                if (isAtStart || !$anchor.parent.textContent.length) {
                    return this.editor.commands.clearNodes();
                }
                return false;
            },
            // handle tab indentation
            Tab: ({ editor })=>{
                var _a;
                if (!this.options.enableTabIndentation) {
                    return false;
                }
                const tabSize = (_a = this.options.tabSize) != null ? _a : DEFAULT_TAB_SIZE;
                const { state } = editor;
                const { selection } = state;
                const { $from, empty } = selection;
                if ($from.parent.type !== this.type) {
                    return false;
                }
                const indent = " ".repeat(tabSize);
                if (empty) {
                    return editor.commands.insertContent(indent);
                }
                return editor.commands.command(({ tr })=>{
                    const { from, to } = selection;
                    const text = state.doc.textBetween(from, to, "\n", "\n");
                    const lines = text.split("\n");
                    const indentedText = lines.map((line)=>indent + line).join("\n");
                    tr.replaceWith(from, to, state.schema.text(indentedText));
                    return true;
                });
            },
            // handle shift+tab reverse indentation
            "Shift-Tab": ({ editor })=>{
                var _a;
                if (!this.options.enableTabIndentation) {
                    return false;
                }
                const tabSize = (_a = this.options.tabSize) != null ? _a : DEFAULT_TAB_SIZE;
                const { state } = editor;
                const { selection } = state;
                const { $from, empty } = selection;
                if ($from.parent.type !== this.type) {
                    return false;
                }
                if (empty) {
                    return editor.commands.command(({ tr })=>{
                        var _a2;
                        const { pos } = $from;
                        const codeBlockStart = $from.start();
                        const codeBlockEnd = $from.end();
                        const allText = state.doc.textBetween(codeBlockStart, codeBlockEnd, "\n", "\n");
                        const lines = allText.split("\n");
                        let currentLineIndex = 0;
                        let charCount = 0;
                        const relativeCursorPos = pos - codeBlockStart;
                        for(let i = 0; i < lines.length; i += 1){
                            if (charCount + lines[i].length >= relativeCursorPos) {
                                currentLineIndex = i;
                                break;
                            }
                            charCount += lines[i].length + 1;
                        }
                        const currentLine = lines[currentLineIndex];
                        const leadingSpaces = ((_a2 = currentLine.match(/^ */)) == null ? void 0 : _a2[0]) || "";
                        const spacesToRemove = Math.min(leadingSpaces.length, tabSize);
                        if (spacesToRemove === 0) {
                            return true;
                        }
                        let lineStartPos = codeBlockStart;
                        for(let i = 0; i < currentLineIndex; i += 1){
                            lineStartPos += lines[i].length + 1;
                        }
                        tr.delete(lineStartPos, lineStartPos + spacesToRemove);
                        const cursorPosInLine = pos - lineStartPos;
                        if (cursorPosInLine <= spacesToRemove) {
                            tr.setSelection(TextSelection.create(tr.doc, lineStartPos));
                        }
                        return true;
                    });
                }
                return editor.commands.command(({ tr })=>{
                    const { from, to } = selection;
                    const text = state.doc.textBetween(from, to, "\n", "\n");
                    const lines = text.split("\n");
                    const reverseIndentText = lines.map((line)=>{
                        var _a2;
                        const leadingSpaces = ((_a2 = line.match(/^ */)) == null ? void 0 : _a2[0]) || "";
                        const spacesToRemove = Math.min(leadingSpaces.length, tabSize);
                        return line.slice(spacesToRemove);
                    }).join("\n");
                    tr.replaceWith(from, to, state.schema.text(reverseIndentText));
                    return true;
                });
            },
            // exit node on triple enter
            Enter: ({ editor })=>{
                if (!this.options.exitOnTripleEnter) {
                    return false;
                }
                const { state } = editor;
                const { selection } = state;
                const { $from, empty } = selection;
                if (!empty || $from.parent.type !== this.type) {
                    return false;
                }
                const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
                const endsWithDoubleNewline = $from.parent.textContent.endsWith("\n\n");
                if (!isAtEnd || !endsWithDoubleNewline) {
                    return false;
                }
                return editor.chain().command(({ tr })=>{
                    tr.delete($from.pos - 2, $from.pos);
                    return true;
                }).exitCode().run();
            },
            // exit node on arrow down
            ArrowDown: ({ editor })=>{
                if (!this.options.exitOnArrowDown) {
                    return false;
                }
                const { state } = editor;
                const { selection, doc } = state;
                const { $from, empty } = selection;
                if (!empty || $from.parent.type !== this.type) {
                    return false;
                }
                const isAtEnd = $from.parentOffset === $from.parent.nodeSize - 2;
                if (!isAtEnd) {
                    return false;
                }
                const after = $from.after();
                if (after === void 0) {
                    return false;
                }
                const nodeAfter = doc.nodeAt(after);
                if (nodeAfter) {
                    return editor.commands.command(({ tr })=>{
                        tr.setSelection(Selection.near(doc.resolve(after)));
                        return true;
                    });
                }
                return editor.commands.exitCode();
            }
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textblockTypeInputRule"])({
                find: backtickInputRegex,
                type: this.type,
                getAttributes: (match)=>({
                        language: match[1]
                    })
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textblockTypeInputRule"])({
                find: tildeInputRegex,
                type: this.type,
                getAttributes: (match)=>({
                        language: match[1]
                    })
            })
        ];
    },
    addProseMirrorPlugins () {
        return [
            // this plugin creates a code block for pasted content from VS Code
            // we can also detect the copied code language
            new Plugin({
                key: new PluginKey("codeBlockVSCodeHandler"),
                props: {
                    handlePaste: (view, event)=>{
                        if (!event.clipboardData) {
                            return false;
                        }
                        if (this.editor.isActive(this.type.name)) {
                            return false;
                        }
                        const text = event.clipboardData.getData("text/plain");
                        const vscode = event.clipboardData.getData("vscode-editor-data");
                        const vscodeData = vscode ? JSON.parse(vscode) : void 0;
                        const language = vscodeData == null ? void 0 : vscodeData.mode;
                        if (!text || !language) {
                            return false;
                        }
                        const { tr, schema } = view.state;
                        const textNode = schema.text(text.replace(/\r\n?/g, "\n"));
                        tr.replaceSelectionWith(this.type.create({
                            language
                        }, textNode));
                        if (tr.selection.$from.parent.type !== this.type) {
                            tr.setSelection(TextSelection.near(tr.doc.resolve(Math.max(0, tr.selection.from - 2))));
                        }
                        tr.setMeta("paste", true);
                        view.dispatch(tr);
                        return true;
                    }
                }
            })
        ];
    }
});
// src/index.ts
var index_default = CodeBlock;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-document/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Document",
    ()=>Document,
    "default",
    ()=>index_default
]);
// src/document.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var Document = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "doc",
    topNode: true,
    content: "block+",
    renderMarkdown: (node, h)=>{
        if (!node.content) {
            return "";
        }
        return h.renderChildren(node.content, "\n\n");
    }
});
// src/index.ts
var index_default = Document;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-hard-break/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HardBreak",
    ()=>HardBreak,
    "default",
    ()=>index_default
]);
// src/hard-break.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var HardBreak = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "hardBreak",
    markdownTokenName: "br",
    addOptions () {
        return {
            keepMarks: true,
            HTMLAttributes: {}
        };
    },
    inline: true,
    group: "inline",
    selectable: false,
    linebreakReplacement: true,
    parseHTML () {
        return [
            {
                tag: "br"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "br",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes)
        ];
    },
    renderText () {
        return "\n";
    },
    renderMarkdown: ()=>`  
`,
    parseMarkdown: ()=>{
        return {
            type: "hardBreak"
        };
    },
    addCommands () {
        return {
            setHardBreak: ()=>({ commands, chain, state, editor })=>{
                    return commands.first([
                        ()=>commands.exitCode(),
                        ()=>commands.command(()=>{
                                const { selection, storedMarks } = state;
                                if (selection.$from.parent.type.spec.isolating) {
                                    return false;
                                }
                                const { keepMarks } = this.options;
                                const { splittableMarks } = editor.extensionManager;
                                const marks = storedMarks || selection.$to.parentOffset && selection.$from.marks();
                                return chain().insertContent({
                                    type: this.name
                                }).command(({ tr, dispatch })=>{
                                    if (dispatch && marks && keepMarks) {
                                        const filteredMarks = marks.filter((mark)=>splittableMarks.includes(mark.type.name));
                                        tr.ensureMarks(filteredMarks);
                                    }
                                    return true;
                                }).run();
                            })
                    ]);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Enter": ()=>this.editor.commands.setHardBreak(),
            "Shift-Enter": ()=>this.editor.commands.setHardBreak()
        };
    }
});
// src/index.ts
var index_default = HardBreak;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-heading/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Heading",
    ()=>Heading,
    "default",
    ()=>index_default
]);
// src/heading.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var Heading = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "heading",
    addOptions () {
        return {
            levels: [
                1,
                2,
                3,
                4,
                5,
                6
            ],
            HTMLAttributes: {}
        };
    },
    content: "inline*",
    group: "block",
    defining: true,
    addAttributes () {
        return {
            level: {
                default: 1,
                rendered: false
            }
        };
    },
    parseHTML () {
        return this.options.levels.map((level)=>({
                tag: `h${level}`,
                attrs: {
                    level
                }
            }));
    },
    renderHTML ({ node, HTMLAttributes }) {
        const hasLevel = this.options.levels.includes(node.attrs.level);
        const level = hasLevel ? node.attrs.level : this.options.levels[0];
        return [
            `h${level}`,
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    parseMarkdown: (token, helpers)=>{
        return helpers.createNode("heading", {
            level: token.depth || 1
        }, helpers.parseInline(token.tokens || []));
    },
    renderMarkdown: (node, h)=>{
        var _a;
        const level = ((_a = node.attrs) == null ? void 0 : _a.level) ? parseInt(node.attrs.level, 10) : 1;
        const headingChars = "#".repeat(level);
        if (!node.content) {
            return "";
        }
        return `${headingChars} ${h.renderChildren(node.content)}`;
    },
    addCommands () {
        return {
            setHeading: (attributes)=>({ commands })=>{
                    if (!this.options.levels.includes(attributes.level)) {
                        return false;
                    }
                    return commands.setNode(this.name, attributes);
                },
            toggleHeading: (attributes)=>({ commands })=>{
                    if (!this.options.levels.includes(attributes.level)) {
                        return false;
                    }
                    return commands.toggleNode(this.name, "paragraph", attributes);
                }
        };
    },
    addKeyboardShortcuts () {
        return this.options.levels.reduce((items, level)=>({
                ...items,
                ...{
                    [`Mod-Alt-${level}`]: ()=>this.editor.commands.toggleHeading({
                            level
                        })
                }
            }), {});
    },
    addInputRules () {
        return this.options.levels.map((level)=>{
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["textblockTypeInputRule"])({
                find: new RegExp(`^(#{${Math.min(...this.options.levels)},${level}})\\s$`),
                type: this.type,
                getAttributes: {
                    level
                }
            });
        });
    }
});
// src/index.ts
var index_default = Heading;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-horizontal-rule/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HorizontalRule",
    ()=>HorizontalRule,
    "default",
    ()=>index_default
]);
// src/horizontal-rule.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/state'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
var HorizontalRule = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "horizontalRule",
    addOptions () {
        return {
            HTMLAttributes: {},
            nextNodeType: "paragraph"
        };
    },
    group: "block",
    parseHTML () {
        return [
            {
                tag: "hr"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "hr",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes)
        ];
    },
    markdownTokenName: "hr",
    parseMarkdown: (token, helpers)=>{
        return helpers.createNode("horizontalRule");
    },
    renderMarkdown: ()=>{
        return "---";
    },
    addCommands () {
        return {
            setHorizontalRule: ()=>({ chain, state })=>{
                    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canInsertNode"])(state, state.schema.nodes[this.name])) {
                        return false;
                    }
                    const { selection } = state;
                    const { $to: $originTo } = selection;
                    const currentChain = chain();
                    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeSelection"])(selection)) {
                        currentChain.insertContentAt($originTo.pos, {
                            type: this.name
                        });
                    } else {
                        currentChain.insertContent({
                            type: this.name
                        });
                    }
                    return currentChain.command(({ state: chainState, tr, dispatch })=>{
                        if (dispatch) {
                            const { $to } = tr.selection;
                            const posAfter = $to.end();
                            if ($to.nodeAfter) {
                                if ($to.nodeAfter.isTextblock) {
                                    tr.setSelection(TextSelection.create(tr.doc, $to.pos + 1));
                                } else if ($to.nodeAfter.isBlock) {
                                    tr.setSelection(NodeSelection.create(tr.doc, $to.pos));
                                } else {
                                    tr.setSelection(TextSelection.create(tr.doc, $to.pos));
                                }
                            } else {
                                const nodeType = chainState.schema.nodes[this.options.nextNodeType] || $to.parent.type.contentMatch.defaultType;
                                const node = nodeType == null ? void 0 : nodeType.create();
                                if (node) {
                                    tr.insert(posAfter, node);
                                    tr.setSelection(TextSelection.create(tr.doc, posAfter + 1));
                                }
                            }
                            tr.scrollIntoView();
                        }
                        return true;
                    }).run();
                }
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeInputRule"])({
                find: /^(?:---|—-|___\s|\*\*\*\s)$/,
                type: this.type
            })
        ];
    }
});
// src/index.ts
var index_default = HorizontalRule;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-italic/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Italic",
    ()=>Italic,
    "default",
    ()=>index_default,
    "starInputRegex",
    ()=>starInputRegex,
    "starPasteRegex",
    ()=>starPasteRegex,
    "underscoreInputRegex",
    ()=>underscoreInputRegex,
    "underscorePasteRegex",
    ()=>underscorePasteRegex
]);
// src/italic.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var starInputRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/;
var starPasteRegex = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g;
var underscoreInputRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/;
var underscorePasteRegex = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g;
var Italic = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].create({
    name: "italic",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "em"
            },
            {
                tag: "i",
                getAttrs: (node)=>node.style.fontStyle !== "normal" && null
            },
            {
                style: "font-style=normal",
                clearMark: (mark)=>mark.type.name === this.name
            },
            {
                style: "font-style=italic"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "em",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    addCommands () {
        return {
            setItalic: ()=>({ commands })=>{
                    return commands.setMark(this.name);
                },
            toggleItalic: ()=>({ commands })=>{
                    return commands.toggleMark(this.name);
                },
            unsetItalic: ()=>({ commands })=>{
                    return commands.unsetMark(this.name);
                }
        };
    },
    markdownTokenName: "em",
    parseMarkdown: (token, helpers)=>{
        return helpers.applyMark("italic", helpers.parseInline(token.tokens || []));
    },
    renderMarkdown: (node, h)=>{
        return `*${h.renderChildren(node)}*`;
    },
    addKeyboardShortcuts () {
        return {
            "Mod-i": ()=>this.editor.commands.toggleItalic(),
            "Mod-I": ()=>this.editor.commands.toggleItalic()
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markInputRule"])({
                find: starInputRegex,
                type: this.type
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markInputRule"])({
                find: underscoreInputRegex,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPasteRule"])({
                find: starPasteRegex,
                type: this.type
            }),
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPasteRule"])({
                find: underscorePasteRegex,
                type: this.type
            })
        ];
    }
});
// src/index.ts
var index_default = Italic;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/linkifyjs/dist/linkify.mjs [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MultiToken",
    ()=>MultiToken,
    "Options",
    ()=>Options,
    "State",
    ()=>State,
    "createTokenClass",
    ()=>createTokenClass,
    "find",
    ()=>find,
    "init",
    ()=>init,
    "multi",
    ()=>multi,
    "options",
    ()=>options,
    "regexp",
    ()=>regexp,
    "registerCustomProtocol",
    ()=>registerCustomProtocol,
    "registerPlugin",
    ()=>registerPlugin,
    "registerTokenPlugin",
    ()=>registerTokenPlugin,
    "reset",
    ()=>reset,
    "stringToArray",
    ()=>stringToArray,
    "test",
    ()=>test,
    "text",
    ()=>multi,
    "tokenize",
    ()=>tokenize
]);
// THIS FILE IS AUTOMATICALLY GENERATED DO NOT EDIT DIRECTLY
// See update-tlds.js for encoding/decoding format
// https://data.iana.org/TLD/tlds-alpha-by-domain.txt
const encodedTlds = 'aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0axi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5mögensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2';
// Internationalized domain names containing non-ASCII
const encodedUtlds = 'ελ1υ2бг1ел3дети4ею2католик6ом3мкд2он1сква6онлайн5рг3рус2ф2сайт3рб3укр3қаз3հայ3ישראל5קום3ابوظبي5رامكو5لاردن4بحرين5جزائر5سعودية6عليان5مغرب5مارات5یران5بارت2زار4يتك3ھارت5تونس4سودان3رية5شبكة4عراق2ب2مان4فلسطين6قطر3كاثوليك6وم3مصر2ليسيا5وريتانيا7قع4همراه5پاکستان7ڀارت4कॉम3नेट3भारत0म्3ोत5संगठन5বাংলা5ভারত2ৰত4ਭਾਰਤ4ભારત4ଭାରତ4இந்தியா6லங்கை6சிங்கப்பூர்11భారత్5ಭಾರತ4ഭാരതം5ලංකා4คอม3ไทย3ລາວ3გე2みんな3アマゾン4クラウド4グーグル4コム2ストア3セール3ファッション6ポイント4世界2中信1国1國1文网3亚马逊3企业2佛山2信息2健康2八卦2公司1益2台湾1灣2商城1店1标2嘉里0大酒店5在线2大拿2天主教3娱乐2家電2广东2微博2慈善2我爱你3手机2招聘2政务1府2新加坡2闻2时尚2書籍2机构2淡马锡3游戏2澳門2点看2移动2组织机构4网址1店1站1络2联通2谷歌2购物2通販2集团2電訊盈科4飞利浦3食品2餐厅2香格里拉3港2닷넷1컴2삼성2한국2';
/**
 * Finite State Machine generation utilities
 */ /**
 * @template T
 * @typedef {{ [group: string]: T[] }} Collections
 */ /**
 * @typedef {{ [group: string]: true }} Flags
 */ // Keys in scanner Collections instances
const numeric = 'numeric';
const ascii = 'ascii';
const alpha = 'alpha';
const asciinumeric = 'asciinumeric';
const alphanumeric = 'alphanumeric';
const domain = 'domain';
const emoji = 'emoji';
const scheme = 'scheme';
const slashscheme = 'slashscheme';
const whitespace = 'whitespace';
/**
 * @template T
 * @param {string} name
 * @param {Collections<T>} groups to register in
 * @returns {T[]} Current list of tokens in the given collection
 */ function registerGroup(name, groups) {
    if (!(name in groups)) {
        groups[name] = [];
    }
    return groups[name];
}
/**
 * @template T
 * @param {T} t token to add
 * @param {Collections<T>} groups
 * @param {Flags} flags
 */ function addToGroups(t, flags, groups) {
    if (flags[numeric]) {
        flags[asciinumeric] = true;
        flags[alphanumeric] = true;
    }
    if (flags[ascii]) {
        flags[asciinumeric] = true;
        flags[alpha] = true;
    }
    if (flags[asciinumeric]) {
        flags[alphanumeric] = true;
    }
    if (flags[alpha]) {
        flags[alphanumeric] = true;
    }
    if (flags[alphanumeric]) {
        flags[domain] = true;
    }
    if (flags[emoji]) {
        flags[domain] = true;
    }
    for(const k in flags){
        const group = registerGroup(k, groups);
        if (group.indexOf(t) < 0) {
            group.push(t);
        }
    }
}
/**
 * @template T
 * @param {T} t token to check
 * @param {Collections<T>} groups
 * @returns {Flags} group flags that contain this token
 */ function flagsForToken(t, groups) {
    const result = {};
    for(const c in groups){
        if (groups[c].indexOf(t) >= 0) {
            result[c] = true;
        }
    }
    return result;
}
/**
 * @template T
 * @typedef {null | T } Transition
 */ /**
 * Define a basic state machine state. j is the list of character transitions,
 * jr is the list of regex-match transitions, jd is the default state to
 * transition to t is the accepting token type, if any. If this is the terminal
 * state, then it does not emit a token.
 *
 * The template type T represents the type of the token this state accepts. This
 * should be a string (such as of the token exports in `text.js`) or a
 * MultiToken subclass (from `multi.js`)
 *
 * @template T
 * @param {T} [token] Token that this state emits
 */ function State(token = null) {
    // this.n = null; // DEBUG: State name
    /** @type {{ [input: string]: State<T> }} j */ this.j = {}; // IMPLEMENTATION 1
    // this.j = []; // IMPLEMENTATION 2
    /** @type {[RegExp, State<T>][]} jr */ this.jr = [];
    /** @type {?State<T>} jd */ this.jd = null;
    /** @type {?T} t */ this.t = token;
}
/**
 * Scanner token groups
 * @type Collections<string>
 */ State.groups = {};
State.prototype = {
    accepts () {
        return !!this.t;
    },
    /**
   * Follow an existing transition from the given input to the next state.
   * Does not mutate.
   * @param {string} input character or token type to transition on
   * @returns {?State<T>} the next state, if any
   */ go (input) {
        const state = this;
        const nextState = state.j[input];
        if (nextState) {
            return nextState;
        }
        for(let i = 0; i < state.jr.length; i++){
            const regex = state.jr[i][0];
            const nextState = state.jr[i][1]; // note: might be empty to prevent default jump
            if (nextState && regex.test(input)) {
                return nextState;
            }
        }
        // Nowhere left to jump! Return default, if any
        return state.jd;
    },
    /**
   * Whether the state has a transition for the given input. Set the second
   * argument to true to only look for an exact match (and not a default or
   * regular-expression-based transition)
   * @param {string} input
   * @param {boolean} exactOnly
   */ has (input, exactOnly = false) {
        return exactOnly ? input in this.j : !!this.go(input);
    },
    /**
   * Short for "transition all"; create a transition from the array of items
   * in the given list to the same final resulting state.
   * @param {string | string[]} inputs Group of inputs to transition on
   * @param {Transition<T> | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   */ ta (inputs, next, flags, groups) {
        for(let i = 0; i < inputs.length; i++){
            this.tt(inputs[i], next, flags, groups);
        }
    },
    /**
   * Short for "take regexp transition"; defines a transition for this state
   * when it encounters a token which matches the given regular expression
   * @param {RegExp} regexp Regular expression transition (populate first)
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */ tr (regexp, next, flags, groups) {
        groups = groups || State.groups;
        let nextState;
        if (next && next.j) {
            nextState = next;
        } else {
            // Token with maybe token groups
            nextState = new State(next);
            if (flags && groups) {
                addToGroups(next, flags, groups);
            }
        }
        this.jr.push([
            regexp,
            nextState
        ]);
        return nextState;
    },
    /**
   * Short for "take transitions", will take as many sequential transitions as
   * the length of the given input and returns the
   * resulting final state.
   * @param {string | string[]} input
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of token groups
   * @returns {State<T>} taken after the given input
   */ ts (input, next, flags, groups) {
        let state = this;
        const len = input.length;
        if (!len) {
            return state;
        }
        for(let i = 0; i < len - 1; i++){
            state = state.tt(input[i]);
        }
        return state.tt(input[len - 1], next, flags, groups);
    },
    /**
   * Short for "take transition", this is a method for building/working with
   * state machines.
   *
   * If a state already exists for the given input, returns it.
   *
   * If a token is specified, that state will emit that token when reached by
   * the linkify engine.
   *
   * If no state exists, it will be initialized with some default transitions
   * that resemble existing default transitions.
   *
   * If a state is given for the second argument, that state will be
   * transitioned to on the given input regardless of what that input
   * previously did.
   *
   * Specify a token group flags to define groups that this token belongs to.
   * The token will be added to corresponding entires in the given groups
   * object.
   *
   * @param {string} input character, token type to transition on
   * @param {T | State<T>} [next] Transition options
   * @param {Flags} [flags] Collections flags to add token to
   * @param {Collections<T>} [groups] Master list of groups
   * @returns {State<T>} taken after the given input
   */ tt (input, next, flags, groups) {
        groups = groups || State.groups;
        const state = this;
        // Check if existing state given, just a basic transition
        if (next && next.j) {
            state.j[input] = next;
            return next;
        }
        const t = next;
        // Take the transition with the usual default mechanisms and use that as
        // a template for creating the next state
        let nextState, templateState = state.go(input);
        if (templateState) {
            nextState = new State();
            Object.assign(nextState.j, templateState.j);
            nextState.jr.push.apply(nextState.jr, templateState.jr);
            nextState.jd = templateState.jd;
            nextState.t = templateState.t;
        } else {
            nextState = new State();
        }
        if (t) {
            // Ensure newly token is in the same groups as the old token
            if (groups) {
                if (nextState.t && typeof nextState.t === 'string') {
                    const allFlags = Object.assign(flagsForToken(nextState.t, groups), flags);
                    addToGroups(t, allFlags, groups);
                } else if (flags) {
                    addToGroups(t, flags, groups);
                }
            }
            nextState.t = t; // overwrite anything that was previously there
        }
        state.j[input] = nextState;
        return nextState;
    }
};
// Helper functions to improve minification (not exported outside linkifyjs module)
/**
 * @template T
 * @param {State<T>} state
 * @param {string | string[]} input
 * @param {Flags} [flags]
 * @param {Collections<T>} [groups]
 */ const ta = (state, input, next, flags, groups)=>state.ta(input, next, flags, groups);
/**
 * @template T
 * @param {State<T>} state
 * @param {RegExp} regexp
 * @param {T | State<T>} [next]
 * @param {Flags} [flags]
 * @param {Collections<T>} [groups]
 */ const tr = (state, regexp, next, flags, groups)=>state.tr(regexp, next, flags, groups);
/**
 * @template T
 * @param {State<T>} state
 * @param {string | string[]} input
 * @param {T | State<T>} [next]
 * @param {Flags} [flags]
 * @param {Collections<T>} [groups]
 */ const ts = (state, input, next, flags, groups)=>state.ts(input, next, flags, groups);
/**
 * @template T
 * @param {State<T>} state
 * @param {string} input
 * @param {T | State<T>} [next]
 * @param {Collections<T>} [groups]
 * @param {Flags} [flags]
 */ const tt = (state, input, next, flags, groups)=>state.tt(input, next, flags, groups);
/******************************************************************************
Text Tokens
Identifiers for token outputs from the regexp scanner
******************************************************************************/ // A valid web domain token
const WORD = 'WORD'; // only contains a-z
const UWORD = 'UWORD'; // contains letters other than a-z, used for IDN
const ASCIINUMERICAL = 'ASCIINUMERICAL'; // contains a-z, 0-9
const ALPHANUMERICAL = 'ALPHANUMERICAL'; // contains numbers and letters other than a-z, used for IDN
// Special case of word
const LOCALHOST = 'LOCALHOST';
// Valid top-level domain, special case of WORD (see tlds.js)
const TLD = 'TLD';
// Valid IDN TLD, special case of UWORD (see tlds.js)
const UTLD = 'UTLD';
// The scheme portion of a web URI protocol. Supported types include: `mailto`,
// `file`, and user-defined custom protocols. Limited to schemes that contain
// only letters
const SCHEME = 'SCHEME';
// Similar to SCHEME, except makes distinction for schemes that must always be
// followed by `://`, not just `:`. Supported types include `http`, `https`,
// `ftp`, `ftps`
const SLASH_SCHEME = 'SLASH_SCHEME';
// Any sequence of digits 0-9
const NUM = 'NUM';
// Any number of consecutive whitespace characters that are not newline
const WS = 'WS';
// New line (unix style)
const NL = 'NL'; // \n
// Opening/closing bracket classes
// TODO: Rename OPEN -> LEFT and CLOSE -> RIGHT in v5 to fit with Unicode names
// Also rename angle brackes to LESSTHAN and GREATER THAN
const OPENBRACE = 'OPENBRACE'; // {
const CLOSEBRACE = 'CLOSEBRACE'; // }
const OPENBRACKET = 'OPENBRACKET'; // [
const CLOSEBRACKET = 'CLOSEBRACKET'; // ]
const OPENPAREN = 'OPENPAREN'; // (
const CLOSEPAREN = 'CLOSEPAREN'; // )
const OPENANGLEBRACKET = 'OPENANGLEBRACKET'; // <
const CLOSEANGLEBRACKET = 'CLOSEANGLEBRACKET'; // >
const FULLWIDTHLEFTPAREN = 'FULLWIDTHLEFTPAREN'; // （
const FULLWIDTHRIGHTPAREN = 'FULLWIDTHRIGHTPAREN'; // ）
const LEFTCORNERBRACKET = 'LEFTCORNERBRACKET'; // 「
const RIGHTCORNERBRACKET = 'RIGHTCORNERBRACKET'; // 」
const LEFTWHITECORNERBRACKET = 'LEFTWHITECORNERBRACKET'; // 『
const RIGHTWHITECORNERBRACKET = 'RIGHTWHITECORNERBRACKET'; // 』
const FULLWIDTHLESSTHAN = 'FULLWIDTHLESSTHAN'; // ＜
const FULLWIDTHGREATERTHAN = 'FULLWIDTHGREATERTHAN'; // ＞
// Various symbols
const AMPERSAND = 'AMPERSAND'; // &
const APOSTROPHE = 'APOSTROPHE'; // '
const ASTERISK = 'ASTERISK'; // *
const AT = 'AT'; // @
const BACKSLASH = 'BACKSLASH'; // \
const BACKTICK = 'BACKTICK'; // `
const CARET = 'CARET'; // ^
const COLON = 'COLON'; // :
const COMMA = 'COMMA'; // ,
const DOLLAR = 'DOLLAR'; // $
const DOT = 'DOT'; // .
const EQUALS = 'EQUALS'; // =
const EXCLAMATION = 'EXCLAMATION'; // !
const HYPHEN = 'HYPHEN'; // -
const PERCENT = 'PERCENT'; // %
const PIPE = 'PIPE'; // |
const PLUS = 'PLUS'; // +
const POUND = 'POUND'; // #
const QUERY = 'QUERY'; // ?
const QUOTE = 'QUOTE'; // "
const FULLWIDTHMIDDLEDOT = 'FULLWIDTHMIDDLEDOT'; // ・
const SEMI = 'SEMI'; // ;
const SLASH = 'SLASH'; // /
const TILDE = 'TILDE'; // ~
const UNDERSCORE = 'UNDERSCORE'; // _
// Emoji symbol
const EMOJI$1 = 'EMOJI';
// Default token - anything that is not one of the above
const SYM = 'SYM';
var tk = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ALPHANUMERICAL: ALPHANUMERICAL,
    AMPERSAND: AMPERSAND,
    APOSTROPHE: APOSTROPHE,
    ASCIINUMERICAL: ASCIINUMERICAL,
    ASTERISK: ASTERISK,
    AT: AT,
    BACKSLASH: BACKSLASH,
    BACKTICK: BACKTICK,
    CARET: CARET,
    CLOSEANGLEBRACKET: CLOSEANGLEBRACKET,
    CLOSEBRACE: CLOSEBRACE,
    CLOSEBRACKET: CLOSEBRACKET,
    CLOSEPAREN: CLOSEPAREN,
    COLON: COLON,
    COMMA: COMMA,
    DOLLAR: DOLLAR,
    DOT: DOT,
    EMOJI: EMOJI$1,
    EQUALS: EQUALS,
    EXCLAMATION: EXCLAMATION,
    FULLWIDTHGREATERTHAN: FULLWIDTHGREATERTHAN,
    FULLWIDTHLEFTPAREN: FULLWIDTHLEFTPAREN,
    FULLWIDTHLESSTHAN: FULLWIDTHLESSTHAN,
    FULLWIDTHMIDDLEDOT: FULLWIDTHMIDDLEDOT,
    FULLWIDTHRIGHTPAREN: FULLWIDTHRIGHTPAREN,
    HYPHEN: HYPHEN,
    LEFTCORNERBRACKET: LEFTCORNERBRACKET,
    LEFTWHITECORNERBRACKET: LEFTWHITECORNERBRACKET,
    LOCALHOST: LOCALHOST,
    NL: NL,
    NUM: NUM,
    OPENANGLEBRACKET: OPENANGLEBRACKET,
    OPENBRACE: OPENBRACE,
    OPENBRACKET: OPENBRACKET,
    OPENPAREN: OPENPAREN,
    PERCENT: PERCENT,
    PIPE: PIPE,
    PLUS: PLUS,
    POUND: POUND,
    QUERY: QUERY,
    QUOTE: QUOTE,
    RIGHTCORNERBRACKET: RIGHTCORNERBRACKET,
    RIGHTWHITECORNERBRACKET: RIGHTWHITECORNERBRACKET,
    SCHEME: SCHEME,
    SEMI: SEMI,
    SLASH: SLASH,
    SLASH_SCHEME: SLASH_SCHEME,
    SYM: SYM,
    TILDE: TILDE,
    TLD: TLD,
    UNDERSCORE: UNDERSCORE,
    UTLD: UTLD,
    UWORD: UWORD,
    WORD: WORD,
    WS: WS
});
// Note that these two Unicode ones expand into a really big one with Babel
const ASCII_LETTER = /[a-z]/;
const LETTER = /\p{L}/u; // Any Unicode character with letter data type
const EMOJI = /\p{Emoji}/u; // Any Unicode emoji character
const EMOJI_VARIATION$1 = /\ufe0f/;
const DIGIT = /\d/;
const SPACE = /\s/;
var regexp = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    ASCII_LETTER: ASCII_LETTER,
    DIGIT: DIGIT,
    EMOJI: EMOJI,
    EMOJI_VARIATION: EMOJI_VARIATION$1,
    LETTER: LETTER,
    SPACE: SPACE
});
/**
	The scanner provides an interface that takes a string of text as input, and
	outputs an array of tokens instances that can be used for easy URL parsing.
*/ const CR = '\r'; // carriage-return character
const LF = '\n'; // line-feed character
const EMOJI_VARIATION = '\ufe0f'; // Variation selector, follows heart and others
const EMOJI_JOINER = '\u200d'; // zero-width joiner
const OBJECT_REPLACEMENT = '\ufffc'; // whitespace placeholder that sometimes appears in rich text editors
let tlds = null, utlds = null; // don't change so only have to be computed once
/**
 * Scanner output token:
 * - `t` is the token name (e.g., 'NUM', 'EMOJI', 'TLD')
 * - `v` is the value of the token (e.g., '123', '❤️', 'com')
 * - `s` is the start index of the token in the original string
 * - `e` is the end index of the token in the original string
 * @typedef {{t: string, v: string, s: number, e: number}} Token
 */ /**
 * @template T
 * @typedef {{ [collection: string]: T[] }} Collections
 */ /**
 * Initialize the scanner character-based state machine for the given start
 * state
 * @param {[string, boolean][]} customSchemes List of custom schemes, where each
 * item is a length-2 tuple with the first element set to the string scheme, and
 * the second element set to `true` if the `://` after the scheme is optional
 */ function init$2(customSchemes = []) {
    // Frequently used states (name argument removed during minification)
    /** @type Collections<string> */ const groups = {}; // of tokens
    State.groups = groups;
    /** @type State<string> */ const Start = new State();
    if (tlds == null) {
        tlds = decodeTlds(encodedTlds);
    }
    if (utlds == null) {
        utlds = decodeTlds(encodedUtlds);
    }
    // States for special URL symbols that accept immediately after start
    tt(Start, "'", APOSTROPHE);
    tt(Start, '{', OPENBRACE);
    tt(Start, '}', CLOSEBRACE);
    tt(Start, '[', OPENBRACKET);
    tt(Start, ']', CLOSEBRACKET);
    tt(Start, '(', OPENPAREN);
    tt(Start, ')', CLOSEPAREN);
    tt(Start, '<', OPENANGLEBRACKET);
    tt(Start, '>', CLOSEANGLEBRACKET);
    tt(Start, '（', FULLWIDTHLEFTPAREN);
    tt(Start, '）', FULLWIDTHRIGHTPAREN);
    tt(Start, '「', LEFTCORNERBRACKET);
    tt(Start, '」', RIGHTCORNERBRACKET);
    tt(Start, '『', LEFTWHITECORNERBRACKET);
    tt(Start, '』', RIGHTWHITECORNERBRACKET);
    tt(Start, '＜', FULLWIDTHLESSTHAN);
    tt(Start, '＞', FULLWIDTHGREATERTHAN);
    tt(Start, '&', AMPERSAND);
    tt(Start, '*', ASTERISK);
    tt(Start, '@', AT);
    tt(Start, '`', BACKTICK);
    tt(Start, '^', CARET);
    tt(Start, ':', COLON);
    tt(Start, ',', COMMA);
    tt(Start, '$', DOLLAR);
    tt(Start, '.', DOT);
    tt(Start, '=', EQUALS);
    tt(Start, '!', EXCLAMATION);
    tt(Start, '-', HYPHEN);
    tt(Start, '%', PERCENT);
    tt(Start, '|', PIPE);
    tt(Start, '+', PLUS);
    tt(Start, '#', POUND);
    tt(Start, '?', QUERY);
    tt(Start, '"', QUOTE);
    tt(Start, '/', SLASH);
    tt(Start, ';', SEMI);
    tt(Start, '~', TILDE);
    tt(Start, '_', UNDERSCORE);
    tt(Start, '\\', BACKSLASH);
    tt(Start, '・', FULLWIDTHMIDDLEDOT);
    const Num = tr(Start, DIGIT, NUM, {
        [numeric]: true
    });
    tr(Num, DIGIT, Num);
    const Asciinumeric = tr(Num, ASCII_LETTER, ASCIINUMERICAL, {
        [asciinumeric]: true
    });
    const Alphanumeric = tr(Num, LETTER, ALPHANUMERICAL, {
        [alphanumeric]: true
    });
    // State which emits a word token
    const Word = tr(Start, ASCII_LETTER, WORD, {
        [ascii]: true
    });
    tr(Word, DIGIT, Asciinumeric);
    tr(Word, ASCII_LETTER, Word);
    tr(Asciinumeric, DIGIT, Asciinumeric);
    tr(Asciinumeric, ASCII_LETTER, Asciinumeric);
    // Same as previous, but specific to non-fsm.ascii alphabet words
    const UWord = tr(Start, LETTER, UWORD, {
        [alpha]: true
    });
    tr(UWord, ASCII_LETTER); // Non-accepting
    tr(UWord, DIGIT, Alphanumeric);
    tr(UWord, LETTER, UWord);
    tr(Alphanumeric, DIGIT, Alphanumeric);
    tr(Alphanumeric, ASCII_LETTER); // Non-accepting
    tr(Alphanumeric, LETTER, Alphanumeric); // Non-accepting
    // Whitespace jumps
    // Tokens of only non-newline whitespace are arbitrarily long
    // If any whitespace except newline, more whitespace!
    const Nl = tt(Start, LF, NL, {
        [whitespace]: true
    });
    const Cr = tt(Start, CR, WS, {
        [whitespace]: true
    });
    const Ws = tr(Start, SPACE, WS, {
        [whitespace]: true
    });
    tt(Start, OBJECT_REPLACEMENT, Ws);
    tt(Cr, LF, Nl); // \r\n
    tt(Cr, OBJECT_REPLACEMENT, Ws);
    tr(Cr, SPACE, Ws);
    tt(Ws, CR); // non-accepting state to avoid mixing whitespaces
    tt(Ws, LF); // non-accepting state to avoid mixing whitespaces
    tr(Ws, SPACE, Ws);
    tt(Ws, OBJECT_REPLACEMENT, Ws);
    // Emoji tokens. They are not grouped by the scanner except in cases where a
    // zero-width joiner is present
    const Emoji = tr(Start, EMOJI, EMOJI$1, {
        [emoji]: true
    });
    tt(Emoji, '#'); // no transition, emoji regex seems to match #
    tr(Emoji, EMOJI, Emoji);
    tt(Emoji, EMOJI_VARIATION, Emoji);
    // tt(Start, EMOJI_VARIATION, Emoji); // This one is sketchy
    const EmojiJoiner = tt(Emoji, EMOJI_JOINER);
    tt(EmojiJoiner, '#');
    tr(EmojiJoiner, EMOJI, Emoji);
    // tt(EmojiJoiner, EMOJI_VARIATION, Emoji); // also sketchy
    // Generates states for top-level domains
    // Note that this is most accurate when tlds are in alphabetical order
    const wordjr = [
        [
            ASCII_LETTER,
            Word
        ],
        [
            DIGIT,
            Asciinumeric
        ]
    ];
    const uwordjr = [
        [
            ASCII_LETTER,
            null
        ],
        [
            LETTER,
            UWord
        ],
        [
            DIGIT,
            Alphanumeric
        ]
    ];
    for(let i = 0; i < tlds.length; i++){
        fastts(Start, tlds[i], TLD, WORD, wordjr);
    }
    for(let i = 0; i < utlds.length; i++){
        fastts(Start, utlds[i], UTLD, UWORD, uwordjr);
    }
    addToGroups(TLD, {
        tld: true,
        ascii: true
    }, groups);
    addToGroups(UTLD, {
        utld: true,
        alpha: true
    }, groups);
    // Collect the states generated by different protocols. NOTE: If any new TLDs
    // get added that are also protocols, set the token to be the same as the
    // protocol to ensure parsing works as expected.
    fastts(Start, 'file', SCHEME, WORD, wordjr);
    fastts(Start, 'mailto', SCHEME, WORD, wordjr);
    fastts(Start, 'http', SLASH_SCHEME, WORD, wordjr);
    fastts(Start, 'https', SLASH_SCHEME, WORD, wordjr);
    fastts(Start, 'ftp', SLASH_SCHEME, WORD, wordjr);
    fastts(Start, 'ftps', SLASH_SCHEME, WORD, wordjr);
    addToGroups(SCHEME, {
        scheme: true,
        ascii: true
    }, groups);
    addToGroups(SLASH_SCHEME, {
        slashscheme: true,
        ascii: true
    }, groups);
    // Register custom schemes. Assumes each scheme is asciinumeric with hyphens
    customSchemes = customSchemes.sort((a, b)=>a[0] > b[0] ? 1 : -1);
    for(let i = 0; i < customSchemes.length; i++){
        const sch = customSchemes[i][0];
        const optionalSlashSlash = customSchemes[i][1];
        const flags = optionalSlashSlash ? {
            [scheme]: true
        } : {
            [slashscheme]: true
        };
        if (sch.indexOf('-') >= 0) {
            flags[domain] = true;
        } else if (!ASCII_LETTER.test(sch)) {
            flags[numeric] = true; // numbers only
        } else if (DIGIT.test(sch)) {
            flags[asciinumeric] = true;
        } else {
            flags[ascii] = true;
        }
        ts(Start, sch, sch, flags);
    }
    // Localhost token
    ts(Start, 'localhost', LOCALHOST, {
        ascii: true
    });
    // Set default transition for start state (some symbol)
    Start.jd = new State(SYM);
    return {
        start: Start,
        tokens: Object.assign({
            groups
        }, tk)
    };
}
/**
	Given a string, returns an array of TOKEN instances representing the
	composition of that string.

	@method run
	@param {State<string>} start scanner starting state
	@param {string} str input string to scan
	@return {Token[]} list of tokens, each with a type and value
*/ function run$1(start, str) {
    // State machine is not case sensitive, so input is tokenized in lowercased
    // form (still returns regular case). Uses selective `toLowerCase` because
    // lowercasing the entire string causes the length and character position to
    // vary in some non-English strings with V8-based runtimes.
    const iterable = stringToArray(str.replace(/[A-Z]/g, (c)=>c.toLowerCase()));
    const charCount = iterable.length; // <= len if there are emojis, etc
    const tokens = []; // return value
    // cursor through the string itself, accounting for characters that have
    // width with length 2 such as emojis
    let cursor = 0;
    // Cursor through the array-representation of the string
    let charCursor = 0;
    // Tokenize the string
    while(charCursor < charCount){
        let state = start;
        let nextState = null;
        let tokenLength = 0;
        let latestAccepting = null;
        let sinceAccepts = -1;
        let charsSinceAccepts = -1;
        while(charCursor < charCount && (nextState = state.go(iterable[charCursor]))){
            state = nextState;
            // Keep track of the latest accepting state
            if (state.accepts()) {
                sinceAccepts = 0;
                charsSinceAccepts = 0;
                latestAccepting = state;
            } else if (sinceAccepts >= 0) {
                sinceAccepts += iterable[charCursor].length;
                charsSinceAccepts++;
            }
            tokenLength += iterable[charCursor].length;
            cursor += iterable[charCursor].length;
            charCursor++;
        }
        // Roll back to the latest accepting state
        cursor -= sinceAccepts;
        charCursor -= charsSinceAccepts;
        tokenLength -= sinceAccepts;
        // No more jumps, just make a new token from the last accepting one
        tokens.push({
            t: latestAccepting.t,
            // token type/name
            v: str.slice(cursor - tokenLength, cursor),
            // string value
            s: cursor - tokenLength,
            // start index
            e: cursor // end index (excluding)
        });
    }
    return tokens;
}
/**
 * Convert a String to an Array of characters, taking into account that some
 * characters like emojis take up two string indexes.
 *
 * Adapted from core-js (MIT license)
 * https://github.com/zloirock/core-js/blob/2d69cf5f99ab3ea3463c395df81e5a15b68f49d9/packages/core-js/internals/string-multibyte.js
 *
 * @function stringToArray
 * @param {string} str
 * @returns {string[]}
 */ function stringToArray(str) {
    const result = [];
    const len = str.length;
    let index = 0;
    while(index < len){
        let first = str.charCodeAt(index);
        let second;
        let char = first < 0xd800 || first > 0xdbff || index + 1 === len || (second = str.charCodeAt(index + 1)) < 0xdc00 || second > 0xdfff ? str[index] // single character
         : str.slice(index, index + 2); // two-index characters
        result.push(char);
        index += char.length;
    }
    return result;
}
/**
 * Fast version of ts function for when transition defaults are well known
 * @param {State<string>} state
 * @param {string} input
 * @param {string} t
 * @param {string} defaultt
 * @param {[RegExp, State<string>][]} jr
 * @returns {State<string>}
 */ function fastts(state, input, t, defaultt, jr) {
    let next;
    const len = input.length;
    for(let i = 0; i < len - 1; i++){
        const char = input[i];
        if (state.j[char]) {
            next = state.j[char];
        } else {
            next = new State(defaultt);
            next.jr = jr.slice();
            state.j[char] = next;
        }
        state = next;
    }
    next = new State(t);
    next.jr = jr.slice();
    state.j[input[len - 1]] = next;
    return next;
}
/**
 * Converts a string of Top-Level Domain names encoded in update-tlds.js back
 * into a list of strings.
 * @param {str} encoded encoded TLDs string
 * @returns {str[]} original TLDs list
 */ function decodeTlds(encoded) {
    const words = [];
    const stack = [];
    let i = 0;
    let digits = '0123456789';
    while(i < encoded.length){
        let popDigitCount = 0;
        while(digits.indexOf(encoded[i + popDigitCount]) >= 0){
            popDigitCount++; // encountered some digits, have to pop to go one level up trie
        }
        if (popDigitCount > 0) {
            words.push(stack.join('')); // whatever preceded the pop digits must be a word
            for(let popCount = parseInt(encoded.substring(i, i + popDigitCount), 10); popCount > 0; popCount--){
                stack.pop();
            }
            i += popDigitCount;
        } else {
            stack.push(encoded[i]); // drop down a level into the trie
            i++;
        }
    }
    return words;
}
/**
 * An object where each key is a valid DOM Event Name such as `click` or `focus`
 * and each value is an event handler function.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/Element#events
 * @typedef {?{ [event: string]: Function }} EventListeners
 */ /**
 * All formatted properties required to render a link, including `tagName`,
 * `attributes`, `content` and `eventListeners`.
 * @typedef {{ tagName: any, attributes: {[attr: string]: any}, content: string,
 * eventListeners: EventListeners }} IntermediateRepresentation
 */ /**
 * Specify either an object described by the template type `O` or a function.
 *
 * The function takes a string value (usually the link's href attribute), the
 * link type (`'url'`, `'hashtag`', etc.) and an internal token representation
 * of the link. It should return an object of the template type `O`
 * @template O
 * @typedef {O | ((value: string, type: string, token: MultiToken) => O)} OptObj
 */ /**
 * Specify either a function described by template type `F` or an object.
 *
 * Each key in the object should be a link type (`'url'`, `'hashtag`', etc.). Each
 * value should be a function with template type `F` that is called when the
 * corresponding link type is encountered.
 * @template F
 * @typedef {F | { [type: string]: F}} OptFn
 */ /**
 * Specify either a value with template type `V`, a function that returns `V` or
 * an object where each value resolves to `V`.
 *
 * The function takes a string value (usually the link's href attribute), the
 * link type (`'url'`, `'hashtag`', etc.) and an internal token representation
 * of the link. It should return an object of the template type `V`
 *
 * For the object, each key should be a link type (`'url'`, `'hashtag`', etc.).
 * Each value should either have type `V` or a function that returns V. This
 * function similarly takes a string value and a token.
 *
 * Example valid types for `Opt<string>`:
 *
 * ```js
 * 'hello'
 * (value, type, token) => 'world'
 * { url: 'hello', email: (value, token) => 'world'}
 * ```
 * @template V
 * @typedef {V | ((value: string, type: string, token: MultiToken) => V) | { [type: string]: V | ((value: string, token: MultiToken) => V) }} Opt
 */ /**
 * See available options: https://linkify.js.org/docs/options.html
 * @typedef {{
 * 	defaultProtocol?: string,
 *  events?: OptObj<EventListeners>,
 * 	format?: Opt<string>,
 * 	formatHref?: Opt<string>,
 * 	nl2br?: boolean,
 * 	tagName?: Opt<any>,
 * 	target?: Opt<string>,
 * 	rel?: Opt<string>,
 * 	validate?: Opt<boolean>,
 * 	truncate?: Opt<number>,
 * 	className?: Opt<string>,
 * 	attributes?: OptObj<({ [attr: string]: any })>,
 *  ignoreTags?: string[],
 * 	render?: OptFn<((ir: IntermediateRepresentation) => any)>
 * }} Opts
 */ /**
 * @type Required<Opts>
 */ const defaults = {
    defaultProtocol: 'http',
    events: null,
    format: noop,
    formatHref: noop,
    nl2br: false,
    tagName: 'a',
    target: null,
    rel: null,
    validate: true,
    truncate: Infinity,
    className: null,
    attributes: null,
    ignoreTags: [],
    render: null
};
/**
 * Utility class for linkify interfaces to apply specified
 * {@link Opts formatting and rendering options}.
 *
 * @param {Opts | Options} [opts] Option value overrides.
 * @param {(ir: IntermediateRepresentation) => any} [defaultRender] (For
 *   internal use) default render function that determines how to generate an
 *   HTML element based on a link token's derived tagName, attributes and HTML.
 *   Similar to render option
 */ function Options(opts, defaultRender = null) {
    let o = Object.assign({}, defaults);
    if (opts) {
        o = Object.assign(o, opts instanceof Options ? opts.o : opts);
    }
    // Ensure all ignored tags are uppercase
    const ignoredTags = o.ignoreTags;
    const uppercaseIgnoredTags = [];
    for(let i = 0; i < ignoredTags.length; i++){
        uppercaseIgnoredTags.push(ignoredTags[i].toUpperCase());
    }
    /** @protected */ this.o = o;
    if (defaultRender) {
        this.defaultRender = defaultRender;
    }
    this.ignoreTags = uppercaseIgnoredTags;
}
Options.prototype = {
    o: defaults,
    /**
   * @type string[]
   */ ignoreTags: [],
    /**
   * @param {IntermediateRepresentation} ir
   * @returns {any}
   */ defaultRender (ir) {
        return ir;
    },
    /**
   * Returns true or false based on whether a token should be displayed as a
   * link based on the user options.
   * @param {MultiToken} token
   * @returns {boolean}
   */ check (token) {
        return this.get('validate', token.toString(), token);
    },
    // Private methods
    /**
   * Resolve an option's value based on the value of the option and the given
   * params. If operator and token are specified and the target option is
   * callable, automatically calls the function with the given argument.
   * @template {keyof Opts} K
   * @param {K} key Name of option to use
   * @param {string} [operator] will be passed to the target option if it's a
   * function. If not specified, RAW function value gets returned
   * @param {MultiToken} [token] The token from linkify.tokenize
   * @returns {Opts[K] | any}
   */ get (key, operator, token) {
        const isCallable = operator != null;
        let option = this.o[key];
        if (!option) {
            return option;
        }
        if (typeof option === 'object') {
            option = token.t in option ? option[token.t] : defaults[key];
            if (typeof option === 'function' && isCallable) {
                option = option(operator, token);
            }
        } else if (typeof option === 'function' && isCallable) {
            option = option(operator, token.t, token);
        }
        return option;
    },
    /**
   * @template {keyof Opts} L
   * @param {L} key Name of options object to use
   * @param {string} [operator]
   * @param {MultiToken} [token]
   * @returns {Opts[L] | any}
   */ getObj (key, operator, token) {
        let obj = this.o[key];
        if (typeof obj === 'function' && operator != null) {
            obj = obj(operator, token.t, token);
        }
        return obj;
    },
    /**
   * Convert the given token to a rendered element that may be added to the
   * calling-interface's DOM
   * @param {MultiToken} token Token to render to an HTML element
   * @returns {any} Render result; e.g., HTML string, DOM element, React
   *   Component, etc.
   */ render (token) {
        const ir = token.render(this); // intermediate representation
        const renderFn = this.get('render', null, token) || this.defaultRender;
        return renderFn(ir, token.t, token);
    }
};
function noop(val) {
    return val;
}
var options = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Options: Options,
    defaults: defaults
});
/******************************************************************************
	Multi-Tokens
	Tokens composed of arrays of TextTokens
******************************************************************************/ /**
 * @param {string} value
 * @param {Token[]} tokens
 */ function MultiToken(value, tokens) {
    this.t = 'token';
    this.v = value;
    this.tk = tokens;
}
/**
 * Abstract class used for manufacturing tokens of text tokens. That is rather
 * than the value for a token being a small string of text, it's value an array
 * of text tokens.
 *
 * Used for grouping together URLs, emails, hashtags, and other potential
 * creations.
 * @class MultiToken
 * @property {string} t
 * @property {string} v
 * @property {Token[]} tk
 * @abstract
 */ MultiToken.prototype = {
    isLink: false,
    /**
   * Return the string this token represents.
   * @return {string}
   */ toString () {
        return this.v;
    },
    /**
   * What should the value for this token be in the `href` HTML attribute?
   * Returns the `.toString` value by default.
   * @param {string} [scheme]
   * @return {string}
   */ toHref (scheme) {
        return this.toString();
    },
    /**
   * @param {Options} options Formatting options
   * @returns {string}
   */ toFormattedString (options) {
        const val = this.toString();
        const truncate = options.get('truncate', val, this);
        const formatted = options.get('format', val, this);
        return truncate && formatted.length > truncate ? formatted.substring(0, truncate) + '…' : formatted;
    },
    /**
   *
   * @param {Options} options
   * @returns {string}
   */ toFormattedHref (options) {
        return options.get('formatHref', this.toHref(options.get('defaultProtocol')), this);
    },
    /**
   * The start index of this token in the original input string
   * @returns {number}
   */ startIndex () {
        return this.tk[0].s;
    },
    /**
   * The end index of this token in the original input string (up to this
   * index but not including it)
   * @returns {number}
   */ endIndex () {
        return this.tk[this.tk.length - 1].e;
    },
    /**
  	Returns an object  of relevant values for this token, which includes keys
  	* type - Kind of token ('url', 'email', etc.)
  	* value - Original text
  	* href - The value that should be added to the anchor tag's href
  		attribute
  		@method toObject
  	@param {string} [protocol] `'http'` by default
  */ toObject (protocol = defaults.defaultProtocol) {
        return {
            type: this.t,
            value: this.toString(),
            isLink: this.isLink,
            href: this.toHref(protocol),
            start: this.startIndex(),
            end: this.endIndex()
        };
    },
    /**
   *
   * @param {Options} options Formatting option
   */ toFormattedObject (options) {
        return {
            type: this.t,
            value: this.toFormattedString(options),
            isLink: this.isLink,
            href: this.toFormattedHref(options),
            start: this.startIndex(),
            end: this.endIndex()
        };
    },
    /**
   * Whether this token should be rendered as a link according to the given options
   * @param {Options} options
   * @returns {boolean}
   */ validate (options) {
        return options.get('validate', this.toString(), this);
    },
    /**
   * Return an object that represents how this link should be rendered.
   * @param {Options} options Formattinng options
   */ render (options) {
        const token = this;
        const href = this.toHref(options.get('defaultProtocol'));
        const formattedHref = options.get('formatHref', href, this);
        const tagName = options.get('tagName', href, token);
        const content = this.toFormattedString(options);
        const attributes = {};
        const className = options.get('className', href, token);
        const target = options.get('target', href, token);
        const rel = options.get('rel', href, token);
        const attrs = options.getObj('attributes', href, token);
        const eventListeners = options.getObj('events', href, token);
        attributes.href = formattedHref;
        if (className) {
            attributes.class = className;
        }
        if (target) {
            attributes.target = target;
        }
        if (rel) {
            attributes.rel = rel;
        }
        if (attrs) {
            Object.assign(attributes, attrs);
        }
        return {
            tagName,
            attributes,
            content,
            eventListeners
        };
    }
};
/**
 * Create a new token that can be emitted by the parser state machine
 * @param {string} type readable type of the token
 * @param {object} props properties to assign or override, including isLink = true or false
 * @returns {new (value: string, tokens: Token[]) => MultiToken} new token class
 */ function createTokenClass(type, props) {
    class Token extends MultiToken {
        constructor(value, tokens){
            super(value, tokens);
            this.t = type;
        }
    }
    for(const p in props){
        Token.prototype[p] = props[p];
    }
    Token.t = type;
    return Token;
}
/**
	Represents a list of tokens making up a valid email address
*/ const Email = createTokenClass('email', {
    isLink: true,
    toHref () {
        return 'mailto:' + this.toString();
    }
});
/**
	Represents some plain text
*/ const Text = createTokenClass('text');
/**
	Multi-linebreak token - represents a line break
	@class Nl
*/ const Nl = createTokenClass('nl');
/**
	Represents a list of text tokens making up a valid URL
	@class Url
*/ const Url = createTokenClass('url', {
    isLink: true,
    /**
  	Lowercases relevant parts of the domain and adds the protocol if
  	required. Note that this will not escape unsafe HTML characters in the
  	URL.
  		@param {string} [scheme] default scheme (e.g., 'https')
  	@return {string} the full href
  */ toHref (scheme = defaults.defaultProtocol) {
        // Check if already has a prefix scheme
        return this.hasProtocol() ? this.v : `${scheme}://${this.v}`;
    },
    /**
   * Check whether this URL token has a protocol
   * @return {boolean}
   */ hasProtocol () {
        const tokens = this.tk;
        return tokens.length >= 2 && tokens[0].t !== LOCALHOST && tokens[1].t === COLON;
    }
});
var multi = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Base: MultiToken,
    Email: Email,
    MultiToken: MultiToken,
    Nl: Nl,
    Text: Text,
    Url: Url,
    createTokenClass: createTokenClass
});
/**
	Not exactly parser, more like the second-stage scanner (although we can
	theoretically hotswap the code here with a real parser in the future... but
	for a little URL-finding utility abstract syntax trees may be a little
	overkill).

	URL format: http://en.wikipedia.org/wiki/URI_scheme
	Email format: http://en.wikipedia.org/wiki/EmailAddress (links to RFC in
	reference)

	@module linkify
	@submodule parser
	@main run
*/ const makeState = (arg)=>new State(arg);
/**
 * Generate the parser multi token-based state machine
 * @param {{ groups: Collections<string> }} tokens
 */ function init$1({ groups }) {
    // Types of characters the URL can definitely end in
    const qsAccepting = groups.domain.concat([
        AMPERSAND,
        ASTERISK,
        AT,
        BACKSLASH,
        BACKTICK,
        CARET,
        DOLLAR,
        EQUALS,
        HYPHEN,
        NUM,
        PERCENT,
        PIPE,
        PLUS,
        POUND,
        SLASH,
        SYM,
        TILDE,
        UNDERSCORE
    ]);
    // Types of tokens that can follow a URL and be part of the query string
    // but cannot be the very last characters
    // Characters that cannot appear in the URL at all should be excluded
    const qsNonAccepting = [
        APOSTROPHE,
        COLON,
        COMMA,
        DOT,
        EXCLAMATION,
        PERCENT,
        QUERY,
        QUOTE,
        SEMI,
        OPENANGLEBRACKET,
        CLOSEANGLEBRACKET,
        OPENBRACE,
        CLOSEBRACE,
        CLOSEBRACKET,
        OPENBRACKET,
        OPENPAREN,
        CLOSEPAREN,
        FULLWIDTHLEFTPAREN,
        FULLWIDTHRIGHTPAREN,
        LEFTCORNERBRACKET,
        RIGHTCORNERBRACKET,
        LEFTWHITECORNERBRACKET,
        RIGHTWHITECORNERBRACKET,
        FULLWIDTHLESSTHAN,
        FULLWIDTHGREATERTHAN
    ];
    // For addresses without the mailto prefix
    // Tokens allowed in the localpart of the email
    const localpartAccepting = [
        AMPERSAND,
        APOSTROPHE,
        ASTERISK,
        BACKSLASH,
        BACKTICK,
        CARET,
        DOLLAR,
        EQUALS,
        HYPHEN,
        OPENBRACE,
        CLOSEBRACE,
        PERCENT,
        PIPE,
        PLUS,
        POUND,
        QUERY,
        SLASH,
        SYM,
        TILDE,
        UNDERSCORE
    ];
    // The universal starting state.
    /**
   * @type State<Token>
   */ const Start = makeState();
    const Localpart = tt(Start, TILDE); // Local part of the email address
    ta(Localpart, localpartAccepting, Localpart);
    ta(Localpart, groups.domain, Localpart);
    const Domain = makeState(), Scheme = makeState(), SlashScheme = makeState();
    ta(Start, groups.domain, Domain); // parsed string ends with a potential domain name (A)
    ta(Start, groups.scheme, Scheme); // e.g., 'mailto'
    ta(Start, groups.slashscheme, SlashScheme); // e.g., 'http'
    ta(Domain, localpartAccepting, Localpart);
    ta(Domain, groups.domain, Domain);
    const LocalpartAt = tt(Domain, AT); // Local part of the email address plus @
    tt(Localpart, AT, LocalpartAt); // close to an email address now
    // Local part of an email address can be e.g. 'http' or 'mailto'
    tt(Scheme, AT, LocalpartAt);
    tt(SlashScheme, AT, LocalpartAt);
    const LocalpartDot = tt(Localpart, DOT); // Local part of the email address plus '.' (localpart cannot end in .)
    ta(LocalpartDot, localpartAccepting, Localpart);
    ta(LocalpartDot, groups.domain, Localpart);
    const EmailDomain = makeState();
    ta(LocalpartAt, groups.domain, EmailDomain); // parsed string starts with local email info + @ with a potential domain name
    ta(EmailDomain, groups.domain, EmailDomain);
    const EmailDomainDot = tt(EmailDomain, DOT); // domain followed by DOT
    ta(EmailDomainDot, groups.domain, EmailDomain);
    const Email$1 = makeState(Email); // Possible email address (could have more tlds)
    ta(EmailDomainDot, groups.tld, Email$1);
    ta(EmailDomainDot, groups.utld, Email$1);
    tt(LocalpartAt, LOCALHOST, Email$1);
    // Hyphen can jump back to a domain name
    const EmailDomainHyphen = tt(EmailDomain, HYPHEN); // parsed string starts with local email info + @ with a potential domain name
    tt(EmailDomainHyphen, HYPHEN, EmailDomainHyphen);
    ta(EmailDomainHyphen, groups.domain, EmailDomain);
    ta(Email$1, groups.domain, EmailDomain);
    tt(Email$1, DOT, EmailDomainDot);
    tt(Email$1, HYPHEN, EmailDomainHyphen);
    // Final possible email states
    const EmailColon = tt(Email$1, COLON); // URL followed by colon (potential port number here)
    /*const EmailColonPort = */ ta(EmailColon, groups.numeric, Email); // URL followed by colon and port number
    // Account for dots and hyphens. Hyphens are usually parts of domain names
    // (but not TLDs)
    const DomainHyphen = tt(Domain, HYPHEN); // domain followed by hyphen
    const DomainDot = tt(Domain, DOT); // domain followed by DOT
    tt(DomainHyphen, HYPHEN, DomainHyphen);
    ta(DomainHyphen, groups.domain, Domain);
    ta(DomainDot, localpartAccepting, Localpart);
    ta(DomainDot, groups.domain, Domain);
    const DomainDotTld = makeState(Url); // Simplest possible URL with no query string
    ta(DomainDot, groups.tld, DomainDotTld);
    ta(DomainDot, groups.utld, DomainDotTld);
    ta(DomainDotTld, groups.domain, Domain);
    ta(DomainDotTld, localpartAccepting, Localpart);
    tt(DomainDotTld, DOT, DomainDot);
    tt(DomainDotTld, HYPHEN, DomainHyphen);
    tt(DomainDotTld, AT, LocalpartAt);
    const DomainDotTldColon = tt(DomainDotTld, COLON); // URL followed by colon (potential port number here)
    const DomainDotTldColonPort = makeState(Url); // TLD followed by a port number
    ta(DomainDotTldColon, groups.numeric, DomainDotTldColonPort);
    // Long URL with optional port and maybe query string
    const Url$1 = makeState(Url);
    // URL with extra symbols at the end, followed by an opening bracket
    const UrlNonaccept = makeState(); // URL followed by some symbols (will not be part of the final URL)
    // Query strings
    ta(Url$1, qsAccepting, Url$1);
    ta(Url$1, qsNonAccepting, UrlNonaccept);
    ta(UrlNonaccept, qsAccepting, Url$1);
    ta(UrlNonaccept, qsNonAccepting, UrlNonaccept);
    // Become real URLs after `SLASH` or `COLON NUM SLASH`
    // Here works with or without scheme:// prefix
    tt(DomainDotTld, SLASH, Url$1);
    tt(DomainDotTldColonPort, SLASH, Url$1);
    // Note that domains that begin with schemes are treated slighly differently
    const SchemeColon = tt(Scheme, COLON); // e.g., 'mailto:'
    const SlashSchemeColon = tt(SlashScheme, COLON); // e.g., 'http:'
    const SlashSchemeColonSlash = tt(SlashSchemeColon, SLASH); // e.g., 'http:/'
    const UriPrefix = tt(SlashSchemeColonSlash, SLASH); // e.g., 'http://'
    // Scheme states can transition to domain states
    ta(Scheme, groups.domain, Domain);
    tt(Scheme, DOT, DomainDot);
    tt(Scheme, HYPHEN, DomainHyphen);
    ta(SlashScheme, groups.domain, Domain);
    tt(SlashScheme, DOT, DomainDot);
    tt(SlashScheme, HYPHEN, DomainHyphen);
    // Force URL with scheme prefix followed by anything sane
    ta(SchemeColon, groups.domain, Url$1);
    tt(SchemeColon, SLASH, Url$1);
    tt(SchemeColon, QUERY, Url$1);
    ta(UriPrefix, groups.domain, Url$1);
    ta(UriPrefix, qsAccepting, Url$1);
    tt(UriPrefix, SLASH, Url$1);
    const bracketPairs = [
        [
            OPENBRACE,
            CLOSEBRACE
        ],
        // {}
        [
            OPENBRACKET,
            CLOSEBRACKET
        ],
        // []
        [
            OPENPAREN,
            CLOSEPAREN
        ],
        // ()
        [
            OPENANGLEBRACKET,
            CLOSEANGLEBRACKET
        ],
        // <>
        [
            FULLWIDTHLEFTPAREN,
            FULLWIDTHRIGHTPAREN
        ],
        // （）
        [
            LEFTCORNERBRACKET,
            RIGHTCORNERBRACKET
        ],
        // 「」
        [
            LEFTWHITECORNERBRACKET,
            RIGHTWHITECORNERBRACKET
        ],
        // 『』
        [
            FULLWIDTHLESSTHAN,
            FULLWIDTHGREATERTHAN
        ] // ＜＞
    ];
    for(let i = 0; i < bracketPairs.length; i++){
        const [OPEN, CLOSE] = bracketPairs[i];
        const UrlOpen = tt(Url$1, OPEN); // URL followed by open bracket
        // Continue not accepting for open brackets
        tt(UrlNonaccept, OPEN, UrlOpen);
        // Closing bracket component. This character WILL be included in the URL
        tt(UrlOpen, CLOSE, Url$1);
        // URL that beings with an opening bracket, followed by a symbols.
        // Note that the final state can still be `UrlOpen` (if the URL has a
        // single opening bracket for some reason).
        const UrlOpenQ = makeState(Url);
        ta(UrlOpen, qsAccepting, UrlOpenQ);
        const UrlOpenSyms = makeState(); // UrlOpen followed by some symbols it cannot end it
        ta(UrlOpen, qsNonAccepting);
        // URL that begins with an opening bracket, followed by some symbols
        ta(UrlOpenQ, qsAccepting, UrlOpenQ);
        ta(UrlOpenQ, qsNonAccepting, UrlOpenSyms);
        ta(UrlOpenSyms, qsAccepting, UrlOpenQ);
        ta(UrlOpenSyms, qsNonAccepting, UrlOpenSyms);
        // Close brace/bracket to become regular URL
        tt(UrlOpenQ, CLOSE, Url$1);
        tt(UrlOpenSyms, CLOSE, Url$1);
    }
    tt(Start, LOCALHOST, DomainDotTld); // localhost is a valid URL state
    tt(Start, NL, Nl); // single new line
    return {
        start: Start,
        tokens: tk
    };
}
/**
 * Run the parser state machine on a list of scanned string-based tokens to
 * create a list of multi tokens, each of which represents a URL, email address,
 * plain text, etc.
 *
 * @param {State<MultiToken>} start parser start state
 * @param {string} input the original input used to generate the given tokens
 * @param {Token[]} tokens list of scanned tokens
 * @returns {MultiToken[]}
 */ function run(start, input, tokens) {
    let len = tokens.length;
    let cursor = 0;
    let multis = [];
    let textTokens = [];
    while(cursor < len){
        let state = start;
        let secondState = null;
        let nextState = null;
        let multiLength = 0;
        let latestAccepting = null;
        let sinceAccepts = -1;
        while(cursor < len && !(secondState = state.go(tokens[cursor].t))){
            // Starting tokens with nowhere to jump to.
            // Consider these to be just plain text
            textTokens.push(tokens[cursor++]);
        }
        while(cursor < len && (nextState = secondState || state.go(tokens[cursor].t))){
            // Get the next state
            secondState = null;
            state = nextState;
            // Keep track of the latest accepting state
            if (state.accepts()) {
                sinceAccepts = 0;
                latestAccepting = state;
            } else if (sinceAccepts >= 0) {
                sinceAccepts++;
            }
            cursor++;
            multiLength++;
        }
        if (sinceAccepts < 0) {
            // No accepting state was found, part of a regular text token add
            // the first text token to the text tokens array and try again from
            // the next
            cursor -= multiLength;
            if (cursor < len) {
                textTokens.push(tokens[cursor]);
                cursor++;
            }
        } else {
            // Accepting state!
            // First close off the textTokens (if available)
            if (textTokens.length > 0) {
                multis.push(initMultiToken(Text, input, textTokens));
                textTokens = [];
            }
            // Roll back to the latest accepting state
            cursor -= sinceAccepts;
            multiLength -= sinceAccepts;
            // Create a new multitoken
            const Multi = latestAccepting.t;
            const subtokens = tokens.slice(cursor - multiLength, cursor);
            multis.push(initMultiToken(Multi, input, subtokens));
        }
    }
    // Finally close off the textTokens (if available)
    if (textTokens.length > 0) {
        multis.push(initMultiToken(Text, input, textTokens));
    }
    return multis;
}
/**
 * Utility function for instantiating a new multitoken with all the relevant
 * fields during parsing.
 * @param {new (value: string, tokens: Token[]) => MultiToken} Multi class to instantiate
 * @param {string} input original input string
 * @param {Token[]} tokens consecutive tokens scanned from input string
 * @returns {MultiToken}
 */ function initMultiToken(Multi, input, tokens) {
    const startIdx = tokens[0].s;
    const endIdx = tokens[tokens.length - 1].e;
    const value = input.slice(startIdx, endIdx);
    return new Multi(value, tokens);
}
const warn = typeof console !== 'undefined' && console && console.warn || (()=>{});
const warnAdvice = 'until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.';
// Side-effect initialization state
const INIT = {
    scanner: null,
    parser: null,
    tokenQueue: [],
    pluginQueue: [],
    customSchemes: [],
    initialized: false
};
/**
 * @typedef {{
 * 	start: State<string>,
 * 	tokens: { groups: Collections<string> } & typeof tk
 * }} ScannerInit
 */ /**
 * @typedef {{
 * 	start: State<MultiToken>,
 * 	tokens: typeof multi
 * }} ParserInit
 */ /**
 * @typedef {(arg: { scanner: ScannerInit }) => void} TokenPlugin
 */ /**
 * @typedef {(arg: { scanner: ScannerInit, parser: ParserInit }) => void} Plugin
 */ /**
 * De-register all plugins and reset the internal state-machine. Used for
 * testing; not required in practice.
 * @private
 */ function reset() {
    State.groups = {};
    INIT.scanner = null;
    INIT.parser = null;
    INIT.tokenQueue = [];
    INIT.pluginQueue = [];
    INIT.customSchemes = [];
    INIT.initialized = false;
    return INIT;
}
/**
 * Register a token plugin to allow the scanner to recognize additional token
 * types before the parser state machine is constructed from the results.
 * @param {string} name of plugin to register
 * @param {TokenPlugin} plugin function that accepts the scanner state machine
 * and available scanner tokens and collections and extends the state machine to
 * recognize additional tokens or groups.
 */ function registerTokenPlugin(name, plugin) {
    if (typeof plugin !== 'function') {
        throw new Error(`linkifyjs: Invalid token plugin ${plugin} (expects function)`);
    }
    for(let i = 0; i < INIT.tokenQueue.length; i++){
        if (name === INIT.tokenQueue[i][0]) {
            warn(`linkifyjs: token plugin "${name}" already registered - will be overwritten`);
            INIT.tokenQueue[i] = [
                name,
                plugin
            ];
            return;
        }
    }
    INIT.tokenQueue.push([
        name,
        plugin
    ]);
    if (INIT.initialized) {
        warn(`linkifyjs: already initialized - will not register token plugin "${name}" ${warnAdvice}`);
    }
}
/**
 * Register a linkify plugin
 * @param {string} name of plugin to register
 * @param {Plugin} plugin function that accepts the parser state machine and
 * extends the parser to recognize additional link types
 */ function registerPlugin(name, plugin) {
    if (typeof plugin !== 'function') {
        throw new Error(`linkifyjs: Invalid plugin ${plugin} (expects function)`);
    }
    for(let i = 0; i < INIT.pluginQueue.length; i++){
        if (name === INIT.pluginQueue[i][0]) {
            warn(`linkifyjs: plugin "${name}" already registered - will be overwritten`);
            INIT.pluginQueue[i] = [
                name,
                plugin
            ];
            return;
        }
    }
    INIT.pluginQueue.push([
        name,
        plugin
    ]);
    if (INIT.initialized) {
        warn(`linkifyjs: already initialized - will not register plugin "${name}" ${warnAdvice}`);
    }
}
/**
 * Detect URLs with the following additional protocol. Anything with format
 * "protocol://..." will be considered a link. If `optionalSlashSlash` is set to
 * `true`, anything with format "protocol:..." will be considered a link.
 * @param {string} scheme
 * @param {boolean} [optionalSlashSlash]
 */ function registerCustomProtocol(scheme, optionalSlashSlash = false) {
    if (INIT.initialized) {
        warn(`linkifyjs: already initialized - will not register custom scheme "${scheme}" ${warnAdvice}`);
    }
    if (!/^[0-9a-z]+(-[0-9a-z]+)*$/.test(scheme)) {
        throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
    }
    INIT.customSchemes.push([
        scheme,
        optionalSlashSlash
    ]);
}
/**
 * Initialize the linkify state machine. Called automatically the first time
 * linkify is called on a string, but may be called manually as well.
 */ function init() {
    // Initialize scanner state machine and plugins
    INIT.scanner = init$2(INIT.customSchemes);
    for(let i = 0; i < INIT.tokenQueue.length; i++){
        INIT.tokenQueue[i][1]({
            scanner: INIT.scanner
        });
    }
    // Initialize parser state machine and plugins
    INIT.parser = init$1(INIT.scanner.tokens);
    for(let i = 0; i < INIT.pluginQueue.length; i++){
        INIT.pluginQueue[i][1]({
            scanner: INIT.scanner,
            parser: INIT.parser
        });
    }
    INIT.initialized = true;
    return INIT;
}
/**
 * Parse a string into tokens that represent linkable and non-linkable sub-components
 * @param {string} str
 * @return {MultiToken[]} tokens
 */ function tokenize(str) {
    if (!INIT.initialized) {
        init();
    }
    return run(INIT.parser.start, str, run$1(INIT.scanner.start, str));
}
tokenize.scan = run$1; // for testing
/**
 * Find a list of linkable items in the given string.
 * @param {string} str string to find links in
 * @param {string | Opts} [type] either formatting options or specific type of
 * links to find, e.g., 'url' or 'email'
 * @param {Opts} [opts] formatting options for final output. Cannot be specified
 * if opts already provided in `type` argument
 */ function find(str, type = null, opts = null) {
    if (type && typeof type === 'object') {
        if (opts) {
            throw Error(`linkifyjs: Invalid link type ${type}; must be a string`);
        }
        opts = type;
        type = null;
    }
    const options = new Options(opts);
    const tokens = tokenize(str);
    const filtered = [];
    for(let i = 0; i < tokens.length; i++){
        const token = tokens[i];
        if (token.isLink && (!type || token.t === type) && options.check(token)) {
            filtered.push(token.toFormattedObject(options));
        }
    }
    return filtered;
}
/**
 * Is the given string valid linkable text of some sort. Note that this does not
 * trim the text for you.
 *
 * Optionally pass in a second `type` param, which is the type of link to test
 * for.
 *
 * For example,
 *
 *     linkify.test(str, 'email');
 *
 * Returns `true` if str is a valid email.
 * @param {string} str string to test for links
 * @param {string} [type] optional specific link type to look for
 * @returns boolean true/false
 */ function test(str, type = null) {
    const tokens = tokenize(str);
    return tokens.length === 1 && tokens[0].isLink && (!type || tokens[0].t === type);
}
;
}),
"[project]/client/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Link",
    ()=>Link,
    "default",
    ()=>index_default,
    "isAllowedUri",
    ()=>isAllowedUri,
    "pasteRegex",
    ()=>pasteRegex
]);
// src/link.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$linkifyjs$2f$dist$2f$linkify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/linkifyjs/dist/linkify.mjs [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/state'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
;
;
// src/helpers/whitespace.ts
var UNICODE_WHITESPACE_PATTERN = "[\0- \xA0\u1680\u180E\u2000-\u2029\u205F\u3000]";
var UNICODE_WHITESPACE_REGEX = new RegExp(UNICODE_WHITESPACE_PATTERN);
var UNICODE_WHITESPACE_REGEX_END = new RegExp(`${UNICODE_WHITESPACE_PATTERN}$`);
var UNICODE_WHITESPACE_REGEX_GLOBAL = new RegExp(UNICODE_WHITESPACE_PATTERN, "g");
// src/helpers/autolink.ts
function isValidLinkStructure(tokens) {
    if (tokens.length === 1) {
        return tokens[0].isLink;
    }
    if (tokens.length === 3 && tokens[1].isLink) {
        return [
            "()",
            "[]"
        ].includes(tokens[0].value + tokens[2].value);
    }
    return false;
}
function autolink(options) {
    return new Plugin({
        key: new PluginKey("autolink"),
        appendTransaction: (transactions, oldState, newState)=>{
            const docChanges = transactions.some((transaction)=>transaction.docChanged) && !oldState.doc.eq(newState.doc);
            const preventAutolink = transactions.some((transaction)=>transaction.getMeta("preventAutolink"));
            if (!docChanges || preventAutolink) {
                return;
            }
            const { tr } = newState;
            const transform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["combineTransactionSteps"])(oldState.doc, [
                ...transactions
            ]);
            const changes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChangedRanges"])(transform);
            changes.forEach(({ newRange })=>{
                const nodesInChangedRanges = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findChildrenInRange"])(newState.doc, newRange, (node)=>node.isTextblock);
                let textBlock;
                let textBeforeWhitespace;
                if (nodesInChangedRanges.length > 1) {
                    textBlock = nodesInChangedRanges[0];
                    textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, textBlock.pos + textBlock.node.nodeSize, void 0, " ");
                } else if (nodesInChangedRanges.length) {
                    const endText = newState.doc.textBetween(newRange.from, newRange.to, " ", " ");
                    if (!UNICODE_WHITESPACE_REGEX_END.test(endText)) {
                        return;
                    }
                    textBlock = nodesInChangedRanges[0];
                    textBeforeWhitespace = newState.doc.textBetween(textBlock.pos, newRange.to, void 0, " ");
                }
                if (textBlock && textBeforeWhitespace) {
                    const wordsBeforeWhitespace = textBeforeWhitespace.split(UNICODE_WHITESPACE_REGEX).filter(Boolean);
                    if (wordsBeforeWhitespace.length <= 0) {
                        return false;
                    }
                    const lastWordBeforeSpace = wordsBeforeWhitespace[wordsBeforeWhitespace.length - 1];
                    const lastWordAndBlockOffset = textBlock.pos + textBeforeWhitespace.lastIndexOf(lastWordBeforeSpace);
                    if (!lastWordBeforeSpace) {
                        return false;
                    }
                    const linksBeforeSpace = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$linkifyjs$2f$dist$2f$linkify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["tokenize"])(lastWordBeforeSpace).map((t)=>t.toObject(options.defaultProtocol));
                    if (!isValidLinkStructure(linksBeforeSpace)) {
                        return false;
                    }
                    linksBeforeSpace.filter((link)=>link.isLink).map((link)=>({
                            ...link,
                            from: lastWordAndBlockOffset + link.start + 1,
                            to: lastWordAndBlockOffset + link.end + 1
                        })).filter((link)=>{
                        if (!newState.schema.marks.code) {
                            return true;
                        }
                        return !newState.doc.rangeHasMark(link.from, link.to, newState.schema.marks.code);
                    }).filter((link)=>options.validate(link.value)).filter((link)=>options.shouldAutoLink(link.value)).forEach((link)=>{
                        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getMarksBetween"])(link.from, link.to, newState.doc).some((item)=>item.mark.type === options.type)) {
                            return;
                        }
                        tr.addMark(link.from, link.to, options.type.create({
                            href: link.href
                        }));
                    });
                }
            });
            if (!tr.steps.length) {
                return;
            }
            return tr;
        }
    });
}
;
;
function clickHandler(options) {
    return new Plugin2({
        key: new PluginKey2("handleClickLink"),
        props: {
            handleClick: (view, pos, event)=>{
                var _a, _b;
                if (event.button !== 0) {
                    return false;
                }
                if (!view.editable) {
                    return false;
                }
                let link = null;
                if (event.target instanceof HTMLAnchorElement) {
                    link = event.target;
                } else {
                    const target = event.target;
                    if (!target) {
                        return false;
                    }
                    const root = options.editor.view.dom;
                    link = target.closest("a");
                    if (link && !root.contains(link)) {
                        link = null;
                    }
                }
                if (!link) {
                    return false;
                }
                let handled = false;
                if (options.enableClickSelection) {
                    const commandResult = options.editor.commands.extendMarkRange(options.type.name);
                    handled = commandResult;
                }
                if (options.openOnClick) {
                    const attrs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getAttributes"])(view.state, options.type.name);
                    const href = (_a = link.href) != null ? _a : attrs.href;
                    const target = (_b = link.target) != null ? _b : attrs.target;
                    if (href) {
                        window.open(href, target);
                        handled = true;
                    }
                }
                return handled;
            }
        }
    });
}
;
;
function pasteHandler(options) {
    return new Plugin3({
        key: new PluginKey3("handlePasteLink"),
        props: {
            handlePaste: (view, _event, slice)=>{
                const { shouldAutoLink } = options;
                const { state } = view;
                const { selection } = state;
                const { empty } = selection;
                if (empty) {
                    return false;
                }
                let textContent = "";
                slice.content.forEach((node)=>{
                    textContent += node.textContent;
                });
                const link = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$linkifyjs$2f$dist$2f$linkify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(textContent, {
                    defaultProtocol: options.defaultProtocol
                }).find((item)=>item.isLink && item.value === textContent);
                if (!textContent || !link || shouldAutoLink !== void 0 && !shouldAutoLink(link.value)) {
                    return false;
                }
                return options.editor.commands.setMark(options.type, {
                    href: link.href
                });
            }
        }
    });
}
// src/link.ts
var pasteRegex = /https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z]{2,}\b(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)(?:[-a-zA-Z0-9@:%._+~#=?!&/]*)/gi;
function isAllowedUri(uri, protocols) {
    const allowedProtocols = [
        "http",
        "https",
        "ftp",
        "ftps",
        "mailto",
        "tel",
        "callto",
        "sms",
        "cid",
        "xmpp"
    ];
    if (protocols) {
        protocols.forEach((protocol)=>{
            const nextProtocol = typeof protocol === "string" ? protocol : protocol.scheme;
            if (nextProtocol) {
                allowedProtocols.push(nextProtocol);
            }
        });
    }
    return !uri || uri.replace(UNICODE_WHITESPACE_REGEX_GLOBAL, "").match(new RegExp(// eslint-disable-next-line no-useless-escape
    `^(?:(?:${allowedProtocols.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`, "i"));
}
var Link = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].create({
    name: "link",
    priority: 1e3,
    keepOnSplit: false,
    exitable: true,
    onCreate () {
        if (this.options.validate && !this.options.shouldAutoLink) {
            this.options.shouldAutoLink = this.options.validate;
            console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.");
        }
        this.options.protocols.forEach((protocol)=>{
            if (typeof protocol === "string") {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$linkifyjs$2f$dist$2f$linkify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCustomProtocol"])(protocol);
                return;
            }
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$linkifyjs$2f$dist$2f$linkify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["registerCustomProtocol"])(protocol.scheme, protocol.optionalSlashes);
        });
    },
    onDestroy () {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$linkifyjs$2f$dist$2f$linkify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["reset"])();
    },
    inclusive () {
        return this.options.autolink;
    },
    addOptions () {
        return {
            openOnClick: true,
            enableClickSelection: false,
            linkOnPaste: true,
            autolink: true,
            protocols: [],
            defaultProtocol: "http",
            HTMLAttributes: {
                target: "_blank",
                rel: "noopener noreferrer nofollow",
                class: null
            },
            isAllowedUri: (url, ctx)=>!!isAllowedUri(url, ctx.protocols),
            validate: (url)=>!!url,
            shouldAutoLink: (url)=>{
                const hasProtocol = /^[a-z][a-z0-9+.-]*:\/\//i.test(url);
                const hasMaybeProtocol = /^[a-z][a-z0-9+.-]*:/i.test(url);
                if (hasProtocol || hasMaybeProtocol && !url.includes("@")) {
                    return true;
                }
                const urlWithoutUserinfo = url.includes("@") ? url.split("@").pop() : url;
                const hostname = urlWithoutUserinfo.split(/[/?#:]/)[0];
                if (/^\d{1,3}(\.\d{1,3}){3}$/.test(hostname)) {
                    return false;
                }
                if (!/\./.test(hostname)) {
                    return false;
                }
                return true;
            }
        };
    },
    addAttributes () {
        return {
            href: {
                default: null,
                parseHTML (element) {
                    return element.getAttribute("href");
                }
            },
            target: {
                default: this.options.HTMLAttributes.target
            },
            rel: {
                default: this.options.HTMLAttributes.rel
            },
            class: {
                default: this.options.HTMLAttributes.class
            },
            title: {
                default: null
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "a[href]",
                getAttrs: (dom)=>{
                    const href = dom.getAttribute("href");
                    if (!href || !this.options.isAllowedUri(href, {
                        defaultValidate: (url)=>!!isAllowedUri(url, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    })) {
                        return false;
                    }
                    return null;
                }
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        if (!this.options.isAllowedUri(HTMLAttributes.href, {
            defaultValidate: (href)=>!!isAllowedUri(href, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
        })) {
            return [
                "a",
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, {
                    ...HTMLAttributes,
                    href: ""
                }),
                0
            ];
        }
        return [
            "a",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    markdownTokenName: "link",
    parseMarkdown: (token, helpers)=>{
        return helpers.applyMark("link", helpers.parseInline(token.tokens || []), {
            href: token.href,
            title: token.title || null
        });
    },
    renderMarkdown: (node, h)=>{
        var _a, _b, _c, _d;
        const href = (_b = (_a = node.attrs) == null ? void 0 : _a.href) != null ? _b : "";
        const title = (_d = (_c = node.attrs) == null ? void 0 : _c.title) != null ? _d : "";
        const text = h.renderChildren(node);
        return title ? `[${text}](${href} "${title}")` : `[${text}](${href})`;
    },
    addCommands () {
        return {
            setLink: (attributes)=>({ chain })=>{
                    const { href } = attributes;
                    if (!this.options.isAllowedUri(href, {
                        defaultValidate: (url)=>!!isAllowedUri(url, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    })) {
                        return false;
                    }
                    return chain().setMark(this.name, attributes).setMeta("preventAutolink", true).run();
                },
            toggleLink: (attributes)=>({ chain })=>{
                    const { href } = attributes || {};
                    if (href && !this.options.isAllowedUri(href, {
                        defaultValidate: (url)=>!!isAllowedUri(url, this.options.protocols),
                        protocols: this.options.protocols,
                        defaultProtocol: this.options.defaultProtocol
                    })) {
                        return false;
                    }
                    return chain().toggleMark(this.name, attributes, {
                        extendEmptyMarkRange: true
                    }).setMeta("preventAutolink", true).run();
                },
            unsetLink: ()=>({ chain })=>{
                    return chain().unsetMark(this.name, {
                        extendEmptyMarkRange: true
                    }).setMeta("preventAutolink", true).run();
                }
        };
    },
    addPasteRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPasteRule"])({
                find: (text)=>{
                    const foundLinks = [];
                    if (text) {
                        const { protocols, defaultProtocol } = this.options;
                        const links = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f$linkifyjs$2f$dist$2f$linkify$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["find"])(text).filter((item)=>item.isLink && this.options.isAllowedUri(item.value, {
                                defaultValidate: (href)=>!!isAllowedUri(href, protocols),
                                protocols,
                                defaultProtocol
                            }));
                        if (links.length) {
                            links.forEach((link)=>{
                                if (!this.options.shouldAutoLink(link.value)) {
                                    return;
                                }
                                foundLinks.push({
                                    text: link.value,
                                    data: {
                                        href: link.href
                                    },
                                    index: link.start
                                });
                            });
                        }
                    }
                    return foundLinks;
                },
                type: this.type,
                getAttributes: (match)=>{
                    var _a;
                    return {
                        href: (_a = match.data) == null ? void 0 : _a.href
                    };
                }
            })
        ];
    },
    addProseMirrorPlugins () {
        const plugins = [];
        const { protocols, defaultProtocol } = this.options;
        if (this.options.autolink) {
            plugins.push(autolink({
                type: this.type,
                defaultProtocol: this.options.defaultProtocol,
                validate: (url)=>this.options.isAllowedUri(url, {
                        defaultValidate: (href)=>!!isAllowedUri(href, protocols),
                        protocols,
                        defaultProtocol
                    }),
                shouldAutoLink: this.options.shouldAutoLink
            }));
        }
        plugins.push(clickHandler({
            type: this.type,
            editor: this.editor,
            openOnClick: this.options.openOnClick === "whenNotEditable" ? true : this.options.openOnClick,
            enableClickSelection: this.options.enableClickSelection
        }));
        if (this.options.linkOnPaste) {
            plugins.push(pasteHandler({
                editor: this.editor,
                defaultProtocol: this.options.defaultProtocol,
                type: this.type,
                shouldAutoLink: this.options.shouldAutoLink
            }));
        }
        return plugins;
    }
});
// src/index.ts
var index_default = Link;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-list/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BulletList",
    ()=>BulletList,
    "ListItem",
    ()=>ListItem,
    "ListKeymap",
    ()=>ListKeymap,
    "ListKit",
    ()=>ListKit,
    "OrderedList",
    ()=>OrderedList,
    "TaskItem",
    ()=>TaskItem,
    "TaskList",
    ()=>TaskList,
    "bulletListInputRegex",
    ()=>bulletListInputRegex,
    "inputRegex",
    ()=>inputRegex,
    "listHelpers",
    ()=>listHelpers_exports,
    "orderedListInputRegex",
    ()=>orderedListInputRegex
]);
// src/bullet-list/bullet-list.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
var __defProp = Object.defineProperty;
var __export = (target, all)=>{
    for(var name in all)__defProp(target, name, {
        get: all[name],
        enumerable: true
    });
};
;
var ListItemName = "listItem";
var TextStyleName = "textStyle";
var bulletListInputRegex = /^\s*([-+*])\s$/;
var BulletList = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "bulletList",
    addOptions () {
        return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: false,
            keepAttributes: false
        };
    },
    group: "block list",
    content () {
        return `${this.options.itemTypeName}+`;
    },
    parseHTML () {
        return [
            {
                tag: "ul"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "ul",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    markdownTokenName: "list",
    parseMarkdown: (token, helpers)=>{
        if (token.type !== "list" || token.ordered) {
            return [];
        }
        return {
            type: "bulletList",
            content: token.items ? helpers.parseChildren(token.items) : []
        };
    },
    renderMarkdown: (node, h)=>{
        if (!node.content) {
            return "";
        }
        return h.renderChildren(node.content, "\n");
    },
    markdownOptions: {
        indentsContent: true
    },
    addCommands () {
        return {
            toggleBulletList: ()=>({ commands, chain })=>{
                    if (this.options.keepAttributes) {
                        return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName, this.editor.getAttributes(TextStyleName)).run();
                    }
                    return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-8": ()=>this.editor.commands.toggleBulletList()
        };
    },
    addInputRules () {
        let inputRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])({
            find: bulletListInputRegex,
            type: this.type
        });
        if (this.options.keepMarks || this.options.keepAttributes) {
            inputRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])({
                find: bulletListInputRegex,
                type: this.type,
                keepMarks: this.options.keepMarks,
                keepAttributes: this.options.keepAttributes,
                getAttributes: ()=>{
                    return this.editor.getAttributes(TextStyleName);
                },
                editor: this.editor
            });
        }
        return [
            inputRule
        ];
    }
});
;
var ListItem = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "listItem",
    addOptions () {
        return {
            HTMLAttributes: {},
            bulletListTypeName: "bulletList",
            orderedListTypeName: "orderedList"
        };
    },
    content: "paragraph block*",
    defining: true,
    parseHTML () {
        return [
            {
                tag: "li"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "li",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    markdownTokenName: "list_item",
    parseMarkdown: (token, helpers)=>{
        if (token.type !== "list_item") {
            return [];
        }
        let content = [];
        if (token.tokens && token.tokens.length > 0) {
            const hasParagraphTokens = token.tokens.some((t)=>t.type === "paragraph");
            if (hasParagraphTokens) {
                content = helpers.parseChildren(token.tokens);
            } else {
                const firstToken = token.tokens[0];
                if (firstToken && firstToken.type === "text" && firstToken.tokens && firstToken.tokens.length > 0) {
                    const inlineContent = helpers.parseInline(firstToken.tokens);
                    content = [
                        {
                            type: "paragraph",
                            content: inlineContent
                        }
                    ];
                    if (token.tokens.length > 1) {
                        const remainingTokens = token.tokens.slice(1);
                        const additionalContent = helpers.parseChildren(remainingTokens);
                        content.push(...additionalContent);
                    }
                } else {
                    content = helpers.parseChildren(token.tokens);
                }
            }
        }
        if (content.length === 0) {
            content = [
                {
                    type: "paragraph",
                    content: []
                }
            ];
        }
        return {
            type: "listItem",
            content
        };
    },
    renderMarkdown: (node, h, ctx)=>{
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNestedMarkdownContent"])(node, h, (context)=>{
            var _a, _b;
            if (context.parentType === "bulletList") {
                return "- ";
            }
            if (context.parentType === "orderedList") {
                const start = ((_b = (_a = context.meta) == null ? void 0 : _a.parentAttrs) == null ? void 0 : _b.start) || 1;
                return `${start + context.index}. `;
            }
            return "- ";
        }, ctx);
    },
    addKeyboardShortcuts () {
        return {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            Tab: ()=>this.editor.commands.sinkListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        };
    }
});
;
// src/keymap/listHelpers/index.ts
var listHelpers_exports = {};
__export(listHelpers_exports, {
    findListItemPos: ()=>findListItemPos,
    getNextListDepth: ()=>getNextListDepth,
    handleBackspace: ()=>handleBackspace,
    handleDelete: ()=>handleDelete,
    hasListBefore: ()=>hasListBefore,
    hasListItemAfter: ()=>hasListItemAfter,
    hasListItemBefore: ()=>hasListItemBefore,
    listItemHasSubList: ()=>listItemHasSubList,
    nextListIsDeeper: ()=>nextListIsDeeper,
    nextListIsHigher: ()=>nextListIsHigher
});
;
var findListItemPos = (typeOrName, state)=>{
    const { $from } = state.selection;
    const nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
    let currentNode = null;
    let currentDepth = $from.depth;
    let currentPos = $from.pos;
    let targetDepth = null;
    while(currentDepth > 0 && targetDepth === null){
        currentNode = $from.node(currentDepth);
        if (currentNode.type === nodeType) {
            targetDepth = currentDepth;
        } else {
            currentDepth -= 1;
            currentPos -= 1;
        }
    }
    if (targetDepth === null) {
        return null;
    }
    return {
        $pos: state.doc.resolve(currentPos),
        depth: targetDepth
    };
};
;
var getNextListDepth = (typeOrName, state)=>{
    const listItemPos = findListItemPos(typeOrName, state);
    if (!listItemPos) {
        return false;
    }
    const [, depth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeAtPosition"])(state, typeOrName, listItemPos.$pos.pos + 4);
    return depth;
};
;
// src/keymap/listHelpers/hasListBefore.ts
var hasListBefore = (editorState, name, parentListTypes)=>{
    const { $anchor } = editorState.selection;
    const previousNodePos = Math.max(0, $anchor.pos - 2);
    const previousNode = editorState.doc.resolve(previousNodePos).node();
    if (!previousNode || !parentListTypes.includes(previousNode.type.name)) {
        return false;
    }
    return true;
};
// src/keymap/listHelpers/hasListItemBefore.ts
var hasListItemBefore = (typeOrName, state)=>{
    var _a;
    const { $anchor } = state.selection;
    const $targetPos = state.doc.resolve($anchor.pos - 2);
    if ($targetPos.index() === 0) {
        return false;
    }
    if (((_a = $targetPos.nodeBefore) == null ? void 0 : _a.type.name) !== typeOrName) {
        return false;
    }
    return true;
};
;
var listItemHasSubList = (typeOrName, state, node)=>{
    if (!node) {
        return false;
    }
    const nodeType = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getNodeType"])(typeOrName, state.schema);
    let hasSubList = false;
    node.descendants((child)=>{
        if (child.type === nodeType) {
            hasSubList = true;
        }
    });
    return hasSubList;
};
// src/keymap/listHelpers/handleBackspace.ts
var handleBackspace = (editor, name, parentListTypes)=>{
    if (editor.commands.undoInputRule()) {
        return true;
    }
    if (editor.state.selection.from !== editor.state.selection.to) {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeActive"])(editor.state, name) && hasListBefore(editor.state, name, parentListTypes)) {
        const { $anchor } = editor.state.selection;
        const $listPos = editor.state.doc.resolve($anchor.before() - 1);
        const listDescendants = [];
        $listPos.node().descendants((node, pos)=>{
            if (node.type.name === name) {
                listDescendants.push({
                    node,
                    pos
                });
            }
        });
        const lastItem = listDescendants.at(-1);
        if (!lastItem) {
            return false;
        }
        const $lastItemPos = editor.state.doc.resolve($listPos.start() + lastItem.pos + 1);
        return editor.chain().cut({
            from: $anchor.start() - 1,
            to: $anchor.end() + 1
        }, $lastItemPos.end()).joinForward().run();
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeActive"])(editor.state, name)) {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAtStartOfNode"])(editor.state)) {
        return false;
    }
    const listItemPos = findListItemPos(name, editor.state);
    if (!listItemPos) {
        return false;
    }
    const $prev = editor.state.doc.resolve(listItemPos.$pos.pos - 2);
    const prevNode = $prev.node(listItemPos.depth);
    const previousListItemHasSubList = listItemHasSubList(name, editor.state, prevNode);
    if (hasListItemBefore(name, editor.state) && !previousListItemHasSubList) {
        return editor.commands.joinItemBackward();
    }
    return editor.chain().liftListItem(name).run();
};
;
// src/keymap/listHelpers/nextListIsDeeper.ts
var nextListIsDeeper = (typeOrName, state)=>{
    const listDepth = getNextListDepth(typeOrName, state);
    const listItemPos = findListItemPos(typeOrName, state);
    if (!listItemPos || !listDepth) {
        return false;
    }
    if (listDepth > listItemPos.depth) {
        return true;
    }
    return false;
};
// src/keymap/listHelpers/nextListIsHigher.ts
var nextListIsHigher = (typeOrName, state)=>{
    const listDepth = getNextListDepth(typeOrName, state);
    const listItemPos = findListItemPos(typeOrName, state);
    if (!listItemPos || !listDepth) {
        return false;
    }
    if (listDepth < listItemPos.depth) {
        return true;
    }
    return false;
};
// src/keymap/listHelpers/handleDelete.ts
var handleDelete = (editor, name)=>{
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeActive"])(editor.state, name)) {
        return false;
    }
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAtEndOfNode"])(editor.state, name)) {
        return false;
    }
    const { selection } = editor.state;
    const { $from, $to } = selection;
    if (!selection.empty && $from.sameParent($to)) {
        return false;
    }
    if (nextListIsDeeper(name, editor.state)) {
        return editor.chain().focus(editor.state.selection.from + 4).lift(name).joinBackward().run();
    }
    if (nextListIsHigher(name, editor.state)) {
        return editor.chain().joinForward().joinBackward().run();
    }
    return editor.commands.joinItemForward();
};
// src/keymap/listHelpers/hasListItemAfter.ts
var hasListItemAfter = (typeOrName, state)=>{
    var _a;
    const { $anchor } = state.selection;
    const $targetPos = state.doc.resolve($anchor.pos - $anchor.parentOffset - 2);
    if ($targetPos.index() === $targetPos.parent.childCount - 1) {
        return false;
    }
    if (((_a = $targetPos.nodeAfter) == null ? void 0 : _a.type.name) !== typeOrName) {
        return false;
    }
    return true;
};
// src/keymap/list-keymap.ts
var ListKeymap = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "listKeymap",
    addOptions () {
        return {
            listTypes: [
                {
                    itemName: "listItem",
                    wrapperNames: [
                        "bulletList",
                        "orderedList"
                    ]
                },
                {
                    itemName: "taskItem",
                    wrapperNames: [
                        "taskList"
                    ]
                }
            ]
        };
    },
    addKeyboardShortcuts () {
        return {
            Delete: ({ editor })=>{
                let handled = false;
                this.options.listTypes.forEach(({ itemName })=>{
                    if (editor.state.schema.nodes[itemName] === void 0) {
                        return;
                    }
                    if (handleDelete(editor, itemName)) {
                        handled = true;
                    }
                });
                return handled;
            },
            "Mod-Delete": ({ editor })=>{
                let handled = false;
                this.options.listTypes.forEach(({ itemName })=>{
                    if (editor.state.schema.nodes[itemName] === void 0) {
                        return;
                    }
                    if (handleDelete(editor, itemName)) {
                        handled = true;
                    }
                });
                return handled;
            },
            Backspace: ({ editor })=>{
                let handled = false;
                this.options.listTypes.forEach(({ itemName, wrapperNames })=>{
                    if (editor.state.schema.nodes[itemName] === void 0) {
                        return;
                    }
                    if (handleBackspace(editor, itemName, wrapperNames)) {
                        handled = true;
                    }
                });
                return handled;
            },
            "Mod-Backspace": ({ editor })=>{
                let handled = false;
                this.options.listTypes.forEach(({ itemName, wrapperNames })=>{
                    if (editor.state.schema.nodes[itemName] === void 0) {
                        return;
                    }
                    if (handleBackspace(editor, itemName, wrapperNames)) {
                        handled = true;
                    }
                });
                return handled;
            }
        };
    }
});
;
;
// src/ordered-list/utils.ts
var ORDERED_LIST_ITEM_REGEX = /^(\s*)(\d+)\.\s+(.*)$/;
var INDENTED_LINE_REGEX = /^\s/;
function collectOrderedListItems(lines) {
    const listItems = [];
    let currentLineIndex = 0;
    let consumed = 0;
    while(currentLineIndex < lines.length){
        const line = lines[currentLineIndex];
        const match = line.match(ORDERED_LIST_ITEM_REGEX);
        if (!match) {
            break;
        }
        const [, indent, number, content] = match;
        const indentLevel = indent.length;
        let itemContent = content;
        let nextLineIndex = currentLineIndex + 1;
        const itemLines = [
            line
        ];
        while(nextLineIndex < lines.length){
            const nextLine = lines[nextLineIndex];
            const nextMatch = nextLine.match(ORDERED_LIST_ITEM_REGEX);
            if (nextMatch) {
                break;
            }
            if (nextLine.trim() === "") {
                itemLines.push(nextLine);
                itemContent += "\n";
                nextLineIndex += 1;
            } else if (nextLine.match(INDENTED_LINE_REGEX)) {
                itemLines.push(nextLine);
                itemContent += `
${nextLine.slice(indentLevel + 2)}`;
                nextLineIndex += 1;
            } else {
                break;
            }
        }
        listItems.push({
            indent: indentLevel,
            number: parseInt(number, 10),
            content: itemContent.trim(),
            raw: itemLines.join("\n")
        });
        consumed = nextLineIndex;
        currentLineIndex = nextLineIndex;
    }
    return [
        listItems,
        consumed
    ];
}
function buildNestedStructure(items, baseIndent, lexer) {
    var _a;
    const result = [];
    let currentIndex = 0;
    while(currentIndex < items.length){
        const item = items[currentIndex];
        if (item.indent === baseIndent) {
            const contentLines = item.content.split("\n");
            const mainText = ((_a = contentLines[0]) == null ? void 0 : _a.trim()) || "";
            const tokens = [];
            if (mainText) {
                tokens.push({
                    type: "paragraph",
                    raw: mainText,
                    tokens: lexer.inlineTokens(mainText)
                });
            }
            const additionalContent = contentLines.slice(1).join("\n").trim();
            if (additionalContent) {
                const blockTokens = lexer.blockTokens(additionalContent);
                tokens.push(...blockTokens);
            }
            let lookAheadIndex = currentIndex + 1;
            const nestedItems = [];
            while(lookAheadIndex < items.length && items[lookAheadIndex].indent > baseIndent){
                nestedItems.push(items[lookAheadIndex]);
                lookAheadIndex += 1;
            }
            if (nestedItems.length > 0) {
                const nextIndent = Math.min(...nestedItems.map((nestedItem)=>nestedItem.indent));
                const nestedListItems = buildNestedStructure(nestedItems, nextIndent, lexer);
                tokens.push({
                    type: "list",
                    ordered: true,
                    start: nestedItems[0].number,
                    items: nestedListItems,
                    raw: nestedItems.map((nestedItem)=>nestedItem.raw).join("\n")
                });
            }
            result.push({
                type: "list_item",
                raw: item.raw,
                tokens
            });
            currentIndex = lookAheadIndex;
        } else {
            currentIndex += 1;
        }
    }
    return result;
}
function parseListItems(items, helpers) {
    return items.map((item)=>{
        if (item.type !== "list_item") {
            return helpers.parseChildren([
                item
            ])[0];
        }
        const content = [];
        if (item.tokens && item.tokens.length > 0) {
            item.tokens.forEach((itemToken)=>{
                if (itemToken.type === "paragraph" || itemToken.type === "list" || itemToken.type === "blockquote" || itemToken.type === "code") {
                    content.push(...helpers.parseChildren([
                        itemToken
                    ]));
                } else if (itemToken.type === "text" && itemToken.tokens) {
                    const inlineContent = helpers.parseChildren([
                        itemToken
                    ]);
                    content.push({
                        type: "paragraph",
                        content: inlineContent
                    });
                } else {
                    const parsed = helpers.parseChildren([
                        itemToken
                    ]);
                    if (parsed.length > 0) {
                        content.push(...parsed);
                    }
                }
            });
        }
        return {
            type: "listItem",
            content
        };
    });
}
// src/ordered-list/ordered-list.ts
var ListItemName2 = "listItem";
var TextStyleName2 = "textStyle";
var orderedListInputRegex = /^(\d+)\.\s$/;
var OrderedList = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "orderedList",
    addOptions () {
        return {
            itemTypeName: "listItem",
            HTMLAttributes: {},
            keepMarks: false,
            keepAttributes: false
        };
    },
    group: "block list",
    content () {
        return `${this.options.itemTypeName}+`;
    },
    addAttributes () {
        return {
            start: {
                default: 1,
                parseHTML: (element)=>{
                    return element.hasAttribute("start") ? parseInt(element.getAttribute("start") || "", 10) : 1;
                }
            },
            type: {
                default: null,
                parseHTML: (element)=>element.getAttribute("type")
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: "ol"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        const { start, ...attributesWithoutStart } = HTMLAttributes;
        return start === 1 ? [
            "ol",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, attributesWithoutStart),
            0
        ] : [
            "ol",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    markdownTokenName: "list",
    parseMarkdown: (token, helpers)=>{
        if (token.type !== "list" || !token.ordered) {
            return [];
        }
        const startValue = token.start || 1;
        const content = token.items ? parseListItems(token.items, helpers) : [];
        if (startValue !== 1) {
            return {
                type: "orderedList",
                attrs: {
                    start: startValue
                },
                content
            };
        }
        return {
            type: "orderedList",
            content
        };
    },
    renderMarkdown: (node, h)=>{
        if (!node.content) {
            return "";
        }
        return h.renderChildren(node.content, "\n");
    },
    markdownTokenizer: {
        name: "orderedList",
        level: "block",
        start: (src)=>{
            const match = src.match(/^(\s*)(\d+)\.\s+/);
            const index = match == null ? void 0 : match.index;
            return index !== void 0 ? index : -1;
        },
        tokenize: (src, _tokens, lexer)=>{
            var _a;
            const lines = src.split("\n");
            const [listItems, consumed] = collectOrderedListItems(lines);
            if (listItems.length === 0) {
                return void 0;
            }
            const items = buildNestedStructure(listItems, 0, lexer);
            if (items.length === 0) {
                return void 0;
            }
            const startValue = ((_a = listItems[0]) == null ? void 0 : _a.number) || 1;
            return {
                type: "list",
                ordered: true,
                start: startValue,
                items,
                raw: lines.slice(0, consumed).join("\n")
            };
        }
    },
    markdownOptions: {
        indentsContent: true
    },
    addCommands () {
        return {
            toggleOrderedList: ()=>({ commands, chain })=>{
                    if (this.options.keepAttributes) {
                        return chain().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(ListItemName2, this.editor.getAttributes(TextStyleName2)).run();
                    }
                    return commands.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-7": ()=>this.editor.commands.toggleOrderedList()
        };
    },
    addInputRules () {
        let inputRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])({
            find: orderedListInputRegex,
            type: this.type,
            getAttributes: (match)=>({
                    start: +match[1]
                }),
            joinPredicate: (match, node)=>node.childCount + node.attrs.start === +match[1]
        });
        if (this.options.keepMarks || this.options.keepAttributes) {
            inputRule = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])({
                find: orderedListInputRegex,
                type: this.type,
                keepMarks: this.options.keepMarks,
                keepAttributes: this.options.keepAttributes,
                getAttributes: (match)=>({
                        start: +match[1],
                        ...this.editor.getAttributes(TextStyleName2)
                    }),
                joinPredicate: (match, node)=>node.childCount + node.attrs.start === +match[1],
                editor: this.editor
            });
        }
        return [
            inputRule
        ];
    }
});
;
var inputRegex = /^\s*(\[([( |x])?\])\s$/;
var TaskItem = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "taskItem",
    addOptions () {
        return {
            nested: false,
            HTMLAttributes: {},
            taskListTypeName: "taskList",
            a11y: void 0
        };
    },
    content () {
        return this.options.nested ? "paragraph block*" : "paragraph+";
    },
    defining: true,
    addAttributes () {
        return {
            checked: {
                default: false,
                keepOnSplit: false,
                parseHTML: (element)=>{
                    const dataChecked = element.getAttribute("data-checked");
                    return dataChecked === "" || dataChecked === "true";
                },
                renderHTML: (attributes)=>({
                        "data-checked": attributes.checked
                    })
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: `li[data-type="${this.name}"]`,
                priority: 51
            }
        ];
    },
    renderHTML ({ node, HTMLAttributes }) {
        return [
            "li",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes, {
                "data-type": this.name
            }),
            [
                "label",
                [
                    "input",
                    {
                        type: "checkbox",
                        checked: node.attrs.checked ? "checked" : null
                    }
                ],
                [
                    "span"
                ]
            ],
            [
                "div",
                0
            ]
        ];
    },
    parseMarkdown: (token, h)=>{
        const content = [];
        if (token.tokens && token.tokens.length > 0) {
            content.push(h.createNode("paragraph", {}, h.parseInline(token.tokens)));
        } else if (token.text) {
            content.push(h.createNode("paragraph", {}, [
                h.createNode("text", {
                    text: token.text
                })
            ]));
        } else {
            content.push(h.createNode("paragraph", {}, []));
        }
        if (token.nestedTokens && token.nestedTokens.length > 0) {
            const nestedContent = h.parseChildren(token.nestedTokens);
            content.push(...nestedContent);
        }
        return h.createNode("taskItem", {
            checked: token.checked || false
        }, content);
    },
    renderMarkdown: (node, h)=>{
        var _a;
        const checkedChar = ((_a = node.attrs) == null ? void 0 : _a.checked) ? "x" : " ";
        const prefix = `- [${checkedChar}] `;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["renderNestedMarkdownContent"])(node, h, prefix);
    },
    addKeyboardShortcuts () {
        const shortcuts = {
            Enter: ()=>this.editor.commands.splitListItem(this.name),
            "Shift-Tab": ()=>this.editor.commands.liftListItem(this.name)
        };
        if (!this.options.nested) {
            return shortcuts;
        }
        return {
            ...shortcuts,
            Tab: ()=>this.editor.commands.sinkListItem(this.name)
        };
    },
    addNodeView () {
        return ({ node, HTMLAttributes, getPos, editor })=>{
            const listItem = document.createElement("li");
            const checkboxWrapper = document.createElement("label");
            const checkboxStyler = document.createElement("span");
            const checkbox = document.createElement("input");
            const content = document.createElement("div");
            const updateA11Y = (currentNode)=>{
                var _a, _b;
                checkbox.ariaLabel = ((_b = (_a = this.options.a11y) == null ? void 0 : _a.checkboxLabel) == null ? void 0 : _b.call(_a, currentNode, checkbox.checked)) || `Task item checkbox for ${currentNode.textContent || "empty task item"}`;
            };
            updateA11Y(node);
            checkboxWrapper.contentEditable = "false";
            checkbox.type = "checkbox";
            checkbox.addEventListener("mousedown", (event)=>event.preventDefault());
            checkbox.addEventListener("change", (event)=>{
                if (!editor.isEditable && !this.options.onReadOnlyChecked) {
                    checkbox.checked = !checkbox.checked;
                    return;
                }
                const { checked } = event.target;
                if (editor.isEditable && typeof getPos === "function") {
                    editor.chain().focus(void 0, {
                        scrollIntoView: false
                    }).command(({ tr })=>{
                        const position = getPos();
                        if (typeof position !== "number") {
                            return false;
                        }
                        const currentNode = tr.doc.nodeAt(position);
                        tr.setNodeMarkup(position, void 0, {
                            ...currentNode == null ? void 0 : currentNode.attrs,
                            checked
                        });
                        return true;
                    }).run();
                }
                if (!editor.isEditable && this.options.onReadOnlyChecked) {
                    if (!this.options.onReadOnlyChecked(node, checked)) {
                        checkbox.checked = !checkbox.checked;
                    }
                }
            });
            Object.entries(this.options.HTMLAttributes).forEach(([key, value])=>{
                listItem.setAttribute(key, value);
            });
            listItem.dataset.checked = node.attrs.checked;
            checkbox.checked = node.attrs.checked;
            checkboxWrapper.append(checkbox, checkboxStyler);
            listItem.append(checkboxWrapper, content);
            Object.entries(HTMLAttributes).forEach(([key, value])=>{
                listItem.setAttribute(key, value);
            });
            let prevRenderedAttributeKeys = new Set(Object.keys(HTMLAttributes));
            return {
                dom: listItem,
                contentDOM: content,
                update: (updatedNode)=>{
                    if (updatedNode.type !== this.type) {
                        return false;
                    }
                    listItem.dataset.checked = updatedNode.attrs.checked;
                    checkbox.checked = updatedNode.attrs.checked;
                    updateA11Y(updatedNode);
                    const extensionAttributes = editor.extensionManager.attributes;
                    const newHTMLAttributes = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getRenderedAttributes"])(updatedNode, extensionAttributes);
                    const newKeys = new Set(Object.keys(newHTMLAttributes));
                    const staticAttrs = this.options.HTMLAttributes;
                    prevRenderedAttributeKeys.forEach((key)=>{
                        if (!newKeys.has(key)) {
                            if (key in staticAttrs) {
                                listItem.setAttribute(key, staticAttrs[key]);
                            } else {
                                listItem.removeAttribute(key);
                            }
                        }
                    });
                    Object.entries(newHTMLAttributes).forEach(([key, value])=>{
                        if (value === null || value === void 0) {
                            if (key in staticAttrs) {
                                listItem.setAttribute(key, staticAttrs[key]);
                            } else {
                                listItem.removeAttribute(key);
                            }
                        } else {
                            listItem.setAttribute(key, value);
                        }
                    });
                    prevRenderedAttributeKeys = newKeys;
                    return true;
                }
            };
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["wrappingInputRule"])({
                find: inputRegex,
                type: this.type,
                getAttributes: (match)=>({
                        checked: match[match.length - 1] === "x"
                    })
            })
        ];
    }
});
;
var TaskList = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "taskList",
    addOptions () {
        return {
            itemTypeName: "taskItem",
            HTMLAttributes: {}
        };
    },
    group: "block list",
    content () {
        return `${this.options.itemTypeName}+`;
    },
    parseHTML () {
        return [
            {
                tag: `ul[data-type="${this.name}"]`,
                priority: 51
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "ul",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes, {
                "data-type": this.name
            }),
            0
        ];
    },
    parseMarkdown: (token, h)=>{
        return h.createNode("taskList", {}, h.parseChildren(token.items || []));
    },
    renderMarkdown: (node, h)=>{
        if (!node.content) {
            return "";
        }
        return h.renderChildren(node.content, "\n");
    },
    markdownTokenizer: {
        name: "taskList",
        level: "block",
        start (src) {
            var _a;
            const index = (_a = src.match(/^\s*[-+*]\s+\[([ xX])\]\s+/)) == null ? void 0 : _a.index;
            return index !== void 0 ? index : -1;
        },
        tokenize (src, tokens, lexer) {
            const parseTaskListContent = (content)=>{
                const nestedResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIndentedBlocks"])(content, {
                    itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                    extractItemData: (match)=>({
                            indentLevel: match[1].length,
                            mainContent: match[4],
                            checked: match[3].toLowerCase() === "x"
                        }),
                    createToken: (data, nestedTokens)=>({
                            type: "taskItem",
                            raw: "",
                            mainContent: data.mainContent,
                            indentLevel: data.indentLevel,
                            checked: data.checked,
                            text: data.mainContent,
                            tokens: lexer.inlineTokens(data.mainContent),
                            nestedTokens
                        }),
                    // Allow recursive nesting
                    customNestedParser: parseTaskListContent
                }, lexer);
                if (nestedResult) {
                    return [
                        {
                            type: "taskList",
                            raw: nestedResult.raw,
                            items: nestedResult.items
                        }
                    ];
                }
                return lexer.blockTokens(content);
            };
            const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["parseIndentedBlocks"])(src, {
                itemPattern: /^(\s*)([-+*])\s+\[([ xX])\]\s+(.*)$/,
                extractItemData: (match)=>({
                        indentLevel: match[1].length,
                        mainContent: match[4],
                        checked: match[3].toLowerCase() === "x"
                    }),
                createToken: (data, nestedTokens)=>({
                        type: "taskItem",
                        raw: "",
                        mainContent: data.mainContent,
                        indentLevel: data.indentLevel,
                        checked: data.checked,
                        text: data.mainContent,
                        tokens: lexer.inlineTokens(data.mainContent),
                        nestedTokens
                    }),
                // Use the recursive parser for nested content
                customNestedParser: parseTaskListContent
            }, lexer);
            if (!result) {
                return void 0;
            }
            return {
                type: "taskList",
                raw: result.raw,
                items: result.items
            };
        }
    },
    markdownOptions: {
        indentsContent: true
    },
    addCommands () {
        return {
            toggleTaskList: ()=>({ commands })=>{
                    return commands.toggleList(this.name, this.options.itemTypeName);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-9": ()=>this.editor.commands.toggleTaskList()
        };
    }
});
// src/kit/index.ts
var ListKit = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "listKit",
    addExtensions () {
        const extensions = [];
        if (this.options.bulletList !== false) {
            extensions.push(BulletList.configure(this.options.bulletList));
        }
        if (this.options.listItem !== false) {
            extensions.push(ListItem.configure(this.options.listItem));
        }
        if (this.options.listKeymap !== false) {
            extensions.push(ListKeymap.configure(this.options.listKeymap));
        }
        if (this.options.orderedList !== false) {
            extensions.push(OrderedList.configure(this.options.orderedList));
        }
        if (this.options.taskItem !== false) {
            extensions.push(TaskItem.configure(this.options.taskItem));
        }
        if (this.options.taskList !== false) {
            extensions.push(TaskList.configure(this.options.taskList));
        }
        return extensions;
    }
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-paragraph/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Paragraph",
    ()=>Paragraph,
    "default",
    ()=>index_default
]);
// src/paragraph.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var EMPTY_PARAGRAPH_MARKDOWN = "&nbsp;";
var NBSP_CHAR = "\xA0";
var Paragraph = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "paragraph",
    priority: 1e3,
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    group: "block",
    content: "inline*",
    parseHTML () {
        return [
            {
                tag: "p"
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "p",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    parseMarkdown: (token, helpers)=>{
        const tokens = token.tokens || [];
        if (tokens.length === 1 && tokens[0].type === "image") {
            return helpers.parseChildren([
                tokens[0]
            ]);
        }
        const content = helpers.parseInline(tokens);
        if (content.length === 1 && content[0].type === "text" && (content[0].text === EMPTY_PARAGRAPH_MARKDOWN || content[0].text === NBSP_CHAR)) {
            return helpers.createNode("paragraph", void 0, []);
        }
        return helpers.createNode("paragraph", void 0, content);
    },
    renderMarkdown: (node, h)=>{
        if (!node) {
            return "";
        }
        const content = Array.isArray(node.content) ? node.content : [];
        if (content.length === 0) {
            return EMPTY_PARAGRAPH_MARKDOWN;
        }
        return h.renderChildren(content);
    },
    addCommands () {
        return {
            setParagraph: ()=>({ commands })=>{
                    return commands.setNode(this.name);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Alt-0": ()=>this.editor.commands.setParagraph()
        };
    }
});
// src/index.ts
var index_default = Paragraph;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-strike/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Strike",
    ()=>Strike,
    "default",
    ()=>index_default,
    "inputRegex",
    ()=>inputRegex,
    "pasteRegex",
    ()=>pasteRegex
]);
// src/strike.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var inputRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/;
var pasteRegex = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g;
var Strike = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].create({
    name: "strike",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "s"
            },
            {
                tag: "del"
            },
            {
                tag: "strike"
            },
            {
                style: "text-decoration",
                consuming: false,
                getAttrs: (style)=>style.includes("line-through") ? {} : false
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "s",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    markdownTokenName: "del",
    parseMarkdown: (token, helpers)=>{
        return helpers.applyMark("strike", helpers.parseInline(token.tokens || []));
    },
    renderMarkdown: (node, h)=>{
        return `~~${h.renderChildren(node)}~~`;
    },
    addCommands () {
        return {
            setStrike: ()=>({ commands })=>{
                    return commands.setMark(this.name);
                },
            toggleStrike: ()=>({ commands })=>{
                    return commands.toggleMark(this.name);
                },
            unsetStrike: ()=>({ commands })=>{
                    return commands.unsetMark(this.name);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-Shift-s": ()=>this.editor.commands.toggleStrike()
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markInputRule"])({
                find: inputRegex,
                type: this.type
            })
        ];
    },
    addPasteRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["markPasteRule"])({
                find: pasteRegex,
                type: this.type
            })
        ];
    }
});
// src/index.ts
var index_default = Strike;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-text/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Text",
    ()=>Text,
    "default",
    ()=>index_default
]);
// src/text.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var Text = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "text",
    group: "inline",
    parseMarkdown: (token)=>{
        return {
            type: "text",
            text: token.text || ""
        };
    },
    renderMarkdown: (node)=>node.text || ""
});
// src/index.ts
var index_default = Text;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Underline",
    ()=>Underline,
    "default",
    ()=>index_default
]);
// src/underline.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var Underline = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Mark"].create({
    name: "underline",
    addOptions () {
        return {
            HTMLAttributes: {}
        };
    },
    parseHTML () {
        return [
            {
                tag: "u"
            },
            {
                style: "text-decoration",
                consuming: false,
                getAttrs: (style)=>style.includes("underline") ? {} : false
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "u",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes),
            0
        ];
    },
    parseMarkdown (token, helpers) {
        return helpers.applyMark(this.name || "underline", helpers.parseInline(token.tokens || []));
    },
    renderMarkdown (node, helpers) {
        return `++${helpers.renderChildren(node)}++`;
    },
    markdownTokenizer: {
        name: "underline",
        level: "inline",
        start (src) {
            return src.indexOf("++");
        },
        tokenize (src, _tokens, lexer) {
            const rule = /^(\+\+)([\s\S]+?)(\+\+)/;
            const match = rule.exec(src);
            if (!match) {
                return void 0;
            }
            const innerContent = match[2].trim();
            return {
                type: "underline",
                raw: match[0],
                text: innerContent,
                tokens: lexer.inlineTokens(innerContent)
            };
        }
    },
    addCommands () {
        return {
            setUnderline: ()=>({ commands })=>{
                    return commands.setMark(this.name);
                },
            toggleUnderline: ()=>({ commands })=>{
                    return commands.toggleMark(this.name);
                },
            unsetUnderline: ()=>({ commands })=>{
                    return commands.unsetMark(this.name);
                }
        };
    },
    addKeyboardShortcuts () {
        return {
            "Mod-u": ()=>this.editor.commands.toggleUnderline(),
            "Mod-U": ()=>this.editor.commands.toggleUnderline()
        };
    }
});
// src/index.ts
var index_default = Underline;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extensions/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CharacterCount",
    ()=>CharacterCount,
    "Dropcursor",
    ()=>Dropcursor,
    "Focus",
    ()=>Focus,
    "Gapcursor",
    ()=>Gapcursor,
    "Placeholder",
    ()=>Placeholder,
    "Selection",
    ()=>Selection,
    "TrailingNode",
    ()=>TrailingNode,
    "UndoRedo",
    ()=>UndoRedo,
    "preparePlaceholderAttribute",
    ()=>preparePlaceholderAttribute
]);
// src/character-count/character-count.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/state'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/dropcursor'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/view'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/gapcursor'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
(()=>{
    const e = new Error("Cannot find module '@tiptap/pm/history'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
var CharacterCount = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "characterCount",
    addOptions () {
        return {
            limit: null,
            mode: "textSize",
            textCounter: (text)=>text.length,
            wordCounter: (text)=>text.split(" ").filter((word)=>word !== "").length
        };
    },
    addStorage () {
        return {
            characters: ()=>0,
            words: ()=>0
        };
    },
    onBeforeCreate () {
        this.storage.characters = (options)=>{
            const node = (options == null ? void 0 : options.node) || this.editor.state.doc;
            const mode = (options == null ? void 0 : options.mode) || this.options.mode;
            if (mode === "textSize") {
                const text = node.textBetween(0, node.content.size, void 0, " ");
                return this.options.textCounter(text);
            }
            return node.nodeSize;
        };
        this.storage.words = (options)=>{
            const node = (options == null ? void 0 : options.node) || this.editor.state.doc;
            const text = node.textBetween(0, node.content.size, " ", " ");
            return this.options.wordCounter(text);
        };
    },
    addProseMirrorPlugins () {
        let initialEvaluationDone = false;
        return [
            new Plugin({
                key: new PluginKey("characterCount"),
                appendTransaction: (transactions, oldState, newState)=>{
                    if (initialEvaluationDone) {
                        return;
                    }
                    const limit = this.options.limit;
                    if (limit === null || limit === void 0 || limit === 0) {
                        initialEvaluationDone = true;
                        return;
                    }
                    const initialContentSize = this.storage.characters({
                        node: newState.doc
                    });
                    if (initialContentSize > limit) {
                        const over = initialContentSize - limit;
                        const from = 0;
                        const to = over;
                        console.warn(`[CharacterCount] Initial content exceeded limit of ${limit} characters. Content was automatically trimmed.`);
                        const tr = newState.tr.deleteRange(from, to);
                        initialEvaluationDone = true;
                        return tr;
                    }
                    initialEvaluationDone = true;
                },
                filterTransaction: (transaction, state)=>{
                    const limit = this.options.limit;
                    if (!transaction.docChanged || limit === 0 || limit === null || limit === void 0) {
                        return true;
                    }
                    const oldSize = this.storage.characters({
                        node: state.doc
                    });
                    const newSize = this.storage.characters({
                        node: transaction.doc
                    });
                    if (newSize <= limit) {
                        return true;
                    }
                    if (oldSize > limit && newSize > limit && newSize <= oldSize) {
                        return true;
                    }
                    if (oldSize > limit && newSize > limit && newSize > oldSize) {
                        return false;
                    }
                    const isPaste = transaction.getMeta("paste");
                    if (!isPaste) {
                        return false;
                    }
                    const pos = transaction.selection.$head.pos;
                    const over = newSize - limit;
                    const from = pos - over;
                    const to = pos;
                    transaction.deleteRange(from, to);
                    const updatedSize = this.storage.characters({
                        node: transaction.doc
                    });
                    if (updatedSize > limit) {
                        return false;
                    }
                    return true;
                }
            })
        ];
    }
});
;
;
var Dropcursor = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "dropCursor",
    addOptions () {
        return {
            color: "currentColor",
            width: 1,
            class: void 0
        };
    },
    addProseMirrorPlugins () {
        return [
            dropCursor(this.options)
        ];
    }
});
;
;
;
var Focus = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "focus",
    addOptions () {
        return {
            className: "has-focus",
            mode: "all"
        };
    },
    addProseMirrorPlugins () {
        return [
            new Plugin2({
                key: new PluginKey2("focus"),
                props: {
                    decorations: ({ doc, selection })=>{
                        const { isEditable, isFocused } = this.editor;
                        const { anchor } = selection;
                        const decorations = [];
                        if (!isEditable || !isFocused) {
                            return DecorationSet.create(doc, []);
                        }
                        let maxLevels = 0;
                        if (this.options.mode === "deepest") {
                            doc.descendants((node, pos)=>{
                                if (node.isText) {
                                    return;
                                }
                                const isCurrent = anchor >= pos && anchor <= pos + node.nodeSize - 1;
                                if (!isCurrent) {
                                    return false;
                                }
                                maxLevels += 1;
                            });
                        }
                        let currentLevel = 0;
                        doc.descendants((node, pos)=>{
                            if (node.isText) {
                                return false;
                            }
                            const isCurrent = anchor >= pos && anchor <= pos + node.nodeSize - 1;
                            if (!isCurrent) {
                                return false;
                            }
                            currentLevel += 1;
                            const outOfScope = this.options.mode === "deepest" && maxLevels - currentLevel > 0 || this.options.mode === "shallowest" && currentLevel > 1;
                            if (outOfScope) {
                                return this.options.mode === "deepest";
                            }
                            decorations.push(Decoration.node(pos, pos + node.nodeSize, {
                                class: this.options.className
                            }));
                        });
                        return DecorationSet.create(doc, decorations);
                    }
                }
            })
        ];
    }
});
;
;
var Gapcursor = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "gapCursor",
    addProseMirrorPlugins () {
        return [
            gapCursor()
        ];
    },
    extendNodeSchema (extension) {
        var _a;
        const context = {
            name: extension.name,
            options: extension.options,
            storage: extension.storage
        };
        return {
            allowGapCursor: (_a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callOrReturn"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getExtensionField"])(extension, "allowGapCursor", context))) != null ? _a : null
        };
    }
});
;
;
;
var DEFAULT_DATA_ATTRIBUTE = "placeholder";
function preparePlaceholderAttribute(attr) {
    return attr.replace(/\s+/g, "-").replace(/[^a-zA-Z0-9-]/g, "").replace(/^[0-9-]+/, "").replace(/^-+/, "").toLowerCase();
}
var Placeholder = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "placeholder",
    addOptions () {
        return {
            emptyEditorClass: "is-editor-empty",
            emptyNodeClass: "is-empty",
            dataAttribute: DEFAULT_DATA_ATTRIBUTE,
            placeholder: "Write something \u2026",
            showOnlyWhenEditable: true,
            showOnlyCurrent: true,
            includeChildren: false
        };
    },
    addProseMirrorPlugins () {
        const dataAttribute = this.options.dataAttribute ? `data-${preparePlaceholderAttribute(this.options.dataAttribute)}` : `data-${DEFAULT_DATA_ATTRIBUTE}`;
        return [
            new Plugin3({
                key: new PluginKey3("placeholder"),
                props: {
                    decorations: ({ doc, selection })=>{
                        const active = this.editor.isEditable || !this.options.showOnlyWhenEditable;
                        const { anchor } = selection;
                        const decorations = [];
                        if (!active) {
                            return null;
                        }
                        const isEmptyDoc = this.editor.isEmpty;
                        doc.descendants((node, pos)=>{
                            const hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
                            const isEmpty = !node.isLeaf && (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeEmpty"])(node);
                            if ((hasAnchor || !this.options.showOnlyCurrent) && isEmpty) {
                                const classes = [
                                    this.options.emptyNodeClass
                                ];
                                if (isEmptyDoc) {
                                    classes.push(this.options.emptyEditorClass);
                                }
                                const decoration = Decoration2.node(pos, pos + node.nodeSize, {
                                    class: classes.join(" "),
                                    [dataAttribute]: typeof this.options.placeholder === "function" ? this.options.placeholder({
                                        editor: this.editor,
                                        node,
                                        pos,
                                        hasAnchor
                                    }) : this.options.placeholder
                                });
                                decorations.push(decoration);
                            }
                            return this.options.includeChildren;
                        });
                        return DecorationSet2.create(doc, decorations);
                    }
                }
            })
        ];
    }
});
;
;
;
var Selection = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "selection",
    addOptions () {
        return {
            className: "selection"
        };
    },
    addProseMirrorPlugins () {
        const { editor, options } = this;
        return [
            new Plugin4({
                key: new PluginKey4("selection"),
                props: {
                    decorations (state) {
                        if (state.selection.empty || editor.isFocused || !editor.isEditable || (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isNodeSelection"])(state.selection) || editor.view.dragging) {
                            return null;
                        }
                        return DecorationSet3.create(state.doc, [
                            Decoration3.inline(state.selection.from, state.selection.to, {
                                class: options.className
                            })
                        ]);
                    }
                }
            })
        ];
    }
});
;
;
function nodeEqualsType({ types, node }) {
    return node && Array.isArray(types) && types.includes(node.type) || (node == null ? void 0 : node.type) === types;
}
var TrailingNode = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "trailingNode",
    addOptions () {
        return {
            node: void 0,
            notAfter: []
        };
    },
    addProseMirrorPlugins () {
        var _a;
        const plugin = new PluginKey5(this.name);
        const defaultNode = this.options.node || ((_a = this.editor.schema.topNodeType.contentMatch.defaultType) == null ? void 0 : _a.name) || "paragraph";
        const disabledNodes = Object.entries(this.editor.schema.nodes).map(([, value])=>value).filter((node)=>(this.options.notAfter || []).concat(defaultNode).includes(node.name));
        return [
            new Plugin5({
                key: plugin,
                appendTransaction: (_, __, state)=>{
                    const { doc, tr, schema } = state;
                    const shouldInsertNodeAtEnd = plugin.getState(state);
                    const endPosition = doc.content.size;
                    const type = schema.nodes[defaultNode];
                    if (!shouldInsertNodeAtEnd) {
                        return;
                    }
                    return tr.insert(endPosition, type.create());
                },
                state: {
                    init: (_, state)=>{
                        const lastNode = state.tr.doc.lastChild;
                        return !nodeEqualsType({
                            node: lastNode,
                            types: disabledNodes
                        });
                    },
                    apply: (tr, value)=>{
                        if (!tr.docChanged) {
                            return value;
                        }
                        if (tr.getMeta("__uniqueIDTransaction")) {
                            return value;
                        }
                        const lastNode = tr.doc.lastChild;
                        return !nodeEqualsType({
                            node: lastNode,
                            types: disabledNodes
                        });
                    }
                }
            })
        ];
    }
});
;
;
var UndoRedo = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "undoRedo",
    addOptions () {
        return {
            depth: 100,
            newGroupDelay: 500
        };
    },
    addCommands () {
        return {
            undo: ()=>({ state, dispatch })=>{
                    return undo(state, dispatch);
                },
            redo: ()=>({ state, dispatch })=>{
                    return redo(state, dispatch);
                }
        };
    },
    addProseMirrorPlugins () {
        return [
            history(this.options)
        ];
    },
    addKeyboardShortcuts () {
        return {
            "Mod-z": ()=>this.editor.commands.undo(),
            "Shift-Mod-z": ()=>this.editor.commands.redo(),
            "Mod-y": ()=>this.editor.commands.redo(),
            // Russian keyboard layouts
            "Mod-\u044F": ()=>this.editor.commands.undo(),
            "Shift-Mod-\u044F": ()=>this.editor.commands.redo()
        };
    }
});
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/starter-kit/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StarterKit",
    ()=>StarterKit,
    "default",
    ()=>index_default
]);
// src/starter-kit.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$blockquote$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-blockquote/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$bold$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-bold/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-code/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2d$block$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-code-block/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$document$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-document/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$hard$2d$break$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-hard-break/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$heading$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-heading/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$horizontal$2d$rule$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-horizontal-rule/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$italic$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-italic/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-link/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-list/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$paragraph$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-paragraph/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$strike$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-strike/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-text/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extension-underline/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extensions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extensions/dist/index.js [app-client] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var StarterKit = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Extension"].create({
    name: "starterKit",
    addExtensions () {
        var _a, _b, _c, _d;
        const extensions = [];
        if (this.options.bold !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$bold$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bold"].configure(this.options.bold));
        }
        if (this.options.blockquote !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$blockquote$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Blockquote"].configure(this.options.blockquote));
        }
        if (this.options.bulletList !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BulletList"].configure(this.options.bulletList));
        }
        if (this.options.code !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Code"].configure(this.options.code));
        }
        if (this.options.codeBlock !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$code$2d$block$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CodeBlock"].configure(this.options.codeBlock));
        }
        if (this.options.document !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$document$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Document"].configure(this.options.document));
        }
        if (this.options.dropcursor !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extensions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Dropcursor"].configure(this.options.dropcursor));
        }
        if (this.options.gapcursor !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extensions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Gapcursor"].configure(this.options.gapcursor));
        }
        if (this.options.hardBreak !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$hard$2d$break$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HardBreak"].configure(this.options.hardBreak));
        }
        if (this.options.heading !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$heading$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Heading"].configure(this.options.heading));
        }
        if (this.options.undoRedo !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extensions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UndoRedo"].configure(this.options.undoRedo));
        }
        if (this.options.horizontalRule !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$horizontal$2d$rule$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HorizontalRule"].configure(this.options.horizontalRule));
        }
        if (this.options.italic !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$italic$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Italic"].configure(this.options.italic));
        }
        if (this.options.listItem !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListItem"].configure(this.options.listItem));
        }
        if (this.options.listKeymap !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ListKeymap"].configure((_a = this.options) == null ? void 0 : _a.listKeymap));
        }
        if (this.options.link !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$link$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Link"].configure((_b = this.options) == null ? void 0 : _b.link));
        }
        if (this.options.orderedList !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$list$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["OrderedList"].configure(this.options.orderedList));
        }
        if (this.options.paragraph !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$paragraph$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Paragraph"].configure(this.options.paragraph));
        }
        if (this.options.strike !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$strike$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Strike"].configure(this.options.strike));
        }
        if (this.options.text !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$text$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"].configure(this.options.text));
        }
        if (this.options.underline !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extension$2d$underline$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Underline"].configure((_c = this.options) == null ? void 0 : _c.underline));
        }
        if (this.options.trailingNode !== false) {
            extensions.push(__TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extensions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TrailingNode"].configure((_d = this.options) == null ? void 0 : _d.trailingNode));
        }
        return extensions;
    }
});
// src/index.ts
var index_default = StarterKit;
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-placeholder/dist/index.js [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>index_default
]);
// src/index.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extensions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/extensions/dist/index.js [app-client] (ecmascript)");
;
;
var index_default = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$extensions$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Placeholder"];
;
 //# sourceMappingURL=index.js.map
}),
"[project]/client/node_modules/@tiptap/extension-image/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Image",
    ()=>Image,
    "default",
    ()=>index_default,
    "inputRegex",
    ()=>inputRegex
]);
// src/image.ts
var __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/client/node_modules/@tiptap/core/dist/index.js [app-client] (ecmascript)");
;
var inputRegex = /(?:^|\s)(!\[(.+|:?)]\((\S+)(?:(?:\s+)["'](\S+)["'])?\))$/;
var Image = __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Node"].create({
    name: "image",
    addOptions () {
        return {
            inline: false,
            allowBase64: false,
            HTMLAttributes: {},
            resize: false
        };
    },
    inline () {
        return this.options.inline;
    },
    group () {
        return this.options.inline ? "inline" : "block";
    },
    draggable: true,
    addAttributes () {
        return {
            src: {
                default: null
            },
            alt: {
                default: null
            },
            title: {
                default: null
            },
            width: {
                default: null
            },
            height: {
                default: null
            }
        };
    },
    parseHTML () {
        return [
            {
                tag: this.options.allowBase64 ? "img[src]" : 'img[src]:not([src^="data:"])'
            }
        ];
    },
    renderHTML ({ HTMLAttributes }) {
        return [
            "img",
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeAttributes"])(this.options.HTMLAttributes, HTMLAttributes)
        ];
    },
    parseMarkdown: (token, helpers)=>{
        return helpers.createNode("image", {
            src: token.href,
            title: token.title,
            alt: token.text
        });
    },
    renderMarkdown: (node)=>{
        var _a, _b, _c, _d, _e, _f;
        const src = (_b = (_a = node.attrs) == null ? void 0 : _a.src) != null ? _b : "";
        const alt = (_d = (_c = node.attrs) == null ? void 0 : _c.alt) != null ? _d : "";
        const title = (_f = (_e = node.attrs) == null ? void 0 : _e.title) != null ? _f : "";
        return title ? `![${alt}](${src} "${title}")` : `![${alt}](${src})`;
    },
    addNodeView () {
        if (!this.options.resize || !this.options.resize.enabled || typeof document === "undefined") {
            return null;
        }
        const { directions, minWidth, minHeight, alwaysPreserveAspectRatio } = this.options.resize;
        return ({ node, getPos, HTMLAttributes, editor })=>{
            const el = document.createElement("img");
            Object.entries(HTMLAttributes).forEach(([key, value])=>{
                if (value != null) {
                    switch(key){
                        case "width":
                        case "height":
                            break;
                        default:
                            el.setAttribute(key, value);
                            break;
                    }
                }
            });
            el.src = HTMLAttributes.src;
            const nodeView = new __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResizableNodeView"]({
                element: el,
                editor,
                node,
                getPos,
                onResize: (width, height)=>{
                    el.style.width = `${width}px`;
                    el.style.height = `${height}px`;
                },
                onCommit: (width, height)=>{
                    const pos = getPos();
                    if (pos === void 0) {
                        return;
                    }
                    this.editor.chain().setNodeSelection(pos).updateAttributes(this.name, {
                        width,
                        height
                    }).run();
                },
                onUpdate: (updatedNode, _decorations, _innerDecorations)=>{
                    if (updatedNode.type !== node.type) {
                        return false;
                    }
                    return true;
                },
                options: {
                    directions,
                    min: {
                        width: minWidth,
                        height: minHeight
                    },
                    preserveAspectRatio: alwaysPreserveAspectRatio === true
                }
            });
            const dom = nodeView.dom;
            dom.style.visibility = "hidden";
            dom.style.pointerEvents = "none";
            el.onload = ()=>{
                dom.style.visibility = "";
                dom.style.pointerEvents = "";
            };
            return nodeView;
        };
    },
    addCommands () {
        return {
            setImage: (options)=>({ commands })=>{
                    return commands.insertContent({
                        type: this.name,
                        attrs: options
                    });
                }
        };
    },
    addInputRules () {
        return [
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$client$2f$node_modules$2f40$tiptap$2f$core$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["nodeInputRule"])({
                find: inputRegex,
                type: this.type,
                getAttributes: (match)=>{
                    const [, , alt, src, title] = match;
                    return {
                        src,
                        alt,
                        title
                    };
                }
            })
        ];
    }
});
// src/index.ts
var index_default = Image;
;
 //# sourceMappingURL=index.js.map
}),
]);

//# sourceMappingURL=1e749_079fb464._.js.map