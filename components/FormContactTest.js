import React, { useState }  from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form"
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { BsArrowRight } from "react-icons/bs";
import { sendContactForm } from '../lib/api';
import AnimatedTextSuccess from "./AnimatedTextSuccess";
import AnimatedTextError from "./AnimatedTextError";

{/* first lettre => capitalize */}
const capitalizeFirstLetter = (event) => {
  let value = event.target.value;
  let newValue = value.replace(/(^\w{1})|(\.\s*\w{1})|(\?\s*\w{1})|(!\s*\w{1})/g, match => match.toUpperCase());
  event.target.value = newValue;
}

const FormContactTest = () => {;
    {/* Verif send email */}
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailError, setIsEmailError] = useState(false);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({
    criteriaMode: "all"
  });

  const onSubmit =  async (data) => {
    console.log(data);
    try {
      await sendContactForm(data);
      console.log('Email envoyé avec succès');
      setIsEmailSent(true);
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email", error);
      setIsEmailSent(false);
      setIsEmailError(true);
    }
  }


  return isEmailSent ? (
    <AnimatedTextSuccess/>  
  ) : (
      <>
      
        <motion.form  
          variants={fadeIn('up',0.4)} 
          initial="hidden" 
          animate="show" 
          exit="hidden"  
          className="flex-1 flex flex-col gap-6 w-full mx-auto"
          onSubmit={handleSubmit(onSubmit)}
          >
          {/* Conteneur Principal pour les Colonnes */}
          <div className='flex flex-col sm:flex-row gap-4 w-full'>
            
            {/* Colonne pour le Champ NAME */}
            <div className='flex flex-col w-full sm:w-1/2'>
              <input placeholder='nom' name='name' className='input' 
                {...register("name", {
                  required: "Ce champ est obligatoire.",
                  pattern: {
                    value: /^[A-Za-z ]+$/, // Autorise seulement les lettres et les espaces
                    message: "Ce champ doit contenir uniquement des lettres."
                  },
                  minLength: {
                    value: 2,
                    message: "Ce champ doit contenir au moins 2 caractères."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="name"
                render={({ messages }) => {
                  console.log("messages", messages);
                  return messages
                    ? Object.entries(messages).map(([type, message]) => (
                        <p className="text-left p-error" key={type}>{message}</p>
                      ))
                    : null;
                }}
              />
            </div>

            {/* Colonne pour le Champ EMAIL */}
            <div className='flex flex-col w-full sm:w-1/2'>
              <input placeholder='Email' name='email' className='input-standard' 
                {...register("email", {
                  required: "Ce champ est obligatoire.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Le format de l'email est invalide."
                  }
                })}
              />
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ messages }) => {
                  console.log("messages", messages);
                      return messages
                        ? Object.entries(messages).map(([type, message]) => (
                            <p className="text-left p-error" key={type}>{message}</p>
                          ))
                        : null;
                }}
              />
            </div>
          </div>

          {/* Colonne pour le Champ OBJET */}
          <input 
            placeholder='Objet' 
            onInput={capitalizeFirstLetter}
            name='objet' 
            className='input-standard'
            contenteditable="true"
            {...register("objet", {
              required: "Ce champ est obligatoire.",
              pattern: {
                value: /^[A-Za-z0-9 ]+$/, // Autorise les lettres, les chiffres et les espaces
                message: "Ce champ ne doit contenir que des lettres, des chiffres et des espaces."
              },
              minLength: {
                value: 2,
                message: "Ce champ doit contenir au moins 2 caractères."
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name="objet"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className="text-left p-error" key={type}>{message}</p>
                  ))
                : null;
            }}
          />

          {/* Colonne pour le Champ MESSAGE */}
          <textarea 
            placeholder='Votre message' 
            onInput={capitalizeFirstLetter}
            name='message' 
            className='textarea'
            {...register("message", {
              required: "Ce champ est obligatoire.",
              maxLength: {
                value: 500,
                message: "Le message ne doit pas dépasser 500 caractères."
              }
            })}
          />
          <ErrorMessage
            errors={errors}
            name="message"
            render={({ messages }) => {
              console.log("messages", messages);
              return messages
                ? Object.entries(messages).map(([type, message]) => (
                    <p className="text-left p-error" key={type}>{message}</p>
                    
                  ))
                : null;
            }}
          />



        <div className='flex flex-col sm:flex-row gap-4 w-full'>
          <div className='flex flex-col w-full sm:w-1/2'>
          <button type="submit" className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Envoyer</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] '/>
            </button>
          </div>
          <div className='flex flex-col w-full sm:w-1/2'>
              {isEmailError && <AnimatedTextError />}
          </div>
        </div>



        </motion.form>
      </>
  );


}

export default FormContactTest;