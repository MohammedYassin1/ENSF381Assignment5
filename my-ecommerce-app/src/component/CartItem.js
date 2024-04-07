import React from 'react';
import './CartItem.css';

const CartItem = ({ item, removeFromCart }) => {
    return (
        <div class='cart-item'>
            <img class='cart-img' src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Price: ${item.price}</p>
            <p>Quantity: {item.quantity}</p>
            <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
            <button class='remove-button' onClick={() => removeFromCart(item)}>Remove</button>
        </div>
    );
};

export default CartItem;