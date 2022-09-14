import { productsSlice } from "./products.reducer";

export function getProducts() {
  return productsSlice.actions.getProducts({});
}
