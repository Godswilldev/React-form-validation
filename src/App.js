import React, { Component } from "react";
import Form from "./Components/Form";
import HeaderText from "./Components/HeaderText";
class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderText />
        <Form />
      </div>
    );
  }
}
export default App;
