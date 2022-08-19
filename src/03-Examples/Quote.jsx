import { useLayoutEffect, useRef, useState } from "react";

export const Quote = ({ quote, author }) => {
  const pRef = useRef();

  const [boxSize, setBoxSize] = useState({});
  useLayoutEffect(() => {
    const { width, height } = pRef.current.getBoundingClientRect();
    setBoxSize({ width, height });
  }, []);
  return (
    <>
      <blockquote
        className="blockquote text-end"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <p className="mb-3" ref={pRef}>
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>
      <code className="d-block text-center">{JSON.stringify(boxSize)}</code>
    </>
  );
};
