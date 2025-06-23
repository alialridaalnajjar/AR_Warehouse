import { ShoppingCart } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CartComponent({count}: {count: number}) {
  return (
    <div className="fixed bottom-10 right-10 z-50">
        <Link to="/CartPage" className="ml-auto">
          <div className="relative">
            <div className="absolute top-[-25px] right-[-5px] font-extrabold text-violet-800 rounded-full  text-sm p-2   ">
              {count !== 0 ? count : null}
            </div>
            <ShoppingCart className="ml-auto size-10 text-violet-500 border-2 border-violet-800 p-2 rounded-md font-extrabold lg:size-15" />
          </div>
        </Link>
      </div>
  )
}
