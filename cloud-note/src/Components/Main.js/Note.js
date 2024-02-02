import React from 'react'
import { Link } from "react-router-dom";
export default function Note(props) {
const {note,deleteNote,seteid} = props;

// const [style, setstyle] = useState({display:"none"})
// const [e, sete] = useState("1")
// const clickhandle= ()=>{
//   if(e==1){
//     setstyle({display:"flex"})
//     console.log(0)
//     sete("0")
//   }else if(e==0){
//     setstyle({display:"none"})
//     sete("1")
//     console.log(e)
//   }
// }


  return (
    <>
    <div  className=" hidden  lg:flex md:flex ">
            <div className="hidden md:gap-2 lg:my-2 lg:gap-2 md:flex-col lg:flex-col md:flex lg:flex md:h-auto md:w-96  md:p-3 md:hover:border md:bg-red-50   lg:bg-red-50  lg:h-auto lg:w-[600px]  lg:p-3 lg:hover:borde " >
          <div className="flex justify-between ">
            <div>
              <h1 className="md:flex md:flex-col md:text-4xl md:font-semibold   lg:flex lg:flex-col lg:text-4xl lg:font-semibolg ">{note.title}</h1>
              <h2 className="md:text-base md:font-bold  lg:text-base lg:text-bold">
               {note.tag}
              </h2>
              <p className="md:font-sans md:italic   lg:font-sans lg:italic">
                {note.description}
              </p>
            </div>
            <div className="flex flex-col text-xl text-end">
              <i onClick={()=>{
                deleteNote(note._id)
              }} className="ri-delete-bin-5-fill cursor-pointer"></i>
              <Link to="/editnote" onClick={()=>{
                  seteid({id:note._id,title:note.title,description:note.description,tag:note.tag})
              }} className="ri-edit-box-line cursor-pointer"></Link>
            </div>
          </div>
          <h3 className="md:text-base md:text-end md:opacity-40 md:font md:font-semibold lg:text-base lg:text-end lg:opacity-40 lg:font lg:font-semibold">
           {note.date}
          </h3>
        </div>
      </div>

      <div  className="grid grid-col-2 w-full lg:hidden md:hidden">
        <div className="flex justify-between h-auto w-full p-3 border">
        <div>  <h1 className="flex flex-col text-md font-bold">{note.title}</h1>
          <h2 className="text-sm font-semibold">{note.tag}</h2>
          <p className='text-sm font-sans italic '>{note.description}</p>
           </div>
          <div className="flex flex-col text-xl text-end">
              <i onClick={()=>{
                deleteNote(note._id)
              }} className="ri-delete-bin-5-fill cursor-pointer"></i>
              <Link to="/editnote" onClick={()=>{
                  seteid({id:note._id,title:note.title,description:note.description,tag:note.tag})
              }} className="ri-edit-box-line cursor-pointer"></Link>
              <h3 className="text-xs text-end opacity-40 font- font-semibold">
          {note.date}
          </h3>
            </div>
        </div>
      </div>

<div  className="hidden md:flex-col md:justify-center lg:justify-center lg:flex-col  md:rounded-3xl md:absolute   md:h-60 md:w-1/3 md:bg-red-300   lg:translate-x-3/4    lg:rounded-3xl lg:absolute  lg:h-60 lg:w-1/3 lg:bg-red-300">
<h1 className=" md:relative md:text-center md:font-sans md:font-bold md:text-3xl md:italic md:py-10    lg:relative lg:text-center lg:font-sans lg:font-bold lg:text-3xl lg:italic lg:py-10">Aur You Sure?</h1>
<div className="  flex justify-center  w-full  items-end gap-5">
  <button 
    className=" md:h-auto md:w-36 md:bg-red-500 md:text-white md:p-5 md:rounded-full md:text-center md:hover:bg-red-600     lg:h-auto lg:w-36 lg:bg-red-500 lg:text-white lg:p-5 lg:rounded-full lg:text-center lg:hover:bg-red-600"
  >
    Cancle
  </button>
  <button
    
    className="md:h-auto md:w-36 md:bg-red-500 md:text-white md:p-5 md:rounded-full md:text-center md:hover:bg-red-600  lg:h-auto lg:w-36 lg:bg-red-500 lg:text-white lg:p-5 lg:rounded-full lg:text-center lg:hover:bg-red-600"
  >
    Yes
  </button>
</div>
</div>
</>
  )
}
