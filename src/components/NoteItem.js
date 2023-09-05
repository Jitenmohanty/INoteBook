import React from 'react';
import {RiDeleteBin5Line, RiEditBoxLine} from 'react-icons/ri'

const NoteItem = ({note}) => {

  return (
    <div className='col-md-3'>
<div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
  </div>
  <div className='d-flex aligh-items-center mx-2  my-2 ' >
  <RiDeleteBin5Line style={{marginRight:'5px'}}/>
  <RiEditBoxLine/>
  </div>
</div>
    </div>
  )
}

export default NoteItem
