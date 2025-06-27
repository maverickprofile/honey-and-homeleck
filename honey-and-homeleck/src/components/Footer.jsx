import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
  FaTumblr,
  FaInstagram,
  FaBehance,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-4 sm:px-6 lg:px-8 text-center">
      {/* Logo */}
      <div className="mb-8">
        <img
          src="/Honey and hemlock Black logo (1).png"
          alt="Logo"
          className="mx-auto h-50 grayscale hover:grayscale-0 transition-all duration-500"
        />
      </div>

      {/* Navigation Links */}
      <nav className="mb-6 text-sm tracking-wide flex flex-wrap justify-center gap-x-4 gap-y-2 text-gray-400">
        {["Home", "About", "Services", "Portfolio", "Blog", "Contact"].map(
          (item, index) => (
            <span key={item} className="hover:text-white transition-colors">
              {item}
              {index !== 5 && (
                <span className="mx-2 text-gray-600">/</span>
              )}
            </span>
          )
        )}
      </nav>

      {/* Social Icons */}
      <div className="flex justify-center gap-6 text-xl text-gray-400">
        <FaFacebookF className="hover:text-white transition duration-300" />
        <FaTwitter className="hover:text-white transition duration-300" />
        <FaYoutube className="hover:text-white transition duration-300" />
        <FaPinterestP className="hover:text-white transition duration-300" />
        <FaTumblr className="hover:text-white transition duration-300" />
        <FaInstagram className="hover:text-white transition duration-300" />
        <FaBehance className="hover:text-white transition duration-300" />
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500 mt-6">
        © {new Date().getFullYear()} Honey & Hemlock Productions. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
