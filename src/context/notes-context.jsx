import { createContext, useContext,useReducer,useEffect } from "react";
import { notesReducer } from "../reducers/notesReducer";
import {findNoteInCollection} from "../utils/findNoteInCollection"

const NotesContext = createContext();
const NotesProvider = ({children})=>{
      const initialState = JSON.parse(localStorage.getItem("notesState")) || {
        title: "",
        text: "",
        notes: [],
        archive: [],
        important: [],
        bin: []
      };

      const[{title,text,notes,archive,important,bin},notesDispatch] = useReducer(notesReducer,initialState)   
     
      // Save to localStorage whenever state changes
      useEffect(() => {
        localStorage.setItem("notesState", JSON.stringify({ title, text, notes, archive, important, bin }));
      }, [title, text, notes, archive, important, bin]);
       // Cleanup bin on app load
      useEffect(() => {
        notesDispatch({ type: "CLEANUP_BIN" });
      }, []);

      // Periodic cleanup every 24 hours
      useEffect(() => {
          const interval = setInterval(() => {
              notesDispatch({ type: "CLEANUP_BIN" });
          }, 24 * 60 * 60 * 1000); // Every 24 hours

          return () => clearInterval(interval);
        }, []);

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
