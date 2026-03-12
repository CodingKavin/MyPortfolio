import Typography from "../Typography/Typography.jsx";
import "./Tags.scss";

const Tags = ({ text = "", className = "", ...props }) => {
  let combinedClassName = `tag tag--skill`;
  if (className) combinedClassName += ` ${className}`;

  return (
    <div className={combinedClassName} {...props}>
      <Typography variant="p2">{text}</Typography>
    </div>
  );
};

export default Tags;
