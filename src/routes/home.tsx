import { createFileRoute, redirect } from "@tanstack/react-router";

// Old URL from a previous website that search engines still remember.
export const Route = createFileRoute("/home")({
  beforeLoad: () => {
    throw redirect({ to: "/", replace: true });
  },
});
