import { forwardRef, type ElementType, type HTMLAttributes } from "react";
import type { TypographyVariant } from "../../types";
import "./Typography.scss";

interface TypographyProps extends HTMLAttributes<HTMLElement> {
  variant?: TypographyVariant;
  as?: ElementType;
}

const VARIANT_TAG: Record<TypographyVariant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  p1: "p",
  p2: "p",
  p3: "p",
};

const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ variant = "p1", as, className = "", children, ...props }, ref) => {
    const Tag = as || VARIANT_TAG[variant] || "p";
    const baseClass = "typography";
    const variantClass = `${baseClass}--${variant}`;
    const combinedClassName = `${baseClass} ${variantClass}${
      className ? " " + className : ""
    }`.trim();

    return (
      <Tag ref={ref} className={combinedClassName} {...props}>
        {children}
      </Tag>
    );
  },
);

Typography.displayName = "Typography";

export default Typography;
