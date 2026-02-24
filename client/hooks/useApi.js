import { useState, useEffect } from "react";

const BASE = "/api";

// Module-level in-memory cache: persists across component mounts for the session
const _cache = new Map();        // endpoint → data
const _pending = new Map();      // endpoint → Promise (dedup concurrent requests)

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
      const promise = fetch(`${BASE}${endpoint}`)
        .then((r) => {
          if (!r.ok) throw new Error(r.statusText);
          return r.json();
        })
        .then((d) => {
          _cache.set(endpoint, d);
          _pending.delete(endpoint);
          return d;
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
