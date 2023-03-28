import React from 'react'
import { motion } from 'framer-motion'
import { fadeIn , textVariant } from '../util/motion'
import { SectionWrapper } from '../hoc'
import { styles } from '../style'
import { testimonials } from '../constants'


const FeedbackCard = ({ index , testimonial , name , designation , company , image}) => {
  return (
    
      <motion.div 
      variants={fadeIn('',"spring" , index * 0.5 , 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full">
        <p className='text-white font-black text-[48px]'>"</p>
        <p>{testimonial}</p>
      </motion.div>
  )
}

// const FeedbackCard = ( { testimonial }) => (
//   <motion.div>
//     <p>{testimonial}</p>
//   </motion.div>
// )



const Feedbacks = () => {
  return (
    <div className='mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>What other say</p>
            <h2 className={`${styles.sectionHeadText}`}>Testimonails</h2>
        </motion.div>
      </div>
      
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
          {testimonials.map((test , index ) => (
            <FeedbackCard
            key={test.name}
            index={index}
            {...test}
            />
          ))}
      </div>
    </div>
  )
}

export default Feedbacks