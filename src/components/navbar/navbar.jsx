import React, { useState } from "react";
import { FaListUl } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
import { RiSearch2Line } from "react-icons/ri";

const Navbar = ({ toggleSidebar, products = [] }) => { // Menambahkan default value untuk 'products'
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

  // Filter produk dengan stok kurang dari 5
  const lowStockProducts = products.filter((product) => product.quantity < 5);

  // Fungsi untuk menutup notifikasi
  const closeNotification = () => {
    setIsNotificationOpen(false);
  };

  // Fungsi untuk membuka notifikasi
  const openNotification = () => {
    setIsNotificationOpen(true);
  };

  return (
    <nav className="bg-[#2F3A4B] py-4 shadow-md sticky top-0 z-50 w-full">
      <div className="w-full px-8 mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center text-white">
          <button onClick={toggleSidebar} className="mr-4 text-3 xl">
            <FaListUl />
          </button>
          <div>
            <h1 className=" text-xl font-bold">Hallo, Fariz Oktavian</h1>
            <p>3 Desember 2024</p>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex items-center bg-white border border-gray-300 rounded-xl px-4 py-2 w-[400px]">
          <input
            type="text"
            placeholder="cari sesuatu..."
            className="focus:outline-none flex-grow"
          />
          <RiSearch2Line className="text-gray-500" />
        </div>

        {/* Notification Button */}
        <div className="ml-4">
          <button
            onClick={openNotification}
            className={`flex items-center gap-2 px-3 py-2 rounded-xl ${
              lowStockProducts.length > 0 ? "bg-red-500" : "bg-[#1ABC9C]"
            } text-white hover:bg-[#16A085]`}
          >
            <IoIosNotificationsOutline size={20} />
          </button>
        </div>
      </div>

      {/* Notification Pop-up */}
      {isNotificationOpen && lowStockProducts.length > 0 && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-semibold text-red-500 mb-4">
              Peringatan Stok Hampir Habis!
            </h2>
            <ul className="text-gray-700">
              {lowStockProducts.map((product) => (
                <li key={product.id} className="mb-2">
                  <span className="font-semibold">{product.name}</span>:{" "}
                  {product.quantity} unit tersisa
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-4">
              <button
                onClick={closeNotification}
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
