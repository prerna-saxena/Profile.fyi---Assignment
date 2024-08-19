// components/ProductCard.js
import React from 'react';

const ProductCard = ({ product, addToCart }) => (
  <div className="border rounded-lg p-4">
    <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
    <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
    <p className="text-gray-600">${product.price}</p>
    <button
      className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
      onClick={() => addToCart(product)}
    >
      Add to Cart
    </button>
  </div>
);

export default ProductCard;
