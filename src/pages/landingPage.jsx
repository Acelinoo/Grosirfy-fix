import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar/Navbar";
import Sidebar from "../components/sideBar/Sidebar";
import { CiCirclePlus } from "react-icons/ci";
import { PiPencilLineBold } from "react-icons/pi";

// Generate 50 products
const generateProducts = () => {
  const products = [];
  for (let i = 1; i <= 20; i++) {
    products.push({
      id: i,
      name: `Produk ${String.fromCharCode(64 + i)}`, // Creates names like Produk A, Produk B, etc.
      price: `Rp ${100000 * i}`,
      quantity: 50 + i,
      entryDate: `2024-${String(i).padStart(2, "0")}-01`,
      expirationDate: `2025-${String(i).padStart(2, "0")}-01`,
    });
  }
  return products;
};

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLowStockModalOpen, setIsLowStockModalOpen] = useState(false);
  const [isAddProductModalOpen, setIsAddProductModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    quantity: "",
    entryDate: "",
    expirationDate: "",
  });
  const [currentPage, setCurrentPage] = useState(0); // Track the current page
  const [products, setProducts] = useState(generateProducts()); // Store products

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const openEditModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const handleEditProduct = (e) => {
    e.preventDefault();
    closeModal();
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    const newProductData = {
      ...newProduct,
      id: products.length + 1, // Assign a new ID based on current products length
    };
    setProducts([...products, newProductData]);
    setIsAddProductModalOpen(false); // Close the modal after adding
    setNewProduct({
      name: "",
      price: "",
      quantity: "",
      entryDate: "",
      expirationDate: "",
    }); // Clear form fields
  };

  // Handle Low Stock Warning
  const openLowStockModal = (product) => {
    setSelectedProduct(product);
    setIsLowStockModalOpen(true);
  };

  const closeLowStockModal = () => {
    setIsLowStockModalOpen(false);
    setSelectedProduct(null);
  };

  // Handle Expiration Date Warning
  const checkExpirationWarning = (expirationDate) => {
    const today = new Date().toISOString().split("T")[0]; // Get today's date in YYYY-MM-DD format
    return expirationDate === today;
  };

  // Paginate products (20 per page)
  const productsPerPage = 20;
  const startIndex = currentPage * productsPerPage;
  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const nextPage = () => {
    if ((currentPage + 1) * productsPerPage < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Function to delete product
  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((product) => product.id !== productId));
    closeModal(); // Close the modal after deletion
  };

  return (
    <>
      <div className="relative flex">
        {/* Sidebar */}
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

        {/* Main Content */}
        <div className="w-full">
          {/* Navbar */}
          <Navbar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

          {/* Page Content */}
          <main
            className={`transition-transform duration-300 ${
              isSidebarOpen ? "ml-64" : "ml-0"
            }`}
          >
            <div className="p-8 flex flex-col">
              <h1 className="font-bold text-2xl">Semua Produk</h1>

              <button
                onClick={() => setIsAddProductModalOpen(true)}
                className="w-[170px] h-[40px] mt-2 text-center bg-[#1ABC9C] text-white font-semibold py-2.2 px-4 rounded-lg flex items-center gap-2 transform transition-all duration-200 ease-in-out hover:bg-[#16A085] hover:scale-105 active:scale-95"
              >
                <CiCirclePlus />
                Tambah Produk
              </button>

              {/* Product Cards */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {currentProducts.map((product) => (
                  <div
                    key={product.id}
                    className={`bg-white shadow-lg rounded-lg p-4 ${
                      product.quantity < 5 ? "border-2 border-red-500" : ""
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <h2 className="text-xl font-semibold">{product.name}</h2>
                      <PiPencilLineBold
                        className="text-gray-600 cursor-pointer hover:text-[#1ABC9C]"
                        onClick={() => openEditModal(product)}
                      />
                    </div>
                    <p className="text-center text-lg text-green-600">
                      {product.price}
                    </p>
                    <p className="text-center text-sm text-gray-500 mt-2">
                      Jumlah: {product.quantity}
                    </p>

                    {/* Stock Warning */}
                    {product.quantity < 5 && (
                      <button
                        onClick={() => openLowStockModal(product)}
                        className="mt-2 text-center text-red-500 font-semibold border px-4 py-2 rounded-lg w-full bg-red-100 hover:bg-red-200"
                      >
                        Stok Anda Hampir Habis
                      </button>
                    )}

                    {/* Expiration Date Warning */}
                    {checkExpirationWarning(product.expirationDate) && (
                      <div className="mt-2 text-center text-red-500 font-semibold">
                        Peringatan! Produk ini kadaluarsa hari ini!
                      </div>
                    )}

                    {/* Small Table for Entry Date and Expiration Date */}
                    <div className="mt-4">
                      <table className="w-full text-sm">
                        <tbody>
                          <tr>
                            <td className="py-1 text-gray-600 font-medium">
                              Tanggal Masuk:
                            </td>
                            <td className="py-1 text-gray-800">
                              {product.entryDate}
                            </td>
                          </tr>
                          <tr>
                            <td className="py-1 text-gray-600 font-medium">
                              Tanggal Kadaluarsa:
                            </td>
                            <td className="py-1 text-gray-800">
                              {product.expirationDate}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pagination Buttons */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevPage}
                  className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                  disabled={currentPage === 0}
                >
                  Sebelumnya
                </button>
                <button
                  onClick={nextPage}
                  className="px-4 py-2 bg-[#1ABC9C] text-white rounded-md hover:bg-[#16A085]"
                  disabled={
                    (currentPage + 1) * productsPerPage >= products.length
                  }
                >
                  Selanjutnya
                </button>
              </div>
            </div>
          </main>
        </div>
      </div>

      {/* Modal for Low Stock Warning */}
      {isLowStockModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-semibold text-red-500 mb-4">
              Peringatan Stok Hampir Habis!
            </h2>
            <p className="text-gray-700 mb-4">
              Stok untuk produk{" "}
              <span className="font-semibold">{selectedProduct.name}</span>{" "}
              hampir habis. Tersisa hanya {selectedProduct.quantity} unit lagi.
            </p>
            <div className="flex justify-end gap-2">
              <button
                onClick={closeLowStockModal}
                className="bg-gray-500 text-white px-4 py-2 rounded-md"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal for Editing Product */}
      {isModalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Edit Produk</h2>
            <form onSubmit={handleEditProduct}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Nama Produk</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={selectedProduct.name}
                  readOnly
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Harga</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={selectedProduct.price}
                  readOnly
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => handleDeleteProduct(selectedProduct.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded-md"
                >
                  Hapus
                </button>
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-md"
                >
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Modal for Adding Product */}
      {isAddProductModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Tambah Produk Baru</h2>
            <form onSubmit={handleAddProduct}>
              <div className="mb-4">
                <label className="block text-sm font-medium">Nama Produk</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Harga</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-md"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, price: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">Jumlah</label>
                <input
                  type="number"
                  className="w-full p-2 border rounded-md"
                  value={newProduct.quantity}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, quantity: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">
                  Tanggal Masuk
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                  value={newProduct.entryDate}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, entryDate: e.target.value })
                  }
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium">
                  Tanggal Kadaluarsa
                </label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                  value={newProduct.expirationDate}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      expirationDate: e.target.value,
                    })
                  }
                />
              </div>
              <div className="flex justify-end gap-2">
                <button
                  onClick={() => setIsAddProductModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Tutup
                </button>
                <button
                  type="submit"
                  className="bg-[#1ABC9C] text-white px-4 py-2 rounded-md"
                >
                  Tambah
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default Home;
