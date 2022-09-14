import { MainLayoutProps } from "./MainLayout.types";
import * as S from "./MainLayout.styles";
import { LanguageSwitcher } from "../../atoms/LanguageSwitcher/LanguageSwitcher";

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <S.Wrap>
      <S.NavWrap>
        <S.LogoWrap to="/dashboard">
          <S.Image src="/logo.png" />
        </S.LogoWrap>
        <LanguageSwitcher />
      </S.NavWrap>
      {children}
    </S.Wrap>
  );
};

export default MainLayout;
