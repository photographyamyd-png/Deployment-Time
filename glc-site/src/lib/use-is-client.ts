import { useSyncExternalStore } from "react";

function subscribe(): () => void {
  return () => {};
}

/** True after hydration on the client; false on the server snapshot. */
export function useIsClient(): boolean {
  return useSyncExternalStore(subscribe, () => true, () => false);
}
