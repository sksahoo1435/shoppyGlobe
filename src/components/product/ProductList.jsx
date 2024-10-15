import React, { useState } from 'react';
import ProductItem from './ProductItem';
import { fetchProducts } from '../customeHooks/useFetchProducts';
import './product.css';

const ProductList = () => {
  // fetch products from the api, using custom hooks.
  const { products, error } = fetchProducts();
  const [searchTerm, setSearchTerm] = useState('');
  if (!products) return <div>Loading...</div>;
  
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (error) return <div>Error fetching products: {error.message}</div>;

  return (
    <div className='product_container'>
      {/* search box for searching items */}
      <div className='search_box'>
        <p>Search the product here</p>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {/* filtered items after searching */}
      <div className='product_items'>
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
