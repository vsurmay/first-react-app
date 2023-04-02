import { configureStore } from "@reduxjs/toolkit";
import reducerDish from "./reducers/reducerDish";
import reduceeRecipes from "./reducers/reducerRecipes";

export default configureStore({
  reducer: {
    recipe: reduceeRecipes,
    dish: reducerDish,
  },
});
