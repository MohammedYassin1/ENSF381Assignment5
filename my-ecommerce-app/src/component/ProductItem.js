import React, { useState } from 'react';
import './ProductItem.css';

const ProductItem = ({ product, addToCart }) => {
    const [showDescription, setShowDescription] = useState(false);

    return (
        <div class='product-item'>
            <img class='product-img' src={product.image} alt={product.name} />
            <p onMouseEnter={() => setShowDescription(true)} onMouseLeave={() => setShowDescription(false)}>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button class='add-to-cart-button' onClick={() => addToCart(product)}>Add to Cart</button>
            {showDescription && <p>{product.description}</p>}
        </div>
    );
};

export default ProductItem;