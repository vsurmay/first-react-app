import { SWITCH_PAGE } from "../types";

export const switchPage = (page, data) => {
  return {
    type: SWITCH_PAGE,
    payload: {
      data,
      page,
    },
  };
};
