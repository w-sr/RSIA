import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Wrap = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 0 24px;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    @media ${theme.breakpoints.laptop} {
      width: 1024px;
    }
  `}
`;

export const NavWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrap = styled(Link)``;

export const Image = styled.img`
  ${({ theme }) => css`
    margin-top: 24px;
    width: 200px;

    @media ${theme.breakpoints.mobileMax} {
      width: 120px;
    }
  `}
`;
