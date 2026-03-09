export function normalizeMediaUrl(url) {
  if (!url || typeof url !== "string") return url;

  // Backward compatibility for legacy Payload media URLs.
  return url
    .replace(/^\/api\/media\/file\//, "/media/")
    .replace(/\/api\/media\/file\//, "/media/")
    .replace(/^api\/media\/file\//, "/media/");
}

export function resolveMediaUrl(media) {
  if (!media) return media;
  if (typeof media === "object") {
    return normalizeMediaUrl(media.url || media.filename || "");
  }
  return normalizeMediaUrl(media);
}
