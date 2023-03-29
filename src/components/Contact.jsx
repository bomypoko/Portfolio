import React , {useState , useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../style'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../util/motion'

const Contact = () => {

  const formRef = useRef()
  // making a array form
  const [form , setForm ] = useState({
    name: '',
    email: '',
    message: '',
  })
  // Load state
  const [loading , setLoading ] = useState(false)


 const handleChange = (e) => {

 }
 const handleSubmit = (e) => {

 }

  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden '>
      {/* FadeIn from left  */}
      <motion.div 
      variants={slideIn('left',"tween",0.2,1)} 
      className="bom1 flex-[0.75] bg-black-100 rounded-2xl p-8">
        <p className={styles.sectionSubText}>Get In Touch</p>
        <h3 className={styles.heroHeadText}>Contact</h3>
      {/* Form Start  */}

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="mt-12 flex flex-col gap-8"
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange}
              placeholder="What Your Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input 
              type="email" 
              name="email" 
              value={form.email} 
              onChange={handleChange}
              placeholder="What Your Email?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
             <textarea name="" id="" cols="30" rows="10"></textarea>
            <input 
              type="text" 
              name="name" 
              value={form.name} 
              onChange={handleChange}
              placeholder="What Your Name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium'/>
          </label>
          
      </form>

      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact , "contact")