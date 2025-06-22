import { House, Menu, ShieldAlert, ShoppingBasket, ShoppingCart, Signature, User, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
export default function Navbar({count}: {count: number}) {
  const [isNavClicked, setIsNavClicked] = React.useState(true);
  const handleNavClick = () => {
    if (isNavClicked) {
      setIsNavClicked(false);
    } else {
      setIsNavClicked(true);
    }
  };
  return (
    <>
      {isNavClicked ? (
        <div className="fixed w-full bg-black z-50">
          <div className="flex flex-row items-center justify-between w-full p-7 gap-5 h-fit">
            <Link to="/MainPage">
              <h1 className="text-violet-500 font-extrabold text-xl">
                AR Warehouse
              </h1>
            </Link>
            <Link to="/CartPage" className="ml-auto">
              <div className="relative">
                <div className="absolute right-0 bg-violet-500 rounded-full  text-sm    ">
                  {count !== 0 ? count : 0}
                </div>
                <ShoppingCart className="ml-auto size-10 text-violet-500 border-1 border-violet-500 p-2 rounded-md font-extrabold" />
              </div>
            </Link>
            <Menu
              className="size-10 text-violet-500"
              onClick={handleNavClick}
            />
          </div>
          <hr className="custom-hr rounded-4xl" style={{}} />
        </div>
      ) : (
        <div className=" fixed inset-0 backdrop-blur-xs z-50 ">
          {/* OverLay taking whole screen and another div inside it !!*/}
          <div className="absolute z-10 right-0 w-40 h-fit  flex flex-col items-end justify-end pt-2 gap-2 bg-black/30 shadow-lg shadow-violet-500/50 rounded-l-2xl p-1">
            <X className="text-white mr-2 mt-2 " onClick={handleNavClick} />
            <Link to="/MainPage" className="w-full mr-2.5">
              <div className="flex-row items-center justify-start gap-6 flex w-full ml-2.5">
                <House className=" size-7 text-violet-500" />
                <h1 className="text-violet-500 text-2xl ">Home</h1>
              </div>
            </Link>
            <Link to="/ShopPage" className="w-full mr-2.5">
              <div className="flex-row items-center justify-start gap-6 flex w-full  ml-2.5">
                <ShoppingBasket className=" size-7 text-violet-500" />
                <h1 className="text-violet-500 text-2xl ">Products</h1>
              </div>
            </Link>
            <Link to="/AboutPage" className="w-full mr-2.5">
              <div className="flex-row items-center justify-start gap-6 flex w-full  ml-2.5">
                <ShieldAlert className=" size-7 text-violet-500" />
                <h1 className="text-violet-500 text-2xl ">About</h1>
              </div>
            </Link>
            <Link to="/ShopPage" className="w-full mr-2.5">
              <div className="flex-row items-center justify-start gap-6 flex w-full  ml-2.5">
                <Signature className=" size-7 text-violet-500" />
                <h1 className="text-violet-500 text-2xl ">Contact</h1>
              </div>
            </Link>
            <hr className="custom-hr rounded-4xl h-full w-full" />
            <Link to="/ShopPage" className="w-full mr-2.5">
              {" "}
              <div className="flex-row items-center justify-start gap-6 flex w-full  ml-2.5">
                <User className=" size-7 text-violet-500" />
                <h1 className="text-violet-500 text-2xl ">Account</h1>
              </div>
            </Link>
          </div>
        </div>
      )}
      <style>
        {`
          .custom-hr {
            background: #6d28d9;
            height: 4px;
            border: none;
            width: 100%;
            margin: 0 auto;
            animation: shrinkExpand 5s ease-in-out infinite;
          }
          @keyframes shrinkExpand {
            0%, 100% { width: 100%; }
            50% { width: 25%; }
          }
        `}
      </style>
    </>
  );
}
