"use client";

import { useEffect, useState } from "react";
import type { Leader } from "@/types/leader";

// Module-scoped so the fetch only happens once per page session. Without
// this, navigating between /leadership/department/[dept] routes remounts
// the page (each department is its own route) and re-triggers the fetch,
// producing a visible loading flash every time someone switches departments.
let cachedLeaders: Leader[] | null = null;
let inFlightRequest: Promise<Leader[]> | null = null;

function fetchLeaders(): Promise<Leader[]> {
  if (cachedLeaders) return Promise.resolve(cachedLeaders);
  if (!inFlightRequest) {
    inFlightRequest = fetch("/api/leaders")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load leaders");
        return res.json() as Promise<Leader[]>;
      })
      .then((data) => {
        cachedLeaders = data;
        return data;
      })
      .finally(() => {
        inFlightRequest = null;
      });
  }
  return inFlightRequest;
}

export function useLeaders() {
  const [leaders, setLeaders] = useState<Leader[]>(cachedLeaders ?? []);
  const [isLoading, setIsLoading] = useState(!cachedLeaders);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cachedLeaders) return;

    let cancelled = false;

    fetchLeaders()
      .then((data) => {
        if (!cancelled) setLeaders(data);
      })
      .catch((err) => {
        if (!cancelled) setError(err instanceof Error ? err.message : "Failed to load leaders");
      })
      .finally(() => {
        if (!cancelled) setIsLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return { leaders, isLoading, error };
}
