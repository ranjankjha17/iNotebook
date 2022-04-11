import React, { useState } from "react";
import NoteContext from "./noteContext";

function NoteState(props) {
  const host = "http://localhost:5000";
  const notesInitial = [
    
  ];
  const [notes, setNotes] = useState(notesInitial);

//Get all Notes
const getNotes = async() => {
  //TODO:API Call
  const response = await fetch(`${host}/api/notes/fetchallnotes`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZGE0ZDA1MDcwNTQ3Mjk5OWQyMDQ2In0sImlhdCI6MTY0OTQ4NTY2M30.t84cy_-b80GKBRHt6oi4McQ981Yms0lTqxuQ0I4-N_Y",
    },
  });
const json=await response.json();
  console.log(json);
  setNotes(json);
 
};


  //Add a Note
  const addNote = async(title, description, tag) => {
    //TODO:API Call
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",    
      headers: {
		  'Access-Control-Allow-Origin': 'http://localhost:3000',
			'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
		'Access-Control-Allow-Headers': 'Authorization, Content-Type',
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZGE0ZDA1MDcwNTQ3Mjk5OWQyMDQ2In0sImlhdCI6MTY0OTQ4NTY2M30.t84cy_-b80GKBRHt6oi4McQ981Yms0lTqxuQ0I4-N_Y",
      },
      body: JSON.stringify(title,description,tag),
    });
    const json=await response.json();
    console.log(json);

    console.log("adding a new note");
    const note = {
      _id: "61322f19553781a8ca8d0e09",
      user: "6131dc5e3e4037cd4734a066",
      title: title,
      description: description,
      tag: tag,
      date: "2021-09-03T14:20:09.668Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  //Delete a Note
  const deleteNote = async(id) => {

      //API Call
      const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZGE0ZDA1MDcwNTQ3Mjk5OWQyMDQ2In0sImlhdCI6MTY0OTQ4NTY2M30.t84cy_-b80GKBRHt6oi4McQ981Yms0lTqxuQ0I4-N_Y",
        },
      });
  const json=response.json();
  console.log(json)
  console.log("Deleting the note with ie"+id);
  const newNotes=notes.filter((note)=>{return note._id!==id})
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    //API Call
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjIzZGE0ZDA1MDcwNTQ3Mjk5OWQyMDQ2In0sImlhdCI6MTY0OTQ4NTY2M30.t84cy_-b80GKBRHt6oi4McQ981Yms0lTqxuQ0I4-N_Y",
      },
      body: JSON.stringify(title,description,tag),
    });
    const json=response.json();
    console.log(json)

    let newNotes=JSON.parse(JSON.stringify(notes))
    //Logic to edit in client
    for (let index = 0; index < newNotes.length; index++) {
      const element = newNotes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
     
    }
    console.log(newNotes);
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote,getNotes }}>
      {props.children}
    </NoteContext.Provider>
  );
}

export default NoteState;
