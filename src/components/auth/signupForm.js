import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";
import Details from "../details";

import history from "../../history";

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const info = [
      {
        _id: 0,
        title: "At least 6 characters",
      },
      {
        _id: 1,
        title: "At least one number",
      },
      {
        _id: 2,
        title: "At least one symbol",
      },
    ];

    return (
      <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>
        <Field
          className="sign-up-form__name"
          name="name"
          title="Name"
          type="name"
          placeholder="Name"
          component={FormInput}
        />
        <Field
          className="sign-up-form__email"
          name="email"
          title="Email"
          type="email"
          placeholder="Email"
          component={FormInput}
        />
        <Field
          className="sign-up-form__password"
          name="password"
          title="Password"
          type="password"
          placeholder="Password"
          component={FormInput}
        />
        <Field
          className="sign-up-form__confirm"
          name="confirm"
          title="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          component={FormInput}
        />
        <div className="sign-up-form__line"></div>
        <Field
          className="sign-up-form__back"
          onClick={() => history.push("/signin")}
          name="back"
          title="Back"
          type="back"
          short={true}
          component={FormButton}
        />
        <Field
          className="sign-up-form__login"
          onClick={() => history.push("/account")}
          name="login"
          title="Create Account"
          type="submit"
          component={FormButton}
        />
        <Details
          className="sign-up-form__details"
          title="Password requirements"
          info={info}
        />
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: "SignUpForm",
})(SignUpForm);

export default SignUpForm;
