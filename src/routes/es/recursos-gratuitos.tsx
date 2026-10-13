import { createFileRoute } from "@tanstack/react-router";
import { RecursosPage } from "@/pages/recursos/es";

export const Route = createFileRoute("/es/recursos-gratuitos")({
  component: RecursosPage,
});
