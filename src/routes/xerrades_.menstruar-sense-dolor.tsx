import { createFileRoute } from "@tanstack/react-router";
import { MenstruarCa } from "@/pages/xerrades/menstruar";

export const Route = createFileRoute("/xerrades_/menstruar-sense-dolor")({
  component: MenstruarCa,
});
