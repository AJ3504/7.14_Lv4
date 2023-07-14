import { configureStore } from "@reduxjs/toolkit";
import contentsSlice from "redux/modules/contentsSlice";
import userSlice from "redux/modules/userSlice";
import { composeWithDevTools } from "redux-devtools-extension";

//ASIS
// const rootReducer = combineReducers({
//   content: content,
// });
// const store = configureStore(rootReducer);

//TODO

const store = configureStore({
  reducer: {
    contentsSlice: contentsSlice,
    userSlice: userSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
