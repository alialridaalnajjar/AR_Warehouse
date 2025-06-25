import ItemsSection from "../cardComponents/ItemsSection";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import { itemsCollection } from "../data/ItemsCollection";
import Footer from "../HrComponents/Footer";
import type { ProductCardType } from "../types/productCardType";
export default function MainPage({
  count,
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  count: number;
  cartItems: { product: ProductCardType; quantity: number }[];
  setCartItems: React.Dispatch<React.SetStateAction<{ product: ProductCardType; quantity: number }[]>>;
}) {
  return (
    <div className={`${darkMode ? "bg-black" : "bg-slate-700"} min-h-screen`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Home darkMode={darkMode} />
      <ItemsSection itemsCollection={itemsCollection} count={count} darkMode={darkMode}  />
      <div id="footer">
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
