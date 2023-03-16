import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import {  menu , close , bomlogo } from '../assets'

const Navbar = () => {

  const [ active , setActive ] = useState('')
  const [ toggle , setToggle ] = useState(false)



  return (

    // Semantic Tag ( Nav )
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 ` }>
      
      {/* Container - Start - ( Logo and Link ) */}
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>

          <Link to='/' className='flex items-center gap-2' 
          onClick={() => {setActive('')
          window.scrollTo(0,0)}}>

          <img src={bomlogo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bolt cursor-pointer' >Ratchari Kidking <span className='sm:block hidden'>| Web Developer </span></p>
          </Link>


          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link)=> (
              <li key={link.id} 

              className={`${active === link.title
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}  >
                
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
          </ul>

          {/* Start - Mobile Icon Toggle Menu */}
          <div className=' sm:hidden flex flex-1 justify-end items-center'>
               <img 
               src={ toggle ?  close: menu} 
               alt="menu" 
               className='w-[28px] h-28px cursor-pointer object-contain'
               onClick={() => setToggle((prev) => !prev)} />
          </div>
          {/* End Mobile icon Toggle  */}


          {/* Active popup menu bar when click */}
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ` }>
               <ul className='list-none flex flex-col justify-end items-start gap-4'>
                {navLinks.map((item) => (
                  <li 
                  key={item.id}
                  className={`${active === item.title
                  ? "text-white"
                  : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`
                 } onClick={() => setActive(item.title)}>

                    <a href={`#${item.id}`}>{item.title}</a>
                  </li>
                ))}
               </ul>
          </div>


      </div>
      {/* Container - End  */}
    </nav>
  )
}

export default Navbar

