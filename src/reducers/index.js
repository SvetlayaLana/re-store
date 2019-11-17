import {
    updateCartItems,
    updateCartItem,
    deleteCartItem,
    updateOrder} from "../utils/helper";

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    totalPrice: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_BOOKS_REQUEST':
            return {
                ...state,
                loading: true,
                error: null
            };
        case 'FETCH_BOOKS_SUCCESS':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_BOOKS_FAILURE':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'BOOK_DELETED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'BOOK_ALL_DELETED_FROM_CART':
            const item = state.cartItems.find(item => item.id === action.payload);
            return updateOrder(state, action.payload, -item.count);

        default:
            return state;
    }
};

export default reducer;
