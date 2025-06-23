import { useState } from "react";
import ShopCard from "../cardComponents/ShopCard";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CartComponent from "../HrComponents/CartComponent";
import type { ProductCardType } from "../types/productCardType";
export default function ShopPage({
  ProductsBase,
  setCartItems,
  setCount,
  count,
}: {
  ProductsBase: ProductCardType[];
  cartItems: ProductCardType[];
  setCartItems: React.Dispatch<React.SetStateAction<ProductCardType[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}) {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);

  const myProducts = ProductsBase.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      selectedCategory.length === 0 ||
      selectedCategory.some((cat) => product[cat as keyof ProductCardType]);
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <div className="bg-black h-auto min-h-screen">
        <Navbar />
        <SearchBar
          search={search}
          setSearch={setSearch}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        {myProducts.length !== 0 && search !== "" ? (
          <h1 className="text-white text-lg mt-10 mx-20">
            Results for: <span className="text-violet-500">{search}</span>{" "}
          </h1>
        ) : myProducts.length === 0 && search !== "" ? (
          <h1 className="text-white text-lg mt-5 mx-20">
            "{search}" has returned{" "}
            <span className="text-violet-500">{myProducts.length}</span> results{" "}
          </h1>
        ) : null}
        <div className=" mt-20 flex flex-wrap justify-center items-center flex-row">
          {myProducts.map((i) => (
            <div
              onClick={() => {
                setCartItems((prev) => [...prev, i]);
                setCount((prev) => prev + 1);
              }}
            >
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
            </div>
          ))}
        </div>
        <CartComponent count={count} />
      </div>
    </>
  );
}
