import React from "react";
import CartCard from "../component/CartCard";
import CartTotal from "../component/CartTotal";
import { useCart } from "../component/CartContext";

const CartPage = () => {
  const { cart } = useCart();

  return (
    <div>
      <section className="pb-24 overflow-hidden m-5">
        <div className="container px-4">
          <div className="flex flex-wrap -mx-4 mb-14 xl:mb-24">
            <div className="w-full md:w-8/12 xl:w-9/12 px-4 mb-14 md:mb-0">
              <div className="py-12 px-8 md:px-12 bg-white shadow-xl rounded-3xl">
                <span className="inline-block mb-16 text-darkBlueGray-300 font-medium">
                  {cart.length} products
                </span>
                <div className="xl:px-10">
                  {cart.length > 0 ? (
                    <CartCard />
                  ) : (
                    <p>Your cart is empty.</p>
                  )}
                </div>
              </div>
            </div>
            <CartTotal />
          </div>
          <div className="md:w-96">
            <a
              href="/furniture"
              className="block py-5 px-10 w-full border-2 text-xl leading-6 font-medium tracking-tighter font-heading text-center bg-white hover:bg-gray-50 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl"
            >
              Back to shop
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;