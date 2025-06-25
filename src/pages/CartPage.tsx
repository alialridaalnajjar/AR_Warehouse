import { ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import PurchasedSu from "../components/PurchasedSu";
import Footer from "../HrComponents/Footer";
import type { ProductCardType } from "../types/productCardType";

export default function CartPage({
  cartItems,
  setCartItems,
}: {
  cartItems: { product: ProductCardType; quantity: number }[];
  setCartItems: React.Dispatch<
    React.SetStateAction<{ product: ProductCardType; quantity: number }[]>
  >;
  count: number;
}) {
  const [showPurchased, setShowPurchased] = useState(false);

  const handleCheckout = () => {
    if (cartItems.length !== 0) {
      setShowPurchased(true);
      setTimeout(() => {
        setShowPurchased(false);
      }, 3500);
    }
    setCartItems([]);
  };

  return (
    <div className="bg-black min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col">
        {cartItems.length !== 0 ? (
          <div className="pt-40 flex flex-wrap justify-center items-center flex-row gap-6">
            {cartItems.map((item) => (
              <div
                key={item.product.key}
                className="bg-white rounded-lg p-3 max-w-xs w-full shadow-lg flex flex-col items-center relative"
              >
                <h2 className="text-base font-semibold mb-2 text-center">
                  {item.product.title}
                </h2>
                <img
                  src={item.product.img}
                  className="w-20 h-20 object-cover mx-auto mb-2"
                  alt={item.product.title}
                />
                <p className="mb-2 text-violet-700 font-semibold text-center text-sm">
                  ${(item.product.price * item.quantity).toFixed(2)}
                  <span className="text-gray-500 text-xs ml-2">
                    (${item.product.price.toFixed(2)} each)
                  </span>
                </p>
                <div className="flex items-center gap-2 mb-2">
                  <button
                    className="bg-gray-200 px-2 py-0.5 rounded text-base font-bold"
                    onClick={() =>
                      setCartItems((prev) =>
                        prev.map((cartItem) =>
                          cartItem.product.key === item.product.key
                            ? {
                                ...cartItem,
                                quantity: Math.max(1, cartItem.quantity - 1),
                              }
                            : cartItem
                        )
                      )
                    }
                  >
                    -
                  </button>
                  <span className="font-bold text-base">{item.quantity}</span>
                  <button
                    className="bg-gray-200 px-2 py-0.5 rounded text-base font-bold"
                    onClick={() =>
                      setCartItems((prev) =>
                        prev.map((cartItem) =>
                          cartItem.product.key === item.product.key
                            ? { ...cartItem, quantity: cartItem.quantity + 1 }
                            : cartItem
                        )
                      )
                    }
                  >
                    +
                  </button>
                  <button
                    className="bg-red-500 text-white px-2 py-0.5 rounded ml-2 flex items-center"
                    onClick={() =>
                      setCartItems((prev) =>
                        prev.filter(
                          (cartItem) =>
                            cartItem.product.key !== item.product.key
                        )
                      )
                    }
                    title="Remove"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1">
            <ShoppingCart size={48} className="text-violet-500 mb-4" />
            <h1 className="text-white text-lg mx-4 text-center">
              Your <span className="text-violet-500">cart</span> is empty.
              Please add items to your cart.
            </h1>
          </div>
        )}
      </div>
      <div
        id="footer"
        className="text-violet-500 relative bottom-[-20px] ml-auto mr-5 z-40 border-1 p-2 rounded-xl caret-transparent cursor-pointer hover:bg-violet-500 hover:text-white transition"
        onClick={handleCheckout}
      >
        Proceed To Checkout
      </div>
      {showPurchased && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <PurchasedSu />
        </div>
      )}
      <Footer />
    </div>
  );
}
