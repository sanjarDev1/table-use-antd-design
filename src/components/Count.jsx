import React, { useState } from "react";

const Count = () => {
  const [state, setstate] = useState(0);
  return (
    <div className="d-flex">
      <button
        className="btn btn-dark text-white "
        onClick={() => setstate(state + 1)}
      >
        +
      </button>
      <h3 >{state}</h3>
      <button
        className="btn btn-dark text-white"
        onClick={() => setstate(state - 1)}
      >
        -
      </button>
    </div>
  );
};

export default Count;
