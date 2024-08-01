import React from "react";

function Input() {
  return (
    <div
      style={{
        margin: "200px 0px",
        border: "1px solid black",
      }}
    >
      <label htmlFor="username">userName</label>
      <input
        type="text"
        name="username"
        id="username"
        placeholder="enter your name"
      />
      <br />
      <br />
      <label htmlFor="course">select course</label>
      <select id="course">
        <option value="react">react</option>
        <option value="node">node</option>
        <option value="mongodb">mongodb</option>
        <option value="jest">Jest</option>
      </select>
      <br />
      <br />
      Male
      <input type="radio" name="gender" id="male" value="male" />
      Female
      <input type="radio" name="gender" id="female" value="female" />
      Other
      <input type="radio" name="gender" id="other" value="other" />
      <br />
      <br />
      <button>submit</button>
    </div>
  );
}

export default Input;
