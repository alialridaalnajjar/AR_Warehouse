import { House, Menu, ShieldAlert, ShoppingBasket, Signature, SunMoon, User, X } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({darkMode, setDarkMode}: {darkMode: boolean; setDarkMode: React.Dispatch<React.SetStateAction<boolean>>}) {
  const [isNavClicked, setIsNavClicked] = React.useState(true);
  const [isAnimating, setIsAnimating] = React.useState(false);
  const handleNavClick = () => setIsNavClicked((prev) => !prev);

  const handleSunMoonClick = () => {
    setIsAnimating(true);
    setDarkMode((prev) => !prev);
  };

  return (
    <>
      {isNavClicked ? (
        <div className={`fixed w-full z-50 caret-transparent ${darkMode ? "bg-black" : "bg-slate-700"}`}>
          <div className="flex flex-row items-center justify-between w-full p-7 gap-5 h-fit">
            <Link to="/MainPage">
              <h1 className={`${darkMode ? "text-violet-500" : "text-purple-700"} font-extrabold text-xl lg:text-3xl lg:ml-10`}>
                AR Warehouse
              </h1>
            </Link>
            <SunMoon
              className={`size-6 lg:size-8 ${darkMode ? "text-violet-500" : "text-purple-700"} ml-auto mr-0.5 ${isAnimating ? "sunmoon-animate" : ""}`}
              onClick={handleSunMoonClick}
              onAnimationEnd={() => setIsAnimating(false)}
            />
            <Menu
              className={`size-10 ${darkMode ? "text-violet-500" : "text-purple-700"} lg:size-12`}
              onClick={handleNavClick}
            />
          </div>
          <hr className="custom-hr rounded-4xl" />
        </div>
      ) : (
        <div className="fixed inset-0 z-50 caret-transparent">
          {/* Sidebar */}
          <div className="absolute z-10 right-0 w-40 h-fit flex flex-col items-end justify-end pt-2 gap-2 bg-black/30 shadow-lg shadow-violet-500/50 rounded-l-2xl p-1 animate-slide-in-right">
            <X className="text-white mr-2 mt-2" onClick={handleNavClick} />
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
            <a href="#footer" className="w-full mr-2.5">
              <div className="flex-row items-center justify-start gap-6 flex w-full  ml-2.5">
                <Signature className=" size-7 text-violet-500" />
                <h1 className="text-violet-500 text-2xl ">Contact</h1>
              </div>
            </a>
            <hr className="custom-hr rounded-4xl h-full w-full" />
            <Link to="/ShopPage" className="w-full mr-2.5">
              {" "}
              <div className="flex-row items-center justify-start gap-6 flex w-full  ml-2.5">
                <User className=" size-7 text-violet-500" />
                <h1 className="text-violet-500 text-2xl ">Account</h1>
              </div>
            </Link>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 animate-fade-in" onClick={handleNavClick}></div>
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
          @keyframes slide-in-right {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          .animate-slide-in-right {
            animation: slide-in-right 0.4s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-fade-in {
            animation: fade-in 0.4s cubic-bezier(0.4,0,0.2,1) both;
          }
          @keyframes rotate-sunmoon {
            from { transform: rotate(0deg);}
            to { transform: rotate(360deg);}
          }
          .sunmoon-animate {
            animation: rotate-sunmoon 0.5s cubic-bezier(0.4,0,0.2,1);
          }
        `}
      </style>
    </>
  );
}
