import { StyledBackground, StyledWrapper } from "./Indicator.styles";
import { IndicatorProps } from "./Indicator.types";
import { Spinner } from "@styled-icons/evil";

const Indicator = ({ loading }: IndicatorProps) =>
  loading ? (
    <StyledWrapper>
      <StyledBackground />
      <Spinner width={40} height={40} />
    </StyledWrapper>
  ) : (
    <></>
  );

Indicator.displayName = "Indicator";

export { Indicator };
