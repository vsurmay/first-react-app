function receptsReducer(state, action) {
  switch (action.type) {
    case "get": {
      return action.recepts;
    }

    case "aded": {
      return [...state, action.newVarDish];
    }

    case "delete": {
      return state.filter((el) => el.id !== action.idDelete);
    }

    default: {
      return state;
    }
  }
}

export default receptsReducer;
