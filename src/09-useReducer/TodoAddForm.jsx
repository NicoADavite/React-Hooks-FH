import { useForm } from "../hooks/useForm";

export const TodoAddForm = ({ handleAddTodo }) => {
  const { title, handleChange, handleReset } = useForm({ title: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if ( title.length < 2 ) return; 

    const newTodo = {
      id: new Date().getTime(),
      title,
      done: false,
    };

    handleAddTodo(newTodo);
    handleReset()
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="¿Qué hay que hacer?"
        className="form-control"
        name="title"
        value={title}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn-primary form-control mt-3">
        Agregar Todo
      </button>
    </form>
  );
};
