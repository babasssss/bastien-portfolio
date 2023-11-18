import React, { useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form"
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import { BsArrowRight } from "react-icons/bs";
import { sendContactForm } from '../lib/api';

export default function FormContactTest() {
  const [isEmailSent, setIsEmailSent] = useState(false);

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
    }
  }



  return isEmailSent ? (
    <div className='text-center waviy'>
      <span className='waviy-span-1'>E</span>
      <span className='waviy-span-2'>m</span>
      <span className='waviy-span-3'>a</span>
      <span className='waviy-span-4'>i</span>
      <span className='waviy-span-5'>l</span>
      <span className='waviy-span-6'>&nbsp;</span>
      <span className='waviy-span-7'>e</span>
      <span className='waviy-span-8'>n</span>
      <span className='waviy-span-9'>v</span>
      <span className='waviy-span-10'>o</span>
      <span className='waviy-span-11'>y</span>
      <span className='waviy-span-12'>é</span>
    </div>
  ) : (
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
                    <p className="text-left" key={type}>{message}</p>
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
                        <p className="text-left" key={type}>{message}</p>
                      ))
                    : null;
            }}
          />
        </div>
      </div>

      {/* Colonne pour le Champ OBJET */}
      <input placeholder='Objet' name='objet' className='input-standard' 
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
                <p className="text-left" key={type}>{message}</p>
              ))
            : null;
        }}
      />

      {/* Colonne pour le Champ MESSAGE */}
      <textarea 
        placeholder='Votre message' 
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
                <p className="text-left" key={type}>{message}</p>
              ))
            : null;
        }}
      />

      <button type="submit"  className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
        <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Envoyer</span>
        <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px] '/>
      </button>

    </motion.form>
  );


}
