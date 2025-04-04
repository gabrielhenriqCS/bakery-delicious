import { Link } from 'react-router-dom';
import logoBakery from '../assets/logobakery.png'
import bagIcon from '../assets/bagicon.png'
import { useState } from 'react';

export default function Navbar() {
  const [bag, setBag] = useState(['product, bag']);

  return (
    <nav className="fixed w-full top-0 flex p-2 bg-amber-200 shadow-md items-center">
      <div>
        <Link to="/" className="flex items-center gap-2">
          <img src={logoBakery} alt='logo Padaria Delicia' className='h-10 md:h-16 md:w-16 w-10 mr-2 object-contain'/>
        </Link>
      </div>
      <div className="flex justify-center font-bold w-full">
      <div className="flex justify-between gap-6">
        <Link to="/" className="text-lg text-gray-700 hover:text-yellow-600 transition no-underline">
          Home
        </Link>
        <Link to="/menu" className="text-lg text-gray-700 hover:text-yellow-600 transition no-underline">
          Menu
        </Link>
        <Link to="/orders" className="text-lg text-gray-700 hover:text-yellow-600 transition no-underline">
          Orders
        </Link>
      </div>
      </div>
      
      <div>
        <img onClick={() => { setBag([...bag, "Novo produto"]) }} src={bagIcon} alt="Sacola de Compras" className='cursor-pointer h-10 md:h-10 md:w-10 w-10 object-contain' />
        {
          bag.length === 0 ? '' : (
            <span className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-2 text-xs font-bold">
              {bag.length}
            </span>
          )
        }
      </div>
    </nav>
  );
}