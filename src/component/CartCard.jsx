import React from 'react';
import { useCart } from './CartContext';
import { MdDelete } from 'react-icons/md';

const CartCard = () => {
  const { cart, updateQuantity, removeFromCart } = useCart();

  const handleQuantityChange = (itemId, newQuantity) => {
    updateQuantity(itemId, parseInt(newQuantity, 10));
  };

  return (
    <div className=''>
      {cart.map((item) => (
        <div key={item.furnitureId} className="flex flex-col md:flex-row items-start xl:items-center mb-8 pb-8 border-b border-gray-200">
          <div className="w-[80px] ">
            <a href="#" className="block mx-auto ">
              <img className="w-full object-cover rounded-lg" src={item.imageUrl} alt={item.furnitureName} />
            </a>
          </div>
          <div className="flex flex-col md:flex-row w-full md:w-auto md:justify-between items-start md:items-center mb-6 md:mb-0 xl:mx-10">
            <div className="w-full md:max-w-md md:mr-6 mb-4 md:mb-0">
              <a href="#" className="block mb-2 text-xl font-medium hover:underline">
                {item.furnitureName}
              </a>
              <div className="flex flex-wrap mb-2">
                <p className="mr-4 text-sm font-medium">
                  <span className="font-medium">Color:</span>
                  <span className="ml-1 text-gray-400">Yellow</span>
                </p>
                <p className="text-sm font-medium">
                  <span>Wooden</span>
                  <span className="ml-1 text-gray-400">3ft</span>
                </p>
              </div>
            </div>
            <div className="flex items-center w-full md:w-auto mb-4 md:mb-0 lg:mx-20">
              <h4 className="mr-2 font-medium">Qty:</h4>
              <input
                className="w-16 md:w-20 px-3 py-2 text-center placeholder-gray-400 text-gray-400 bg-blue-50 border-2 border-blue-400 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.furnitureId, e.target.value)}
                min="1"
              />
            </div>
            <div className="text-xl font-medium text-blue-500 md:ml-8">
              <span className="text-sm">Nrs.</span>
              <span>{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </div>
          <button onClick={() => removeFromCart(item.furnitureId)} className="text-red-500 mt-4 md:mt-0 ml-auto text-4xl">
            <MdDelete />
          </button>
        </div>
      ))}
    </div>
  );
};

export default CartCard;
