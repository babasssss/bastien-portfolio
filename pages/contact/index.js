import {BsArrowRight} from 'react-icons/bs'
import Circles from '../../components/Circles'
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'
import { useState } from 'react';
import { sendContactForm } from '../../lib/api';

const initValues = {name: "",email: "",objet: "",message: ""};
const initState = {values: initValues};

const Contact = () => {
  const [state, setState] = useState(initState)
  const {values} = state

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value, 
      },
  }));

  const onSubmit = async () =>{
    setState((prev) => ({
      ...prev
    }))
    await sendContactForm(values)
  }

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full' >
        {/* text & from */}
        <div className='flex flex-col w-full max-w-[700px]'>
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
          <motion.form  
            variants={fadeIn('up',0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"  
            className="flex-1 flex flex-col gap-6 w-full mx-auto"
            >
            {/* input group */}
            <div className='flex flex-col sm:flex-row gap-4 w-full'>
              <input type='text' placeholder='nom' name='name' value={values.name} className='input' required onChange={handleChange}/>
              <input type='email' placeholder='Email' name='email' value={values.email} className='inputEmail' required onChange={handleChange}/>
            </div>

            <input type='text' placeholder='objet' name='objet' value={values.objet} className='input' required onChange={handleChange}/>
            <textarea placeholder='message' name='message' value={values.textarea} className='textarea' required onChange={handleChange}></textarea>

            <button onClick={onSubmit} className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Envoyer</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] '/>
            </button>

          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
