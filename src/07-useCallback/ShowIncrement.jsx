import React from "react";
export const ShowIncrement = React.memo(({handleAdd}) => {
    console.log("me volví a renderizar");
  return (
    <button className="btn btn-info" onClick={() => handleAdd(5)}>
        Incrementar
    </button>
  )
})
