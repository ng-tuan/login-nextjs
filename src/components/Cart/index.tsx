// import React, { useState } from 'react';

// export default function Cart({ cartItems, setCartItems }) {

//   return (
//     <div>
//       <h2>Cart Items</h2>
//       <ul>
//         {cartItems.map((item, index) => (
//           <li key={index}>
//             Product ID: {item.product_id}, Variation ID: {item.variation_id},
//             Quantity: {item.quantity}, Weight: {item.weight}
//           </li>
//         ))}
//       </ul>
//       <div>
//         <button>Payment</button>
//       </div>
//     </div>
//   );
// }
'use client'
// Cart.tsx

import React from 'react';

interface CartProps {
  cartItems: {
    product_id: string;
    variation_id: string;
    quantity: number;
    weight: number;
  }[];
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ cartItems, onClose }) => {
  return (
    <div className="fixed inset-0 overflow-hidden z-50">
      <div className="absolute inset-0 overflow-hidden">
        <div
          onClick={onClose}
          className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
        ></div>

        <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16">
          <div className="w-screen max-w-md">
            <div className="h-full flex flex-col bg-white shadow-xl overflow-y-scroll">
              <div className="p-6">
                <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
                <ul className="mt-4 space-y-4">
                  {cartItems.map((item) => (
                    <li key={item.variation_id} className="flex justify-between">
                      <span>{/* Display item details here */}</span>
                      <span>{/* Display item quantity and total price here */}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="border-t border-gray-200 p-6 flex justify-end">
                <button
                  onClick={onClose}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Continue Shopping
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Cart;

