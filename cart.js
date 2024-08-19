import React, { useState } from 'react';
import CartItem from '../components/CartItem';

export default function Cart() {
  const [cart, setCart] = useState([]);

  const updateQuantity = (item, quantity) => {
    const updatedCart = cart.map((cartItem) =>
      cartItem.id === item.id ? { ...cartItem, quantity } : cartItem
    );
    setCart(updatedCart);
  };

  const removeItem = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discount = 0; // Apply discount logic here
  const total = subtotal - discount;

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      <div className="space-y-4">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            item={item}
            updateQuantity={updateQuantity}
            removeItem={removeItem}
          />
        ))}
      </div>
      <div className="mt-6">
        <p>Subtotal: ${subtotal}</p>
        <p>Discount: ${discount}</p>
        <p>Total: ${total}</p>
      </div>
      <button className="bg-green-500 text-white px-4 py-2 mt-4 rounded">Checkout</button>
    </div>
  );
}
