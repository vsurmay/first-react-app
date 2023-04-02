import axios from "axios";
import { DISH_ERROR, DISH_LOADER, GET_DISH } from "../types";

export const getDish = () => {
  return (dispatch) => {
    dispatch({
      type: DISH_LOADER,
      payload: true,
    });

    axios
      .get("http://localhost:3004/items")
      .then((response) =>
        dispatch({
          type: GET_DISH,
          payload: response.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: DISH_ERROR,
          payload: err,
        })
      )
      .finally(() =>
        dispatch({
          type: DISH_LOADER,
          payload: false,
        })
      );
  };
};
