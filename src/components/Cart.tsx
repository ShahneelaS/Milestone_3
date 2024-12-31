'use client';

import Image from 'next/image';


type CartItem = {
  id: string;
  name: string;
  quantity: number;
  price: number;
  image: string;
};

const Cart = ({
  cartItems,
  onUpdateQuantity,
  onRemoveItem,
  totalPrice,
}: {
  cartItems: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  totalPrice: number;
}) => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-md">
      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty</p>
      ) : (
        <>
          <ul className="space-y-4">
            {cartItems.map((item) => (
              <li
                key={item.id}
                className="flex justify-between items-center p-4 bg-gray-100 rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={64} 
                    height={64} 
                    className="rounded-md object-cover"
                  />
                  <div>
                    <h3 className="font-medium text-lg">{item.name}</h3>
                    <p className="text-sm text-gray-600">
                      ${item.price} x {item.quantity} = $
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <button
                    onClick={() => onUpdateQuantity(item.id, -1)}
                    className="bg-gray-300 px-2 py-1 rounded-md"
                    disabled={item.quantity <= 1}
                  >
                    -
                  </button>
                  <span className="font-medium">{item.quantity}</span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, 1)}
                    className="bg-gray-300 px-2 py-1 rounded-md"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-md"
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
          <div className="flex justify-between items-center mt-6">
            <h3 className="text-xl font-bold">Total</h3>
            <p className="text-xl font-bold text-gray-800">
              ${totalPrice.toFixed(2)}
            </p>
          </div>
          <div className="flex justify-end mt-6">
            <button className="bg-green-500 text-white py-2 px-6 rounded-lg text-lg font-bold">
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
