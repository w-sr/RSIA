import styled, { css } from "styled-components";

export const TextField = styled.div`
  display: flex;
  align-items: center;
`;

export const InputWrap = styled.div`
  flex: 1;
`;

export const Label = styled.label`
  ${({ theme }) => css`
    width: 100px;
    font-size: ${theme.font.small.size};
    line-height: ${theme.font.small.lineHeight};
    font-weight: ${theme.font.small.weight};
    text-transform: capitalize;
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    padding: 8px;
    font-size: ${theme.font.small.size};
    line-height: ${theme.font.small.lineHeight};
    font-weight: ${theme.font.small.weight};
    outline: none;
    box-sizing: border-box;
  `}
`;

export const HelperText = styled.p`
  ${({ theme }) => css`
    margin: 0;
    margin-top: 8px;
    font-size: ${theme.font.tiny.size};
    line-height: ${theme.font.tiny.lineHeight};
    font-weight: ${theme.font.tiny.weight};
    color: ${theme.colors.red};
  `}
`;
