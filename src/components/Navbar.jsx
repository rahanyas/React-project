import { useState } from "react";
import { navItem } from "../utils/navItems";
import { NavLink } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";
import { IoClose } from "react-icons/io5"; // Import close icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white flex justify-between items-center p-4 shadow-md z-50">
      <div>
        <img src="/Logo.png" alt="logo" className="ml-3 w-19" />
      </div>

      {/* Mobile Menu Button  */}
      <button 
        className="md:hidden absolute right-5 cursor-pointer rounded-full px-3 py-2 hover:bg-gray-200 transition ease-in-out duration-300"
        onClick={() => setIsOpen(true)} 
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Links (Desktop) */}
      <ul className="hidden md:flex md:items-center gap-4 md:gap-9 mr-5">
        {navItem.map((item, index) => (
          <NavLink 
            to={item.path} 
            key={index} 
            className="uppercase text-gray-700 hover:text-blue-500  transition duration-300"
          >
            {item.name}
          </NavLink>
        ))}
        <button className="uppercase border rounded-full px-4 py-2 flex items-center gap-2 hover:bg-blue-500 transition ease-in duration-300 hover:text-white cursor-pointer">
          Lets Talk
          <GoArrowUpRight />
        </button>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex flex-col items-center justify-center z-50 transition-transform duration-300">
          <button 
            className="absolute top-5 right-5 text-white text-3xl"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <IoClose />
          </button>

          {/* Mobile Navigation Links */}
          <ul className="flex flex-col items-center gap-6 text-white text-lg">
            {navItem.map((item, index) => (
              <NavLink
                to={item.path}
                key={index}
                className="uppercase text-white hover:text-blue-300  transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </ul>

          <button className="mt-5 uppercase border border-white rounded-full px-6 py-3 flex items-center gap-2 text-white hover:bg-white hover:text-black transition ease-in duration-30 cursor-pointer">
            Lets Talk
            <GoArrowUpRight />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
