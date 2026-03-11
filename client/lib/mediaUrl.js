const FALLBACK_MEDIA_URL = "/edra-logo.png";

export function normalizeMediaUrl(url) {
  if (!url || typeof url !== "string") return FALLBACK_MEDIA_URL;

  // Backward compatibility for legacy Payload media URLs.
  return url
    .replace(/^\/api\/media\/file\//, "/media/")
    .replace(/\/api\/media\/file\//, "/media/")
    .replace(/^api\/media\/file\//, "/media/");
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
