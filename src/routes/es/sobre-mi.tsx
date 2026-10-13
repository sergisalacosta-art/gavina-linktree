import { createFileRoute } from "@tanstack/react-router";
import { SobreMi } from "@/pages/sobre-mi/es";

export const Route = createFileRoute("/es/sobre-mi")({
  component: SobreMi,
});
