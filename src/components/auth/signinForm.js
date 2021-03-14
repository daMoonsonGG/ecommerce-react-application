import React, { Component } from "react";

import { reduxForm, Field, Form } from "redux-form";

import { FormInput, FormButton } from "../formFields";

class SignInForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>
        <Field
          className="sign-in-form__email"
          name="email"
          title="Email"
          type="email"
          placeholder="Email"
          component={FormInput}
        />
        <Field
          className="sign-in-form__password"
          name="password"
          title="Password"
          type="password"
          placeholder="Password"
          component={FormInput}
        />
        <Field
          className="sign-in-form__login"
          onClick={() => console.log("tryna submit")}
          name="login"
          title="Login"
          type="submit"
          component={FormButton}
        />
      </form>
    );
  }
}

SignInForm = reduxForm({
  form: "SignInForm",
})(SignInForm);

export default SignInForm;
