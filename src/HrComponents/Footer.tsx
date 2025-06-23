import { AudioLines } from 'lucide-react';
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import SlashedHr from './slashedHr';
export default function Footer() {
  return (
    <div className='relative bottom-0 pt-12 bg-black h-auto '>
        <SlashedHr/>
        <div className='flex flex-row items-center justify-center gap-1'>
            <AudioLines className='text-violet-500'/>
            <h1 className='text-white text-2xl font-semibold'> <span className="text-violet-500 ">AR</span> Warehouse</h1>
        </div>
        <div className='flex flex-row items-center justify-center gap-3 mt-4'>
            <FaInstagram className='text-violet-500 size-10  mt-2' href='https://instagram.com/hereisrawr' />
            <FaGithub className='text-violet-500 size-10  mt-2' href='https://github.com/alialridaalnajjar' />
        </div>
        <div className='text-white text-center mt-2 pb-4'>© 2025 Ali Al Najjar - All Rights Reserved.</div>



    </div>
  )
}
