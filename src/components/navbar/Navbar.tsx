import logo from '../../assets/img/logo/logo studix SF.png'
import SearchInput from '../searchinput/SearchInput'

function Navbar() {

  return (
    <header className="bg-[#1A5566] shadow-md h-24 border-b-4 border-[#60B657] ">
        <nav className='grid grid-cols-[auto_1fr_auto] gap-x-6 max-w-7xl mx-auto px-6 items-center'>
            <div className='flex-1 flex justify-start items-center cursor-pointer'>
                <img src={logo} alt="Logo Studix" className="h-20 w-20 object-cover"/>
            </div>

           <div className='flex gap-8 flex-1 justify-center items-center'>
                 <SearchInput />
           </div>
           
           <div className='flex gap-4 items-center'> 
                <div className='text-white hover:text-[#60B657] font-semibold cursor-pointer'>
                    Login
                </div>
                <div className='text-white hover:text-[#60B657] font-semibold cursor-pointer'>
                    Cadastre-se
                </div>
            </div> 
        </nav>
    </header>
  )
}

export default Navbar