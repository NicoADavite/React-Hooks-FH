import { TodoItem } from "./TodoItem";

export const TodoList = ({
  pend,
  todos,
  handleDeleteTodo,
  handleToggleTodo,
}) => {
  return (
    <div className="mb-5">
      <h3 className="mb-4">{pend ? "Pendientes" : "Completados"}</h3>
      <ul className="list-group">
        {todos.map((todo) =>
          pend
            ? !todo.done && (
                <TodoItem
                  key={todo.id}
                  {...{ todo, handleDeleteTodo, handleToggleTodo }}
                />
              )
            : todo.done && (
                <TodoItem
                  key={todo.id}
                  {...{ todo, handleDeleteTodo, handleToggleTodo }}
                />
              )
        )}
      </ul>
    </div>
  );
};
