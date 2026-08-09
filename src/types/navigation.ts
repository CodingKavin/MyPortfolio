export type SectionId = "about" | "path" | "skills" | "work" | "contact";

export interface NavigationContextValue {
  activeSection: SectionId;
  setActiveSection: (id: SectionId) => void;
}
