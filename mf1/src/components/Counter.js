import React from "react";

function Counter() {
  const style = {
    margin: "20px",
    padding: "10px",
    border: "1px solid blue",
  };

  return (
    <div style={style}>
      <div>MF2 Counter -</div>
      <button>Increase counter</button>
    </div>
  );
}

export default Counter;
