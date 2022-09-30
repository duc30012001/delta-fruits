import {
    addCartItem,
    removeCartItem,
    increaseQuantity,
    decreaseQuantity,
} from "../redux/cartItemsSlice";

export const handleAddToCart = (action, product, dispatch, quantity) => {
    const image = product.images ? product.images[0] : product.image;
    const item = {
        id: product.id,
        quantity: quantity,
        name: product.name,
        image: image,
        path: product.path,
        price: product.price,
    };
    switch (action) {
        case "add-item":
            dispatch(addCartItem(item));
            break;
        case "remove-item":
            dispatch(removeCartItem(item));
            break;

        case "increase":
            dispatch(increaseQuantity(item));
            break;

        case "decrease":
            dispatch(decreaseQuantity(item));
            break;

        default:
            break;
    }
};
