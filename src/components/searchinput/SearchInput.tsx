import { useState, type ChangeEvent } from "react";

function SearchInput() {

    const [buscar, setBuscar] = useState('');

    function handleInputChange (e: ChangeEvent<HTMLInputElement>) {
        setBuscar(e.target.value);
    }

    function handleBuscar(e: React.FormEvent) {
        e.preventDefault()

        if (buscar.trim() !== '') {
            alert ('pesquisando')
        } else {
            alert ('Informe o termo que deseja pesquisar!')
        }
    }
  return (

    <form onSubmit={handleBuscar} className="relative w-full max-w-lg mx-auto">
            <input
                type="text"
                name="search_input" 
                id="search_input" 
                placeholder='Buscar'
                autoComplete="off"
                value={buscar} 
                onChange={handleInputChange} 
                className="w-full pl-10 pr-4 py-2 rounded-full bg-gray-100 dark:bg-gray-700 dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-[#60B657] focus:border-transparent"
            />

           
            <button type="submit" className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
        </form>
   
    
  )
}

export default SearchInput