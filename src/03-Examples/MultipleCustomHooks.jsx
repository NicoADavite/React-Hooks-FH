import { useCounter, useFetch } from "../hooks";
import { LoadingQuote } from "./LoadingQuote";
import { Quote } from "./Quote";

export const MultipleCustomHooks = () => {
  const { counter, handleAdd, handleReset, handleSubtraction } = useCounter(1);

  const url = `https://www.breakingbadapi.com/api/quotes/${counter}`;
  const { data, isLoading, hasErrors } = useFetch(url);

  const { quote, author } = !!data && data[0];

  return (
    <div>
      <h1 className="text-center">Breaking Bad Quotes</h1>
      <hr />
      <h4 className="text-center mb-5">Quote Number: {counter}</h4>
      {isLoading ? <LoadingQuote /> : <Quote {...{ quote, author }} />}
      <div className="d-flex justify-content-center mt-5">
        <button
          className="btn btn-primary"
          onClick={() => handleAdd(1)}
          disabled={isLoading}
        >
          Next Quote
        </button>
        <button
          className="btn btn-primary"
          onClick={() => counter > 1 && handleSubtraction(1)}
          disabled={isLoading || counter < 2}
        >
          Last Quote
        </button>
        <button
          className="btn btn-primary"
          onClick={handleReset}
          disabled={isLoading || counter < 2}
        >
          Go Back To First Quote
        </button>
      </div>
    </div>
  );
};
