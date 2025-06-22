import { ShoppingCart } from "lucide-react";
import ShopCard from "../cardComponents/ShopCard";
import Navbar from "../components/Navbar";
import type { ProductCardType } from "../types/productCardType";

export default function CartPage({
  cartItems,
  count,
}: {
  cartItems: ProductCardType[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductCardType[]>>;
  count: number;
}) {
  return (
    <div className="bg-black h-auto min-h-screen">
      <Navbar count={count} />
      {cartItems.length !== 0 ? (
        <div className="pt-30 flex flex-wrap justify-center items-center flex-row">
          {cartItems.map((o, idx) => (
            <div key={o.key + "-" + idx}>
              <ShopCard img={o.img} price={o.price} title={o.title} />
            </div>
          ))}
        </div>
      ) : (
        <div>
          <ShoppingCart />
          <h1 className="text-white text-xl py-100 mx-20">
            Your <span className="text-violet-500">cart </span>is empty. Please
            add items to your cart.
          </h1>{" "}
        </div>
      )}
    </div>
  );
}
