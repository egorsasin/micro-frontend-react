import React from "react";

const Counter = React.lazy(() => import("mf1/Counter"));
const Wrapper = React.lazy(() => import("mf2/Wrapper"));

function App() {
  return (
    <div className="App">
      <React.Suspense fallback="Loading Button">
        <Counter />
        <Wrapper />
      </React.Suspense>
    </div>
  );
}

export default App;
