// components/CartItem.js
import React from 'react';

const CartItem = ({ item, updateQuantity, removeItem }) => (
  <div className="flex justify-between items-center py-2">
    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
    <div>
      <h3 className="text-lg font-semibold">{item.name}</h3>
      <p className="text-gray-600">${item.price}</p>
    </div>
    <div className="flex items-center">
      <button onClick={() => updateQuantity(item, item.quantity - 1)}>-</button>
      <span className="px-2">{item.quantity}</span>
      <button onClick={() => updateQuantity(item, item.quantity + 1)}>+</button>
    </div>
    <button onClick={() => removeItem(item)} className="text-red-500">Remove</button>
  </div>
);

export default CartItem;
