import React, { useState } from "react";

const UseStateHook2 = () => {
  const [name, setName] = useState("SHAILESH");

  return (
    <>
      <h2>Name: {name}</h2>

      <button
        onClick={() => {
          setName("THORAT ");
        }}
      >
        Change Name
      </button>
    </>
  );
};

export default UseStateHook2;
