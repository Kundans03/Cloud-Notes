import React from "react";
import startlogo from "../Images/6310507.jpg";
import { Link } from "react-router-dom";

export default function Start() {
  return (
    <div className="h-auto w-screen overflow-hidden lg:h-screen lg:flex lg:justify-evenly md:h-screen md:flex md:justify-evenly">
      <div className="banner h-auto w-screen lg:auto lg:w-1/2 md:h-auto md:w-1/2">
        <img className=" bg-green-600 h-full w-full" src={startlogo} alt="" />
      </div>
      <div className="gap-3 px-5 flex justify-center flex-col">
        <h1 className="font-sans font-bold text-3xl ">Wellcome</h1>
        <p className="font-sans font-semibold opacity-50">
          Become member and enjoy our service <br /> here..
        </p>
        <div className="flex justify-center items-center flex-col gap-5">
          <Link
            to="/login"
            className="h-auto p-4 gap-10 rounded-full font-sans text-lg font-semibold text-white bg-red-500 text-center border w-5/6"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="h-auto p-4  rounded-full font-sans text-lg font-semibold text-white bg-slate-800 text-center border w-5/6"
          >
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}
