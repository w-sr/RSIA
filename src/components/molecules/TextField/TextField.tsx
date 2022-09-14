import { forwardRef } from "react";
import { TextFieldProps, TextFieldRef } from "./TextField.types";
import * as S from "./TextField.styles";

const TextField = forwardRef<TextFieldRef, TextFieldProps>(
  ({ label, helper, ...props }, ref) => {
    return (
      <S.TextField>
        <S.Label>{label}</S.Label>
        <S.InputWrap>
          <S.Input ref={ref} {...props} />
          {helper && <S.HelperText>{helper}</S.HelperText>}
        </S.InputWrap>
      </S.TextField>
    );
  }
);

TextField.displayName = "TextField";

export { TextField };
