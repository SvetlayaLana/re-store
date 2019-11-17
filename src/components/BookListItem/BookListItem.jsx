import React from 'react';
import { connect } from "react-redux";
import {addToCart} from "../../actions";
import './BookListItem.css';

const BookListItem = ({ book, onAddedToCart }) => {
    const { title, author, price, coverImage } = book;
    return(
        <div className='book-list-item row'>
            <div className='book-cover'>
                <img src={coverImage} alt='cover' />
            </div>
            <div className="book-description">
                <span className='book-title'>{title}</span>
                <div className="book-author">{author}</div>
                <div className='book-price'>${price}</div>
                <button onClick={onAddedToCart} className='btn btn-info btn-add-to-cart'>Add to cart</button>
            </div>
        </div>
    )
};

export default BookListItem;
