import { createFileRoute } from "@tanstack/react-router";
import { IndividualPage } from "@/pages/individual/es";

export const Route = createFileRoute("/es/acompanamiento-individual")({
  component: IndividualPage,
});
