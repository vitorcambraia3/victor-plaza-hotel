"use client";

export function CurrentYear() {
  // Renderizado no cliente na hidratação; o ano não fica preso à data do build (SSG).
  return <span suppressHydrationWarning>{new Date().getFullYear()}</span>;
}
