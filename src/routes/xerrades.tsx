import { createFileRoute } from "@tanstack/react-router";
import { XerradesHubCa } from "@/pages/xerrades/hub";

export const Route = createFileRoute("/xerrades")({
  component: XerradesHubCa,
});
