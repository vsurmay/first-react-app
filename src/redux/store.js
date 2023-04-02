import { configureStore } from "@reduxjs/toolkit";
import reducerPages from "./reducers/reducerPages";

configureStore({
  reducer: {
    pages: reducerPages,
  },
});

export default configureStore;
