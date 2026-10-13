import { createFileRoute } from "@tanstack/react-router";
import { SessioPage } from "@/pages/sessio/ca";

export const Route = createFileRoute("/sessio-diagnostica")({
  component: SessioPage,
});
