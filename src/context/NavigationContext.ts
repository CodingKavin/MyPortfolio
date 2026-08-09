import { createContext, useContext } from "react";
import type { NavigationContextValue } from "../types";

export const NavigationContext = createContext<
  NavigationContextValue | undefined
>(undefined);

export const useNavigation = (): NavigationContextValue => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
};
