import React, { useContext, useState } from "react";
import NoteState from "../Context/NoteContext";
import Reglogo from "../Images/Mobile-login.jpg";
import { Link, useNavigate } from "react-router-dom";


export default function Register() {

const {host} = useContext(NoteState)

const [name, setname] = useState("")
const [email, setemail] = useState("")
const [password, setpassword] = useState("")
const [error, seterror] = useState("")
let navigate = useNavigate();
  



// Creating new user

const createnewuser = async()=>{
  // console.log({name,email,password})
  const response =await fetch(`${host}/api/newuser/createuser`,{
     method:"POSt",
     headers:{
      "Content-Type": "application/json",
     }
  ,body: JSON.stringify({"name":name,"email":email,"password":password}),
  });
  const json = await response.json();

  if(json.token){
    localStorage.setItem('token',json.token)
    navigate("/main")
  }else{
    seterror(json.error)
      setTimeout(() => {
        seterror("")
      }, 6000);
  }
  }

console.log(error)


const onclickChange = ()=>{
  createnewuser()
  }


const onchangename = (e)=>{
  setname(e.target.value)   
}
const onchangeemail = (e)=>{
  setemail(e.target.value)   
}
const onchangepassword = (e)=>{
  setpassword(e.target.value)   
}

const handleonclick =async (e)=>{
  e.preventDefault();
await createnewuser({name:name,email:email,password:password})
onclickChange()
}

  return (
    <div className="md:flex md:justify-evenly md:h-screen md:w-screen lg:h-screen lg:w-screen lg:flex lg:justify-evenly">
      <div className="md:h-full md:w-2/3 lg:h-full lg:w-2/3">
        <h1 className="font-sans font-bold text-3xl mt-5 ml-4 md:absolute md:text-5xl md:text-start md:ml-0 lg:text-5xl lg:ml-0 lg:text-start lg:absolute">
          Register
        </h1>
        <div className="w-full h-auto flex justify-center items-center mt-3 md:mt-0 md:w-full md:h-full lg:mt-0 lg:w-full lg:h-screen">
          <img
            className="h-60 w-60 md:h-full md:w-full lg:h-full lg:w-full"
            src={Reglogo} alt="none"
          />
        </div>
      </div>
      <div className="md:h-auto md:w-1/3 md:pr-5 lg:pr-5 lg:h-auto  lg:w-1/3 md:mt-60  ">
      <h1 className="text-red-600 font-mono text-sm text-center">{error}</h1>
        <form  className="login_div h-auto  flex flex-col justify-start full mx-4 mb-10 ">
          <label htmlFor="name" className="font-sans font-semibold text-sm">Name</label>
          <input onChange={onchangename}  id="name" name="name" value={name} required 
            className="border-b-2 h-8 border-slate-900 p-3 outline-none text-md mb-5 opacity-75"
            placeholder="Your Name?"
          />
          <label htmlFor="email" className="font-sans font-semibold text-sm">Email</label>
          <input onChange={onchangeemail}  id="email" name="email" value={email} required type="email"
            className="border-b-2 h-8 border-slate-900 p-3 outline-none text-md mb-5 opacity-75"
            placeholder="enter email here.."
          />
          <label htmlFor="password" type="password" className="font-sans font-semibold text-sm">
            Password
          </label>
          <input onChange={onchangepassword}  id="password" name="password" value={password} required minLength={8}
            type="password"
            className="border-b-2 h-8 border-slate-900 p-3 outline-none text-md opacity-75"
            placeholder="enter password here.."
            />

        <div className="flex justify-center items-end flex-col gap-5">
          <button
            onClick={handleonclick}
            className="h-auto m-3 p-4 gap-10 rounded-full font-sans text-lg font-semibold text-white bg-red-500 text-center border w-2/5"
          >
            Register
          </button>
        </div>
        
        </form> 
        <div className="flex justify-end px-4 opacity-50 text-sm">
          <Link to="/login">Already have an account Login</Link>
        </div>
      </div>
    </div>
  );
}
