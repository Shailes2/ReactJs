import React, { useState } from "react";

const UseStateHook = () => {
  const [data, setData] = useState("sanket ");
  console.log(data);

  return (
    <>
      <center>
        <h2>Name: {data}</h2>
        <button
          onClick={() => {
            setData("Shailesh ");
          }}
        >
          Change Data
        </button>
      </center>
    </>
  );
};

export default UseStateHook;
