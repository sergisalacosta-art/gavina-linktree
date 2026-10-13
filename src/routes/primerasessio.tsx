import { createFileRoute, redirect } from "@tanstack/react-router";

// Old URL: kept so existing links keep working.
export const Route = createFileRoute("/primerasessio")({
  beforeLoad: () => {
    throw redirect({ to: "/sessio-diagnostica", replace: true });
  },
});
