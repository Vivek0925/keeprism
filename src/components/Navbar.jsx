import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-purple-400 flex items-center justify-around gap-7 p-2.5'>
    <div className='logo font-bold text-xl'>
              <span className='text-blue-800'>&lt;</span>
        Kee 
              <span className='text-blue-800 '>Prism/&gt;</span>
        
        </div>
    <ul className='flex items-center gap-7'>
        <li>
            <a className='hover:text-indigo-500' href="/">Home</a>
        </li>
        <li>
            <a className='hover:text-indigo-500' href="#">About</a>
        </li>
       
    </ul>

    <button className='flex gap-2 items-center justify-between bg-purple-600 rounded-full text-white px-4  hover:bg-purple-500 transition-colors'>
        <img className='w-5 invert' src="github.svg" alt="" />
        <span>GitHub</span>
    </button>
   </nav>
  )
}

export default Navbar
