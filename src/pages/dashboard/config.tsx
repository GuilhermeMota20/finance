import { Dashboard } from "@mui/icons-material";
import type { NavigationItem } from "../../hooks/types";
import type { Routes } from "../../routes/types";
import { MetricasOperacao } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/dashboard",
      element: MetricasOperacao,
      permission: [],
    },
  ];
};

export const navTree = (): NavigationItem[] => {
  return [
    {
      path: '/dashboard',
      text: 'Dashboard',
      icon: <Dashboard />
    },
  ];
};