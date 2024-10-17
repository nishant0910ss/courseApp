import ADD_TO_CART from "./constant";

function addToCart(item) {
    // console.log('Adding to cart:', item);
    return {
        type: ADD_TO_CART,
        data: item,
    };
}

export default addToCart