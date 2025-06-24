import Lottie from "lottie-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loading from "../assets/MainLoading.json";
export default function LoadingPage() {
    const navigate = useNavigate();
useEffect(() => {
    setTimeout(() => {
      navigate("/MainPage");
    }, 3000);
  }, [navigate]);

  return (
    <div className="bg-black h-screen " id="footer">
      <Lottie animationData={loading} className="size-3/4 mx-auto" />
    </div>
  );
}
