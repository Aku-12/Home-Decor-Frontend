import React from 'react';
import { useCart } from './CartContext';

const FurnitureCard = ({ furniture }) => {
  const { addToCart } = useCart();

  const handleBuyNow = () => {
    addToCart(furniture);
    alert('Item added to cart');

  };

  return (
    <div className="bg-slate-50 max-w-[352px] mx-auto font-dosis card card-compact rounded-md w-64 bg-base-100 shadow-xl hover:shadow-2xl transition">
      <img className="rounded-t-md w-full h-40 object-cover" src={furniture.imageUrl} alt={furniture.name} />
      <div className="p-3">
        <h3 className="text-2xl font-bold mb-2">{furniture.furnitureName}</h3>
        <p className="text-gray-600 text-sm mb-4">{furniture.details}</p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-lg">{`Nrs.${furniture.price}`}</span>
          <button
            onClick={handleBuyNow}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default FurnitureCard;
