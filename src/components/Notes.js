import React, { useContext, useEffect } from 'react'
import NoteContext from '../Context/notes/notesContext'
import NoteItem from './NoteItem';
import AddNote from './AddNote';

const Notes = () => {
    const context = useContext(NoteContext);
    const { notes,getAllNotes } = context;

    useEffect(()=>{
        getAllNotes();
    },[])

    return (
        <div>
            <AddNote/>
            <div className="row">
                <h1> Your Notes : </h1>
                {
                    notes.map((note,index) => {
                        return <NoteItem note={note} key={index} />
                    })
                }
            </div>
        </div>
    )
}

export default Notes
