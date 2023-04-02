import {
  ADED_RECEPT,
  DELETE_RECEPT,
  GET_RECEPT,
  RECEPT_ERROR,
  RECEPT_LOADER,
} from "../types";

const defaultValue = {
  data: [],
  loader: false,
  error: null,
};

const reduceeRecipes = (state = defaultValue, action) => {
  switch (action.type) {
    case GET_RECEPT:
      return { ...state, data: action.payload };

    case RECEPT_ERROR:
      return { ...state, error: action.payload };

    case RECEPT_LOADER:
      return { ...state, loader: action.payload };

    case ADED_RECEPT:
      return { ...state, data: [...state.data, action.payload] };

    case DELETE_RECEPT:
      return {
        ...state,
        data: state.data.filter((el) => el.id !== action.payload),
      };

    default:
      console.log("DEFAULT!!!!!!!!!!!!");
      return state;
  }
};

export default reduceeRecipes;
