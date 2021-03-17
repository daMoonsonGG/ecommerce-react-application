import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton, LongGrayButton } from "../formFields";

import history from "../../history";

class AccountInformationForm extends Component {
  constructor() {
    super();
    this.state = {
      showPasswords: false,
    };
  }
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
        {this.state.showPasswords ? (
          [
            <Field
              key={0}
              className="account-information-form__current"
              name="current"
              title="Current Password"
              type="password"
              placeholder="Current Password"
              component={FormInput}
            />,
            <Field
              key={1}
              className="account-information-form__new"
              name="new"
              title="New Password"
              type="password"
              placeholder="New Password"
              component={FormInput}
            />,
            <Field
              key={2}
              className="account-information-form__confirm"
              name="confirm"
              title="Confirm Password"
              type="password"
              placeholder="Confirm Password"
              component={FormInput}
            />,
          ]
        ) : (
          <Field
            className="account-information-form__change-password"
            onClick={() => this.setState({ showPasswords: true })}
            name="change-password"
            labelTitle="Password"
            title="Change Password"
            type="button"
            component={LongGrayButton}
          />
        )}
      </form>
    );
  }
}

AccountInformationForm = reduxForm({
  form: "AccountInformationForm",
})(AccountInformationForm);

export default AccountInformationForm;
