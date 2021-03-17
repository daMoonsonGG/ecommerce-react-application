import React, { Component } from "react";

import { connect } from "react-redux";
import * as actions from "../../actions";

class Shop extends Component {
  componentDidMount() {
    const headerLinks = [
      {
        _id: 0,
        title: "Login",
        path: "/signin",
      },
    ];
    this.props.setHeaderLinks(headerLinks);
    // set the header links
    // fetch shop products
    // fetch navbar links
    // set navbar links
    // filter products with links
  }
  render() {
    return (
      <div className="shop">
        {/* shop Searchbar component 
            shop product
            shop cart button      
        */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { state };
}

Shop = connect(mapStateToProps, actions)(Shop);

export default Shop;
