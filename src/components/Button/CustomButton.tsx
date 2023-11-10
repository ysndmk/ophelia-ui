import React from "react";
import { ButtonProps } from "./CustomButton.types";
import { StyledButton } from "./CustomButton.styled";
import { Button, Space } from "antd";
import { CommentOutlined } from "@ant-design/icons";
// todo : add icon component and iconposition
const CustomButton: React.FC<ButtonProps> = ({
  children,
  className,
  loading,
  shape,
  type,
  disabled,
  ghost,
  danger,
  fullWidth,
  iconPosition,
  iconName,
  ...props
}) => {
  return (
    <StyledButton className={className}>
      <Button
        shape={shape}
        type={type}
        loading={loading}
        ghost={ghost}
        disabled={disabled}
        danger={danger}
        block={fullWidth}
        iconPosition="left"
        iconName={iconName}
        {...props}
      >
        <Space align="center">
          {iconPosition === "left" && iconName && (
            <>
              <CommentOutlined />
            </>
          )}
          {children}
          {iconPosition === "right" && iconName && (
            <>
              <CommentOutlined />
            </>
          )}
        </Space>
      </Button>
    </StyledButton>
  );
};

export default CustomButton;
