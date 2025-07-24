import { NotFound } from "@pages/not-found/page";
import { createBrowserRouter, type RouteObject } from "react-router-dom";
import { DashboardLayout } from "../layouts/dashboard-layout";
import { ProtectedRoute } from "./protected-route";
import type { Routes } from "./types";

const ROUTES: Record<string, { routes: Function }> = {
  ...import.meta.glob('/src/pages/**/config.ts', { eager: true }),
  ...import.meta.glob('/src/pages/**/config.tsx', { eager: true }),
};

export const useRouter = () => {
  const RootLayoutElement = DashboardLayout;
  const pageRoutes: RouteObject[] = [];

  const loadRoutes = async () => {
    for (const path in ROUTES) {
      const routes = ROUTES[path].routes();

      pageRoutes.push(
        ...routes.map((item: Routes) => {
          const RouteElement = item?.element;
          const RouteLayout = item?.layout ?? RootLayoutElement;

          return {
            path: item?.path,
            element: (
              <RouteLayout>
                <ProtectedRoute>
                  <RouteElement />
                </ProtectedRoute>
              </RouteLayout>
            ),
          };
        })
      );
    }
  };
  loadRoutes();

  const router = createBrowserRouter([
    ...pageRoutes,
    {
      path: "*",
      element: (
        <RootLayoutElement>
          <NotFound />
        </RootLayoutElement>
      ),
    },
  ]);

  return { router };
};
