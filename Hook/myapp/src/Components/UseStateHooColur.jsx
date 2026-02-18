import React, { useState } from "react";

const Me = () => {
  const [name, setName] = useState("Vishal");
  const [clr, setColur] = useState("blue");
  return (
    <>
      <h2 style={{ color: clr }}>Name: {name}</h2>
      <button
        onClick={() => {
          setName("Ashok ");
          setColur("Red");
        }}
      >
        Change Name
      </button>
    </>
  );
};

export default Me;
