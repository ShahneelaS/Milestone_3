'use client';

import { useCart } from '../../context/CartContext';
import Image from 'next/image'; 

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  // Calculate total price of cart items
  const calculateTotal = () =>
    cart.reduce((total: number, item) => total + item.price * item.quantity!, 0).toFixed(2);

  return (
    <div className="min-h-screen flex flex-col bg-lime-200">
      <div className="container mx-auto p-6 flex-grow">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>
        {cart.length === 0 ? (
          <p className="text-gray-600 text-center">Your cart is empty</p>
        ) : (
          <div className="bg-lime-100 p-4 rounded shadow">
            <ul>
              {cart.map((product, index) => (
                <li
                  key={`${product.id}-${index}`}
                  className="flex flex-col sm:flex-row items-center gap-4 py-4 border-b"
                >
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={80} 
                    height={80} 
                    className="object-cover rounded mb-4 sm:mb-0"
                  />
                  <div className="flex-grow">
                    <h2 className="text-lg font-bold">{product.name}</h2>
                    <p>${product.price.toFixed(2)}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity! - 1)}
                        className="bg-gray-300 px-2 py-1 rounded"
                      >
                        -
                      </button>
                      <span>{product.quantity}</span>
                      <button
                        onClick={() => updateQuantity(product.id, product.quantity! + 1)}
                        className="bg-gray-300 px-2 py-1 rounded"
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="bg-lime-800 text-white px-4 py-2 rounded mt-4 sm:mt-0 sm:w-auto"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <h3 className="text-xl font-bold">Total: ${calculateTotal()}</h3>
              <div className="mt-4 flex flex-col sm:flex-row justify-end gap-4">
                <button className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600">
                  Checkout
                </button>
                <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <footer className="bg-lime-700 text-white text-center py-4 mt-auto">
        <p className="text-sm">
        &copy; {new Date().getFullYear()} Your Company. All Rights Reserved.
        </p>
      </footer>
    </div>
  );
};

export default CartPage;
