import { useState } from 'react'
import NoteContext from './notesContext'

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

  const addNote = (title, description, tag) => {
    const note = {
      "_id": "61322f119553781a8ca8d0e08",
      "user": "6131dc5e3e4037cd4734a066",
      "title": title,
      "description": description,
      "tag": "personal",
      "date": "2021-09-03T14:20:09.668Z",
      "__v": 0
    }
    setNotes(notes.concat(note))
  }
  const deleteNote = (id) => {
    const newNote = notes.filter((note) => note._id !== id);
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
