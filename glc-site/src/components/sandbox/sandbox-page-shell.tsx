"use client";

import { createContext, useContext, type ReactNode } from "react";

const SandboxGpuSafeContext = createContext(false);

/** True when rendered under `/sandbox` — relax GPU-heavy motion (Framer parallax, blur, fixed BG attach). */
export function useSandboxGpuSafe() {
  return useContext(SandboxGpuSafeContext);
}

/** Wraps all sandbox route content; enables `useSandboxGpuSafe()` for descendants. */
export function SandboxPageShell({ children }: { children: ReactNode }) {
  return (
    <SandboxGpuSafeContext.Provider value={true}>
      <div className="sandbox">{children}</div>
    </SandboxGpuSafeContext.Provider>
  );
}
