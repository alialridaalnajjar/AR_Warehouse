import Navbar from "../components/Navbar";
import type { ProductCardType } from "../types/productCardType";

export default function CartPage({
  cartItems,
  
}: {
  cartItems: ProductCardType[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductCardType[]>>;
}) {
  return (
    <div className="bg-black h-auto min-h-screen">
      {cartItems.length !== 0 ? (
        <div>
          <Navbar />

          {cartItems.length !== 0 ? (
            <div>
              {cartItems.map((o) => (
                <div key={o.key}>{o.title}</div>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
