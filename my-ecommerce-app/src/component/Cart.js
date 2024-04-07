import React from 'react';
import CartItem from './CartItem';
import './Cart.css'

const Cart = ({ cartItems, removeFromCart }) => {
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div class="cart">
            <h2>Shopping Cart</h2>
                {cartItems.map(item => (<CartItem key={item.id} item={item} removeFromCart={removeFromCart} />))}
            <p>Total (in cart): ${totalPrice}</p>
        </div>
    );
};

export default Cart;