// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import { styles } from '../style'
// import { navLinks } from '../constants'
// import {  menu , close , bomlogo } from '../assets'

// const Navbar = () => {

//   const [ active , setActive ] = useState('')
//   const [ toggle , setToggle ] = useState(false)
  



//   return (

<<<<<<< Updated upstream
    // Semantic Tag ( Nav )
    <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20 fixed bg-black` }>
=======
//     // Semantic Tag ( Nav )
//     <nav className={`${styles.paddingX} w-full flex items-center py-5 top-0 z-20  bg-black` }>
>>>>>>> Stashed changes
      
//       {/* Container - Start - ( Logo and Link ) */}

//       <div className='w-full flex justify-between items-center max-w-7xl mx-auto '>
//           <Link 
//           to='/' 
//           className='flex items-center gap-2' 
//           onClick={() => {setActive('')
//           window.scrollTo(0,0)}}>
          
//           <img 
//           src={bomlogo} 
//           alt="logo" 
//           className='w-9 h-9 object-contain' />
//           <p className='text-white text-[18px] font-bolt cursor-pointer flex' >Ratchari Kidking <span className=' sm:block hidden ml-2'> | Web Developer </span></p>
//           </Link>


//           <ul className='list-none hidden sm:flex flex-row gap-10'>
//             {navLinks.map((link)=> (
//               <li key={link.id} 

//               className={`${active === link.title
//                 ? "text-white"
//                 : "text-secondary"
//                 } hover:text-white text-[18px] font-medium cursor-pointer `}
//               onClick={() => setActive(link.title)}  >
                
//                 <a href={`#${link.id}`}>{link.title}</a>
//               </li>
//             ))}
//           </ul>

//           {/* Start - Mobile Icon Toggle Menu */}
//           <div className=' sm:hidden flex flex-1 justify-end items-center'>
//                <img 
//                src={ toggle ?  close: menu} 
//                alt="menu" 
//                className='w-[28px] h-28px cursor-pointer  object-contain'
//                onClick={() => setToggle((prev) => !prev)} />
//           </div>
//           {/* End Mobile icon Toggle  */}


//           {/* Active popup menu bar when click */}
//           <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl ` }>
//                <ul className='list-none flex flex-col justify-end items-start gap-4'>
//                 {navLinks.map((item) => (
//                   <li key={item.id}

//                   className={`${active === item.title
//                   ? "text-white" 
//                   : "text-secondary"
//                   } font-poppins  font-medium cursor-pointer text-[16px]`
//                  } 
//                   onClick={() => {
//                     setToggle(!toggle)
//                     setActive(item.title)
//                   }}
                 
//                  >

//                     <a href={`#${item.id}`}>{item.title}</a>
//                   </li>
//                 ))}
//                </ul>
//           </div>


//       </div>
//       {/* Container - End  */}
//     </nav>
//   )
// }

// export default Navbar


import React, { useState } from 'react'
import { styles } from '../style'
import { bomlogo , menu , close } from '../assets'
import { Link } from 'react-router-dom'
import { navLinks} from '../constants'

const Navbar = () => {

  const [active , setActive ] = useState('')
  const [toggle , setToggle ] = useState(false)

  return (
    <nav className={`${styles.paddingX} p-6 w-full`}>
      <div className='max-w-7xl flex justify-between items-center gap-6'>
        <Link
        className='flex justify-center items-center'
        to="/">
        <img src={bomlogo} alt="" className='w-9 h-9'  />
        <p>Ratchari</p>
        </Link>

        <ul className='flex gap-2 hidden sm:flex'>
          {navLinks.map((item) => (
            <li key={item.id}
            className={`${active === item.title
            ? "text-white"
            : "text-secondary"}
            hover:text-white`}
            onClick={() => setActive(item.title) }>
              <a href={`#${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex'>
          <img src={!toggle ? menu : close} alt="toggle menu" className='cursor-pointer'
          onClick={() => setToggle((prev) => !prev)}/>
        </div>

        <div className={`${!toggle ? "flex" : "hidden"} absolute w-[150px] h-[150px] bg-red-300 top-20 right-2 sm:hidden`}>

        </div>



      </div>
    </nav>
  )
}

export default Navbar