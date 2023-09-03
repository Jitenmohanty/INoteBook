import React, { useContext } from 'react'
import NoteContext from '../Context/notes/notesContext'
import NoteItem from './NoteItem';

const Notes = () => {
    const { notes, setNotes } = useContext(NoteContext);

    return (
        <div>
            <div className="row">
                <h1> Your Notes : </h1>
                {
                    notes.map((note) => {
                        return <NoteItem note={note} />
                    })
                }
            </div>
        </div>
    )
}

export default Notes
