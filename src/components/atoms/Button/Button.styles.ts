import styled, { css } from "styled-components";

import { ButtonProps } from "./Button.types";

export const Button = styled.button<ButtonProps>`
  ${({ theme, width }) => css`
    font-size: ${theme.font.small.size};
    line-height: ${theme.font.small.lineHeight};
    font-weight: ${theme.font.small.weight};
    letter-spacing: 0.2px;
    background-color: ${theme.colors.transparentWhite};
    color: ${theme.colors.black};
    width: ${width || "auto"};
    border-radius: 3px;
    padding: 8px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: ${"1px solid " + theme.colors.black};
    outline: none;

    &:focus-visible {
      border-color: ${theme.colors.activeBlue};
    }

    &:hover:enabled {
      background-color: ${theme.colors.greyWeb};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}
`;

export const ButtonLoading = styled.button<ButtonProps>`
  ${({ theme, width }) => css`
    font-size: ${theme.font.medium.size};
    line-height: ${theme.font.medium.lineHeight};
    font-weight: ${theme.font.medium.weight};
    letter-spacing: 0.2px;
    background-color: #009497;
    color: ${theme.colors.white};
    width: ${width || "auto"};
    border-radius: 8px;
    padding: 16px 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    cursor: pointer;
    border: 1px solid transparent;
    outline: none;

    & img {
      padding-top: 4px;
      padding-bottom: 4px;
    }

    & > svg {
      width: 14px;
      color: ${theme.colors.white};
      margin-right: 6px;
    }

    &:focus-visible {
      border-color: ${theme.colors.activeBlue};
    }

    &:hover:enabled {
      background-color: ${theme.colors.greyWeb};
    }

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}
`;

export const ButtonLabel = styled.div`
  opacity: 0.5;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: not-allowed;
  outline: none;
`;
