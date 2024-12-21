import { v4 as uuid } from 'uuid';

export const notesReducer = (state,action)=>{
    switch(action.type){
        case 'TITLE':
            return{
                ...state,
                title:action.payload
            }
        case 'TEXT':
            return{
                ...state,
                text:action.payload
            }
        case 'ADD_NOTE':
            const data = {title:state.title,text:state.text,id:uuid(),isPinned:false}
            return{
                ...state,
                notes:[...state.notes,data]
            }
        case 'IMPORTANT_ADD_NOTE':
            return{
                ...state,
                important:[...state.important,{title:state.title,text:state.text,id:uuid(),isImportant: true}]
            }
        case 'NOT_IMPORTANT_NOTES':
            return {
                ...state,
                important:state.important.filter(imp=>imp.id !== action.payload.id),
                notes:[...state.notes,state.important.find((note)=>note.id === action.payload.id)]
            }
        case 'CLEAR_INPUT':
            return{
                ...state,
                title:'',
                text:''
                
            }
        case 'PINNED_NOTES':
            return{
                ...state,
                notes:state.notes.map((note)=>(note.id === action.payload.id)?{...note,isPinned:!note.isPinned}:note)
            }
        case 'UNPINNED_NOTES':
            return{
                ...state,
                notes:state.notes.map((note)=>(note.id === action.payload.id)?{...note,isPinned:!note.isPinned}:note)
            }
        case 'ADD_TO_ARCHIVE':
            return{
                ...state,
                archive:[...state.archive,state.notes.find((note)=>note.id === action.payload.id)],
                notes:state.notes.filter(note=>note.id !== action.payload.id)
            }
        case 'REMOVE_FROM_ARCHIVE':
            return{
                ...state,
                archive:state.archive.filter(arch=>arch.id !== action.payload.id),
                notes:[...state.notes,state.archive.find((note)=>note.id === action.payload.id)]
                
            }
        case 'DELETE_NOTE':
            return{
                ...state,
                notes:state.notes.filter(note=>note.id !== action.payload.id),
                bin:[...state.bin,state.notes.find((note)=>note.id === action.payload.id)],
               
            }
        case 'DELETE_ARCHIVE_NOTE':
                return{
                    ...state,
                    archive:state.archive.filter(arch=>arch.id !== action.payload.id),
                    bin:[...state.bin,state.archive.find((note)=>note.id === action.payload.id)],
                }
        case 'DELETE_IMPORTANT_NOTE':
            return{
                ...state,
                important:state.important.filter(imp=>imp.id !== action.payload.id),
                bin:[...state.bin,state.important.find((note)=>note.id === action.payload.id)],
            }
        case 'DELETE_NOTE_FROM_BIN':
            return{
                ...state,
                bin:state.bin.filter(note=>note.id !== action.payload.id),

            }
        case 'DELETE_UNDO_NOTE':
            return{
                ...state,
                notes:[...state.notes,state.notes.find((note)=>note.id === action.payload.id)],
                notes:state.notes.filter(note=>note.id !== action.payload.id)
            }
        case 'REMOVE_FROM_BIN':
                return{
                    ...state,
                    bin:state.bin.filter(arch=>arch.id !== action.payload.id),
                    notes:[...state.notes,state.bin.find((note)=>note.id === action.payload.id)]
                    
                }
        
            
        
        default:
            return state
    }
}