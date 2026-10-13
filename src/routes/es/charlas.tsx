import { createFileRoute } from "@tanstack/react-router";
import { XerradesPage } from "@/pages/xerrades/es";

export const Route = createFileRoute("/es/charlas")({
  component: XerradesPage,
});
