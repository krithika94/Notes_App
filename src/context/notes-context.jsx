import { createContext, useContext,useReducer } from "react";
import { notesReducer } from "../reducers/notesReducer";
import {findNoteInCollection} from "../utils/findNoteInCollection"

const NotesContext = createContext();
const NotesProvider = ({children})=>{
    const initialState={
        title:'',
        text:'',
        notes:[],
        archive:[],
        important:[],
        bin:[]
        // pinnedNotes:[],
        // unpinnedNotes:[]
    }
      const[{title,text,notes,archive,important,bin},notesDispatch] = useReducer(notesReducer,initialState)   
     
      

      const onTitleChange = (e) =>{
        notesDispatch({
            type:'TITLE',
            payload:e.target.value
        })
      }
      const onTextChange =(e) => {
        notesDispatch({
          type:'TEXT',
          payload:e.target.value
      })
      }
      const handleAddNote = (currentPage) =>{
        (currentPage === "home") ?
          notesDispatch({ type: "ADD_NOTE" }) :
        (currentPage === "important") &&
          notesDispatch({ type: "IMPORTANT_ADD_NOTE" });
        notesDispatch({
            type:'CLEAR_INPUT'
        })
      }
      
      return(
        <NotesContext.Provider value={{title,text,notes,archive,important,bin,onTitleChange,onTextChange,handleAddNote,notesDispatch}}>
            {children}
        </NotesContext.Provider>
      )
}
const useNotesState = () => useContext(NotesContext);
export {useNotesState,NotesProvider}
