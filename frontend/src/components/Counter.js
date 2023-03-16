import { Button } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseCounter,
  increaseCounter,
  removeCounter,
} from "../store/slices/Counter";

const Counter = () => {
  const dispatch = useDispatch();

  const plusClick = () => {
    dispatch(increaseCounter());
  };

  const minusClick = () => {
    dispatch(decreaseCounter());
  };
  const clearClick = () => {
    dispatch(removeCounter());
  };

  const count = useSelector((state) => state.counter.value);
  return (
    <div>
      <div
        style={{ display: "flex", flexDirection: "column", padding: "2rem" }}
      >
        <h3>Counter : {count}</h3>
        <>
          <Button onClick={plusClick}>+</Button>
          <Button onClick={minusClick}>-</Button>
        </>
        <Button onClick={clearClick}>clear counter</Button>
      </div>
    </div>
  );
};

export default Counter;
