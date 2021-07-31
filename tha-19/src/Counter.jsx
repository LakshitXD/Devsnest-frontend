import { useState } from "react";

const Counter = () => {
  const [num, setNum] = useState(0);
  return (
    <button
      className="btnxd"
      onClick={() => {
        setNum(num + 1);
      }}
    >
      {num}
    </button>
  );
};

export default Counter;
