import ItemsSection from "../cardComponents/ItemsSection";
import Home from "../components/Home";
import Navbar from "../components/Navbar";
import { itemsCollection } from "../data/ItemsCollection";
export default function MainPage({count}: {count: number; setCount: React.Dispatch<React.SetStateAction<number>>}) {
  return (
    <div className="bg-black h-auto ">
      <Navbar count={count}  />
      <Home />
      <ItemsSection itemsCollection={itemsCollection}  />
      <div>fgdsa</div>
    </div>
  );
}
