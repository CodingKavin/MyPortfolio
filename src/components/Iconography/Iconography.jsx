import "./Iconography.scss";

const iconPaths = {
  copy: (
    <path
      d="M9 9h13v13H9V9zm-4 6H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
  check: (
    <path
      d="M20 6L9 17l-5-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  ),
};

const Icon = ({ name, className = "", isActive = false, ...props }) => {
  const icon = iconPaths[name];

  if (!icon) return null;

  const combinedClasses = [
    "icon",
    `icon--${name}`,
    isActive ? "icon--active" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <svg
      className={combinedClasses}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...props}
    >
      {icon}
    </svg>
  );
};

export default Icon;
