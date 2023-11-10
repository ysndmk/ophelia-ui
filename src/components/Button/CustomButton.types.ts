import { MouseEventHandler, ReactNode } from "react";

export interface ButtonProps {
  children?: ReactNode;
  loading?: boolean;
  shape?: "default" | "circle" | "round";
  ghost?: boolean;
  disabled?: boolean;
  danger?: boolean;
  className?: string;
  fullWidth?: boolean;
  iconPosition?: "left" | "right" | "";
  iconName?: string;
  buttonType?:
    | "primary"
    | "secondary"
    | "danger"
    | "success"
    | "warning"
    | "darkBlue";
  // onClick?: MouseEventHandler<HTMLButtonElement>;
}
