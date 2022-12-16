// import logo from "./logo.svg";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import TextForm from "./components/TextForm";

function App() {
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
      />
      <div className="container my-2">
        <TextForm heading="Enter Your Text" />
        <About />
      </div>
    </>
  );
}

export default App;
