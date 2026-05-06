import React from "react";

const Button = ({
  className = "",
  size = "default",
  children,
  type = "button",
  disabled = false,
  onClick,
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:brightness-110 shadow-lg shadow-primary/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseClasses} ${sizeClasses[size] ?? sizeClasses.default} ${className}`}
    >
      <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export { Button };
export default Button;
