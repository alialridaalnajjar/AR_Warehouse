import Lottie from "lottie-react";
import { Link } from "react-router-dom";
import ARIMG from "../assets/ARIMG.png";
import gameI from "../assets/GameICON.json";
import pressMe from "../assets/pressMe.json";
import About from "./About";
export default function Home() {
  return (
    <div className="bg-black h-auto w-full pt-32 ">
      <div className="flex flex-col items-center justify-center mt-10 gap-2">
        <h1 className="text-white text-3xl font-bold lg:text-5xl">Boosting Your</h1>
        <h1 className="text-violet-500  font-bold text-3xl z-10 mask-x-from-32 bg-purple-500/40 text-center p-1 rounded-md w-75 lg:text-5xl">
          Progress
        </h1>
        <h1 className="text-white  text-3xl font-bold lg:text-5xl">With Ease</h1>
      </div>
      <div className="mt-5 p-1 mx-5">
        <h2 className="text-gray-200/90 font-normal text-md text-center lg:text-2xl lg:max-w-3xl lg:mx-auto">
          Explore our premium esports gadgets, meticulously engineered for
          ultimate precision, lightning-fast reflexes, and peak competitive
          advantage. Backed by pros and gamers worldwide !
        </h2>
      </div>
      <div className="size-40 flex flex-row justify-around w-full lg:justify-around lg:mt-10 lg:mx-auto lg:max-w-3xl" >
        <Lottie animationData={gameI} loop={true} className="ml-5 lg:mx-auto" />
        <h1
          className="text-violet-500 text-5xl p-2 text-center h-full pt-6 lg:mx-auto lg:h-fit lg:text-7xl "
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          Ready To Rumble?
        </h1>
      </div>
      {/* GO TO PRODUCTS button # here we go to the PRODUCTS page */}

      <Link to="/ShopPage">
        <div className="rounded-md w-75 text-center mx-auto p-2 bg-violet-500/50 flex flex-row justify-center items-center gap-3 lg:w-96 lg:mx-auto lg:mt-10 hover:bg-violet-500/70 transition-all duration-300 ease-in-out">
          <span className="font-semibold">Get Yours Now! </span>
          <div>
            <Lottie
              animationData={pressMe}
              className="size-7 font-extrabold"
              loop={true}
            />
          </div>
        </div>
      </Link>
      {/* image SECTION # here we place the logo of website */}
      <div className="mt-12 flex flex-row justify-center items-center lg:mt-20">
        <img
          src={ARIMG}
          className=" rounded-full  bg-violet-500/50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20  size-66 lg:size-96 lg:rounded-full lg:shadow-2xl shadow-violet-500/50 shadow-lg mx-auto"
        />
      </div>
      <hr className="bg-violet-500 mt-5 mx-10" />
      <About />
    </div>
  );
}
