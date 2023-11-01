// import
import ServiceSlider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circle from '../../components/Circles'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'


const Services = () => {
  return (
    <div className='h-[calc(100%_+_40px)] bg-primary/30 py-36 flex items-center'>
      <Circle/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>

          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4'>
            <motion.h2
              variants={fadeIn('up', 0.2)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"   
              className='h2 xl:mt-8'>
                My services <span className='text-accent'>.</span>
            </motion.h2>
            <motion.p 
              variants={fadeIn('up', 0.4)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"  
              className='mb-4 max-w-[400px] mx-auto lg:mx-0'>
              Mollisqdft fugiat nulla aute qui dolor eu sit est magna. Ut esse in nisi irure cupidatat dolore fugiat nisi amet quis.
            </motion.p>
          </div>
          <motion.div 
            variants={fadeIn('down', 0.6)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"  
            className='w-full xl:max-w-[65%]'>
            {/* Slider */}
            <ServiceSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  );
};

export default Services;
