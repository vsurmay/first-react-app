import {
  ADED_DISH,
  DELETE_DISH,
  DISH_ERROR,
  DISH_LOADER,
  GET_DISH,
} from "../types";

const defaultValue = {
  data: [],
  loader: false,
  error: null,
};

const reducerDish = (state = defaultValue, action) => {
  switch (action.type) {
    case GET_DISH:
      return { ...state, data: action.payload };

    case DISH_ERROR:
      return { ...state, error: action.payload };

    case DISH_LOADER:
      return { ...state, loader: action.payload };

    // case ADED_DISH:
    //   return { ...state, data: [...state.data, action.payload] };

    // case DELETE_DISH:
    //   return {
    //     ...state,
    //     data: state.data.filter((el) => el.id !== action.payload),
    //   };

    default:
      console.log("DEFAULT!!!!!!!!!!!!");
      return state;
  }
};

export default reducerDish;
