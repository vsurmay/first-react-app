import axios from "axios";
import {
  ADED_RECEPT,
  DELETE_RECEPT,
  GET_RECEPT,
  RECEPT_ERROR,
  RECEPT_LOADER,
} from "../types";

export const getRecept = () => {
  return (dispatch) => {
    dispatch({
      type: RECEPT_LOADER,
      payload: true,
    });

    axios
      .get("http://localhost:3004/recipes")
      .then((response) =>
        dispatch({
          type: GET_RECEPT,
          payload: response.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: RECEPT_ERROR,
          payload: err,
        })
      )
      .finally(() =>
        dispatch({
          type: RECEPT_LOADER,
          payload: false,
        })
      );
  };
};

export const adedRecept = (newRecept) => {
  return (dispatch) => {
    axios.post("http://localhost:3004/recipes", newRecept).then((response) =>
      dispatch({
        type: ADED_RECEPT,
        payload: response.data,
      })
    );
  };
};

export const deleteRecept = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:3004/recipes/${id}`).then((response) =>
      dispatch({
        type: DELETE_RECEPT,
        payload: id,
      })
    );
  };
};
