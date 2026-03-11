"use client";

import Image from "next/image";
import { useState } from "react";

/**
 * Wraps next/image with an onError handler.
 * If the primary src fails to load (e.g. Vercel ephemeral FS), automatically
 * falls back to `fallbackSrc`.
 */
export default function SafeImage({ src, fallbackSrc, alt, ...props }) {
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            {...props}
            src={imgSrc || fallbackSrc}
            alt={alt}
            onError={() => {
                if (imgSrc !== fallbackSrc && fallbackSrc) {
                    setImgSrc(fallbackSrc);
                }
            }}
        />
    );
}
