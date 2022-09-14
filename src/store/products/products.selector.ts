import { createSelector } from "@reduxjs/toolkit";
import { State } from "../../models/state";

const selectProductsState = (state: State) => state.products;

// export const { selectById } = productsAdapter.getSelectors(selectProductsState);

export const selectProducts = createSelector(
  selectProductsState,
  (productsState) => productsState.products
);

// export const selectProductsById = createSelector(
//   selectById,
//   (productsState) => productsState
// );

export const selectProductsLoading = createSelector(
  selectProductsState,
  (productsState) => productsState.loading
);

export const selectProductsError = createSelector(
  selectProductsState,
  (productsState) => productsState.error
);
