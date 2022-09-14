import styled, { css } from "styled-components";

export const StyledWrapper = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const StyledBackground = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    background-color: ${theme.colors.black};
    opacity: 0.2;
  `}
`;
