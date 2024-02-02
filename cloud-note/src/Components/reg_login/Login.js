import React, { useContext, useEffect, useState } from "react";
import NoteState from "../Context/NoteContext";
import loginlogo from "../Images/3d-render-secure-login-password-illustration.jpg";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
const [error, seterror] = useState("")
  useEffect(() => {
    if(localStorage.getItem("token")){
      navigate("/main");
    }
    // eslint-disable-next-line
  }, [])

  const { host } = useContext(NoteState);

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const loginuser = async () => {
    const response = await fetch(`${host}/api/newuser/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });
    const json = await response.json();
    // console.log(json)
    
      
if(json.token){
  localStorage.setItem("token", json.token);
      navigate("/main")
}else {
      seterror(json.error)
      setTimeout(() => {
        seterror("")
      }, 6000);
    }
  };



  function handonchangemail(e) {
    setemail(e.target.value);
  }

  function handonchangepass(e) {
    setpassword(e.target.value);
  }

  const onClick = async (e) => {
    await loginuser();
    // console.log(localStorage.getItem("token"))
    e.preventDefault();
  };


  return (
    <div className="md:flex md:justify-evenly  lg:flex lg:justify-evenly ">
      <div className="md:h-screen md:w-2/3 lg:h-screen lg:w-2/3">
        <h1 className="font-sans font-bold text-3xl mt-5 ml-4 md:text-5xl lg:text-5xl md:absolute lg:absolute ">
          Login
        </h1>
        <div className="w-full h-auto  flex justify-center items-center mt-3  md:mt-0 md:w-full  md:h-screen lg:mt-0 lg:w-full lg:h-screen ">
          <img
            className="h-60 w-60 md:h-full md:w-full lg:h-full lg:w-full"
            src={loginlogo}
            alt="none"
          />
        </div>
      </div>

      <div className=" md:h-full md:w-1/3 lg:h-full lg:w-1/3 md:mt-60 mr-10">
      <h1 className="text-red-600 font-mono text-sm text-center">{error}</h1>
        <div className="login_div h-auto  flex flex-col justify-start  w-full mx-4 mb-10 ">
          <h2 className="font-sans font-semibold text-sm">Email</h2>
          <input
            onChange={handonchangemail}
            value={email}
            type="email"
            className="border-b-2 h-8 border-slate-900 p-3 outline-none text-md mb-5 opacity-75"
            placeholder="enter email here.."
          />
          <h2 className="font-sans font-semibold text-sm">Password</h2>
          <input
            onChange={handonchangepass}
            value={password}
            type="password"
            className="border-b-2 h-8 border-slate-900 p-3 outline-none text-md opacity-75"
            placeholder="enter password here.."
          />
        </div>
        <div className="flex justify-center items-end flex-col gap-5">
          <button
            onClick={onClick}
            className="h-auto m-3 p-4 gap-10 rounded-full font-sans text-lg font-semibold text-white bg-red-500 text-center border w-2/5 hover:bg-red-700"
          >
            Login
          </button>
        </div>
        <div className="flex justify-between px-4 opacity-50 text-sm">
          <p>Forget Password</p>
          <Link to="/register">Not Registered?</Link>
        </div>
      </div>
    </div>
  );
}
