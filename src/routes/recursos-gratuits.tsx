import { createFileRoute } from "@tanstack/react-router";
import { RecursosPage } from "@/pages/recursos/ca";

export const Route = createFileRoute("/recursos-gratuits")({
  component: RecursosPage,
});
