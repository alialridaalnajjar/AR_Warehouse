import Lottie from "lottie-react";
import React from "react";
import { Link } from "react-router-dom";
import pressMe from "../assets/pressMe.json";
import CartComponent from "../HrComponents/CartComponent";
import SlashedHr from "../HrComponents/slashedHr";
import LoadingToShop from "../pages/LoadingToShop";
import type { ProductCardType } from "../types/productCardType";
import CardBluePrint from "./CardBluePrint";

export default function ItemsSection({
  itemsCollection,
  count,
  darkMode,
}: {
  darkMode: boolean;
  itemsCollection: ProductCardType[];
  count: number;
}) {
  const [loading, setLoading] = React.useState(false);
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex flex-col justify-center items-center backdrop-blur-2xl bg-black/70">
        <LoadingToShop />
        <h1
          className="text-violet-500 font-bold mt-6 animate-shop-text"
        >
          Taking you to the shop
        </h1>
        <style>
          {`
          @keyframes shop-text {
            from { opacity: 0; transform: translateY(30px);}
            to { opacity: 1; transform: translateY(0);}
          }
          .animate-shop-text {
            animation: shop-text 1.2s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}
        </style>
      </div>
    );
  }
  return (
    <div
      className={` ${
        darkMode ? "bg-black" : "bg-slate-700"
      }mt-10 w-full h-auto`}
    >
      <SlashedHr />
      <h1 className="text-white text-4xl mx-10 font-semibold lg:text-6xl  lg:max-w-3xl lg:p-2 lg:ml-16 lg:my-10 ">
        Featured <span className="text-violet-500">Now</span>
      </h1>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4 p-4 lg:grid-cols-4 lg:gap-2 lg:p-10  lg:mx-auto ">
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
            onClick={() => setLoading(true)}
          />
        ))}
      </section>
      <Link to="/ShopPage">
        <div className="rounded-lg w-45 text-center mx-auto p-2 bg-violet-500/50 flex flex-row justify-center items-center gap-3 lg:w-96 lg:mx-auto lg:mt-10 hover:bg-violet-500/70 transition-all duration-300 ease-in-out">
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
