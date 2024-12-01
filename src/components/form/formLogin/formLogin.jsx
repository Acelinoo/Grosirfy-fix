import React, { useState } from "react";
import { CiShop } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { useNavigate } from "react-router-dom"; // Pastikan menggunakan react-router-dom untuk navigasi

const FormLogin = () => {
  const navigate = useNavigate(); // Hook untuk navigasi
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Data dummy untuk validasi
  const validEmail = "admin@gmail.com";
  const validPassword = "123";

  const handleLogin = (e) => {
    e.preventDefault();

    // Validasi
    if (!email || !password) {
      alert("Email atau password tidak boleh kosong!");
      return;
    }

    if (email !== validEmail) {
      alert("Email salah!");
      return;
    }

    if (password !== validPassword) {
      alert("Password salah!");
      return;
    }

    // Jika validasi sukses
    alert("Login berhasil!");
    navigate("/"); // Ganti dengan route tujuan
  };

  return (
    <div className="w-1/2 flex flex-col justify-center items-center bg-[#2C3E50]">
      <div className="w-2/3 bg-white rounded-[20px]">
        <div className="flex flex-col text-center justify-between ml-11">
          <h1 className="text-2xl font-bold text-[#1F1F1F] mt-9 mr-10">
            Grosirfy
          </h1>
          <p className="w-[480px] text-[#1F1F1F] mb-6">
            Selamat datang kembali!
            <span>
              <p>Login ke akun Anda dibawah ini</p>
            </span>
          </p>
        </div>
        <div className="flex justify-center mb-6 space-x-4">
          {/* Tombol Grosir */}
          <button className="flex items-center justify-center w-[230px] h-[40px] border border-[#2C3E50] bg-white text-[#2C3E50] rounded-md hover:bg-[#efefef] focus:ring-2 focus:ring-[#2C3E50]">
            <CiShop className="mr-2 text-lg" /> Grosir
          </button>

          {/* Tombol Pedagang */}
          <button className="flex items-center justify-center w-[230px] h-[40px] border border-[#435466] bg-[#2C3E50] text-white rounded-[5px] hover:bg-[#2c3e50c7] focus:ring-2 focus:ring-[#1b2631]">
            <CiUser className="mr-2 text-lg" /> Pedagang
          </button>
        </div>

        <form
          className="space-y-4 flex flex-col items-center"
          onSubmit={handleLogin}
        >
          <div className="flex flex-col w-[480px]">
            <button className="w-[480px] py-2 border border-gray-300 flex justify-center items-center rounded-[5px] hover:bg-gray-100 transition duration-300">
              <img
                src="/assets/google.png"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Lanjutkan dengan Google
            </button>
          </div>

          <div className="flex flex-col w-[480px]">
            <label htmlFor="email" className="mb-2 text-[#1F1F1F]">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email...."
              className="py-2 px-4 border rounded-md h-[45px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col w-[480px]">
            <label htmlFor="password" className="mb-2 text-[#1F1F1F]">
              Kata sandi
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan kata sandi...."
              className="py-2 px-4 border rounded-md h-[45px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-[480px] py-2 bg-[#2C3E50] text-white rounded-md h-[45px] hover:bg-[#2c3e50cf]"
          >
            Login
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">Atau</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        <p className="text-center text-gray-600 mt-4 mb-4">
          Tidak punya akun?{" "}
          <a href="/daftar" className="text-blue-600 font-semibold underline">
            Mendaftar secara gratis
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormLogin;
