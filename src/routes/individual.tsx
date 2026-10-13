import { createFileRoute, redirect } from "@tanstack/react-router";

// Old URL: kept so existing links keep working.
export const Route = createFileRoute("/individual")({
  beforeLoad: () => {
    throw redirect({ to: "/acompanyament-individual", replace: true });
  },
});
