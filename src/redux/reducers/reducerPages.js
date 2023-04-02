import { SWITCH_PAGE } from "../types";
import Page from "../../Pages/Page/Page";

const defaultValue = {
  page: "Page",
  data: [],
};

const reducerPages = (state = defaultValue, action) => {
  switch (action.type) {
    case SWITCH_PAGE:
      return { ...state, page: action.payload.page, data: action.payload.data };

    default:
      return state;
  }
};

export default reducerPages;
