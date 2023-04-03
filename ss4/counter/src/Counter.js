import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  const increaseNumberOne = () => {
    setNumber((prevState) => prevState + 1);
  };

  const increaseNumberTwo = () => {
    setNumber((prevState) => prevState + 2);
  };

  return (
    <>
      <h2>{number}</h2>
      <button onClick={() => increaseNumberOne()}>Add 1</button>
      <button onClick={increaseNumberTwo}>Add 2</button>
    </>
  );
}

export default Counter;
