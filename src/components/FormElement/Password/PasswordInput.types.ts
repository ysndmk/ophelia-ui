import { ReactNode } from "react";

export interface PasswordInputProps {
  id?: string;
  maxLength?: number;
  showCount?: boolean;
  allowClear?: boolean;
  status?: "warning" | "error" | "";
  placeholder?: string;
  prefix?: ReactNode;
  disabled?: boolean;
  required?: boolean;
  label?: string;
  propName?: string;
  // onClick?: MouseEventHandler<HTMLButtonElement>;
}
