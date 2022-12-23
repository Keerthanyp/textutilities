import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here ");
  //text variable is updated using setText function using Hooks, i.e. useState
  // text ="new Text"; wrong way to update any variable
  //setText("new text"); correct way to change the state

  const handleUpClick = () => {
    // console.log("upper case was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase!", "success");
  };

  //if event is used then it should be placed as parameter
  const handleOnChange = (event) => {
    // console.log("Text was entered");
    setText(event.target.value);
  };

  const handleLowClick = () => {
    // console.log("lowercase was clicked "+text);
    let lowText = text.toLowerCase();
    setText(lowText);
    props.showAlert("Converted to Lowercase!", "success");
  };

  //repeat the text
  const handleRepClick = () => {
    let repText = text.repeat(2);
    setText(repText);
    props.showAlert("Text was repeated!", "success");
  };

  //remove extra spaces
  const handleExtraSpaces = () => {
    let txt = text.split(/[ ]+/);
    setText(txt.join(" "));
    props.showAlert("Extra spaces was removed!", "success");
  };

  //copy the text entered
  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
    props.showAlert("Text was Copied!", "success");
  };

  const handleClearClick = () => {
    // console.log("clear text was clicked");
    setText("");
    props.showAlert("Text was cleared!", "danger");
  };
  return (
    <>
      {/* using style inside div with 2{{  }}, 1 for js and another for object */}
      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h2>{props.heading}</h2>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            value={text}
            onChange={handleOnChange}
            style={{
              color: props.mode === "dark" ? "white" : "black",
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLowClick}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleRepClick}>
          Repeat Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{
          color: props.mode === "dark" ? "white" : "black",
        }}
      >
        <h3>Your text summary</h3>
        <p>
          Words= {text.split(" ").length - 1} and Text length= {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read the text summary</p>
        <br></br>
        <h3>Preview </h3>
        <h5>
          {text.length > 0
            ? text
            : "Enter something in the text box above to preview it here"}
        </h5>
      </div>
    </>
  );
}
