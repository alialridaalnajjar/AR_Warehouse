import ItemsSection from "../cardComponents/ItemsSection";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import { itemsCollection } from "../data/ItemsCollection";
export default function MainPage() {
  return (
    <div className="bg-black h-auto ">
      <Navbar />
      <Home />
      <ItemsSection itemsCollection={itemsCollection}  />
      <div>fgdsa</div>
    </div>
  );
}
