import styled, { css } from "styled-components";

export const Card = styled.div<{ width?: string }>`
  ${({ theme, width }) => css`
    width: ${width || "auto"};
    height: 350px;
    padding: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: ${theme.colors.transparentWhite};
    border-radius: 3px;
    border: ${"1px solid " + theme.colors.black};
    outline: none;
    box-sizing: border-box;
  `}
`;

export const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.title.size};
    font-weight: ${theme.font.title.weight};
    line-height: ${theme.font.title.lineHeight};
    text-align: center;
    text-transform: capitalize;
  `}
`;

export const Name = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.medium.size};
    font-weight: ${theme.font.medium.weight};
    line-height: ${theme.font.medium.lineHeight};
    text-align: center;
    margin-top: 8px;
  `}
`;

export const Rate = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.large.size};
    font-weight: ${theme.font.large.weight};
    line-height: ${theme.font.large.lineHeight};
    text-transform: capitalize;
  `}
`;

export const Lender = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.small.size};
    font-weight: bold;
    line-height: ${theme.font.small.lineHeight};
  `}
`;

export const Children = styled.div`
  display: flex;
  justify-content: center;
`;
