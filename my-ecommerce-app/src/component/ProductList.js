import React from 'react';
import ProductItem from './ProductItem';
import productsData from './data/products';

const ProductList = ({ addToCart }) => {
    return (
        <div class="product-list">
            {productsData.map(product => (<ProductItem key={product.id} product={product} addToCart={addToCart} />))}
        </div>
    );
};

export default ProductList;