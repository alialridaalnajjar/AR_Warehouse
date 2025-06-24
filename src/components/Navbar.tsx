import { House, Menu, ShieldAlert, ShoppingBasket, Signature, User, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/ARIMG.png";
export default function Navbar() {
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
              <h1 className="text-violet-500 font-extrabold text-xl lg:text-3xl lg:ml-10 ">
                AR Warehouse
              </h1>
            </Link>
            <Link to="/MainPage" className="ml-auto">
           <img src={img} className="size-18 rounded-full lg:size-20 lg:mr-20 "/>
           </Link>
            <Menu
              className="size-10 text-violet-500 lg:size-12"
              onClick={handleNavClick}
            />
          </div>
          <hr className="custom-hr rounded-4xl" style={{}} />
        </div>
      ) : (
        <div className=" fixed inset-0 backdrop-blur-xs z-50 ">
          {/* OverLay taking whole screen and another div inside it !!*/}
          <div
    className="absolute z-10 right-0 w-40 h-fit flex flex-col items-end justify-end pt-2 gap-2 bg-black/30 shadow-lg shadow-violet-500/50 rounded-l-2xl p-1
      animate-slide-in"
  >
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
          @keyframes slide-in {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
.animate-slide-in {
  animation: slide-in 0.4s cubic-bezier(0.4,0,0.2,1) both;
}
        `}
      </style>
    </>
  );
}
