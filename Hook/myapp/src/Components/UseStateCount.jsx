import React, { useState } from "react";

const UseStateCount = () => {
  const [cnt, increment] = useState(0);
  return (
    <>
      <h2> Count : {cnt}</h2>
      <button
        onClick={() => {
          increment(cnt + 1);
        }}
      >
        increment
      </button>
    </>
  );
};

export default UseStateCount;
