import React from 'react';
import Product from '../Product/Product.js/Product';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = cart.reduce((totalPrice, product) => totalPrice + product.price ,0);

let shippingCost = 0;
if(totalPrice > 200){
    shippingCost = 0;
}
else if(totalPrice > 5){
    shippingCost = 4.99
}

const tax = totalPrice / 10;
const grandTotal = (totalPrice + shippingCost + tax)
const formatNumber = num => {
    const precision = num.toFixed(2);
    return Number(precision);
}
    return (
        <div>
            <h5>Order Summery</h5>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Cost: {formatNumber(totalPrice)}</p>
            <p><small>Shipping Cost: {formatNumber(shippingCost)}</small></p>
            <p><small>Tax: {formatNumber(tax)}</small></p>
            <p>Total Price: {formatNumber(grandTotal)}</p>
        </div>
    );
};

export default Cart;