import { ReactNode } from "react";

export enum CardEnum {
  "VARIABLE" = "Variable",
  "FIXED" = "Fix",
}
export type CardProps = {
  type: "VARIABLE" | "FIXED";
  name: string;
  rate: number;
  lender: string;
  width?: string;
  children?: ReactNode;
};
