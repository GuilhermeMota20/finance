import { BackdropCustom } from "@components/backdrop-custom";
import { useAuth } from "@context/AuthContext";
import { ReactNode, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";

export function ProtectedRoute({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  const openRoutes = useMemo(() => ["/"], []);
  const isOpenRoute = openRoutes.includes(pathname);

  if (loading) return <BackdropCustom open={true} />;
  if (!user && !isOpenRoute) return <Navigate to="/" replace />;
  if (user && isOpenRoute) return <Navigate to="/dashboard" replace />;

  return <>{children}</>;
}
