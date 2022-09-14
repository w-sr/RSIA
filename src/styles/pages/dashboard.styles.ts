import styled, { css } from "styled-components";

export const Wrap = styled.div`
  ${({ theme }) => css`
    flex: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0;

    @media ${theme.breakpoints.mobileMax} {
      flex-direction: column;
      padding: 24px;
    }
  `}
`;

export const CardWrap = styled.div`
  ${({ theme }) => css`
    padding: 0;

    @media ${theme.breakpoints.mobileMax} {
      flex-direction: column;
      padding: 24px;
    }
  `}
`;
