import { AudioLines } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import SlashedHr from './slashedHr';
export default function Footer({ darkMode }: { darkMode: boolean }) {
  return (
    <div className={`relative bottom-0 pt-12 h-auto ${darkMode ? "bg-black text-white" : "bg-slate-700 text-purple-700"}`}>
        <SlashedHr/>
        <div className='flex flex-row items-center justify-center gap-1'>
            <AudioLines className='text-violet-500'/>
            <h1 className='text-2xl font-semibold'> <span className="text-violet-500 ">AR</span> Warehouse</h1>
        </div>
        <div className='flex flex-row items-center justify-center gap-3 mt-4'>
          <a href="https://instagram.com/hereisrawr">
            <FaInstagram className='text-violet-500 size-10  mt-2'  /></a>
            <a href="https://github.com/alialridaalnajjar">
            <FaGithub className='text-violet-500 size-10  mt-2' /></a>
        </div>
        <div className='text-center mt-2 pb-4 font-semibold'>
          &copy; {new Date().getFullYear()} AR Warehouse. All rights reserved.
        </div>
    </div>
  )
}
