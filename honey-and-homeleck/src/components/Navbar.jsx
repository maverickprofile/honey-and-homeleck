import { useState } from "react";
import {
  FaPhone,
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaTumblr,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const leftItems = ["Home", "Shop", "Portfolio"];
  const rightItems = ["Features", "Courses", "Pages"];

  const NavGroup = ({ items }) => (
    <div className="flex gap-6 lg:gap-8">
      {items.map((item) => (
        <div
          key={item}
          className="group relative cursor-pointer hover:text-gray-300 transition-colors"
        >
          {item}
          {/* Dropdown Placeholder */}
          <div className="absolute left-0 top-full mt-1 hidden group-hover:block bg-black px-4 py-2 z-10">
            <p className="text-sm">Dropdown item 1</p>
            <p className="text-sm">Dropdown item 2</p>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <header className="bg-black text-white text-sm w-full">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 py-2">
        <span className="uppercase font-semibold tracking-wider text-xs sm:text-sm">
          Honey and Homeleck
        </span>

        <div className="hidden md:flex items-center gap-3 text-xs sm:text-sm">
          <FaPhone className="text-xs" />
          <span>(000) 123-4567</span>
          <FaFacebookF />
          <FaTwitter />
          <FaYoutube />
          <FaPinterestP />
          <FaTumblr />
          <FaInstagram />
        </div>

        {/* Hamburger Icon */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-center px-6 md:px-10 py-4 space-x-12 lg:space-x-20">
        {/* Left Nav */}
        <NavGroup items={leftItems} />

        {/* Center Logo */}
        <div className="flex-shrink-0">
          <img
            src="/Honey and hemlock Black logo (1).png"
            alt="Logo"
            className="max-w-[160px] md:max-w-[220px] lg:max-w-[280px] mx-auto"
          />
        </div>

        {/* Right Nav */}
        <NavGroup items={rightItems} />
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <nav className="md:hidden px-6 py-4 space-y-2 bg-black border-t border-gray-800">
          {[...leftItems, ...rightItems].map((item) => (
            <div
              key={item}
              className="py-2 border-b border-gray-700 text-center hover:text-gray-300"
            >
              {item}
            </div>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Navbar;
