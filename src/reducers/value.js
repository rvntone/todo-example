import { TEST_ACTION, TEST_ACTION1, TEST_ACTION2 } from '../actions/types/test';

const initialState = 10;

const reducer = (state = initialState, action) => {
  if (action === undefined || action.type === undefined) {
    return state;
  }
  switch (action.type) {
    case TEST_ACTION:
      return action.payload;
    case TEST_ACTION1:
    case TEST_ACTION2:
      return 0;
    case 'CLEAR_ALL':
      return initialState;
    default:
  }
  return state;
};
export default reducer;
