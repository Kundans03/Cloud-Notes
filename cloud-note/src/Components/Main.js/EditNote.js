import React, { useContext, useEffect, useState } from "react";
import noteContext from "../Context/NoteContext";
import Reglogo from "../Images/7459097.jpg";
import Reglogo2 from "../Images/7974143.jpg";
import { Link, useNavigate } from "react-router-dom";


function Add() {
  const context = useContext(noteContext);
  const{editNote,fetchnote,eid}=context;

  const [asnote, setasnote] = useState({title:eid.title,description:eid.description,tag:eid.tag})
  // console.log(asnote)

  const onchange = (e)=>{
    setasnote({...asnote,[e.target.name]:e.target.value})   
  }

  let navigate = useNavigate();
  
const onclickChange = ()=>{
    navigate("/main")
  }


  const updateonclick = async(e)=>{
    e.preventDefault();
    await  editNote(asnote)
      fetchnote()
      onclickChange()
  }
  
  useEffect(() => {
    if(!localStorage.getItem("token")){
      navigate("/");
    }
    // eslint-disable-next-line
  }, [])
  return (
    <div className="bg-[#FFDDA0] h-screen w-screen md:flex md:justify-evenly md:h-screen md:w-screen lg:h-screen lg:w-screen lg:flex lg:justify-evenly">
      <img
        className="object-cover h-full w-full  md:hidden lg:hidden"
        src={Reglogo2} alt="none"
      />
      <img
        className=" hidden  md:flex lg:flex md:h-full md:w-full lg:h-full lg:w-full"
        src={Reglogo} alt="none"
      />
      <h1 className="absolute top-0 z-30 font-sans font-bold text-3xl  ml-4 md:absolute md:text-5xl md:text-start md:ml-0 lg:text-5xl lg:ml-0 lg:text-start lg:absolute">
        Edit Note
      </h1>
      {/* <div className=" md:h-full md:w-full lg:h-full lg:w-full z-50 ">
        
        <div className=" absolute z-30 w-screen h-full flex justify-center items-center mt-3 md:mt-0 md:w-full md:h-full lg:mt-0 lg:w-full lg:h-screen">
          
           
        </div>
      </div> */}
      <div className="md:absolute  bottom-14 left-20 absolute overflow-hidden lg:absolute md:grid md:place-items-end md:h-auto   md:right-0 md:pr-5 lg:pr-5  lg:right-0 md:mt-60 z-40 ">
        <div className="login_div h-auto w-full md:w-1/3  flex flex-col justify-start full mx-4 mb-10 ">
          <label htmlFor="title" className="font-sans font-semibold text-sm">New Title</label>
          <input id="title" name="title" value={asnote.title} onChange={onchange}
            className="border-b-2 h-8 border-slate-900 p-3 outline-none text-md mb-5 bg-transparent opacity-75"
            placeholder="Your Title?"
          /> 
          <label htmlFor="tag" className="font-sans font-semibold text-sm">Tags</label>
          <input id="tag" name="tag" value={asnote.tag}   onChange={onchange}
            className="border-b-2 h-8 border-slate-900 p-3 outline-none text-md mb-5 bg-transparent opacity-75"
            placeholder="enter tags here.."
          />
          <label htmlFor="description" type="text" className="font-sans font-semibold text-sm ">
           New Description
          </label>
          <textarea
            type="text" id="description" name="description" value={asnote.description} onChange={onchange}
            className=" border-b-2 min-h-3 border-slate-900 p-3 outline-none text-md bg-transparent opacity-75 flex text-nowarp overflow-auto  flex-wrap"
            placeholder="enter description here.."
          />
        </div>
        <div className="md:w-1/3 flex justify-center items-end gap-5">
          <Link
            to="/main"
            className="h-auto m-2 p-4 gap-10 rounded-full font-sans text-lg font-semibold text-white bg-red-500 text-center border w-2/5"
          >
            Cancle
          </Link>
          <button
            onClick={updateonclick}
            className="  h-auto m-2 p-4 gap-10 rounded-full font-sans text-lg font-semibold text-white bg-red-500 text-center border w-2/5"
          >
           Update
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
