import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(1);

  function increment() {
    let result = count + 1;
    setCount(result);
  }

  function decrement() {
    if (count > 0) {
      let result = count - 1;
      setCount(result);
    }
  }

  return (
    <div>
      <button style={{ width: "20px", background: "" }} onClick={decrement}>
        -
      </button>
      <input
        style={{
          width: 40,
          height: 20,
          margin: "0px 8px",
          textAlign: "center",
        }}
        value={count}
        onChange={(e) => {
          let value = e.target.value;
          setCount(Number(value));
        }}
      />
      <button style={{ width: "20px" }} onClick={increment}>
        +
      </button>
    </div>
  );
}
