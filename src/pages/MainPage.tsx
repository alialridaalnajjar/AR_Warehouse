import ItemsSection from "../cardComponents/ItemsSection";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import { itemsCollection } from "../data/ItemsCollection";
export default function MainPage() {
  return (
    <div className="bg-blue-900 h-screen">
     
        <Navbar />
      
      <Home />
      <ItemsSection itemsCollection={itemsCollection} />
      <div></div>
    </div>
  );
}
