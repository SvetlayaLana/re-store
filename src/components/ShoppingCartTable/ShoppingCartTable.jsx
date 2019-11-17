import React from 'react';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt, faPlusCircle, faMinusCircle} from "@fortawesome/free-solid-svg-icons";
import {bookDeletedFromCart, bookAllDeletedFromCart, bookAddedToCart} from "../../actions";

import './ShoppingCartTable.css';


const ShoppingCartTable = ({ items, totalPrice, onIncrease, onDecrease, onDelete }) => {

    return(
        <div className='shopping-cart-table'>
            <h3 className='shopping-cart-header'>Your order</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Item</th>
                        <th scope="col">Count</th>
                        <th scope="col">Price</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    items.map((item,index) => {
                        const { id, title, count, total } = item;
                        return (
                            <tr key={id}>
                                <td>{index + 1}</td>
                                <td>{title}</td>
                                <td>{count}</td>
                                <td>${total}</td>
                                <td className='shopping-cart-buttons-set'>
                                    <button onClick={() => onDecrease(id)} className='btn btn-outline-warning'>
                                        <FontAwesomeIcon icon={faMinusCircle} />
                                    </button>
                                    <button onClick={() => onIncrease(id)} className="btn btn-outline-success">
                                        <FontAwesomeIcon icon={faPlusCircle} />
                                    </button>
                                    <button onClick={() => onDelete(id)} className="btn btn-outline-danger">
                                        <FontAwesomeIcon icon={faTrashAlt} />
                                    </button>
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
            <div className="total-sum">
                Total: ${totalPrice}
            </div>
        </div>
    )
};

const mapStateToProps = (state) => ({
    items: state.cartItems,
    totalPrice: state.totalPrice
});

const mapDispatchToProps = {
    onDecrease: bookDeletedFromCart,
    onIncrease: bookAddedToCart,
    onDelete: bookAllDeletedFromCart
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
