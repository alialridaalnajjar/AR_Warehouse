import Discounts from "../customIconsComponents/Discounts";
import type { ProductCardType } from "../types/productCardType";
export default function cardBluePrint({
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
  onClick,
}: ProductCardType) {
  return (
    <div className="flex flex-col items-start gap-1.5 mx-auto" onClick={onClick}>
      
      <div className="relative">
        {discount ? <Discounts /> : null}
        <img src={img} className="object-cover rounded-2xl size-90 p-1" />
      </div>
      <div className="flex flex-row gap-3 items-start justify-start ml-1 flex-wrap max-w-85">
        <div className="bg-teal-800 text-green-400 rounded-2xl   p-1 text-xs font-bold ">
          ${price}
        </div>
        {Gaming ? (
          <div className="bg-purple-800 text-violet-500/90 rounded-2xl   p-1 text-xs font-bold ">
            Gaming
          </div>
        ) : null}
        {discount ? (
          <div className="bg-amber-700 text-amber-400 rounded-2xl   p-1 text-xs font-bold ">
            Discount
          </div>
        ) : null}
        {Tech ? (
          <div className="bg-blue-800 text-blue-400 rounded-2xl   p-1 text-xs font-bold ">
            Tech
          </div>
        ) : null}{" "}
        {PC ? (
          <div className="bg-cyan-800 text-cyan-400 rounded-2xl   p-1 text-xs font-bold ">
            PC/Parts
          </div>
        ) : null}
        {Nitendo ? (
          <div className="bg-blue-800 text-red-800 rounded-2xl   p-1 text-xs font-bold ">
            Nitendo
          </div>
        ) : null}
        {Gfuel ? (
          <div className="bg-teal-800 text-green-400 rounded-2xl   p-1 text-xs font-bold ">
            Gfuel
          </div>
        ) : null}{" "}
        {Ai ? (
          <div className="bg-teal-800 text-green-400 rounded-2xl   p-1 text-xs font-bold ">
            Ai
          </div>
        ) : null}
        {Xbox ? (
          <div className="bg-teal-800 text-green-400 rounded-2xl   p-1 text-xs font-bold ">
            Xbox
          </div>
        ) : null}
        {Playstation ? (
          <div className="bg-teal-800 text-green-400 rounded-2xl   p-1 text-xs font-bold ">
            Playstation
          </div>
        ) : null}
      </div>
      <h1 className="text-xl font-semibold text-white ml-1 max-w-85">
        {title}
      </h1>
      <div>{/*empty div for styling purposes ONLY */}</div>
    </div>
  );
}
