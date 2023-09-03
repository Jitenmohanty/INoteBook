import NoteContext from './notesContext'
const NoteState = ({children}) => {
    const state= {
        "name": "Jitu",
        "class": "9A",
    }

    return (
        <NoteContext.Provider value={state}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState;
