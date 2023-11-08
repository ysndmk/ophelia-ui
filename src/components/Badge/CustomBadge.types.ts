import { ReactNode } from "react";

export interface BadgeProps {
  id: string;
  propName?: string;
  size?: "small" | "default";
  type?: "avatar" | "notification";
  shape? : "square" | "circle"
  count?: number;
  color?: string;
  icon?: ReactNode;
  dot?: boolean;
  onlineStatus: "online" | "offline" | "idle" | "count";
  avatarUrl?: string 
}
