import ItemsSection from "../cardComponents/ItemsSection";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import { itemsCollection } from "../data/ItemsCollection";
import Footer from "../HrComponents/Footer";
import type { ProductCardType } from "../types/productCardType";
export default function MainPage({
  count,
  
}: {
  count: number;
  cartItems: { product: ProductCardType; quantity: number }[];
  setCartItems: React.Dispatch<React.SetStateAction<{ product: ProductCardType; quantity: number }[]>>;
}) {
  return (
    <div className="bg-black h-auto ">
      <Navbar />
      <Home />
      <ItemsSection itemsCollection={itemsCollection} count={count}  />
      <Footer />
    </div>
  );
}
