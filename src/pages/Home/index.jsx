import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import {useNotesState} from '../../context/notes-context'
import { NotesCard } from '../../components/NotesCard'
import { NotesForm } from '../../components/NotesForm'

const Home = () => {
  
  const{notes} = useNotesState()
  
  const pinnedNotes = notes?.length>0 && notes.filter(note=>note.isPinned);
  const otherNotes = notes?.length>0 && notes.filter(note=>!note.isPinned);

  return (
    <>
        <Navbar/>
        <main className='flex gap-3 '>

            <Sidebar/>
            <section>
              <NotesForm currentPage="home"/>
              <section className='mt-4'>
                <div className='flex flex-wrap gap-3 mt-4'>
                  <h2>Pinned Notes</h2>
                  {pinnedNotes.length>0 && pinnedNotes.map((note)=>{
                    return <NotesCard key={note.id} note={note} />;
                  })}
                  
                </div>
                <div className='flex flex-wrap gap-3 mt-4'>
                  {otherNotes?.length>0 && <h2>otherNotes</h2>}
                  {otherNotes.length>0 && otherNotes.map((note)=>{
                    return <NotesCard key={note.id} note={note} />;
                  })}
                  
                </div>

              </section>
            </section>
           
        </main>
    </>
  )
}

export default Home