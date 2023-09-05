import { useState } from 'react'
import NoteContext from './notesContext'
import { toast } from 'react-hot-toast';

const NoteState = ({ children }) => {
  const host = "http://localhost:3005";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);

  const getAllNotes = async () => {
    const response = await fetch(`${host}/api/notes/getallnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMWYxYzM1NmYwOGViZTdiNGNlODJhIn0sImlhdCI6MTY5MzYyNzE0Nn0.ZBs5L6DyFEtJH3wPowoLKBINN8NkJ-40zRcRPGCrb10"
      },

    });
    const allNotes = await response.json();
    // console.log(allNotes);
    setNotes(allNotes)
  }

  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMWYxYzM1NmYwOGViZTdiNGNlODJhIn0sImlhdCI6MTY5MzYyNzE0Nn0.ZBs5L6DyFEtJH3wPowoLKBINN8NkJ-40zRcRPGCrb10"
      },
      body: JSON.stringify({ title, description, tag })
    });
    const addNotes = await response.json();
    console.log(addNotes)
    const note = {
      "_id": "64f2d38869885741aac016ce",
      "user": "64f1f1c356f08ebe7b4ce82a",
      "title": title,
      "description": description,
      "tag": tag,
      "createdAt": "2023-09-02T06:17:44.584Z",
      "updatedAt": "2023-09-02T06:17:44.584Z",
      "__v": 0
    }
    setNotes(notes.concat(note))

  }
  const deleteNote = async (id) => {

    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjRmMWYxYzM1NmYwOGViZTdiNGNlODJhIn0sImlhdCI6MTY5MzYyNzE0Nn0.ZBs5L6DyFEtJH3wPowoLKBINN8NkJ-40zRcRPGCrb10"
      },
    });
    const delNote = await response.json();
    console.log(delNote);
    const newNote = notes.filter((note) => note._id !== id);
    toast.success("Notes Deleted Successfully")
    setNotes(newNote)
  }

  const editNote = (id, title, description, tag) => {
    
  }
  return (
    <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getAllNotes }}>
      {children}
    </NoteContext.Provider>
  )
}

export default NoteState;
