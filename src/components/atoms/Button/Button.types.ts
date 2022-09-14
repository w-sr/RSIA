import type { ButtonHTMLAttributes } from "react";

export type ButtonRef = HTMLButtonElement;

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  width?: string;
  loading?: boolean;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
};
