import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  //text variable is updated using setText function using Hooks, i.e. useState
//   setText("new Text");
  return (
    <div>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <label htmlFor="myBox" className="form-label">
          Text Box
        </label>

        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="myBox"
          value={text}
        ></textarea>
      </div>
      <button className="btn btn-primary">Convert To Uppercase</button>
    </div>
  );
}
