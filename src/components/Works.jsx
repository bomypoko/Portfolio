import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn,textVariant } from '../util/motion'


const ProjectCard = ( { index , name , description ,tags ,image , source_code_link }) => {
  return (
    <motion.div>
      <Tilt option={{max: 45, scale:1, speed:450}} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
          <div className='relative w-full h-[230px]'>
              <img className='w-full h-full object-cover rounded-2xl' src={image} alt="project_image" />
              <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
                <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
                  <img src={github} alt="source code" className='w-1/2 h-1/2 object-contain' />
                </div>
              </div>
          </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div
        variants={textVariant()}>
          <p className={styles.sectionSubText}>
            My Work
          </p>
          <h2 className={styles.sectionHeadText}>
            Project.
          </h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
        variants={fadeIn("","",0.1 , 1)}
        className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel excepturi pariatur nemo cumque voluptatibus aliquam explicabo voluptas, magnam eos quos autem, provident non assumenda optio veritatis repudiandae hic officia vero.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project , index ) => (
          <ProjectCard
          key={`project-${index}`}
          {...project}
          index={index}/>
        ))}

      </div>

    </>
  )
}

export default SectionWrapper(Works , "")