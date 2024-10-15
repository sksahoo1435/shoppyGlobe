import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem, incrementQuantity, decrementQuantity } from '../../store/cartSlice';
import './cart.css';

// CartItem component to display individual items in the cart
const CartItem = ({ item }) => {
  // Get the dispatch function from Redux
  const dispatch = useDispatch();

  // Function to handle item removal from the cart
  const handleRemove = () => {
    dispatch(removeItem(item));
  };

  // Function to increment the quantity of the item
  const handleIncrement = () => {
    dispatch(incrementQuantity(item));
  };

  // Function to decrement the quantity of the item
  const handleDecrement = () => {
    dispatch(decrementQuantity(item));
  };

  return (
    <div className="cart_item">
      <div className="cart_item_image">
        {/* Display the item's thumbnail image */}
        <img src={item?.thumbnail} alt={item?.title} />
      </div>
      <div className="cart_item_info">
        {/* Display the item's title */}
        <h2 className="cart_item_title">{item?.title}</h2>
        <div className="quantity_container">
          {/* Buttons to increment and decrement the item's quantity */}
          <button className="quantity_button" onClick={handleDecrement}>-</button>
          <span className="cart_item_quantity">{item?.quantity}</span>
          <button className="quantity_button" onClick={handleIncrement}>+</button>
        </div>
        {/* Display the total price for the item based on quantity */}
        <p className="cart_item_price">${(item?.price * item?.quantity).toFixed(2)}</p>
        {/* Button to remove the item from the cart */}
        <button className="remove_button" onClick={handleRemove}>Remove</button>
      </div>
    </div>
  );
};

export default CartItem;
