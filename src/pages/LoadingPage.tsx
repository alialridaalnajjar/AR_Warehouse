import Lottie from "lottie-react";
import loading from "../assets/MainLoading.json";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function LoadingPage() {
    const navigate = useNavigate();
useEffect(() => {
    setTimeout(() => {
      navigate("/MainPage");
    }, 3000);
  }, [navigate]);

  return (
    <div className="bg-black h-screen">
      <Lottie animationData={loading} className="size-3/4 mx-auto" />
    </div>
  );
}
