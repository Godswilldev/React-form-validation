/* eslint-disable */
import React, { Component } from "react";
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validateForm = (errors) => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    (val) => val.length > 0 && (valid = false)
  );
  return valid;
};

class FormInputs extends Component {
  state = {
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    errors: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  };

  handleChange = (evt) => {
    let { name, value } = evt.target;
    let errors = this.state.errors;
    switch (name) {
      case "firstname":
        errors.firstname =
          value.trim() === "" ? "First Name cannot be empty" : "";
        break;
      case "lastname":
        errors.lastname =
          value.trim() === "" ? "Last Name cannot be empty" : "";
        break;
      case "email":
        errors.email = validEmailRegex.test(value)
          ? ""
          : "Looks like this is not an Email";
        break;
      case "password":
        errors.password =
          value.length < 6 ? "Password must be 6 characters long!" : "";
        break;
      //   case "password":
      //     errors.password = value.trim() === "" ? "Password cannot be Empty" : "";
      //     break;

      default:
        break;
    }
    this.setState({
      errors,
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    // evt.preventDefault();
    if (validateForm(this.state.errors)) {
      alert("Thanks for your submission");
    } else {
      alert("Please fill all details correctly");
    }
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} action="/" method="get">
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Firstname"
            onChange={this.handleChange}
            value={this.state.firstname}
          />
          <p>{this.state.errors.firstname}</p>
          <input
            type="text"
            name="lastname"
            id="lastname"
            placeholder="Lastname"
            onChange={this.handleChange}
            value={this.state.lastname}
          />
          <p>{this.state.errors.lastname}</p>

          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <p>{this.state.errors.email}</p>

          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={this.handleChange}
            value={this.state.password}
          />
          <p>{this.state.errors.password}</p>

          <button type="submit">Claim your free trial</button>
        </form>
      </div>
    );
  }
}
export default FormInputs;
