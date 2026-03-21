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
