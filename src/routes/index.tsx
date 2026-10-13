import { createFileRoute } from "@tanstack/react-router";
import { Index } from "@/pages/home/ca";

export const Route = createFileRoute("/")({
  component: Index,
});
