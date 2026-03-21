"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { getAlternateMediaUrl } from "@/lib/mediaUrl";

/**
 * Wraps next/image with an onError handler.
 * If the primary src fails to load (e.g. Vercel ephemeral FS), automatically
 * falls back to `fallbackSrc`.
 */
export default function SafeImage({ src, fallbackSrc, alt, ...props }) {
    const [imgSrc, setImgSrc] = useState(src);
    const [hasTriedAlternate, setHasTriedAlternate] = useState(false);

    useEffect(() => {
        setImgSrc(src);
        setHasTriedAlternate(false);
    }, [src]);

    return (
        <Image
            {...props}
            src={imgSrc || fallbackSrc}
            alt={alt}
            onError={() => {
                const alternate = getAlternateMediaUrl(imgSrc || src);
                if (!hasTriedAlternate && alternate && alternate !== imgSrc) {
                    setHasTriedAlternate(true);
                    setImgSrc(alternate);
                    return;
                }

                if (imgSrc !== fallbackSrc && fallbackSrc) {
                    setImgSrc(fallbackSrc);
                }
            }}
        />
    );
}
