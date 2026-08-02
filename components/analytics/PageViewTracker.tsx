"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import ReactGA from "react-ga4";

function initGA() {
  ReactGA.initialize("G-424LYKH5R9");
}

function trackPageView(path: string) {
  ReactGA.send({ hitType: "pageview", page: path });
}

export default function PageViewTracker() {
  const pathname = usePathname();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
