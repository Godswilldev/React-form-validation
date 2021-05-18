/* eslint-disable */
import React, { Component } from "react";
import errorIcon from "../images/icon-error.svg";
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

      default:
        break;
    }
    this.setState({
      errors,
      [name]: value,
    });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    let errors = this.state.errors;

    if (
      validateForm(this.state.errors) &&
      errors.firstname !== "" &&
      errors.lastname !== "" &&
      errors.email !== "" &&
      errors.password !== ""
    ) {
      alert("Thanks for your submission");
    } else {
      alert("Please fill all details correctly");
    }
  };
  render() {
    return (
      <div className="form">
        <button className="form__headerBtn btn">
          <strong>Try it free 7 days</strong> then $20/mo. thereafter
        </button>

        <form
          onSubmit={this.handleSubmit}
          action="/"
          method="get"
          className="form__form"
        >
          <div className="form__input">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder={this.state.errors.firstname ? "" : "Firstname"}
              onChange={this.handleChange}
              value={this.state.firstname}
              style={
                this.state.errors.firstname
                  ? { borderColor: "#ff7a7a" }
                  : { borderColor: "#b9b6d3" }
              }
            />

            <em className="form__input--error">
              {this.state.errors.firstname}
            </em>

            {this.state.errors.firstname && (
              <img
                className="form__input--errorIcon"
                src={errorIcon}
                alt="icon error"
              />
            )}
          </div>

          <div className="form__input">
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder={this.state.errors.lastname ? "" : "Lastname"}
              onChange={this.handleChange}
              value={this.state.lastname}
style={
                this.state.errors.lastname
                  ? { borderColor: "#ff7a7a" }
                  : { borderColor: "#b9b6d3" }
              }

            />

            <em className="form__input--error">{this.state.errors.lastname}</em>

            {this.state.errors.lastname && (
              <img
                className="form__input--errorIcon"
                src={errorIcon}
                alt="icon error"
              />
            )}
          </div>

          <div className="form__input">
            <input
              type="email"
              name="email"
              id="email"
              placeholder={
                this.state.errors.email ? "email@example.com" : "Email"
              }
              onChange={this.handleChange}
              value={this.state.email}

style={
                this.state.errors.email
                  ? { borderColor: "#ff7a7a" }
                  : { borderColor: "#b9b6d3" }
              }
            />

            <em className="form__input--error">{this.state.errors.email}</em>

            {this.state.errors.email && (
              <img
                className="form__input--errorIcon"
                src={errorIcon}
                alt="icon error"
              />
            )}
          </div>

          <div className="form__input">
            <input
              type="password"
              name="password"
              id="password"
              placeholder={this.state.errors.password ? "" : "Password"}
              onChange={this.handleChange}
              value={this.state.password}
style={
                this.state.errors.password
                  ? { borderColor: "#ff7a7a" }
                  : { borderColor: "#b9b6d3" }
              }

            />
            <em className="form__input--error">{this.state.errors.password}</em>

            {this.state.errors.password && (
              <img
                className="form__input--errorIcon"
                src={errorIcon}
                alt="icon error"
              />
            )}
          </div>

          <button type="submit" className="form__btn btn">
            Claim your free trial
          </button>

          <p className="form__footer">
            By clicking the button you agree to our
            <strong> Terms and Services </strong>
          </p>
        </form>
      </div>
    );
  }
}
export default FormInputs;
