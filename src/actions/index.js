const booksLoaded = (newBooks) => ({
    type: 'FETCH_BOOKS_SUCCESS',
    payload: newBooks
});

const booksRequested = () => ({
    type: 'FETCH_BOOKS_REQUEST'
});

const booksError = (error) => ({
    type: 'FETCH_BOOKS_FAILURE',
    payload: error
});

const fetchBooks = (dispatch, bookstoreService) => () => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => {
            dispatch(booksError(error));
        });
};

const bookDeletedFromCart = (itemId) => ({
    type: 'BOOK_DELETED_FROM_CART',
    payload: itemId
});

const bookAllDeletedFromCart = (itemId) => ({
    type: 'BOOK_ALL_DELETED_FROM_CART',
    payload: itemId
});

const bookAddedToCart = (itemId) => ({
    type: 'BOOK_ADDED_TO_CART',
    payload: itemId
});

export {
    fetchBooks,
    bookAddedToCart,
    bookDeletedFromCart,
    bookAllDeletedFromCart
};
