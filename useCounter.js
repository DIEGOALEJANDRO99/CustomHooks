import { useState } from "react";

export const useCounter = (initialState = 10) => {
  const [state, setstate] = useState(initialState);
  console.log(state);
  const increment = () => {
    setstate(state + 1);
  };
  const decrement = () => {
    setstate(state - 1);
  };
  const reset = () => {
    setstate(initialState);
  };

  return {
    state,
    decrement,
    increment,
    reset,
  };
};
