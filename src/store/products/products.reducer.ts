import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "../../models/products";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    loading: false,
    error: "",
    products: [] as Product[],
  },
  reducers: {
    getProducts: (state, _) => {
      state.products = [];
      state.loading = true;
      state.error = "";
    },
    getProductsSuccess: (state, action: PayloadAction<Product[]>) => {
      let fixedProduct = action.payload
        .filter((product: Product) => product.type === "FIXED")
        .sort((a: Product, b: Product) =>
          a.bestRate > b.bestRate ? 1 : -1
        )[0];

      if (fixedProduct) state.products.push(fixedProduct);

      let variableProduct = action.payload
        .filter((product: Product) => product.type === "VARIABLE")
        .sort((a: Product, b: Product) =>
          a.bestRate > b.bestRate ? 1 : -1
        )[0];
      if (variableProduct) state.products.push(variableProduct);

      state.loading = false;
    },
    getProductsFailure: (state, _) => {
      state.products = [];
      state.loading = false;
      state.error = "Products not found";
    },
  },
});

export const { getProductsSuccess } = productsSlice.actions;

export default productsSlice.reducer;
