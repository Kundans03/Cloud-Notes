import React, { useContext, useEffect } from "react";
import noteContext from "../Context/NoteContext";
import "remixicon/fonts/remixicon.css";
// import dp from "../Images/istockphoto-1308413743-2048x2048.jpg";
import { Link, useNavigate} from "react-router-dom";
import Note from "./Note";

function Main() {
  const context = useContext(noteContext);
  const{notes,deleteNote,seteid,fetchnote,user,fetchuser}=context;

  const navigate = useNavigate();

useEffect(() => {
  if(!localStorage.getItem("token")){
    navigate("/");
  }
  // eslint-disable-next-line
}, [])


useEffect(() => {
    fetchuser()
// eslint-disable-next-line
}, [])


  useEffect(() => {
    fetchnote()
// eslint-disable-next-line
}, [])


const logoutonclick = async ()=>{
  localStorage.removeItem("token")
  navigate("/")
}


  return (
    
    <div className="h-auto w-full  flex flex-col  ">
      <div className="h-9 w-full font-sans italic font-bold px-3 flex justify-between py-4">
        <h1>Cloud-Notes</h1>{" "}
        <button onClick={logoutonclick} className="text-md font-bold font-mono opacity-65 italic h-10 ">
          Logout
        </button>
      </div>
      <div className="bg-white w-full h-1/4 px-3 py-1 flex flex-col">
        {/* <div className="h-2/4 w-full flex justify-between md:justify-center  ">
          <img
            src={dp}
            alt=" "
            className="h-20 w-20 object-cover rounded-full bg-black "
          />
        </div> */}
        <div className="mt-2 md:flex md:justify-center md:flex-col md:items-center md:text-center lg:flex lg:justify-center lg:flex-col lg:items-center lg:text-center">
          <h2 className="text-sm font-sans font-semibold opacity-65 text-black md:text-3xl lg:text-3xl">
            {user.name}
          </h2>
          <h3 className="  text-xs font-serif opacity-50 md:text-xl lg:text-xl">
            You can write your notes here and can access
            <br />
            anywhere and time.
          </h3>
          <Link to="/add" className="px-4 my-2 flex justify-center text-center  bg-red-500 border text-white h-10 w-20 md:py-3 md:h-14 md:w-24 lg:h-14 lg:py-3 lg:w-24 rounded-lg text-xl hover:bg-red-600">
            Add
          </Link>
        </div>
      </div>
<div className="w-full h-auto px-4 lg:px-28 ">
      <div  className=" flex flex-wrap justify-between gap-y-2 md:flex md:flex-wrap md:justify-between  lg:flex lg:flex-wrap  lg:justify-between ">
      {notes.map((note)=>{
        return <Note key={note._id} note={note} deleteNote={deleteNote} seteid={seteid} />
      })}

      </div>
      </div>   

      {/* <div className="absolute top-[90px] left-1/2 bg-red-300 h-52 w-96 rounded-2xl flex justify-center items-center flex-col">
        <h1 className="text-3xl font-semibold py-3">Are you sure?</h1>
        <div className="md:w-1/3 flex justify-center items-end gap-5">
          <Link
            to="/main"
            className="h-auto m-2 p-4 gap-10 rounded-full font-sans text-lg font-semibold text-white bg-red-500 text-center border w-auto hover:bg-red-600"
          >
            Cancle
          </Link>
          <a
            
            className="  h-auto m-2 p-4 gap-10 rounded-full font-sans text-lg font-semibold text-white bg-red-500 text-center border w-auto hover:bg-red-600"
          >
            Delete
          </a>
        </div>
      </div> */}

    </div>
  );
}

export default Main;
