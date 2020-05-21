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

const fetchBooks = (bookstoreService) => () => (dispatch) => {
    dispatch(booksRequested());
    bookstoreService.getBooks()
        .then((data) => dispatch(booksLoaded(data)))
        .catch((error) => dispatch(booksError(error)))
};

const bookDeletedFromCart = (itemId) => (dispatch, getState) => {
    const { bookList: { books } } = getState();
    const book = books.find(item => item.id === itemId);

    dispatch({
        type: 'BOOK_DELETED_FROM_CART',
        payload: book,
    });
};

const bookAllDeletedFromCart = (itemId) => (dispatch, getState) => {
    const { bookList: { books } } = getState();
    const book = books.find(item => item.id === itemId);

    dispatch({
        type: 'BOOK_ALL_DELETED_FROM_CART',
        payload: book
    });
};

const bookAddedToCart = (itemId) => (dispatch, getState) => {
    const { bookList: { books } } = getState();
    const book = books.find(item => item.id === itemId);

    dispatch({
        type: 'BOOK_ADDED_TO_CART',
        payload: book
    })
};

export {
    fetchBooks,
    bookAddedToCart,
    bookDeletedFromCart,
    bookAllDeletedFromCart
};
