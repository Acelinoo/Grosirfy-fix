import React from "react";
import FormDaftar from "../components//form/formDaftar/formDaftar";
import BannerGrosirfy from "../components/banner/bannerGrosirfy";
const DaftarPage = () => {
  return (
    <div className="flex h-screen ">
      <BannerGrosirfy />
      <FormDaftar />
    </div>
  );
};

export default DaftarPage;
