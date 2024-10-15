import React from 'react';
import { useParams } from 'react-router-dom';
import { fetchProductDetail } from '../customeHooks/useFetchProductDetail';
import './product.css';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/cartSlice';

const ProductDetail = () => {
  const { id } = useParams();
  // fetch data using custom hooks using id.
  const { product, error } = fetchProductDetail(id);
  const dispatch = useDispatch();

  if (error) return <div>Error fetching product detail: {error.message}</div>;
  if (!product) return <div>Loading...</div>;

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };
  // show all the details of the product
  return (
    <div className="product_detail_container">
      <div className="product_image_section">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="product_info_section">
        <h1>{product.title}</h1>
        <p className="product_description">{product.description}</p>
        <p className="product_price">${product.price} <span className="discount">({product.discountPercentage}% off)</span></p>
        <p className="product_category">Category: {product.category}</p>
        <p className="product_stock">Stock: {product.stock > 0 ? "In Stock" : "Out of Stock"}</p>
        <button className="add_to_cart_btn" onClick={handleAddToCart} >Add to Cart</button>

        <div className="additional_info">
          <h3>Additional Information</h3>
          <ul>
            <li>Brand: {product.brand}</li>
            <li>Weight: {product.weight} oz</li>
            <li>Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm</li>
            <li>Warranty: {product.warrantyInformation}</li>
            <li>Shipping: {product.shippingInformation}</li>
            <li>SKU: {product.sku}</li>
          </ul>
        </div>

        <div className="reviews_section">
          <h3>Customer Reviews</h3>
          {product.reviews.length > 0 ? product.reviews.map((review, index) => (
            <div className="review" key={index}>
              <p><strong>{review.reviewerName}</strong> - {review.rating} ★</p>
              <p>{review.comment}</p>
              <p className="review_date">{new Date(review.date).toLocaleDateString()}</p>
            </div>
          )) : <p>No reviews yet</p>}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
