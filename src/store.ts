// redux store file.

import { configureStore } from "@reduxjs/toolkit";
import mobileReducer from "./slice/mobileSlice";
export const store = configureStore({
  reducer: {
    mobile: mobileReducer
  }
});
