import React, { Component } from "react";

import Header from "../components/headernav/header";
import Navbar from "../components/headernav/navbar";

class Layout extends Component {
  render() {
    return (
      <div className="layout">
        {this.props.children}
        <Header />
        <Navbar />
      </div>
    );
  }
}

export default Layout;
