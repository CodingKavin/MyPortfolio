import type { HTMLAttributes } from "react";
import Typography from "../Typography/Typography";
import "./Tags.scss";

interface TagsProps extends HTMLAttributes<HTMLDivElement> {
  text?: string;
}

const Tags = ({ text = "", className = "", ...props }: TagsProps) => {
  let combinedClassName = `tag tag--skill`;
  if (className) combinedClassName += ` ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      <Typography variant="p2">{text}</Typography>
    </div>
  );
};

export default Tags;
