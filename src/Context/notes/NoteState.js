import { useState } from 'react'
import NoteContext from './notesContext'
const NoteState = ({children}) => {
    const s1= {
        "name": "Jitu",
        "class": "9A",
    }

    const [state,setState] = useState(s1);
    const update = ()=>{
        setTimeout(()=>{
            setState({
                "name": "Kitu",
                "class": "15C",
            })
        },2000)
    }

    return (
        <NoteContext.Provider value={{state,update}}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState;
