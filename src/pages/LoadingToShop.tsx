import React from "react";
import { useNavigate } from "react-router-dom";
import load from "../assets/loadingLottie1.json";
import Lottie from "lottie-react";
export default function LoadingToShop() {
  const navigate = useNavigate();
  React.useEffect(() => {
    setTimeout(() => {
      navigate("/ShopPage");
    }, 4500);
  }, [navigate]);
  return (
    
      <Lottie animationData={load} loop={true} className="size-22"/>
   
  );
}
