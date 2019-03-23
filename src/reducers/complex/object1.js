const initialState = {
  value: 1,
};

export default (state = initialState, action) => {
  if (action === undefined || action.type === undefined) {
    return state;
  }
  switch (action.type) {
    default:
  }
  return state;
};
