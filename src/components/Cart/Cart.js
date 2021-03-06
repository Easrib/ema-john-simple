import React from 'react';
import './Cart.css'

const Cart = ({ cart }) => {

    console.log(cart);

    let total = 0;
    let shipping = 0;

    for (const product of cart) {

        total = total + product.price
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h1>Order Summery</h1>
            <h3>Selected Items: {cart.length}</h3>
            <p>Total Price:$ {total} </p>
            <p>Total Shipping Charge:$ {shipping}</p>
            <p>Tax:$ {tax}</p>
            <h2>Grand Total: $ {grandTotal}</h2>
        </div>
    );
};

export default Cart;