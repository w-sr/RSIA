import { CombinedState } from "redux";
import { ProductsState } from "./products";
import { ApplicationsState } from "./applications";

export type State = CombinedState<{
  products: ProductsState;
  applications: ApplicationsState;
}>;
