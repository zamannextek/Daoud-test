import { useState } from "react";

const Learning = () => {
  const [count, setCount] = useState(0);

  function CountUpdate() {
    const ncount = count + 1;
    setCount(ncount);
  }
  const CountDec = () => {
    setCount(count - 1);
  };
  const CountAdd2 = () => {
    setCount((prv) => prv + 2);
  };
  return (
    <div>
      <button onClick={() => setCount((prv) => prv - 2)}>-2</button>
      <button onClick={() => CountDec()}>-</button>
      {count}
      <button onClick={() => CountUpdate()}>+</button>
      <button onClick={() => CountAdd2()}>+2</button>
       <button onClick={()=>setCount((prv) => prv + 3)}>+3</button>
    </div>
  );
};

export default Learning;
