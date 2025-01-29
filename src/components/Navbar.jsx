import { useState } from "react";
import { navItem } from "../utils/navItems";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="border flex justify-between items-center p-4 bg-blue-500 w-full h-fit">
      {/* Logo */}
      <div>
        <img src="" alt="logo" className="ml-3" />
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden absolute right-5"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        ☰
      </button>

      {/* Navigation Links */}
      <ul className="hidden md:flex md:items-center gap-4 md:gap-9 mr-5">
        {navItem.map((item, index) => (
          <NavLink to={item.path} key={index} className="uppercase">
            {item.name}
          </NavLink>
        ))}
        <button className="uppercase bg-yellow-300 rounded-full px-4 py-2">
          Lets Talk
        </button>
      </ul>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="absolute top-14 left-0 w-full bg-blue-500 flex flex-col items-center gap-4 p-4 md:hidden">
          {navItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className="uppercase"
              onClick={() => setIsOpen(false)} // Close menu on link click
            >
              {item.name}
            </NavLink>
          ))}
          <button className="uppercase bg-yellow-300 rounded-full px-4 py-2">
            Lets Talk
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
