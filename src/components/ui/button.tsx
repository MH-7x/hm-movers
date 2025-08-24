import React from "react";

type ButtonVariant =
  | "default"
  | "destructive"
  | "outline"
  | "secondary"
  | "ghost"
  | "link"
  | "light"
  | "whatsapp"
  | "white";

type ButtonSize = "default" | "sm" | "lg" | "icon";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const buttonVariants: Record<ButtonVariant, string> = {
  default:
    "bg-gradient-to-t from-[#d74613] to-[#FF5F00] hover:bg-[#FF5F00]/80 transition duration-300 text-white",
  destructive: "bg-red-500 text-white hover:bg-red-600",
  outline:
    "border border-[#023246] text-[#023246] hover:bg-[#287094] hover:text-white hover:border-transparent",
  secondary:
    "bg-[#f0f0f0] border border-transparent hover:border-neutral-300 transition-all",
  ghost: "hover:bg-accent hover:text-accent-foreground",
  link: "text-primary underline-offset-4 hover:underline",
  light: "bg-[#287094] text-white",
  whatsapp: "bg-green-500",
  white:
    "bg-white text-[#023246] hover:bg-[#287094] hover:text-white hover:border-transparent",
};

const buttonSizes: Record<ButtonSize, string> = {
  default: "py-3 px-6 rounded-full",
  sm: "py-2 px-4 rounded-full",
  lg: "h-11 rounded-md px-8",
  icon: "relative h-12 w-12 rounded-full",
};

const Button: React.FC<ButtonProps> = ({
  variant = "default",
  size = "default",
  className,
  children,
  ...props
}) => {
  const variantClasses = buttonVariants[variant];
  const sizeClasses = buttonSizes[size];

  return (
    <button
      className={`font-poppins inline-flex transition-all items-center justify-center whitespace-nowrap font-medium disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export { Button };
