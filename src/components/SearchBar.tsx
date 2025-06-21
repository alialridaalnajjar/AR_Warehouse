import { Search } from "lucide-react";
import { SlidersHorizontal } from 'lucide-react';
export default function SerachBar() {
  return (
    <div className="pt-30 flex flex-row items-center justify-around">
    <div className="rounded-xl flex flex-row justify-around items-center border-1 border-violet-500/50 bg-black/30 w-69 h-12  p-0.5 ">
      <input placeholder=" Search.." type="text" className="  focus:outline-none rounded-3xl text-white p-0.5 text-lg" />
      <Search className="text-violet-500/80 "/>
    </div>
    <div className="border-1 border-violet-500/50 rounded-xl p-2"><SlidersHorizontal className="size-6 text-violet-500/70"/></div>
    </div>
  );
}
