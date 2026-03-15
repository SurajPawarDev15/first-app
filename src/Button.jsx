import React from "react";
function Button(props) {
  return (
    <>
      <h1>Loading Button Component</h1>
      <button style={{ backgroundColor: props.color }}>
        {props.name} Button
      </button>
    </>
  );
}
export default Button;
