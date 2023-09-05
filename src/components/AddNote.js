import React, {useContext, useState} from 'react'
import noteContext from "../Context/notes/notesContext";

const AddNote = () => {
    const context = useContext(noteContext);
    const {addNote} = context;
    const [note,setNote] = useState({title:"",description:"",tag:"default"})
    const handleSubmit = (e)=>{
        e.preventDefault();
        addNote(note.title,note.description,note.tag)
    }
    const onChange = (e)=>{
        setNote({...note,[e.target.name]:e.target.value});
    }
  return (
    <div>
      <div className="container my-3">
        <h1>Add Your Notes</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              aria-describedby="emailHelp"
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Descriptions
            </label>
            <input
              type="text"
              className="form-control"
              name="description"
              id="description"
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Add Note
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
