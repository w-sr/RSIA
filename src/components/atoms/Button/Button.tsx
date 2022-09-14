import { forwardRef } from "react";

import { ButtonRef, ButtonProps } from "./Button.types";
import * as S from "./Button.styles";

const Button = forwardRef<ButtonRef, ButtonProps>(
  ({ loading, children, ...props }, ref) => {
    return loading ? (
      <S.ButtonLoading ref={ref} {...props}>
        {/* <CircularProgress thickness={4} size={24} /> */}
        <S.ButtonLabel>
          <span>{children}</span>
        </S.ButtonLabel>
      </S.ButtonLoading>
    ) : (
      <S.Button ref={ref} {...props}>
        {children}
      </S.Button>
    );
  }
);

Button.displayName = "Button";

export { Button };
