import * as S from "./Card.styles";
import { CardProps, CardEnum } from "./Card.types";

const Card = ({ name, type, rate, lender, width, children }: CardProps) => (
  <S.Card width={width}>
    <S.TitleWrap>
      <S.Title>{"Best " + CardEnum[type]}</S.Title>
      <S.Name>{"(" + name + ")"}</S.Name>
    </S.TitleWrap>
    <S.Rate>{rate + "%"}</S.Rate>
    <S.Lender>{lender}</S.Lender>
    {children && <S.Children>{children}</S.Children>}
  </S.Card>
);

Card.displayName = "Card";

export { Card };
