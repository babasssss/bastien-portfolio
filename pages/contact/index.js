import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import FormContactTest from '../../components/FormContactTest';
import ParticlesContainer from '../../components/ParticlesContainer';

const Contact = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full' >
        <ParticlesContainer />
        {/* text & from */}
        <div className='flex flex-col w-full max-w-[700px]  relative '>
            {/* text */}
          <motion.h2 
            variants={fadeIn('up',0.2)} 
            initial="hidden" 
            animate="show" 
            exit="hidden" 
            className='h2 text-center mb-12'>
            Contactez-<span className='text-accent'>moi.</span>
          </motion.h2>
  
            {/* form */}
          <FormContactTest/>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;