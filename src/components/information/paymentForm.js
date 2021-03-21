import React, { Component } from "react";

import { reduxForm, Field } from "redux-form";

import { FormInput, FormButton } from "../formFields";
import OrderSummary from "./orderSummary";

import history from "../../history";
import { UnderLinedTitle } from "./infoHelp";

class PaymentForm extends Component {
  render() {
    const { className, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit} className={`${className} payment-form`}>
        <Field
          className="payment-form__name"
          name="name"
          title="Name on Credit Card"
          type="name"
          placeholder="Name on Credit Card"
          component={FormInput}
        />
        <Field
          className="payment-form__card"
          name="card"
          title="Credit Card Number"
          type="card"
          placeholder="____-____-____-____"
          component={FormInput}
        />
        <Field
          className="payment-form__expiration"
          name="expiration"
          title="Expiration Date"
          type="expiration"
          placeholder="MM/YYYY"
          component={FormInput}
        />
        <Field
          className="payment-form__ccv"
          name="ccv"
          title="CCV"
          type="ccv"
          placeholder="ccv"
          component={FormInput}
        />
        <div className="payment-form__line"></div>
        <Field
          className="payment-form__back"
          onClick={() => history.push("/signin")}
          name="back"
          title="Back"
          type="back"
          short={true}
          component={FormButton}
        />
        <Field
          className="payment-form__pay-complete"
          onClick={() => history.push("/information/payment")}
          name="pay-complete"
          title="Pay & Complete Order"
          type="submit"
          component={FormButton}
        />
        <OrderSummary className="payment-form__order-summary" />
        <div className="payment-form__shipping-info shipping-info">
          <UnderLinedTitle
            className="shipping-info__title"
            title="Shipping To"
          />
          <div className="shipping-info__name small-text">Jordan Hudgens</div>
          <div className="shipping-info__address small-text">
            1234 address goes here
          </div>
        </div>
      </form>
    );
  }
}

PaymentForm = reduxForm({
  form: "PaymentForm",
})(PaymentForm);

export default PaymentForm;
