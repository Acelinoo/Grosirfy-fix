import { CiShop } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
const FormDaftar = () => {
  return (
    <div className="w-1/2 flex flex-col justify-center items-center bg-[#2C3E50]">
      <div className="w-2/3 bg-white rounded-[20px] ">
        <div className="flex flex-col justify-between ml-11">
          <h1 className="text-2xl font-bold text-[#1F1F1F] mt-9 ">Grosirfy</h1>
          <p className="w-[480px] text-[#1F1F1F] mb-6 ">
            Gabung sekarang dan nikmati semua fitur kami!
          </p>
        </div>
        <div className="flex justify-center mb-6 r  space-x-4">
          {/* Tombol Grosir */}
          <button className="flex items-center justify-center w-[230px] h-[40px] border border-[#2C3E50] bg-white text-[#2C3E50] rounded-md  hover:bg-[#efefef] focus:ring-2 focus:ring-[#2C3E50]">
            <CiShop className="mr-2 text-lg" /> Grosir
          </button>

          {/* Tombol Pedagang */}
          <button className="flex items-center justify-center w-[230px] h-[40px] border border-[#435466] bg-[#2C3E50] text-white rounded-[5px] hover:bg-[#2c3e50c7] focus:ring-2 focus:ring-[#1b2631]">
            <CiUser className="mr-2 text-lg" /> Pedagang
          </button>
        </div>

        <form className="space-y-4 flex flex-col items-center ">
          <div className="flex flex-col w-[480px]">
            <label htmlFor="name" className="mb-2 text-[#1F1F1F]">
              Nama lengkap
            </label>
            <input
              type="text"
              id="name"
              placeholder="masukkan nama...."
              className="py-2 px-4 border rounded-md h-[45px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col w-[480px]">
            <label htmlFor="email" className="mb-2 text-[#1F1F1F]">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="masukkan email...."
              className="py-2 px-4 border rounded-md h-[45px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="flex flex-col w-[480px]">
            <label htmlFor="phone" className="mb-2 text-[#1F1F1F]">
              Nomor telepon
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="masukkan nomor telepon...."
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
              placeholder="masukkan kata sandi...."
              className="py-2 px-4 border rounded-md h-[45px] focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-[480px] py-2 bg-[#2C3E50] text-white rounded-md h-[45px] hover:bg-[#2c3e50cf]"
          >
            Daftar
          </button>
        </form>

        <div className="flex items-center my-4">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500">Atau</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>
        <button className=" ml-[50px] w-[480px] py-2 border border-gray-300 flex justify-center items-center rounded-[5px] hover:bg-gray-100 transition duration-300">
          <img
            src="/assets/google.png"
            alt="Google"
            className="w-5 h-5 mr-2  hover:underline hover:text-[#c0c0c0]"
          />
          Lanjutkan dengan Google
        </button>
        <p className="text-center text-gray-600 mt-4 mb-4">
          Sudah punya akun?{" "}
          <a href="/login" className="text-blue-600 font-semibold">
            Masuk
          </a>
        </p>
      </div>
    </div>
  );
};

export default FormDaftar;
