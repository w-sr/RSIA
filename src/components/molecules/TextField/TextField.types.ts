import type { InputHTMLAttributes } from "react";

export type TextFieldRef = HTMLInputElement;

export type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & {
  helper?: string;
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLElement>) => void;
};
