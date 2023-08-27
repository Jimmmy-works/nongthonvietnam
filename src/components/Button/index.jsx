import React, { useMemo } from "react";
import { Link } from "react-router-dom";

const ButtonStyle = ({
  variant = "primary",
  link = "",
  className,
  children,
  disabled,
  type,
  style,
  ...buttonProps
}) => {
  const variantClassName = useMemo(() => {
    if (disabled) return "btn btn-light";
    switch (variant) {
      case "primary":
        return "btn btn-primary";
      case "outline":
        return "btn btn-outline-primary-2";

      default:
        return "";
    }
  }, [variant, disabled]);
  if (!link) {
    return (
      <button
        style={style}
        type={type}
        className={`${variantClassName} ${className ?? ""} `}
        {...buttonProps}
      >
        {children}
      </button>
    );
  }
  return (
    <Link
      style={style}
      type={type}
      to={link}
      className={`${variantClassName} ${className ?? ""}`}
      {...buttonProps}
    >
      {children}
    </Link>
  );
};

export default ButtonStyle;
