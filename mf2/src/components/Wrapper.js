import React from "react";

const Counter = React.lazy(() => import("mf1/Counter"));

function Wrapper() {
  return (
    <div>
      <h3>MF1 Component Wrapper</h3>
      <React.Suspense fallback="Loading...">
        <Counter />
      </React.Suspense>
    </div>
  );
}

export default Wrapper;
