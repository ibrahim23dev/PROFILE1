import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { Tilt } from 'react-tilt'
import { git, github } from "../assets";
import { SectionWrapper } from '../hoc'
import {Certificates} from '../constants'
import { fadeIn, textVariant } from "../utils/motion";

const CertificateCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={git}
                alt='source code'
                className='w-1/2 h-1/2 object-contain'
              />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Certificate = () => {
  return (
    <>
     <motion.div variants={textVariant()} className='mt-10 py-10 '>
        <p className={styles.sectionSubText}>Achievement</p>
        <h2 className={styles.sectionHeadText}>Certificate.</h2>
      </motion.div>

      <div className='mt-5 items-center inline-flex gap-10'>
          {Certificates.map((Certificate, index) => (
            <CertificateCard key={`Certificate-${index}`} index={index} {...Certificate} />
          ))}
        </div>
      
      </>
    
  )
}

export default SectionWrapper(Certificate, "")