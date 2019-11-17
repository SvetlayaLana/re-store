import React from 'react';
import ShoppingCartTable from "../ShoppingCartTable";
import BookListContainer from "../BookList/BookListContainer";

const HomePage = () => {
    return (
        <div>
            <BookListContainer/>
            <ShoppingCartTable/>
        </div>);
};

export default HomePage;
