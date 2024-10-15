import { createSlice } from '@reduxjs/toolkit';

// Initial state for the cart, containing an empty array of items
const initialState = {
  items: [],
};

// Create a slice of the Redux store for the cart
const cartSlice = createSlice({
  name: 'cart', // Name of the slice
  initialState, // Initial state defined above
  reducers: {
    // Action to add an item to the cart
    addItem: (state, action) => {
      // Check if the item already exists in the cart
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (itemExists) {
        // If it exists, increment the quantity
        itemExists.quantity += 1;
      } else {
        // If it doesn't exist, add the item to the cart with a quantity of 1
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    // Action to remove an item from the cart
    removeItem: (state, action) => {
      // Filter out the item with the specified id
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    // Action to increment the quantity of a specific item
    incrementQuantity: (state, action) => {
      // Find the item in the cart
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        // If found, increment the quantity
        item.quantity += 1;
      }
    },
    // Action to decrement the quantity of a specific item
    decrementQuantity: (state, action) => {
      // Find the item in the cart
      const item = state.items.find(item => item.id === action.payload.id);
      if (item && item.quantity === 1) {
        // If the quantity is 1, remove the item from the cart
        state.items = state.items.filter(item => item.id !== action.payload.id);
      }
      if (item && item.quantity > 1) {
        // If the quantity is greater than 1, decrement the quantity
        item.quantity -= 1;
      }
    }
  }
});

// Exporting actions for use in components
export const { addItem, removeItem, incrementQuantity, decrementQuantity } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
