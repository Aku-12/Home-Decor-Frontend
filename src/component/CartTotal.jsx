import React, { useState } from 'react';
import { useCart } from './CartContext';
import Modal from './Modal';

const CartTotal = () => {
  const { cart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shipping = 10; 
  const tax = subtotal * 0.08; 
  const total = subtotal + shipping + tax;

  const handleCheckout = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="w-full md:w-4/12 xl:w-3/12 px-4 shadow-xl bg-slate-50 rounded-lg">
        <div className="mb-14">
          <h2 className="mb-7 md:mt-6 text-3xl font-heading font-medium">Cart totals</h2>
          <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
            <span>Subtotal</span>
            <span className="flex items-center text-xl">
              <span className="mr-2 text-base">$</span>
              <span>{subtotal.toFixed(2)}</span>
            </span>
          </div>
          <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
            <span>Shipping</span>
            <span className="flex items-center text-xl">
              <span className="mr-2 text-base">$</span>
              <span>{shipping.toFixed(2)}</span>
            </span>
          </div>
          <div className="flex items-center justify-between py-4 px-10 mb-3 leading-8 bg-white bg-opacity-50 font-heading font-medium rounded-3xl">
            <span>Tax</span>
            <span className="flex items-center text-xl">
              <span className="mr-2 text-base">$</span>
              <span>{tax.toFixed(2)}</span>
            </span>
          </div>
          <div className="flex items-center justify-between py-4 px-10 mb-6 leading-8 bg-white font-heading font-medium rounded-3xl">
            <span>Total</span>
            <span className="flex items-center text-xl text-blue-500">
              <span className="mr-2 text-base">$</span>
              <span>{total.toFixed(2)}</span>
            </span>
          </div>
          <button
            onClick={handleCheckout}
            className="inline-block w-full lg:w-auto py-5 px-10 text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
          >
            Checkout
          </button>
        </div>
      </div>
      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        cartTotal={{subtotal, shipping, tax, total}}
        cartItems={cart}
      />
    </>
  );
};

export default CartTotal;