import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { NotesCard } from "../../components/NotesCard"
import { NotesForm } from "../../components/NotesForm"
import Sidebar from "../../components/Sidebar"
import { useNotesState  } from "../../context/notes-context"

export const Important = () => {
    const {important,notes,onTitleChange,onTextChange,handleAddNote} = useNotesState ()

  return (
    <>
    <Navbar/>
    <main className='flex  gap-3 '>
        <Sidebar/>
        <section>
            <NotesForm onTitleChange={onTitleChange} onTextChange={onTextChange} currentPage="important" handleAddNote={handleAddNote}/>
            <h2>Important Notes</h2>
            <div className='flex flex-wrap gap-3 mt-4'>
                {important.length>0 && important.map((imp)=>{
                return <NotesCard key={imp.id} note={imp} />;
                })}
            </div>
        </section>
        
    </main>
    <Footer/>
    </>
  )
}

