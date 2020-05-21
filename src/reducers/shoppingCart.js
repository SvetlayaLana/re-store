import { updateOrder } from "../utils/helper";

const updateShoppingCart = (shoppingCart, { type, payload }) => {
    switch (type) {
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(shoppingCart, payload, 1);

        case 'BOOK_DELETED_FROM_CART':
            return updateOrder(shoppingCart, payload, -1);

        case 'BOOK_ALL_DELETED_FROM_CART':
            const item = shoppingCart.cartItems.find(book => book.id === payload.id);
            return updateOrder(shoppingCart, payload, -item.count);
        default:
            return shoppingCart
    }
};

export default updateShoppingCart;
