import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleCloseMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-gradient-to-r from-blue-100 to-pink-100 md:px-10 md:py-5 px-3 py-1 shadow-lg z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl md:text-5xl font-bold font-poppins">
          <Link to="/">
            <h2 className="text-pink-400">
              Bale<span className="text-blue-400">Ballon</span>
            </h2>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:block">
          <div className="flex gap-x-10 text-2xl text-blue-500 font-bold">
            <a
              href="#"
              className="hover:scale-110 active:scale-90 transform transition duration-200 px-3 py-2 rounded-xl"
            >
              Tentang
            </a>
            <a
              href="#service"
              className="hover:scale-110 active:scale-90 transform transition duration-200 px-3 py-2 rounded-xl"
            >
              Layanan
            </a>
            <a
              href="#gallery"
              className="hover:scale-110 active:scale-90 transform transition duration-200 px-4 py-2 rounded-xl"
            >
              Galeri
            </a>
            <a
              href="#testimonial"
              className="hover:scale-110 active:scale-90 transform transition duration-200 px-3 py-2 rounded-xl"
            >
              Testimoni
            </a>
            <a
              href="#contact"
              className="hover:scale-110 active:scale-90 transform transition duration-200 px-4 py-2 rounded-xl"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Burger Menu Button */}
        <div className="md:hidden">
          <button
            onClick={handleToggleMenu}
            className="focus:outline-none text-gray-800 text-3xl p-2 rounded-md hover:scale-105 active:scale-95 transform transition duration-200"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gradient-to-r from-blue-100 to-pink-100 shadow-lg transition-transform duration-300 z-50 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={handleCloseMenu}
          className="absolute top-4 right-4 text-2xl text-gray-800 p-2 rounded-full hover:scale-105 active:scale-95 transform transition duration-200"
        >
          ✕
        </button>
        <ul className="flex flex-col mt-16 space-y-4 px-6 text-lg font-semibold text-gray-700">
          <li>
            <a
              href="#"
              onClick={handleCloseMenu}
              className="active:scale-95 transform transition duration-200 px-3 py-2 rounded-xl block"
            >
              Tentang
            </a>
          </li>
          <li>
            <a
              href="#service"
              onClick={handleCloseMenu}
              className="active:scale-95 transform transition duration-200 px-3 py-2 rounded-xl block"
            >
              Layanan
            </a>
          </li>
          <li>
            <a
              href="#gallery"
              onClick={handleCloseMenu}
              className="active:scale-95 transform transition duration-200 px-3 py-2 rounded-xl block"
            >
              Galeri
            </a>
          </li>
          <li>
            <a
              href="#testimonial"
              onClick={handleCloseMenu}
              className="active:scale-95 transform transition duration-200 px-3 py-2 rounded-xl block"
            >
              Testimoni
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={handleCloseMenu}
              className="active:scale-95 transform transition duration-200 px-3 py-2 rounded-xl block"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Overlay + Body Blur */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-sm transition-opacity duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={handleCloseMenu}
      ></div>
    </nav>
  );
}

export default Navbar;
