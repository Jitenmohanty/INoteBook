import React, { useContext } from 'react'
import NoteContext from '../Context/notes/notesContext';

const About = () => {
  const a = useContext(NoteContext);
  return (
    <div>
      About : my name is {a.name} and class {a.class}
    </div>
  )
}

export default About
