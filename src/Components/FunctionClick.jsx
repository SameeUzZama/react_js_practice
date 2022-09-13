import React from "react";

const FunctionClick = () => {
  const clickHandle = () => {
    console.log("button clicked");
  };
  return (
    <div>
      <button onClick={clickHandle}>Click</button>
    </div>
  );
};

export default FunctionClick;
