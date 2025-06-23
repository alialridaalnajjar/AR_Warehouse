import Lottie from "lottie-react";
import React from "react";
import addToCart from "../assets/addedTocartIconM.json";
export default function AddedToCartSuccesfuly() {
    React.useEffect(()=>{
        setTimeout(() => {
          
        }, 2960);
      }, []);
console.log("AddedToCartSuccesfuly component rendered");
    
  

  return (
   <>
      <div className="fixed z-50 bottom-7.5  h-fit w-fit ">
        <div className="flex flex-col justify-center   rounded-lg shadow-lg ml-8">
         <Lottie animationData={addToCart} className="size-30"/>
         <h1 className=" fade-in  via-violet-800 font-bold text-sm bg-violet-500/80  rounded-full p-1">Added To Cart Successfully</h1>
        </div>
      </div>
           <style>
        {`
          @keyframes fade-in {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .fade-in {
            animation: fade-in 2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
        `}
      </style>
    </>
  );
}
