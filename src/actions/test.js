import { TEST_ACTION } from './types/test';

export const testAction = number => {
  //...
  return {
    type: TEST_ACTION,
    payload: number,
  };
};

// export const setAccountName = (name) => {
//     return {
//         type: SET_ACCOUNT_NAME,
//         payload: name,
//     }
// }

// export const getAccountName = () => {
//     const name = getFromAPI();
//     return {
//         type: SET_ACCOUNT_NAME,
//         payload: name,
//     }
// }
