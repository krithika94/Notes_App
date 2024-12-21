import { useNotesState } from "../../context/notes-context";
import {findNoteInCollection } from '../../utils/findNoteInCollection'


export const NotesCard = ({note}) =>{
    const {notes,bin,archive,important,notesDispatch} = useNotesState();
    const isNotesInArchive = findNoteInCollection(archive,note.id)
    const isNotesInImportant = findNoteInCollection(important,note.id)
    const isNotes = findNoteInCollection(notes,note.id)
    const isNotesInBin = findNoteInCollection(bin,note.id)


    const onPinClick=(id)=>{
        !note.isPinned ? notesDispatch({
            type:'PINNED_NOTES',
            payload:{id}

        }):
        notesDispatch({
            type:'UNPINNED_NOTES',
            payload:{id}

        })
    }
    const onArchive = (id) =>{
       !isNotesInArchive ? notesDispatch({
            type:'ADD_TO_ARCHIVE',
            payload:{id}
        }):notesDispatch({
            type:'REMOVE_FROM_ARCHIVE',
            payload:{id}
        })
    }
    const onImportantNotes = (id) => {
        isNotesInImportant && notesDispatch({
            type:'NOT_IMPORTANT_NOTES',
            payload:{id}
        })
    }
    const handleDeleteNote = (id) => {
        console.log(id)
        isNotes && notesDispatch({
            type:'DELETE_NOTE',
            payload:{id}
        }) 
        isNotesInArchive && notesDispatch({
            type:'DELETE_ARCHIVE_NOTE',
            payload:{id}
        })
        isNotesInImportant && notesDispatch({
            type:'DELETE_IMPORTANT_NOTE',
            payload:{id}
        })
        isNotesInBin && notesDispatch({
            type:' ',
            payload:{id}
        })
      
    }
    const handleUndoNote = (id) =>{
        !isNotesInBin ? notesDispatch({
            type:'DELETE_UNDO_NOTE',
            payload:{id}
        }):notesDispatch({
            type:'REMOVE_FROM_BIN',
            payload:{id}
        })
    }
    

    return(
            <article  className=' w-80 gap-4 border-2 border-blue-100 rounded-lg'>
                <div className='flex justify-between p-2 rounded-lg dark:text-indigo-400'>
                    <h2>{note.title}</h2>
                    {isNotesInBin ? <span className = 'material-icons-outlined' onClick={()=>handleUndoNote(note.id)}>unarchive</span>: !isNotesInArchive && !isNotesInImportant ? <button onClick={()=>onPinClick(note.id)} ><span className ={note.isPinned ? 'material-icons':'material-icons-outlined'}>push_pin</span></button>:<></>}
                </div>
                <hr />
                <div className=' p-2 rounded-lg dark:text-indigo-400'>
                    <h2>{note.text}</h2>
                    <p className='flex flex-wrap justify-between py-3'>
                    {isNotesInBin ? '' : !isNotesInImportant && <span className={isNotesInArchive ? 'material-icons':'material-icons-outlined' } onClick={()=>onArchive(note.id)}> archive </span>  }
                    {isNotesInImportant && <span className = {isNotesInImportant && 'bg-slate-900 text-neutral-50 border-2 rounded py-[2px] px-2'} onClick={()=>onImportantNotes(note.id)}><label>important</label></span>}
                        <span className="material-icons-outlined" onClick={()=>handleDeleteNote(note.id)}>delete</span>
                    </p>
                </div>
            </article> 
    )
}