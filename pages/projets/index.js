// import
import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circle from '../../components/Circles'
import { motion } from 'framer-motion'
import { fadeIn } from '../../variants'

const Work = () => {
  return (
    <div className='h-full bg-primary/30 py-36 flex items-center'>
      <Circle />
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>

          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4'>
            <motion.h2
              variants={fadeIn('up', 0.2)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='h2 xl:mt-12'
            >
              Mes projets <span className='text-accent'>.</span>
            </motion.h2>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              animate='show'
              exit='hidden'
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'
            >
              <p className='mb-2'>Mes réalisations sont à la fois des projets professionnels et scolaires.</p>
              <p className='mt-2'>Mes projets illustrent mon parcours et mon développement en tant que concepteur-développeur.</p>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='w-full xl:max-w-[65%]'
          >
            {/* Slider */}
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Work
