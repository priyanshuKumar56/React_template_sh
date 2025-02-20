import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { CardDemo } from "./Pages/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CardDemo />
    </>
  );
}

export default App;
