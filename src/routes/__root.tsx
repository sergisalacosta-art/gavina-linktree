import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, createRootRouteWithContext, useRouterState } from "@tanstack/react-router";
import { AppLink as Link } from "@/components/site/AppLink";
import { useEffect, useRef } from "react";
import { setupReveal } from "@/lib/motion";
import { applyHead, langFromPath, pages } from "@/lib/i18n";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";

function NotFoundComponent() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const es = langFromPath(pathname) === "es";
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">{es ? "Página no encontrada" : "Pàgina no trobada"}</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          {es ? "La página que buscas no existe o se ha movido." : "La pàgina que cerques no existeix o s'ha mogut."}
        </p>
        <div className="mt-6">
          <Link
            to={es ? pages.home.es : pages.home.ca}
            className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {es ? "Volver al inicio" : "Tornar a l'inici"}
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    applyHead(pathname);
    if (!ref.current) return;
    return setupReveal(ref.current);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <SiteHeader />
      <div key={pathname} ref={ref} className="page-enter">
        <Outlet />
      </div>
      <SiteFooter />
    </QueryClientProvider>
  );
}
