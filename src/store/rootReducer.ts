import { combineReducers } from "redux";
import products from "./products/products.reducer";
import applications from "./applications/applications.reducer";

const rootReducer = combineReducers({
  products,
  applications,
});

export default rootReducer;
