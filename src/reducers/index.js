import updateBookList from "./bookList";
import updateShoppingCart from "./shoppingCart";

const initialState = {
    bookList: {
        books: [],
        loading: true,
        error: null,
    } ,
    shoppingCart: {
        cartItems: [],
        totalPrice: 0
    }
};

const reducer = (state = initialState, action) => {
    return {
        bookList: updateBookList(state.bookList, action),
        shoppingCart: updateShoppingCart(state.shoppingCart, action)
    }
};

export default reducer;
