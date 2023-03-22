import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../style'
import { staggerContainer } from '../util/motion'

// Componenet ในที่นี้หมายถึง About
const SectionWrapper = (Component , idName) => 
function HOC() {
    return (

        <motion.section
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amount: 0.25 }}
            className={`${styles.padding} max-w-7xl mx-auto relative z-0`}>

                {/* Click แล้วลงมาหา about section ตรง tag span แต่จะมองไม่เห็น */}
                <span className='hash-span ' id={idName}>
                    &nbsp;
                </span>
                <Component/>
        </motion.section>

       
    )
}

export default SectionWrapper