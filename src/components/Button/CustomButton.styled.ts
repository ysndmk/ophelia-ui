import styled from "styled-components";
import { ButtonProps } from "./CustomButton.types";
import { buttonTheming } from "../../theming/button.styled";

export const StyledButton = styled.div<ButtonProps>`
  .ant-btn {
    ${(props) => {
      const sharedStyles = buttonTheming[0].shared;
      return Object.entries(sharedStyles)
        .map(([key, value]) => `${key}: ${value};`)
        .join("\n");
    }}
  }

  .ant-custom-primary {
    ${(props) => {
      const sharedStyles = buttonTheming[0].primary;
      return Object.entries(sharedStyles)
        .map(([key, value]) => `${key}: ${value};`)
        .join("\n");
    }}
  }

  .ant-custom-secondary {
    ${(props) => {
      const sharedStyles = buttonTheming[0].secondary;
      return Object.entries(sharedStyles)
        .map(([key, value]) => `${key}: ${value};`)
        .join("\n");
    }}
  }

  .ant-custom-danger {
    ${(props) => {
      const sharedStyles = buttonTheming[0].danger;
      return Object.entries(sharedStyles)
        .map(([key, value]) => `${key}: ${value};`)
        .join("\n");
    }}
  }

  .ant-custom-warning {
    ${(props) => {
      const sharedStyles = buttonTheming[0].warning;
      return Object.entries(sharedStyles)
        .map(([key, value]) => `${key}: ${value};`)
        .join("\n");
    }}
  }

  .ant-custom-success {
    ${(props) => {
      const sharedStyles = buttonTheming[0].success;
      return Object.entries(sharedStyles)
        .map(([key, value]) => `${key}: ${value};`)
        .join("\n");
    }}
  }

  .ant-custom-darkBlue {
    ${(props) => {
      const sharedStyles = buttonTheming[0].darkBlue;
      return Object.entries(sharedStyles)
        .map(([key, value]) => `${key}: ${value};`)
        .join("\n");
    }}
  }
`;
