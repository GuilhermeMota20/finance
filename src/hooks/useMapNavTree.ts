import { useMemo } from "react";
import type { NavigationItem, NavigationModule } from "./types";

export function useMapNavTree() {
  const navigationTree: NavigationItem[] = [];
  const NAV_TREE: Record<string, NavigationModule> = {
    ...import.meta.glob('/src/pages/**/config.ts', { eager: true }),
    ...import.meta.glob('/src/pages/**/config.tsx', { eager: true }),
  };

  for (const path in NAV_TREE) {
    const navTree = NAV_TREE[path].navTree();

    navigationTree.push(
      ...navTree?.map((item) => {
        return {
          ...item,
          path: item.path && !(/^\//.test(item.path)) ? `/${item.path}` : item.path
        }
      })
    );
  };

  function normalizePath(): NavigationItem[] {
    return navigationTree;
  };

  const navListTree = useMemo(normalizePath, []);

  return {
    navListTree
  };
};