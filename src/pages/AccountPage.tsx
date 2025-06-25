import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../HrComponents/Footer";

export default function AccountPage({
  darkMode,
  setDarkMode,
}: {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [showPopup, setShowPopup] = React.useState(false);

  return (
    <div
      className={`caret-transparent min-h-screen flex flex-col ${
        darkMode ? "bg-black text-white" : "bg-slate-700 text-black"
      }`}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="flex-1 flex items-center justify-center">
        <button
          className="text-2xl font-semibold rounded-xl border-1 border-violet-500 p-1.5 caret-transparent bg-violet-500/10 hover:bg-violet-500/30 transition"
          onClick={() => setShowPopup(true)}
        >
          Login
        </button>
      </div>
      {showPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white text-black rounded-xl shadow-xl p-6 min-w-[250px] flex flex-col items-center">
            <span className="text-lg font-bold mb-2">Coming Soon!</span>
            <span className="mb-4">This feature will be added soon.</span>
            <button
              className="mt-2 px-4 py-1 rounded bg-violet-500 text-white font-semibold hover:bg-violet-600 transition"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
      <Footer darkMode={darkMode} />
    </div>
  );
}
