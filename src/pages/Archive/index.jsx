import Navbar from "../../components/Navbar"
import Sidebar from "../../components/Sidebar"
import { useNotesState } from "../../context/notes-context"
import {NotesCard} from '../../components/NotesCard/index'
import { Footer } from "../../components/Footer"
export const Archive = () => {
   const{archive} = useNotesState();
  return (
    <>
    <Navbar/>
    <main className='flex  gap-3 '>
        <Sidebar/>
        <section>
            <div className='flex flex-wrap gap-3 mt-4'>
                {archive?.length>0 && archive.map((note)=>{
                    return <NotesCard key={note.id} note={note} />;
                })}
            </div>
        </section>
        
        
    </main>
    <Footer/>

    </>
  )
}

