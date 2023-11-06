import { ReactNode } from "react";

export interface PasswordInputProps {
  id?: string;
  maxLength?: number;
  showCount?: boolean;
  allowClear?: boolean;
  status?: "warning" | "error" | undefined;
  placeholder?: string;
  prefix?: ReactNode;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  name?: string;
  direction?: "horizontal" | "vertical";
  // onClick?: MouseEventHandler<HTMLButtonElement>;
}
