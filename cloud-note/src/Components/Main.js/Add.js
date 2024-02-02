import React, { useContext, useEffect, useState } from "react";
import noteContext from "../Context/NoteContext";
import Reglogo from "../Images/7459097.jpg";
import Reglogo2 from "../Images/7974143.jpg";
import { Link, useNavigate } from "react-router-dom";


function Add() {
  const context = useContext(noteContext);
  const{addNote}=context;

  let navigate = useNavigate();
  
const onclickChange = ()=>{
    navigate("/main")
  }
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/");
    }
    // eslint-disable-next-line
  }, [])

  const [asnote, setNote] = useState({title:"",description:"",tag:""})

// console.log(asnote)
const handleonclick = async (e)=>{
    e.preventDefault();
    await  addNote(asnote )
      onclickChange()
}
const onChange = (e)=>{
    setNote({...asnote,[e.target.name]:e.target.value})   
}

  return (
    <div className="bg-[#FFDDA0] h-screen w-screen md:flex md:justify-evenly md:h-screen md:w-screen lg:h-screen lg:w-screen lg:flex lg:justify-evenly">
      <img
        className="object-cover h-full w-full  md:hidden lg:hidden"
        src={Reglogo2} alt="non"
      />
      <img
        className=" hidden  md:flex lg:flex md:h-full md:w-full lg:h-full lg:w-full"
        src={Reglogo} alt="non"
      />
      <h1 className="absolute top-0 z-30 font-sans font-bold text-3xl  ml-4 md:absolute md:text-5xl md:text-start md:ml-0 lg:text-5xl lg:ml-0 lg:text-start lg:absolute">
        Add Note
      </h1>
      {/* <div className=" md:h-full md:w-full lg:h-full lg:w-full z-50 ">
        
        <div className=" absolute z-30 w-screen h-full flex justify-center items-center mt-3 md:mt-0 md:w-full md:h-full lg:mt-0 lg:w-full lg:h-screen">
          
           
        </div>
      </div> */}
      <div className="md:absolute  bottom-14 left-20 absolute overflow-hidden lg:absolute md:grid md:place-items-end md:h-auto   md:right-0 md:pr-5 lg:pr-5  lg:right-0 md:mt-60 z-40 ">
        <div className="login_div h-auto w-full md:w-1/3  flex flex-col justify-start full mx-4 mb-10 ">
          <label htmlFor="title" className="font-sans font-semibold text-sm">Title</label>
          <input type="text" id="title" name="title"  onChange={onChange}
            className="border-b-2 h-8 border-slate-900 p-3 outline-none text-md mb-5 bg-transparent opacity-75"
            placeholder="Your Title?"
          /> 
          <label htmlFor="tag"  className="font-sans font-semibold text-sm">Tags</label>
          <input type="text" id="tag" name="tag" onChange={onChange}
            className="border-b-2 h-8 border-slate-900 p-3 outline-none text-md mb-5 bg-transparent opacity-75"
            placeholder="enter tags here.."
          />
          <label htmlFor="description"  className="font-sans font-semibold text-sm ">
            Description
          </label>
          <textarea onChange={onChange}   id="description" name="description"
            type="text"
            className=" border-b-2 min-h-3 border-slate-900 p-3 outline-none text-md bg-transparent opacity-75 flex text-nowarp overflow-auto  flex-wrap"
            placeholder="enter description here.."
          />
        </div>
        <div className="md:w-1/3 flex justify-center items-end gap-5">
          <Link
            to="/main"
            className="h-auto m-2 p-4 gap-10 rounded-full font-sans text-lg font-semibold text-white bg-red-500 text-center border w-2/5 hover:bg-red-600"
          >
            Cancle
          </Link>
          <button 
            onClick={handleonclick}
            className="  h-auto m-2 p-4 gap-10 rounded-full font-sans text-lg font-semibold text-white bg-red-500 text-center border w-2/5 hover:bg-red-600"
          >
            Add
          </button>
        </div>
        <div className="flex justify-end px-4 opacity-50 text-sm">
          {/* <Link to="/login">Already have an account Login</Link> */}
        </div>
      </div>
    </div>
  );
}

export default Add;
