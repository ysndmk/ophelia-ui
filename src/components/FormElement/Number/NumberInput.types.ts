import { ReactNode } from "react";

export interface NumberInputProps {
  id?: string;
  min?: number;
  max?: number;
  defaultValue?: number;
  controls?: boolean;
  required?: boolean;
  prefix?: any;
  placeholder?: any;
  propName?: string;
  status?: "warning" | "error" | "";
  size?: "large" | "middle" | "small";
  disabled?: boolean;
  label?: string;
  parser?: any;
  formatter?: any; 
  readOnly?: boolean;
  autoFocus?: boolean;
  validateStatus?: "success" | "warning" | "error" | "validating" | "";
  help?: string;
  hasFeedbackIcon?: boolean;
  // onClick?: MouseEventHandler<HTMLButtonElement>;
}
