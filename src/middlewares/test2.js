export default store => next => async action => {
  const newAction = { ...action };
  const { isACall } = action;
  if (!isACall) {
    return next(newAction);
  }
  newAction.newPayload = 22222;
  return await call(store, action);
};

const call = async (store, action) => {
  const { dispatch, getState } = store;
  const token = getState().user.token;
  const { url, method, action1, action2, action3 } = action;
  if (typeof action1 === 'function') {
  } else {
    dispatch({
      type: action1,
    });
  }
  let response;
  try {
    response = await fetch(url, { method });
  } catch (error) {
    return dispatch({
      type: action3,
      payload: 'ERRROR',
    });
  }
  let data;
  try {
    data = await response.json();
  } catch (error) {
    return dispatch({
      type: action3,
      payload: 'ERRROR',
    });
  }
  return dispatch({
    type: action2,
    payload: data,
  });
};
