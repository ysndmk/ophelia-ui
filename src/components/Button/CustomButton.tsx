import React from "react";
import { ButtonProps } from "./CustomButton.types";
import { StyledButton } from "./CustomButton.styled";

import { Button, Flex, Space } from "antd";
import { CommentOutlined } from "@ant-design/icons";
// todo : add icon and iconposition
const CustomButton: React.FC<ButtonProps> = ({
  size,
  // onClick,
  children,
  loading,
  shape,
  type,
  disabled,
  ghost,
  danger,
  ...props
}) => {
  return (
    <StyledButton className="">
      <Button
        shape={shape}
        size={size}
        type={type}
        loading={loading}
        ghost={ghost}
        disabled={disabled}
        danger={danger}
        {...props}
      >
        <Space align="center">
          <>
            <CommentOutlined />
          </>
          {children}
        </Space>
      </Button>
    </StyledButton>
  );
};

export default CustomButton;
