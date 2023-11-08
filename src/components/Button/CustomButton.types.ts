import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;

  loading?: boolean;
  shape?: "default" | "circle" | "round";
  type?: "primary" | "dashed" | "link" | "text" | "default";
  size?: "small" | "large";
  ghost?: boolean;
  disabled?: boolean;
  danger?: boolean;
  // onClick?: MouseEventHandler<HTMLButtonElement>;
}
