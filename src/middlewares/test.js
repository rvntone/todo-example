export default store => next => action => {
  //   const { dispatch } = store;
  //   if (action.type !== 'PARA_TODOS') {
  //     dispatch({ type: 'PARA_TODOS' });
  //   }
  //   return next(action);
  console.log('prev State', store.getState());
  const finalAction = next(action);
  console.log('finalAction', finalAction);
  console.log('State', store.getState());
};
