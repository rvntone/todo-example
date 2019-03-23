const initialState = {
  name: '',
  lastName: '',
  middleName: '',
  numbers: [],
};

const reducer = (state = initialState, action) => {
  if (action === undefined || action.type === undefined) {
    return state;
  }
  switch (action.type) {
    case 'REPLACE_COMPLETE': {
      const { array } = action.payload;
      const newArray = [...array];
      newArray.sort();
      return { ...state, numbers: newArray };
    }
    case 'SET_NAME':
      return { ...state, name: action.payload };
    case 'SET_LASTNAME':
      return { ...state, lastName: action.payload };
    case 'CLEAR_ALL':
      return { ...initialState };
    default:
  }
  return state;
};
export default reducer;
