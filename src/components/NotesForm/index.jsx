import { useNotesState } from "../../context/notes-context"
import { findNoteInCollection } from "../../utils/findNoteInCollection";
export const NotesForm = ({ currentPage }) =>{

    const{title,text,onTitleChange,onTextChange,handleAddNote} = useNotesState();

    return(
        <>
            <form className='flex flex-col w-[300px] my-2 relative border p-1 rounded '>
                <input type="text" value={title} placeholder='Enter title' className=' px-1  border-0 focus:outline-none' onChange={onTitleChange}/>
                <textarea value={text} name="" id="" placeholder='Entire text' className='px-1 border-0 focus:outline-none' onChange={onTextChange}></textarea>
                <button type='button' disabled={title.length === 0} className={`absolute  bottom-0 right-0 rounded-full px-1  w-[24px] ${title.length === 0 ? 'bg-gray-400' : 'bg-indigo-800'}`} onClick={()=>handleAddNote(currentPage)}><span className="material-icons-outlined flex flex-col items-center text-slate-50">add</span></button>
                
            </form>
        </>
    )
}