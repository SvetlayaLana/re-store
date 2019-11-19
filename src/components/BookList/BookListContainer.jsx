import React from 'react';
import { connect } from 'react-redux';
import { compose } from "redux";
import {withBookstoreService} from "../hoc";
import { fetchBooks, bookAddedToCart } from "../../actions";

import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";
import BookList from "./BookList";

class BookListContainer extends React.Component{

    componentDidMount() {
        this.props.fetchBooks();
    }

    render() {
        const { books, loading, error, onAddedToCart } = this.props;

        if(loading)
            return <Spinner/>;

        if(error)
            return <ErrorIndicator/>;

        return <BookList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = (state) => ({
    books: state.bookList.books,
    loading: state.bookList.loading,
    error: state.bookList.error
});

const mapDispatchToProps = (dispatch, { bookstoreService }) => ({
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => {
        dispatch(bookAddedToCart(id));
    }
});

export default compose(
    withBookstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)