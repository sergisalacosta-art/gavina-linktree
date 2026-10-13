import { createFileRoute } from "@tanstack/react-router";
import { Index } from "@/pages/home/es";

export const Route = createFileRoute("/es/")({
  component: Index,
});
