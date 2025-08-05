import React from 'react'

const Navbar = () => {
  return (
   <nav className='bg-indigo-300 flex items-center justify-around gap-7 p-2'>
    <div className='logo font-bold'>KeePrism</div>
    <ul className='flex items-center gap-7'>
        <li>
            <a href="/">Home</a>
        </li>
        <li>
            <a href="#">Home</a>
        </li>
        <li>
            <a href="/">Home</a>
        </li>
    </ul>

   </nav>
  )
}

export default Navbar
