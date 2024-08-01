import React from "react";
function ReactElement() {
  return (
    <>
      {/* //heading and paragraph testing */}
      <h1>Hello , I Am Heading</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, rem non
        beatae suscipit vel maxime cupiditate unde explicabo adipisci aliquid!
      </p>
      <br />
      <br />
      {/* //image tag testing */}
      <img
        src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?t=st=1722529476~exp=1722533076~hmac=d16034d719e2c68b714d5d8aa6254412273a06e2f0e870a22104b95e554e8139&w=996"
        alt="img-testing"
        title="img-testing"
        style={{ height: "100px", width: "100px" }}
      />
      <br />
      <br />

      {/* //anchor tag testing */}
      <a href="https://google.com">click here for more information</a>
      <br />
      <br />

      {/* //table testing */}
      <table border={1}>
        <tr>
          <th>id</th>
          <th>name</th>
        </tr>
        <tr>
          <th>1</th>
          <th>utsav</th>
        </tr>
      </table>
      <br />
      <br />
      {/* list testing */}
      <ul>
        <li data-testid="utsav">utsav</li>
        <li data-testid="utsav">vicky</li>
        <li data-testid="utsav">ashish</li>
      </ul>
    </>
  );
}

export default ReactElement;
