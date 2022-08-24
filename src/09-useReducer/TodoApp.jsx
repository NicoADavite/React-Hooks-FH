import { TodoAddForm } from "./TodoAddForm";
import { TodoList } from "./TodoList";

import { useTodo } from "../hooks";

export const TodoApp = () => {
  const {
    todos,
    totalCount,
    pendingCount,
    handleAddTodo,
    handleDeleteTodo,
    handleToggleTodo,
  } = useTodo();

  return (
    <div>
      <div className="container mb-5">
        <h1 className="text-center display-3">
          <b>TODO APP</b>
        </h1>
        <br />
        <h2>
          Total: {totalCount} / Pendientes: {pendingCount}
        </h2>
        <hr />
      </div>
      <div className="row d-flex justify-content-around">
        <div className="col-5">
          <TodoList
            {...{ pend: true, todos, handleDeleteTodo, handleToggleTodo }}
          />
          <TodoList {...{ todos, handleDeleteTodo, handleToggleTodo }} />
        </div>
        <div className="col-5">
          <h2 className="text-center">Agregar Nuevo Todo</h2>
          <br />
          <TodoAddForm {...{ handleAddTodo }} />
        </div>
      </div>
    </div>
  );
};
