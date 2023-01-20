import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { add, decrement, increment } from "../store/Slice";
import { useSelector } from "react-redux";

const Home = () => {
  const [inputData, setInputData] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(add(inputData));
  };

  return (
    <div className="container1">
      <div className="inputStyle">
        <input type="text" onChange={(e) => setInputData(e.target.value)} />
        <input type="submit" onClick={() => handleAdd()} />
      </div>
      <div className="buttonStyle">
        <div>
          <button
            className="div1"
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
          >
            Increment
          </button>
          <button
            aria-label="Increment value"
            onClick={() => dispatch(decrement())}
          >
            decrement
          </button>
        </div>
        <AddedItems />
      </div>
    </div>
  );
};

export default Home;

const AddedItems = () => {
  const count = useSelector((state) => state.counter.value);
  const inputText = useSelector((state) => state.counter.myVal);
  return (
    <>
      <div>{count}</div>
      <div> {inputText}</div>
    </>
  );
};
