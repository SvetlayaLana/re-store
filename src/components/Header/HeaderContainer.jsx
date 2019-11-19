import React from 'react';
import { connect } from "react-redux";

import { getCountItems } from "../../utils/helper";

import Header from './Header';

const HeaderContainer = ({cartItems, totalPrice}) => {

    const countItems = getCountItems(cartItems);

    return (
        <Header countItems={countItems} totalPrice={totalPrice}/>
    )
};

const mapStateToProps = (state) => ({
    cartItems: state.shoppingCart.cartItems,
    totalPrice: state.shoppingCart.totalPrice
});

export default connect(mapStateToProps, null)(HeaderContainer);
