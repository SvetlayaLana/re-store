import React from 'react';

import BookListItem from "../BookListItem";

import './BookList.css';


const BookList = ({ books, onAddedToCart }) => {
    return(
        <ul className='list-group list-group-flush books-list'>
            {
                books.map((book) =>{
                    return(
                        <li key={book.id} className='list-group-item'>
                            <BookListItem book={book} onAddedToCart={() => onAddedToCart(book.id)}/>
                        </li>
                    )
                })
            }
        </ul>
    )
};

export default BookList;


