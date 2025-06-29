import ARIMG from "../assets/ARIMG.png"; // Adjust the path and filename as needed
import About from "../components/About";
import Navbar from "../components/Navbar";
import CartComponent from "../HrComponents/CartComponent";
import Footer from "../HrComponents/Footer";

export default function AboutPage({
  count,
  darkMode,
  setDarkMode,
}: {
  count: number;
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className={`${darkMode?"bg-black":"bg-slate-700"} h-auto min-h-screen`}>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="pt-32">
        <div className="mt-12 flex flex-row justify-center items-center">
          <img
            src={ARIMG}
            className=" rounded-full  bg-violet-500/50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20  size-66"
          />
        </div>
        <hr className="bg-violet-500 mt-5 mx-10" />
        <About />
      </div>
      <CartComponent count={count} />
      <div id="footer" className="mt-10">
        <Footer darkMode={darkMode} />
      </div>
    </div>
  );
}
