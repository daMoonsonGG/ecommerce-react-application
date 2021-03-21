import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";
import OrderSummary from "./orderSummary";

import history from "../../history";

class ShippingForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} shipping-form`}>
        <Field
          className="shipping-form__name"
          name="name"
          title="Name"
          type="name"
          placeholder="Name"
          component={FormInput}
        />
        <Field
          className="shipping-form__address"
          name="address"
          title="Street Address"
          type="address"
          placeholder="Street Address"
          component={FormInput}
        />
        <Field
          className="shipping-form__city"
          name="city"
          title="City"
          type="city"
          placeholder="City"
          component={FormInput}
        />
        <Field
          className="shipping-form__state"
          name="state"
          title="State"
          type="state"
          placeholder="State"
          component={FormInput}
        />
        <Field
          className="shipping-form__zipcode"
          name="zipcode"
          title="Zipcode"
          type="zipcode"
          placeholder="Zipcode"
          component={FormInput}
        />
        <div className="shipping-form__line"></div>
        <Field
          className="shipping-form__back"
          onClick={() => history.push("/signin")}
          name="back"
          title="Back"
          type="back"
          short={true}
          component={FormButton}
        />
        <Field
          className="shipping-form__use-this-address"
          onClick={() => history.push("/information/payment")}
          name="use-this-address"
          title="Use this address"
          type="submit"
          component={FormButton}
        />
        <OrderSummary className="shipping-form__order-summary" />
      </form>
    );
  }
}

ShippingForm = reduxForm({
  form: "ShippingForm",
})(ShippingForm);

export default ShippingForm;
