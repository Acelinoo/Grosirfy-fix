import React from "react";
import FormLogin from "../components/form/formLogin/formLogin";
import BannerGrosirfy from "../components/banner/bannerGrosirfy";
const Login = () => {
  return (
    <>
      <div className="flex h-screen ">
        <BannerGrosirfy />
        <FormLogin />
      </div>
    </>
  );
};

export default Login;
