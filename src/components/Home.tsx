import Lottie from "lottie-react";
import GymFeat from "../assets/GymFeat.json";
import pressMe from "../assets/pressMe.json";
import { Link } from "react-router-dom";
import ARIMG from "../assets/ARIMG.png";
export default function Home() {
  return (
    <div className="bg-black h-auto pt-25 ">
      <div className="flex flex-col items-center justify-center mt-10 gap-2">
        <h1 className="text-white text-3xl font-bold">Boosting Your</h1>
        <h1 className="text-violet-500  font-bold text-3xl z-10 mask-x-from-32 bg-purple-500/40 text-center p-1 rounded-md w-75">
          Progress
        </h1>
        <h1 className="text-white  text-3xl font-bold">With Ease</h1>
      </div>
      <div className="mt-5 p-1 mx-5">
        <h2 className="text-gray-200/90 font-normal text-md text-center ">
          Discover our premium gym equipment, meticulously engineered for
          maximum gains, faster recovery, and peak performance. Backed by
          science, trusted by professionals and experts.
        </h2>
      </div>
      <div className="size-40 flex flex-row justify-around w-full">
        <Lottie animationData={GymFeat} loop={true} className="ml-5" />
        <h1
          className="text-violet-500 text-5xl p-2 text-center h-full pt-6"
          style={{ fontFamily: "'Brush Script MT', cursive" }}
        >
          Ready To Rumble?
        </h1>
      </div>
      {/* GO TO PRODUCTS button # here we go to the PRODUCTS page */}

      <Link to="/">
        <div className="rounded-md w-95 text-center mx-auto p-2 bg-violet-500/50 flex flex-row justify-center items-center gap-3">
          <span>Get Yours Now! </span>
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
      <div className="mt-12 flex flex-row justify-center items-center">
        <img
          src={ARIMG}
          className=" rounded-full bg-violet-500/50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20  size-66"
        />
      </div>
    </div>
  );
}
