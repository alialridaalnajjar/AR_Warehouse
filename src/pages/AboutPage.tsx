import ARIMG from "../assets/ARIMG.png"; // Adjust the path and filename as needed
import About from "../components/About";
import Navbar from "../components/Navbar";

export default function AboutPage({count}: {count: number}) {
  return (
    <div className="bg-black h-auto min-h-screen">
      <Navbar count={count} />
      <div className="pt-25">
        <div className="mt-12 flex flex-row justify-center items-center">
        <img
          src={ARIMG}
          className=" rounded-full  bg-violet-500/50 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-20  size-66"
        />
      </div>
      <hr className="bg-violet-500 mt-5 mx-10" />
      <About /></div>
    </div>
  );
}
