import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import type { ButtonVariant } from "../../types";
import "./Button.scss";

type ButtonProps = { variant?: ButtonVariant; className?: string } & (
  | ({ isLink: true; to?: string } & AnchorHTMLAttributes<HTMLAnchorElement>)
  | ({ isLink?: false; to?: string } & ButtonHTMLAttributes<HTMLButtonElement>)
);

const Button = ({
  variant = "primary",
  isLink = false,
  to,
  className = "",
  children,
  ...props
}: ButtonProps) => {
  let combinedClassName = "button button--" + variant;
  if (className) combinedClassName += " " + className;

  if (isLink) {
    return (
      <a
        href={to}
        className={combinedClassName}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  const {
    type = "button",
    disabled = false,
    ...buttonProps
  } = props as ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button
      type={type}
      className={combinedClassName}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
