import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  loading?: boolean;
  shape?: "default" | "circle" | "round";
  type?: "primary" | "dashed" | "link" | "text" | "default";
  ghost?: boolean;
  disabled?: boolean;
  danger?: boolean;
  className?: string;
  fullWidth?: boolean;
  iconPosition?: "left" | "right" | "";
  iconName?: string;
  // onClick?: MouseEventHandler<HTMLButtonElement>;
}
