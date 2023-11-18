import { useState } from "react";
import { sendContactForm } from '../lib/api';
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import {BsArrowRight} from 'react-icons/bs'
import { useForm } from "react-hook-form"

const FormContact = () => {
  const [errorMessage, setErrorMessage] = useState()
  const [successMessage, setSuccessMessage] = useState()

  const handleChange = ({ target }) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [target.name]: target.value, 
      },
  }));

  const onSubmit = async (e) =>{
    e.preventDefault()
    try {
      setState((prev) => ({
        ...prev
      }))
      await sendContactForm(values)
    } catch (error) {
      setErrorMessage(error.message)
      console.log(error.message)
    }
  }
  return (
    <motion.form  
      variants={fadeIn('up',0.4)} 
      initial="hidden" 
      animate="show" 
      exit="hidden"  
      className="flex-1 flex flex-col gap-6 w-full mx-auto"
      onSubmit={onSubmit}
      >
      {/* input group */}
      <div className='flex flex-col sm:flex-row gap-4 w-full'>
        <input type='text' placeholder='nom' name='name' className='input' required onChange={handleChange}/>
        <input type='email' placeholder='Email' name='email'className='inputEmail' required onChange={handleChange}/>
      </div>

      <input type='text' placeholder='objet' name='objet' className='input' required onChange={handleChange}/>
      <textarea placeholder='message' name='message' className='textarea' required onChange={handleChange}></textarea>

      <button onClick={onSubmit} className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
        <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Envoyer</span>
        <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] '/>
      </button>

    </motion.form>
  )
}

export default FormContact