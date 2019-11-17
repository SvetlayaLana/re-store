export const updateCartItems = (item, index, arr) => {

    if(item.count === 0){
        return [
            ...arr.slice(0, index),
            ...arr.slice(index + 1)
        ]
    }

    if(index === -1){
        return[...arr, item]
    }

    return[
        ...arr.slice(0, index),
        item,
        ...arr.slice(index + 1)
    ];
};

export const updateCartItem = (book, item = {}, quantity) => {
    const {
        id = book.id,
        title = book.title,
        count = 0,
        total = 0 } = item;

    return {
        id,
        title,
        count: count + quantity,
        total: total + quantity*book.price
    }
};

export const deleteCartItem = (book, item) => {
    const{ id, title, count, total } = item;
    return {
        id,
        title,
        count: count - 1,
        total: total - book.price
    }
};

export const updateOrder = (state, bookId, quantity) => {
    const { books, cartItems } = state;

    const book = books.find(item => item.id === bookId);

    const itemIndex = cartItems.findIndex((item) => item.id === bookId);
    const item = cartItems[itemIndex];

    const newItem = updateCartItem(book, item, quantity);

    return {
        ...state,
        cartItems: updateCartItems(newItem, itemIndex, cartItems)
    };
};

export const getCountItems = (items) => {
    return items.reduce((sum, current) => sum + current.count, 0);
};
