import { Input, Space, Form } from "antd";
import React from "react";
import { StyledPasswordInput } from "./PasswordInput.styled";
import { PasswordInputProps } from "./PasswordInput.types";
// Todo : Space and Form

const PasswordInput = ({
  maxLength,
  showCount,
  allowClear,
  status,
  placeholder,
  prefix,
  id,
  disabled = false,
  required = false,
  label,
  name,
  direction = "horizontal",
  ...props
}: PasswordInputProps) => {
  const [form] = Form.useForm();

  return (
    <StyledPasswordInput>
      <Space>
        <Form
          form={form}
          name="validateOnly"
          layout={direction}
          autoComplete="off"
        >
          <Form.Item
            name={name}
            label={label ? label : ""}
            rules={[
              { required: required, message: "Please input your password!" },
            ]}
          >
            <Input.Password
              id={id}
              type="password"
              required={required}
              maxLength={maxLength}
              showCount={showCount}
              status={status}
              allowClear={allowClear}
              placeholder={placeholder}
              prefix={status && prefix}
              disabled={disabled}
              {...props}
            />
          </Form.Item>
        </Form>
      </Space>
    </StyledPasswordInput>
  );
};

export default PasswordInput;
