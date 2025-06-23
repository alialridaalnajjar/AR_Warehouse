import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import pressMe from "../assets/pressMe.json";
import SlashedHr from "../HrComponents/slashedHr";
import type { ProductCardType } from "../types/productCardType";
import CardBluePrint from "./CardBluePrint";
import CartComponent from "../HrComponents/CartComponent";

export default function ItemsSection({
  itemsCollection,
  count,
}: {
  itemsCollection: ProductCardType[];
  count: number;
}) {

  return (
    <div className="bg-black mt-10 w-full h-auto">
      <SlashedHr />
      <h1 className="text-white text-4xl mx-10 font-semibold">
        Featured <span className="text-violet-500">Now</span>
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {itemsCollection.map((i) => (
          <CardBluePrint
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
            key={i.key} // Ensure each item has a unique key
          />
        ))}
      </section>
      <Link to="/ShopPage">
        <div className="rounded-lg w-45 text-center mx-auto p-2 bg-violet-500/50 flex flex-row justify-center items-center gap-3">
          <span className="font-semibold">Shop Now!</span>
          <div>
            <Lottie
              animationData={pressMe}
              className="size-7 font-extrabold"
              loop={true}
            />
          </div>
        </div>
      </Link>
       <CartComponent count={count} />
    </div>
  );
}
