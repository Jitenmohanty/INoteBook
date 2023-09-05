import React, { useContext } from 'react';
import { RiDeleteBin5Line, RiEditBoxLine } from 'react-icons/ri'
import NoteContext from '../Context/notes/notesContext';

const NoteItem = ({ note,updateNote }) => {
  const context = useContext(NoteContext);
  const { deleteNote } = context;

  return (
    <div className='col-md-3'>
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
        </div>
        <div className='d-flex aligh-items-center mx-2  my-2 ' >
          <RiDeleteBin5Line style={{ marginRight: '5px',color:'red',cursor:'pointer' }} onClick={() => { deleteNote(note._id) }} />
          <RiEditBoxLine style={{color:'blue',cursor:'pointer' }} onClick={()=>{updateNote(note)}} />
        </div>
      </div>
    </div>
  )
}

export default NoteItem
