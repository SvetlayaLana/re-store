import { updateOrder } from "../utils/helper";

const updateShoppingCart = (state, action) => {

    if(state === undefined)
        return {
            cartItems: [],
            totalPrice: 0
        };

    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1);

        case 'BOOK_DELETED_FROM_CART':
            return updateOrder(state, action.payload, -1);

        case 'BOOK_ALL_DELETED_FROM_CART':
            const item = state.shoppingCart.cartItems.find(item => item.id === action.payload);
            return updateOrder(state, action.payload, -item.count);
        default:
            return state.shoppingCart
    }
};

export default updateShoppingCart;