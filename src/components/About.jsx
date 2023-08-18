import React from 'react'
import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'

const ServiceCard=({index,title,icon})=> {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed:450
          }
            
          } className='bg-tertiary rounded-[20px] py-5 px-12 h-[280px] flex justify-evenly items-center flex-col'>

          <img src={icon} alt='icon' className='w-16 h-16 object-contain' />
          <h3 className='text-white text-[21px] font-bold text-center'>{title}</h3>   
</div>
      </motion.div>
   </Tilt>
  )
}


function About() {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.heroSubText}>Introduction Me</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
        <div className="mt-7    flex">
            
              <img
          src="me.jpg"
          alt="Mohammad Ibrahim"
          className="object-center justify-end md:h-30 md:w-30 w-50 h-60 rounded-full border-double border-4 border-sky-500"
          />
          <div className='w-5 h-5 rounded-full bg-[#008000]' />
            </div>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px]
      max-w-3xl leading-[30px]'>
         I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((services, index) => (
          <ServiceCard key={services.title} index={index}
            {...services} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about") 
