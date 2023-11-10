import React from "react";
import { Form, InputNumber } from "antd";
import { NumberInputProps } from "./NumberInput.types";
import { StyledNumberInput } from "./NumberInput.styled";

const NumberInput = ({
  required,
  disabled,
  prefix,
  id,
  formatter,
  parser,
  min,
  max,
  placeholder,
  controls,
  autoFocus,
  readOnly,
  label,
  propName,
  size,
  validateStatus,
  help,
  hasFeedbackIcon,
  ...props
}: NumberInputProps) => {
  return (
    <StyledNumberInput>
      <Form.Item
        name={name}
        label={label ? label : ""}
        rules={[{ required: required, message: "Please input your password!" }]}
        validateStatus={validateStatus}
        hasFeedback={hasFeedbackIcon}
        help={validateStatus && help}
      >
        <InputNumber
          id={id}
          readOnly={readOnly}
          controls={controls}
          formatter={formatter}
          parser={parser}
          max={max ? max : 999999999999}
          min={min ? min : 0}
          name={propName}
          size={size}
          required={required}
          status={status}
          autoFocus={autoFocus}
          placeholder={placeholder}
          prefix={prefix}
          disabled={disabled}
          {...props}
        />
      </Form.Item>
    </StyledNumberInput>
  );
};

export default NumberInput;
