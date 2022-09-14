import { useTranslation } from "react-i18next";
import * as S from "./LanguageSwitcher.styles";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <S.LanguageSwitcher>
      <S.Select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
      >
        <S.Option value="en">English</S.Option>
        <S.Option value="fr">Français</S.Option>
      </S.Select>
    </S.LanguageSwitcher>
  );
};

LanguageSwitcher.displayName = "LanguageSwicher";

export { LanguageSwitcher };
