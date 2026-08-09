import type { HTMLAttributes } from "react";
import Typography from "../Typography/Typography";
import type { TagVariant } from "../../types";
import "./Tags.scss";

interface TagsProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
  variant?: TagVariant;
}

const Tags = ({
  text = "",
  variant = "skill",
  className = "",
  ...props
}: TagsProps) => {
  let combinedClassName = `tag tag--${variant}`;
  if (className) combinedClassName += ` ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      <Typography variant="p2">{text}</Typography>
    </div>
  );
};

export default Tags;
