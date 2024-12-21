import { NavLink } from 'react-router-dom';
const Sidebar = () => {
  const handleActive = ({isActive}) =>{
    return isActive ? 'text-slate-50 bg-indigo-800 flex align-center gap-1 p-1 rounded-tr-full rounded-br-full':'hover:bg-indigo-800 hover:text-slate-50 flex align-center gap-1 p-1 rounded-tr-full rounded-br-full'

  }
  return (
    <aside className='flex flex-col gap-3 border-r-2 border-gray-100 w-[150px] h-screen p-3'>
        <NavLink className={handleActive} to='/'>
        <span class="material-icons-outlined">home</span> 
        <span>Home</span>
        </NavLink>
        <NavLink className={handleActive} to='/archive'>
        <span class="material-icons-outlined">archive</span>
        <span>Archive</span>
        </NavLink>
        <NavLink className={handleActive} to='/important'>
        <span class="material-icons-outlined">label_important</span>
        <span>important</span>
        </NavLink>
        <NavLink className={handleActive} to='/bin'>
        <span class="material-icons-outlined">delete</span>
        <span>Bin</span>
        </NavLink>
    </aside>
    
  )
}

export default Sidebar