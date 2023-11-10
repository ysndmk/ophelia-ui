import { themeColors } from "./ophelia.styled";

export const buttonTheming = [
  {
    shared: {
      "border-radius": "8px",
      padding: "20px",
      display: "flex",
      "justify-content": "center",
      "align-items": "center",
    },
    primary: {
      color: "red",
      background: themeColors.p01,
    },
    secondary: {
      color: "blue",
      background: themeColors.p10,
    },
    danger: {
      color: "red",
      background: themeColors.p08,
    },
    warning: {
      color: themeColors.p01,
      background: "yellow",
    },
    success: {
      color: themeColors.p01,
      background: "green",
    },
    darkBlue: {
      color: "white",
      background: themeColors.p02,
    },
  },
];
