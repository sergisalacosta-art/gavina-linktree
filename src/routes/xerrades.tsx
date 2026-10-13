import { createFileRoute } from "@tanstack/react-router";
import { XerradesPage } from "@/pages/xerrades/ca";

export const Route = createFileRoute("/xerrades")({
  component: XerradesPage,
});
