import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton, LongGrayButton } from "../formFields";

import history from "../../history";

class AccountInformationForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;

    return (
      <form
        onSubmit={handleSubmit}
        className={`${className} account-information__form`}
      >
        <Field
          className="account-information-form__name"
          name="name"
          title="Name"
          type="name"
          placeholder="Name"
          component={FormInput}
        />
        <Field
          className="account-information-form__email"
          name="email"
          title="Email"
          type="email"
          placeholder="Email"
          component={FormInput}
        />
        <Field
          className="account-information-form__street-address"
          name="address"
          title="Street Address"
          type="address"
          placeholder="Street Address"
          component={FormInput}
        />
        <Field
          className="account-information-form__city"
          name="city"
          title="City"
          type="city"
          placeholder="City"
          component={FormInput}
        />
        <Field
          className="account-information-form__state"
          name="state"
          title="State"
          type="state"
          placeholder="State"
          component={FormInput}
        />
        <Field
          className="account-information-form__zipcode"
          name="city"
          title="Zipcode"
          type="zipcode"
          placeholder="Zipcode"
          component={FormInput}
        />
        <Field
          className="account-information-form__change-password"
          onClick={() => console.log("trying to show passwords")}
          name="change-password"
          labelTitle="Password"
          title="Change Password"
          type="button"
          component={LongGrayButton}
        />
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm",
})(AccountInformationForm);

export default AccountInformationForm;
