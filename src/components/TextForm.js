import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here ");
  //text variable is updated using setText function using Hooks, i.e. useState
  // text ="new Text"; wrong way to update any variable

  const handleUpClick = () => {
    // console.log("upper case was clicked" +text);
    let newText = text.toUpperCase();
    setText(newText);
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
  };

  //repeat the text
  const handleRepClick = () => {
    let repText = text.repeat(2);
    setText(repText);
  };

  //remove extra spaces
  const handleExtraSpaces = () => {
    let txt = text.split(/[ ]+/);
    setText(txt.join(" "));
  };

  //copy the text entered
  const handleCopyText = () => {
    var text = document.getElementById("myBox");
    text.select();
    text.setSelectionRange(0, 9999);
    navigator.clipboard.writeText(text.value);
  };

  const handleClearClick = () => {
    // console.log("clear text was clicked");
    setText("");
  };
  return (
    <>
      <div>
        <div className="mb-3">
          <label htmlFor="myBox" className="form-label">
            <h2>{props.heading}</h2>
          </label>

          <textarea
            className="form-control"
            placeholder="Leave a comment here"
            id="myBox"
            value={text}
            onChange={handleOnChange}
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
          Extra Spaces
        </button>
        <button className="btn btn-primary mx-1" onClick={handleCopyText}>
          Copy Text
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your text summary</h3>
        <p>
          Words= {text.split(" ").length} and Text length= {text.length}{" "}
          characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read the text summary</p>
        <br></br>
        <h3>Preview </h3>
        <h5>{text}</h5>
      </div>
    </>
  );
}
