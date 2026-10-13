import { createFileRoute, redirect } from "@tanstack/react-router";

// Old URL: kept so existing links keep working.
export const Route = createFileRoute("/recursos")({
  beforeLoad: () => {
    throw redirect({ to: "/recursos-gratuits", replace: true });
  },
});
