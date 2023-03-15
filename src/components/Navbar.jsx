import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { styles } from '../style'
import { navLinks } from '../constants'
import { logo , menu , close , bomlogo } from '../assets'

const Navbar = () => {

  const [ active , setActive ] = useState('')


  return (

    // Semantic Tag ( Nav )
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 ` }>
      
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>

          <Link to='/' className='flex items-center gap-2'  onClick={() => {setActive('')
          window.scrollTo(0,0)
          }}
          >
          <img src={bomlogo} alt="logo" className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bolt cursor-pointer' >Ratchari Kidking <span className='sm:block hidden'>| Web Developer </span></p>
          </Link>


          <ul className='list-none hidden sm:flex flex-row gap-10'>
            {navLinks.map((link)=> (
              <li key={link.id} 
              // ถ้า active("") มีค่าเท่ากับ 3 (link.tilte)
              className={`${active === link.title 
                ? "text-white"
                : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}  >
                
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            ))}
            


          </ul>

          

          
      </div>
      
    </nav>
  )
}

export default Navbar

