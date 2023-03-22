function receptsReducer(state, action) {
  switch (action.type) {
    case "get": {
      return action.recepts;
    }

    default: {
      return state;
    }
  }
}

export default receptsReducer;
