import { createFileRoute } from "@tanstack/react-router";
import { BlogIndex } from "@/pages/blog/index";
export const Route = createFileRoute("/blog/")({ component: BlogIndex });
