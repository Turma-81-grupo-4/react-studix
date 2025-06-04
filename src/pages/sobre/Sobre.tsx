import { GithubLogoIcon, LinkedinLogoIcon } from "@phosphor-icons/react";

function Sobre(){

    return(
        <div className="w-60 h-70 bg-white bg-opacity-20 rounded-lg text-center flex  justify-center shadow-2xl hover:border hover:border-pink-300">
          <div className=" text-black">
            <img
            src=""
            alt="Guilherme Dino"
            className="w-60 h-30 shadow-2xl object-cover rounded-t-lg"
            />
            <h1 className='text-2xl '>Guilherme Dino</h1>
            <div className='flex flex-col items-center gap-10'>
              <p>
              Developer do projeto
            </p>
            <div className='flex gap-4'>
              <a href='https://github.com' target='_blank'>
                <GithubLogoIcon size={40} className='hover:text-red-300' />
              </a>
              <a href='https://Linkedin.com' target='_blank'>
                <LinkedinLogoIcon size={40} className='hover:text-blue-400'/>
              </a>
            </div>
            </div>
          </div>
        </div>
    )
}
export default Sobre;