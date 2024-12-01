const BannerGrosirfy = () => {
  return (
    <div className="w-1/2 bg-[#ECF0F1] flex flex-col justify-center items-center hover:bg-[#2C3E50] transition-colors duration-300 group">
      <div className="flex flex-col">
        <h1 className="text-7xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-white">
          Grosirfy
        </h1>
        <h3 className="text-3xl font-bold text-[#2C3E50] transition-colors duration-300 group-hover:text-white">
          Harga Teman, Cepat Sampai!
        </h3>
      </div>
      <div className="mt-8 relative">
        <img
          src="/assets/vector.svg"
          alt="Vector"
          className="w-68 h-auto transition-opacity duration-300 group-hover:opacity-0"
        />
        <img
          src="/assets/vector2.svg"
          alt="Vector Hover"
          className="w-68 h-auto absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        />
      </div>
    </div>
  );
};

export default BannerGrosirfy;
