import ShopCard from "../cardComponents/ShopCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import type { ProductCardType } from "../types/productCardType";
export default function ShopPage({
  ProductsBase,
}: {
  ProductsBase: ProductCardType[];
}) {
  return (
    <>
      <div className="bg-black h-autp">
        <Navbar />
        <SearchBar />
<div className=" mt-20 flex flex-wrap justify-center items-center flex-row">
        {ProductsBase.map((i) => (
          <ShopCard
            img={i.img}
            price={i.price}
            title={i.title}
            Nitendo={i.Nitendo}
            PC={i.PC}
            Xbox={i.Xbox}
            Ai={i.Ai}
            Gfuel={i.Gfuel}
            Playstation={i.Playstation}
            Tech={i.Tech}
            discount={i.discount}
            Gaming={i.Gaming}
            key={i.key}
          />
        ))}</div>
      </div>
    </>
  );
}
