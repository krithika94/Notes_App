import logo from '../../assets/img/note-logo.png'
const Navbar = () =>{
    return(
        <header className='flex px-3 py-2 gap-3 border-b-2 border-gray-100'>
            <div className='w-12 h-12'>
                <img className='w-full h-full ' src={logo} alt="logo" />
            </div>
             <h2 className='text-indigo-800 text-4xl font-bold'>Noteit</h2>
        </header>
    )

}
export default Navbar