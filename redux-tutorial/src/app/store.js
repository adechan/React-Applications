import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import userReducer from "../features/userSlice";

export default configureStore({
  // it has 2 slices
  reducer: {
    counter: counterReducer,
    user: userReducer,
  },
});
