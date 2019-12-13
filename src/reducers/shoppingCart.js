import { updateOrder } from "../utils/helper";

const updateShoppingCart = (shoppingCart, action) => {
    switch (action.type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(shoppingCart, action.payload, 1);

        case 'BOOK_DELETED_FROM_CART':
            return updateOrder(shoppingCart, action.payload, -1);

        case 'BOOK_ALL_DELETED_FROM_CART':
            const item = shoppingCart.cartItems.find(item => item.id === action.payload);
            return updateOrder(shoppingCart, action.payload, -item.count);
        default:
            return shoppingCart
    }
};

export default updateShoppingCart;