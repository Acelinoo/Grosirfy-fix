import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Sidebar = ({ isOpen, toggleSidebar }) => {
  // State untuk mengatur tombol yang aktif
  const [activeButton, setActiveButton] = useState(null);

  const navigate = useNavigate(); // Inisialisasi useNavigate

  // Fungsi untuk menangani klik pada tombol
  const handleButtonClick = (button, route) => {
    setActiveButton(button);
    navigate(route); // Pindah ke route yang sesuai
  };

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#F6F7F9] shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-40`}
    >
      {/* Header Sidebar */}
      <div className="flex justify-between items-center p-4 border-b border-gray-300">
        <h2 className="text-lg font-semibold text-[#2F3A4B]">Grosirfy</h2>
        <button
          onClick={toggleSidebar}
          className="text-gray-500 hover:text-gray-700 text-xl"
        >
          ×
        </button>
      </div>

      {/* Menu Sidebar */}
      <div className="p-4">
        {/* Profil Akun Button */}
        <div
          className={`flex justify-center items-center h-[50px] gap-2 mb-6 mt-5 p-2 rounded-lg cursor-pointer ${
            activeButton === "profile" ? "bg-[#1ABC9C] text-white" : "bg-white"
          }`}
          onClick={() => handleButtonClick("profile", "/profile")} // Menambahkan path untuk Profil Akun
        >
          <span className="text-[#1ABC9C]">👤</span>
          <button
            className={`font-semibold ${
              activeButton === "profile" ? "text-white" : "text-[#1ABC9C]"
            }`}
          >
            Profil Akun
          </button>
        </div>

        {/* Semua Produk Button */}
        <div
          className={`flex justify-center items-center h-[50px] gap-2 mb-6 mt-5 p-2 rounded-lg cursor-pointer ${
            activeButton === "products" ? "bg-[#1ABC9C] text-white" : "bg-white"
          }`}
          onClick={() => handleButtonClick("products", "/ ")} // Mengarahkan ke path /landingPage
        >
          <span className="text-[#1ABC9C]">📦</span>
          <button
            className={`font-semibold ${
              activeButton === "products" ? "text-white" : "text-[#1ABC9C]"
            }`}
          >
            Semua Produk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
