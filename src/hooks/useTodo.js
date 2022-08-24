import { useEffect, useReducer } from "react";

import { todoReducer } from "../09-useReducer/todoReducer";

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodo = (initialState) => {
  const [todos, dispatch] = useReducer(todoReducer, initialState = [], init);
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos) || []);
  }, [todos]);
  
  const totalCount = todos.length;
  
  const pendingCount = todos.filter( todo => !todo.done).length; 

  const handleAddTodo = (todo) => {
    const addAction = {
      type: "[TODO] Add Todo",
      payload: todo,
    };

    dispatch(addAction);
  };

  const handleDeleteTodo = (id) => {
    const deleteAction = {
      type: "[TODO] Remove Todo",
      payload: id,
    };
    dispatch(deleteAction);
  };

  const handleToggleTodo = (id) => {
    const toggleAction = {
      type: "[TODO] Toggle Todo",
      payload: id,
    };
    dispatch(toggleAction);
  };


  return {
    todos,
    totalCount,
    pendingCount,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo
  };
};
