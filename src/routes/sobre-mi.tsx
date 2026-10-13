import { createFileRoute } from "@tanstack/react-router";
import { SobreMi } from "@/pages/sobre-mi/ca";

export const Route = createFileRoute("/sobre-mi")({
  component: SobreMi,
});
