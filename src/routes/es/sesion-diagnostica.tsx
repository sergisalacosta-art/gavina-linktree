import { createFileRoute } from "@tanstack/react-router";
import { SessioPage } from "@/pages/sessio/es";

export const Route = createFileRoute("/es/sesion-diagnostica")({
  component: SessioPage,
});
