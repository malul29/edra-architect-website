const FALLBACK_MEDIA_URL = "/edra-logo.png";

function encodePathSegments(pathname) {
  const safeDecode = (value) => {
    try {
      return decodeURIComponent(value);
    } catch {
      return value;
    }
  };

  return pathname
    .split("/")
    .map((part, idx) => (idx === 0 ? part : encodeURIComponent(safeDecode(part))))
    .join("/");
}

export function normalizeMediaUrl(url) {
  if (!url || typeof url !== "string") return FALLBACK_MEDIA_URL;

  if (/^https?:\/\//i.test(url)) return url;

  const cleaned = String(url).trim();

  if (cleaned.startsWith("/api/media/file/") || cleaned.startsWith("api/media/file/")) {
    const relative = cleaned.replace(/^\/?api\/media\/file\//, "");
    return encodePathSegments(`/api/media/file/${relative}`);
  }

  if (cleaned.startsWith("/media/") || cleaned.startsWith("media/")) {
    const relative = cleaned.replace(/^\/?media\//, "");
    return encodePathSegments(`/media/${relative}`);
  }

  if (cleaned.startsWith("/uploads/") || cleaned.startsWith("uploads/")) {
    const relative = cleaned.replace(/^\/?uploads\//, "");
    return encodePathSegments(`/uploads/${relative}`);
  }

  if (cleaned.startsWith("/")) {
    return encodePathSegments(cleaned);
  }

  // Payload can return bare filenames in some environments.
  if (!cleaned.includes("/")) return encodePathSegments(`/api/media/file/${cleaned}`);

  return encodePathSegments(`/${cleaned.replace(/^\/+/, "")}`);
}

export function getAlternateMediaUrl(url) {
  if (!url || typeof url !== "string") return null;

  const cleaned = String(url).trim();
  if (/^https?:\/\//i.test(cleaned)) return null;

  if (cleaned.startsWith("/api/media/file/") || cleaned.startsWith("api/media/file/")) {
    const relative = cleaned.replace(/^\/?api\/media\/file\//, "");
    return encodePathSegments(`/media/${relative}`);
  }

  if (cleaned.startsWith("/media/") || cleaned.startsWith("media/")) {
    const relative = cleaned.replace(/^\/?media\//, "");
    return encodePathSegments(`/api/media/file/${relative}`);
  }

  return null;
}

export function resolveMediaUrl(media) {
  if (!media) return FALLBACK_MEDIA_URL;

  if (typeof media === "string") {
    return normalizeMediaUrl(media);
  }

  if (typeof media === "number") {
    return FALLBACK_MEDIA_URL;
  }

  if (typeof media === "object") {
    const candidate = media.url || media.filename;
    if (candidate) return normalizeMediaUrl(candidate);
    // Try sizes
    const sizeUrl = media?.sizes?.full?.url || media?.sizes?.card?.url || media?.sizes?.thumbnail?.url;
    if (sizeUrl) return normalizeMediaUrl(sizeUrl);
    return FALLBACK_MEDIA_URL;
  }

  return FALLBACK_MEDIA_URL;
}

/**
 * Resolve a media object to a specific Payload image size.
 * Preferred size order: requested → next larger → original.
 * This reduces Vercel Blob Data Transfer by serving smaller variants.
 *
 * @param {object|string|number} media - Payload media object, URL string, or ID
 * @param {'thumbnail'|'card'|'full'} preferredSize - Which Payload imageSizes variant to use
 * @returns {string} Resolved URL
 */
export function resolveMediaUrlForSize(media, preferredSize = 'card') {
  if (!media || typeof media !== "object") return resolveMediaUrl(media);

  const sizes = media.sizes;
  if (!sizes) return resolveMediaUrl(media);

  // Define fallback chain: requested size → next larger → original
  const chains = {
    thumbnail: ['thumbnail', 'card', 'full'],
    card: ['card', 'full'],
    full: ['full'],
  };

  const chain = chains[preferredSize] || chains.card;

  for (const sizeName of chain) {
    const sizeUrl = sizes[sizeName]?.url;
    if (sizeUrl) return normalizeMediaUrl(sizeUrl);
  }

  // Fall back to original
  return resolveMediaUrl(media);
}

