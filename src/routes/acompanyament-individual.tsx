import { createFileRoute } from "@tanstack/react-router";
import { IndividualPage } from "@/pages/individual/ca";

export const Route = createFileRoute("/acompanyament-individual")({
  component: IndividualPage,
});
