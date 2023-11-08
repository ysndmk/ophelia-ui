import React, { useState } from "react";
import { Avatar, Badge, Space } from "antd";
import { BadgeProps } from "./CustomBadge.types";
import { StyledCustomBadge } from "./CustomBadge.styled";

const CustomBadge = ({
  shape,
  count,
  size,
  onlineStatus,
  type,
  color,
  avatarUrl,
  ...props
}: BadgeProps) => {
  const avatarStatusHandler = () => {
    let dot = false;
    let color = "";

    if (onlineStatus !== "count") {
      if (onlineStatus === "online") {
        dot = true;
        color = "#52c41a";
      } else if (onlineStatus === "idle") {
        dot = true;
        color = "#c4b91a";
      } else if (onlineStatus === "offline") {
        dot = true;
        color = "#c41a1a";
      }
    }

    return { dot, color };
  };

  return (
    <StyledCustomBadge>
      <Badge
        count={count ? count : 0}
        size={size}
        {...props}
        color={type === "avatar" ? avatarStatusHandler().color : color}
        dot={type === "avatar" ? avatarStatusHandler().dot : false}
      >
        <Avatar src={avatarUrl} shape={shape} size="default" />
      </Badge>
    </StyledCustomBadge>
  );
};

export default CustomBadge;
