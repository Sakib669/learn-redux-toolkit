import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="p-10 rounded-2xl mx-auto w-3/4 items-center justify-center my-10 text-center space-y-10 bg-base-300">
        <p className="text-2xl font-bold">Count {count}</p>
        <div className="flex items-center space-x-5 justify-center">
          <button
            className="btn btn-info "
            onClick={() => setCount((count) => count + 1)}
          >
            increase
          </button>
          <button
            className="btn btn-info "
            onClick={() => setCount((count) => count - 1)}
          >
            decrease
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
