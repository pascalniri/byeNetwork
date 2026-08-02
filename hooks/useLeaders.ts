"use client";

import { useEffect, useState } from "react";
import type { Leader } from "@/types/leader";

export function useLeaders() {
  const [leaders, setLeaders] = useState<Leader[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch("/api/leaders")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load leaders");
        return res.json() as Promise<Leader[]>;
      })
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
