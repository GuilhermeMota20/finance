import { AcountLayout } from "@layouts/acount-layout";
import type { NavigationItem } from "../../hooks/types";
import type { Routes } from "../../routes/types";
import { Login } from "./page";

export const routes = (): Routes[] => {
  return [
    {
      path: "/",
      element: Login,
      layout: AcountLayout,
      permission: [],
    },
  ];
};

export const navTree = (): NavigationItem[] => {
  return [ 
    
  ];
};
