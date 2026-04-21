"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function scrollToId(id: string, behavior: ScrollBehavior = "smooth") {
  const target = document.getElementById(id);
  const header = document.getElementById("site-header");
  if (!target) return false;
  const headerH = header?.offsetHeight ?? 0;
  const top =
    target.getBoundingClientRect().top + window.scrollY - headerH - 8;
  window.scrollTo({ top, behavior });
  return true;
}

function anchorFromEvent(e: MouseEvent): HTMLAnchorElement | null {
  for (const n of e.composedPath()) {
    if (n instanceof HTMLAnchorElement) return n;
  }
  return null;
}

/** After route change or direct load with `#id`, scroll matching section into view (header offset). */
function scrollToHashFromLocation(attempt = 0) {
  const raw = window.location.hash;
  if (!raw || raw === "#") return;
  const id = raw.slice(1);
  if (!id) return;

  const done = scrollToId(id, attempt === 0 ? "smooth" : "auto");
  if (!done && attempt < 24) {
    window.setTimeout(() => scrollToHashFromLocation(attempt + 1), 50);
  }
}

export function HashScrollHandler() {
  const pathname = usePathname();

  useEffect(() => {
    scrollToHashFromLocation();
  }, [pathname]);

  useEffect(() => {
    const onHashChange = () => scrollToHashFromLocation();
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented) return;
      if (e.button !== 0) return;
      if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;

      const a = anchorFromEvent(e);
      if (!a) return;
      if (a.hasAttribute("download")) return;
      const targetAttr = a.getAttribute("target");
      if (targetAttr === "_blank" || targetAttr === "_parent") return;

      const hrefAttr = a.getAttribute("href");
      if (!hrefAttr) return;

      // Same-page #anchor (e.g. #request-site-visit on service pages)
      if (hrefAttr.startsWith("#") && hrefAttr.length > 1) {
        const id = hrefAttr.slice(1);
        const el = document.getElementById(id);
        if (!el) return;
        e.preventDefault();
        scrollToId(id, "smooth");
        history.pushState(null, "", hrefAttr);
        return;
      }

      // On homepage only: /#section — scroll in place (avoid a redundant navigation)
      const homePath = (pathname ?? "").replace(/\/+$/, "") === "";
      if (!homePath) return;

      let url: URL;
      try {
        url = new URL(hrefAttr, window.location.origin);
      } catch {
        return;
      }

      const pathOnly = url.pathname.replace(/\/+$/, "") || "/";
      if (pathOnly !== "/" || url.hash.length <= 1) return;

      const id = url.hash.slice(1);
      if (!id) return;
      const targetEl = document.getElementById(id);
      if (!targetEl) return;

      e.preventDefault();
      scrollToId(id, "smooth");
      history.pushState(null, "", `${url.pathname}${url.hash}`);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [pathname]);

  return null;
}
