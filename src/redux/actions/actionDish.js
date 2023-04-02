import axios from "axios";
import {
  ADED_DISH,
  DELETE_DISH,
  DISH_ERROR,
  DISH_LOADER,
  GET_DISH,
} from "../types";

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

export const addDish = (newDish) => {
  return (dispatch) => {
    axios.post("http://localhost:3004/items", newDish).then((response) =>
      dispatch({
        type: ADED_DISH,
        payload: response.data,
      })
    );
  };
};

export const deleteDish = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3004/items/${id}`).then((response) =>
      dispatch({
        type: DELETE_DISH,
        payload: id,
      })
    );
  };
};
