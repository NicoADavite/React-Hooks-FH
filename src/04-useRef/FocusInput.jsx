import { useRef } from "react";

export const FocusInput = () => {
  const inputRef = useRef();

  const handleClick =  () => {
      inputRef.current.value = "";
      inputRef.current.select();
  }
  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control mb-3"
      />
      <button className="btn btn-success form-control" onClick={handleClick}>
        Set Focus on Input
      </button>
    </div>
  );
};
