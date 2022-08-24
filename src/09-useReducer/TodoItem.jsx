export const TodoItem = ({ todo, handleDeleteTodo, handleToggleTodo }) => {
  return (
    <li
      className="list-group-item py-3 d-flex justify-content-between align-items-center"
      key={todo.id}
    >
      <div className="d-flex align-items-center">
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            onClick={() => handleToggleTodo(todo.id)}
            defaultChecked={todo.done}
          />
        </div>
        <span className={`ms-4 ${todo.done ? "text-decoration-line-through" : ""}`}>
          {todo.title}
        </span>
      </div>

      <button
        className="btn btn-danger"
        onClick={() => handleDeleteTodo(todo.id)}
      >
        Borrar
      </button>
    </li>
  );
};
