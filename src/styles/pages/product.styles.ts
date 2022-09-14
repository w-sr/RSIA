import styled, { css } from "styled-components";

export const Wrap = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 24px;

    @media ${theme.breakpoints.tablet} {
      flex-direction: row;
      justify-content: space-between;
      padding: 100px 0 0;
    }
  `}
`;

export const ProductWrap = styled.div`
  ${({ theme }) => css`
    margin-bottom: 24px;
    @media ${theme.breakpoints.tablet} {
      margin-right: 24px;
    }
  `}
`;

export const ApplicationWrap = styled.div`
  ${({ theme }) => css`
    margin-top: 24px;
    display: flex;
    flex-direction: column;
  `}
`;

export const ApplicationLabel = styled.span`
  ${({ theme }) => css`
    font-size: ${theme.font.medium.size};
    margin-bottom: 8px;
  `}
`;

export const ApplicationSelect = styled.select`
  ${({ theme }) => css`
    padding: 4px;
    font-size: ${theme.font.small.size};
  `}
`;

export const ApplicationOption = styled.option``;

export const Application = styled.div<{ selected: boolean }>`
  ${({ theme, selected }) => css`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding 8px;
    font-size: ${theme.font.small.size};
    background-color: ${selected ? theme.colors.greyWeb : "transparent"};
    border: 1px solid ${theme.colors.black};
    border-radius: 3px;
    margin-top: 16px;
    cursor: pointer;
    box-sizing: border-box;
  `}
`;

export const ApplicantWrap = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-height: 400px;
    border: 1px solid ${theme.colors.black};
    border-radius: 8px;
    padding: 24px;
    box-sizing: border-box;

    @media ${theme.breakpoints.tablet} {
      width: 680px;
    }
  `}
`;

export const FormTitle = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.medium.size};
    margin: 0 0 32px;
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 500px;
`;

export const InputWrap = styled.div`
  padding: 10px 0;
`;

export const ButtonWrap = styled.div`
  margin-top: 24px;
  align-self: end;
`;
