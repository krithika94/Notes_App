import { Footer } from "../../components/Footer"
import Navbar from "../../components/Navbar"
import { NotesCard } from "../../components/NotesCard"
import Sidebar from "../../components/Sidebar"
import { useNotesState } from "../../context/notes-context"

export const Bin = () => {
    const {bin,} = useNotesState()

  return (
    <>
        <Navbar/>
        <main className='flex gap-3 '>
            <Sidebar/>
            <section>
               <h2>Deleted Notes</h2> 
               <div className='flex flex-wrap gap-3 mt-4'>
                    {bin?.length>0 && bin.map((note)=>{
                    return <NotesCard key={note.id} note={note} />;
                    })}
                </div>
            </section>
        </main>
        <Footer/>
    </>
  )
}

