import React, { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
  const host = 'http://192.168.29.171:5000'
  const notesInitial = [];
  const userInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  const [eid, seteid] = useState({})
  const [token, settoken] = useState()
const [user, setuser] = useState(userInitial)
//fetch userdetails

const fetchuser = async ()=>{
  const response = await fetch(`${host}/api/newuser/getuser`,{
    method:"POST",
    headers:{
      "Content-Type": "application/json",
      "token":localStorage.getItem("token")
    }
  })

const json = await response.json()
setuser(json)
}


// useEffect(() => {
//   fetchuser()
// }, [])







const  fetchnote = async()=>{
      const response = await fetch(`${host}/api/notes/fetchallnotes`,{
      method: "GET",
        headers: {
          "Content-Type": "application/json",
          "token":localStorage.getItem("token")
        },
  }); 

  const json = await response.json()
  setNotes(json.notes)
  
}

  

  
  //Add a note
    const addNote = async ({title,description, tag}) => {
      // Api call
      const response = await fetch(`${host}/api/notes/addnote/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token":localStorage.getItem("token")
        },
        body: JSON.stringify({title,description,tag}),
      });
      // logic to add a note in clint
      const note = await response.json();
      setNotes(notes.concat(note))
      // console.log(note)
    };



  //Delete a Note
  const deleteNote =async (id) => {
    // Api call
     await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "token":localStorage.getItem("token")
      },
    
    });

//logic to delet a note

    console.log("deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };


  //Edit a Note
  const editNote = async ({title, description, tag}) => {
    //Api call
    await fetch(`${host}/api/notes/updatenote/${eid.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "token":localStorage.getItem("token")
      },
      body: JSON.stringify({title,description,tag}),
    });
    // const json = response.json();

    //logic to edit in clint
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._eid === eid) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };



  return (
    <NoteContext.Provider value={{ notes, addNote, editNote, deleteNote, fetchnote,seteid ,eid,host,settoken,token,user,fetchuser,setuser}}>
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
