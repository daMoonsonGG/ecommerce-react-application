import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";
import Details from "../details";

import history from "../../history";

class SignUpForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    const links = [
      {
        _id: 0,
        title: "Not registered? Create account here",
        onClick: () => history.push("/signup"),
      },
      {
        _id: 1,
        title: "Forgot account email?",
        onClick: () => console.log("forgot email"),
      },
      {
        _id: 2,
        title: "Forgot password?",
        onClick: () => console.log("forgot password"),
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
          className="sign-up-form__confirm-password"
          name="confirm"
          title="Confirm Password"
          type="password"
          placeholder="Confirm Password"
          component={FormInput}
        />
        <div className="sign-up-form__line"></div>
        <Field
          className="sign-up-form__back"
          onClick={() => console.log("tryna submit")}
          name="login"
          title="Login"
          type="submit"
          component={FormButton}
        />
        <Field
          className="sign-up-form__login"
          onClick={() => console.log("tryna go back")}
          name="back"
          title="Back"
          type="back"
          short={true}
          component={FormButton}
        />
        <Details
          className="sign-up-form__details"
          title="QuickLinks"
          links={links}
        />
      </form>
    );
  }
}

SignUpForm = reduxForm({
  form: "SignUpForm",
})(SignUpForm);

export default SignUpForm;
