import Discounts from "../customIconsComponents/Discounts";
import type { ProductCardType } from "../types/productCardType";
export default function ShopCard({
  img,
  price,
  title,
  discount,
  Ai,
  Tech,
  Nitendo,
  Gfuel,
  Xbox,
  Playstation,
  PC,
  Gaming,
}: ProductCardType) {
  return (
    <div className="flex flex-col items-start gap-2 mx-auto p-2 lg:p-4 lg:max-w-md lg:w-[350px] max-w-43 ">
      <div className="relative w-full">
        {discount ? <Discounts /> : null}
        <div className="flex flex-col items-center justify-center relative">
          <img
            src={img}
            className="object-cover rounded-2xl size-45  lg:size-[300px]"
          />
        </div>
      </div>
      <div className="flex flex-row gap-2.5 items-start justify-start ml-1 flex-wrap max-w-45 lg:max-w-full">
        <div className="bg-teal-800 text-green-400 rounded-2xl p-1 text-xs font-bold lg:text-base">
          ${price}
        </div>
        {Gaming ? (
          <div className="bg-purple-800 text-violet-500/90 rounded-2xl p-1 text-xs font-bold lg:text-base">
            Gaming
          </div>
        ) : null}
        {discount ? (
          <div className="bg-amber-700 text-amber-400 rounded-2xl p-1 text-xs font-bold lg:text-base">
            Discount
          </div>
        ) : null}
        {Tech ? (
          <div className="bg-blue-800 text-blue-400 rounded-2xl p-1 text-xs font-bold lg:text-base">
            Tech
          </div>
        ) : null}
        {PC ? (
          <div className="bg-cyan-800 text-cyan-400 rounded-2xl p-1 text-xs font-bold lg:text-base">
            PC/Parts
          </div>
        ) : null}
        {Nitendo ? (
          <div className="bg-blue-800 text-red-800 rounded-2xl p-1 text-xs font-bold lg:text-base">
            Nitendo
          </div>
        ) : null}
        {Gfuel ? (
          <div className="bg-teal-800 text-green-400 rounded-2xl p-1 text-xs font-bold lg:text-base">
            Gfuel
          </div>
        ) : null}
        {Ai ? (
          <div className="bg-teal-800 text-green-400 rounded-2xl p-1 text-xs font-bold lg:text-base">
            Ai
          </div>
        ) : null}
        {Xbox ? (
          <div className="bg-teal-800 text-green-400 rounded-2xl p-1 text-xs font-bold lg:text-base">
            Xbox
          </div>
        ) : null}
        {Playstation ? (
          <div className="bg-teal-800 text-green-400 rounded-2xl p-1 text-xs font-bold lg:text-base">
            Playstation
          </div>
        ) : null}
      </div>
      <h1 className="text-md font-semibold text-white ml-1 max-w-45 lg:text-2xl lg:max-w-full">
        {title}
      </h1>
      <div>{/*empty div for styling purposes ONLY */}</div>
    </div>
  );
}
