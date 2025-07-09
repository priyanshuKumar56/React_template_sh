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
    </>
  );
}

export default App;
