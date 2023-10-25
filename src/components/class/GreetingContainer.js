import React, { useState } from "react";
import Greeting from "./Greeting.js";

function GreetingContainer() {
  const [name, setName] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div>
      <label htmlFor="">Enter your name: </label>
      <input
        type="text"
        name=""
        id=""
        onChange={(e) => handleName(e)}
        value={name}
      />
      <Greeting name={name}></Greeting>
    </div>
  );
}

export default GreetingContainer;
