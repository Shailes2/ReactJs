import React, { useState } from "react";

const ExmpleuseState = () => {
  const [data, setData] = useState({
    name: "sagar ",
    phone: "8329075116",
    email: " sagar@gmail.com ",
  });

  return (
    <>
      <h2>Name: {data.name}</h2>
      <h2>Phone: {data.phone}</h2>
      <h2>Email: {data.email}</h2>

      <button
        onClick={() => {
          setData({
            name: "Vishal",
            phone: "7887367375",
            email: "vishalthorat@gmail.com",
          });
        }}
      >
        Update
      </button>
    </>
  );
};

export default ExmpleuseState;
