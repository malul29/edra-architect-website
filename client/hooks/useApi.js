import { useState, useEffect } from "react";

// Payload CMS REST API base
const BASE = "/api";

// Module-level in-memory cache: persists across component mounts for the session
const _cache = new Map();        // endpoint → data
const _pending = new Map();      // endpoint → Promise (dedup concurrent requests)

/**
 * Normalizes Payload CMS response to a flat array.
 * Payload returns { docs: [...], totalDocs, ... } for collection endpoints.
 * If the response has a `docs` array, return that. Otherwise return the response as-is.
 */
function normalizeResponse(data) {
  if (data && Array.isArray(data.docs)) {
    return data.docs;
  }
  if (Array.isArray(data)) {
    return data;
  }
  return data;
}

export function useApi(endpoint) {
  const [data, setData] = useState(_cache.get(endpoint) ?? []);
  const [loading, setLoading] = useState(!_cache.has(endpoint));
  const [error, setError] = useState(null);

  const fetchData = (force = false) => {
    if (!force && _cache.has(endpoint)) {
      setData(_cache.get(endpoint));
      setLoading(false);
      return;
    }

    setLoading(true);

    // Reuse in-flight request for same endpoint
    if (!_pending.has(endpoint)) {
      // For Payload CMS, add limit=100 to get enough results (default is 10)
      const separator = endpoint.includes('?') ? '&' : '?';
      const url = `${BASE}${endpoint}${separator}limit=100&depth=1`;

      const promise = fetch(url)
        .then((r) => {
          if (!r.ok) throw new Error(r.statusText);
          return r.json();
        })
        .then((d) => {
          const normalized = normalizeResponse(d);
          _cache.set(endpoint, normalized);
          _pending.delete(endpoint);
          return normalized;
        })
        .catch((e) => {
          _pending.delete(endpoint);
          throw e;
        });
      _pending.set(endpoint, promise);
    }

    _pending.get(endpoint)
      .then((d) => { setData(d); setLoading(false); })
      .catch((e) => { setError(e.message); setLoading(false); });
  };

  useEffect(() => { fetchData(); }, [endpoint]);

  // refetch clears cache entry and forces a fresh fetch
  const refetch = () => {
    _cache.delete(endpoint);
    fetchData(true);
  };

  return { data, loading, error, refetch };
}

export async function apiPost(endpoint, body) {
  const res = await fetch(`${BASE}${endpoint}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  // Invalidate cache for this endpoint
  _cache.delete(endpoint);
  return res.json();
}

export async function apiDelete(endpoint, id) {
  const res = await fetch(`${BASE}${endpoint}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error(await res.text());
  // Invalidate cache
  _cache.delete(endpoint);
  return res.json();
}

export async function apiPut(endpoint, id, body) {
  const res = await fetch(`${BASE}${endpoint}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(await res.text());
  // Invalidate cache
  _cache.delete(endpoint);
  return res.json();
}
