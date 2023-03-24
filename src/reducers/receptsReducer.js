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

    case "deleteRecept": {
      const newState = state.filter((el) => el.id !== action.id);
      newState.push(action.newData);
      return newState;
    }

    default: {
      return state;
    }
  }
}

export default receptsReducer;
