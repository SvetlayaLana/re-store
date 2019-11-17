import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Header = ({ countItems, totalPrice }) => {
    return(
      <header className="shop-header row">
          <Link to='/' className='shop-logo'>ReStore</Link>
          <Link to='/cart' className='shopping-info'>
              <FontAwesomeIcon icon={faShoppingCart} className='shopping-cart-icon'/>
              {countItems} items (${totalPrice})
          </Link>
      </header>
    );
};

export default Header;
