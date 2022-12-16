// import logo from "./logo.svg";
import "./App.css";
// import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
// import TextForm from "./components/TextForm";

function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
      <Navbar
        title="TextUtils"
        aboutText="About textUtils"
        disabled="Text Disabled"
        mode={mode}
        toggleMode={toggleMode}
      />
      <div className="container my-2">
        <TextForm heading="Enter Your Text" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
