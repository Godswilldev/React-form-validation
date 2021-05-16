import React, { Component } from "react";
class HeaderText extends Component {
  render() {
    return (
      <div className="HeaderText">
        <h1 className="HeaderText__heading">
          Learn to code by
          <br /> watching others
        </h1>
        <p className="HeaderText__paragraph">
          See how experienced developers solve problems in real time,
          <br /> watching scripted tutorial is great, but understanding how{" "}
          <br />
          developers think is invaluable.
        </p>
      </div>
    );
  }
}
export default HeaderText;
