import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

import 'react-vertical-timeline-component/style.min.css'
import { styles } from '../style'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../util/motion'


const ExperienceCard = ({experience}) => {
  return (
   <VerticalTimelineElement
    contentStyle={{ background: `#1d1836`, color: '#fff'}}
    contentArrowStyle={{borderRight: "7px solid #232631" }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg}}
    icon={
      <div className=' w-full h-full flex items-center justify-center'>
        <img className='w-[60%] h-[60%] object-contain rounded-full' src={experience.icon} alt={experience.company_name} />
      </div>
    }
    >
      <div className='text-white text-[24px] font-bold'>
        <h3>{experience.title}</h3>
        <p className='text-secondary text-[16px] font-semibold' style={{margin: 0}}>{experience.company_name}</p>
      </div>

    
      <ul className='mt-5 list-disc ml-5 space-y-2' >
        {experience.points.map((item , index) => (
          <li 
          key={`experience-point-${index}`}
          className="text-white-100 text-[14px] pl-1 tracking-wider">
            {item}
          </li>
          
        ))}
        
      </ul>

     

      
   
   </VerticalTimelineElement>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have done so far </p>
        <h2 className={`${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>

      <div className='mt-20 flex flex-col'>
        <VerticalTimeline>
          {experiences.map((experience , index) => (
            <ExperienceCard key={index} experience={experience}/>
          ))}
        </VerticalTimeline>
      </div>



    </>
  )
}

export default SectionWrapper(Experience , "Work")