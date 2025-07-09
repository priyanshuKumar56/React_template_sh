import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import WelcomePage from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <WelcomePage
        name="Priyanshu"
        description="Welcome to my freelance project starter. Let's build something great!"
        onGetStarted={() => alert("Let’s go!")}
      />
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <div className="flex items-center gap-2 mb-4">
          <img src={viteLogo} className="logo" alt="Vite logo" />
          <img src={reactLogo} className="logo react" alt="React logo" />
        </div>
        <h1 className="text-2xl font-bold mb-4">Vite + React</h1>
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>
            count is {count}
          </button>
          <p>
            Edit <code>src/App.jsx</code> and save to test HMR
          </p>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}

export default App;
