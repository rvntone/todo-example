import React from 'react';
export const TodoContext = React.createContext({
  list: [],
  addNewTask: () => {},
  changeStatus: () => {},
  removeTask: () => {},
});
