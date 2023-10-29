import { FontSize, FontWeight } from "@custom-types/css-properties";
import styled, { css } from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "tertiary";

export type ButtonProps = {
  $variant?: ButtonVariant;
  $fontSize?: FontSize;
  $fontWeight?: FontWeight;
};

const Button = styled.button<ButtonProps>`
  border: none;
  border-radius: 40px;
  cursor: pointer;
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  padding: 0.5rem 1rem;

  ${(props) => {
    switch (props.$variant) {
      case "tertiary":
        return css`
          background-color: #000000;
          border: 1px solid #ffffff;
          color: #ffffff;
        `;
      case "secondary":
        return css`
          background-color: #ffffff;
          color: #000000;

          &:disabled {
            background-color: #787a7a;
            color: #0f1419;
          }
        `;
      case "primary":
      default:
        return css`
          background-color: #1d9bf0;
          color: #ffffff;

          &:hover {
            background-color: #1a8cd8;
          }

          &:disabled {
            background-color: #0f4e78;
            color: #808080;
          }
        `;
    }
  }}
`;

export default Button;
