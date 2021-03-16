import React, { Component } from "react";

import PageTitle from "../pageTitle";
import PurchaseDetail from "./purchaseDetail";
import Purchases from "./purchases";

class PurchaseHistory extends Component {
  render() {
    return (
      <div className="purchase-history">
        <PageTitle
          className="purchase-history__page-title"
          title="Purchase History"
        />
        <Purchases className="purchase-history__purchases" />
        <PurchaseDetail className="purchase-history__detail" />
        <div className="purchase-history__border-bottom" />
      </div>
    );
  }
}

export default PurchaseHistory;
