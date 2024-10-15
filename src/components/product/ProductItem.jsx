import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { Link } from 'react-router-dom';
import './product.css';
// show a single product with a Add to Cart button.
const ProductItem = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="product_card">
            <Link to={`/product/${product.id}`} className="product_image">
                <img src={product.thumbnail} alt={product.title} />
            </Link>
            <div className="product_info">
                <h2>{product.title}</h2>
                <p className="product_price">${product.price}</p>
                <button className="add_to_cart" onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductItem;
