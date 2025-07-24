import { ReactNode, useMemo } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "@context/AuthContext";

interface ProtectedRouteProps {
  children: ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  // Rotas que não exigem autenticação
  const openRoutes = useMemo(() => ["/", "/register", "/forgot-password"], []);
  const isOpenRoute = openRoutes.includes(pathname);

  // Enquanto carrega, evita piscar
  if (loading) {
    return null; // Ou um componente <Loader /> personalizado
  }

  // Usuário não autenticado e rota protegida
  if (!user && !isOpenRoute) {
    return <Navigate to="/" replace />;
  }

  // Usuário logado e tentando acessar rota pública
  if (user && isOpenRoute) {
    return <Navigate to="/dashboard" replace />;
  }

  // Caso válido, renderiza a página
  return <>{children}</>;
}
