import type { ComponentProps } from "react";
import { Link } from "@tanstack/react-router";

type LinkProps = ComponentProps<typeof Link>;

// Router Link that accepts any internal path string (paths come from the i18n page map).
export function AppLink(props: Omit<LinkProps, "to"> & { to: string }) {
  return <Link {...(props as LinkProps)} />;
}
