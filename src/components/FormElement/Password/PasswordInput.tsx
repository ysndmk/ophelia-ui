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
  disabled,
  required,
  label,
  propName,
  ...props
}: PasswordInputProps) => {

  return (
    <StyledPasswordInput>
      <Space>
          <Form.Item
            label={label ? label : ""}
            required={required}
            rules={[
              {
                required: true,
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The new password that you entered do not match!'));
                },
              }),
            ]}
            // dependencies={['password']} Todo

          >
            <Input.Password
              id={id}
              name={propName}
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
      </Space>
    </StyledPasswordInput>
  );
};

export default PasswordInput;
