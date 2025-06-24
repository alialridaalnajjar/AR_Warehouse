import { useState } from "react";
import ShopCard from "../cardComponents/ShopCard";
import AddedToCartSuccesfuly from "../components/AddedToCartSuccesfuly";
import Navbar from "../components/Navbar";
import SearchBar from "../components/SearchBar";
import CartComponent from "../HrComponents/CartComponent";
import Footer from "../HrComponents/Footer";
import type { ProductCardType } from "../types/productCardType";

export default function ShopPage({
  ProductsBase,
  
  setCartItems,
  setCount,
  count,
}: {
  ProductsBase: ProductCardType[];
  cartItems: { product: ProductCardType; quantity: number }[];
  setCartItems: React.Dispatch<React.SetStateAction<{ product: ProductCardType; quantity: number }[]>>;
  setCount: React.Dispatch<React.SetStateAction<number>>;
  count: number;
}) {
  const [renderAddedToCart, setRenderAddedToCart] = useState(false);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<ProductCardType | null>(null);
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1);

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
              key={i.key}
              onClick={() => {
                setSelectedProduct(i);
                setSelectedQuantity(1); // Reset quantity when opening modal
              }}
              className="cursor-pointer"
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
              />
            </div>
          ))}
        </div>
        <CartComponent count={count} />
        {renderAddedToCart ? <AddedToCartSuccesfuly /> : null}
      </div>
      <Footer />
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full modal-fade-in">
            <h2 className="text-xl font-bold mb-2">{selectedProduct.title}</h2>
            <img
              src={selectedProduct.img}
              className="w-32 h-32 object-cover mx-auto mb-4"
            />
            <p className="mb-4 text-violet-700 font-semibold">
              ${(selectedProduct.price * selectedQuantity).toFixed(2)}
              <span className="text-gray-500 text-sm ml-2">
                (${selectedProduct.price.toFixed(2)} each)
              </span>
            </p>
            <div className="flex items-center gap-2 mb-4">
              <button
                className="bg-gray-200 px-3 py-1 rounded text-lg font-bold"
                onClick={() => setSelectedQuantity(q => Math.max(1, q - 1))}
              >-</button>
              <span className="font-bold text-lg">{selectedQuantity}</span>
              <button
                className="bg-gray-200 px-3 py-1 rounded text-lg font-bold"
                onClick={() => setSelectedQuantity(q => q + 1)}
              >+</button>
            </div>
            <button
              className="bg-violet-500 text-white px-4 py-2 rounded mr-2"
              onClick={() => {
                setCartItems(prev => {
                  const found = prev.find(item => item.product.key === selectedProduct.key);
                  if (found) {
                    return prev.map(item =>
                      item.product.key === selectedProduct.key
                        ? { ...item, quantity: item.quantity + selectedQuantity }
                        : item
                    );
                  } else {
                    return [...prev, { product: selectedProduct, quantity: selectedQuantity }];
                  }
                });
                setCount(prev => prev + selectedQuantity);
                setRenderAddedToCart(true);
                setSelectedProduct(null);
                setTimeout(() => {
                  setRenderAddedToCart(false);
                }, 3000);
              }}
            >
              Add to Cart
            </button>
            <button
              className="bg-gray-300 text-black px-4 py-2 rounded"
              onClick={() => setSelectedProduct(null)}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
      <style>
        {`
          @keyframes modal-fade-in {
            from { opacity: 0; transform: scale(0.95);}
            to { opacity: 1; transform: scale(1);}
          }
          .modal-fade-in {
            animation: modal-fade-in 0.4s cubic-bezier(0.4,0,0.2,1) both;
          }
        `}
      </style>
    </>
  );
}
