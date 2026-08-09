import { useState, type ReactNode } from "react";
import { NavigationContext } from "./NavigationContext";
import type { SectionId } from "../types";

interface NavigationProviderProps {
  children: ReactNode;
}

export const NavigationProvider = ({ children }: NavigationProviderProps) => {
  const [activeSection, setActiveSection] = useState<SectionId>("about");

  return (
    <NavigationContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </NavigationContext.Provider>
  );
};
