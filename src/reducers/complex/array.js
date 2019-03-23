const initialState = [1, 2, 3, 4, 5];

const reducer = (state = initialState, action) => {
  if (action === undefined || action.type === undefined) {
    return state;
  }
  switch (action.type) {
    case 'ADD_VALUE_AT_THE_END': {
      const { value } = action.payload;
      return [...state, value];
    }
    case 'ADD_VALUE_AT_POSTION': {
      const { position, value } = action.payload;
      return [...state.slice(0, position), value, ...state.slice(position)];
    }
    case 'REPLACE': {
      const { position, value } = action.payload;
      return [...state.slice(0, position), value, ...state.slice(position + 1)];
    }

    case 'REMOVE_VALUE': {
      const { position } = action.payload;
      return [...state.slice(0, position), ...state.slice(position + 1)];
    }

    case 'SORT': {
      return [...state].sort();
    }

    case 'CLEAR':
      return [...initialState];

    case 'REPLACE_COMPLETE': {
      return action.payload.array;
    }

    default:
  }
  return state;
};
export default reducer;
