// Components
import ParticlesContainer from '../components/ParticlesContainer'
import ProjectsBtn from '../components/ProjectsBtn'
import Avatar from '../components/Avatar'

// Framer motion
import { motion } from 'framer-motion'

// variants
import { fadeIn } from '../variants'
import Type from '../components/Type'

const Home = () => {
  return (
    <div className='bg-primary/60 h-full '>
      {/* text */}
      <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
        <div className='text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto'>
          {/* title */}
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial='hidden'
            animate='show'
            className='h1'
          >
            Bonjour, {' '}✌ <br />
          </motion.h1>
          {/* Subtitle */}
          <motion.h5
            // className="h5 flex max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
            className='h5 flex max-w-sm xl:max-w-3xl mx-auto xl:mx-0 mb-10 xl:mb-16'
            variants={fadeIn('down', 0.3)}
            initial='hidden'
            animate='show'
          >
            Je suis {'\u00A0'}
            <span className='text-accent'>
              <Type />
            </span>
          </motion.h5>
          {/* BTN */}
          <div className='flex justify-center xl:hidden relative'>
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn('down', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='hidden xl:flex'
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* Image */}
      <div className='w-[1200px] h-full absolute right-0 bottom-0'>
        {/* bg image */}
        <div className='bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0' />
        {/* Particles */}
        <ParticlesContainer />
        {/* Avata img */}
        <motion.div
          variants={fadeIn('up', 0.5)}
          initial='hidden'
          animate='show'
          exit='hidden'
          transition={{ duration: 1, ease: 'easeInOut' }}
          className='w-full h-full max-w-[737px] max-h-[678px] absolute -bottom-32 lg:bottom-0 lg:right-[8%] '
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  )
}

export default Home
