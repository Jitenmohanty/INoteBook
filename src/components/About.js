import React, { useContext, useEffect } from 'react'
import NoteContext from '../Context/notes/notesContext';

const About = () => {
  const a = useContext(NoteContext);
  useEffect(() => {
    a.update();
  }, [])
  return (
    <div>
      About : my name is {a.state.name} and class {a.state.class}
    </div>
  )
}

export default About;
