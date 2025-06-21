import React from "react";
import type { ProductCardType } from "../types/productCardType";
import CardBluePrint from "./CardBluePrint";

export default function ItemsSection({
  itemsCollection,
}: {
  itemsCollection: ProductCardType[];
}) {
  return (
    <div className="bg-black">
      <h1 className="text-white text-4xl mx-10 font-semibold">Featured <span className="text-violet-500">Now</span></h1>

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
          />
        ))}
      </section>
    </div>
  );
}
