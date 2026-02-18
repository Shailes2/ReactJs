import React, { useState } from "react";

const useState = () => {
  // Name state
  const [data, setData] = useState("Shailesh ");

  // Counter state
  const [count, setCount] = useState(0);

  return (
    <center>
      <h2>Name: {data}</h2>
      <button onClick={() => setData("Shreya")}>Change Name</button>

      <hr />

      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increment</button>

      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrement
      </button>

      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
    </center>
  );
};

export default useState;
