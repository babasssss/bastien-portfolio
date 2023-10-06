import React, {useState} from "react";
// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";


let age = new Date().getFullYear() - 2002;

if (new Date() < new Date(`${new Date().getFullYear()}-06-12`)) {
    age -= 1;
}

//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Web Development',
        icons: ['FaHtml5','FaCss3','FaJs','FaReact','SiNextdotjs','SiFramer','FaWordpress', ],
      },
      {
        title: 'UI/UX Design',
        icons: ['FaFigma','SiAdobexd','SiAdobephotoshop'],icons: ['FaHtml5','FaCss3','FaJs','FaReact','SiNextdotjs','SiFramer','FaWordpress', ]
      },
    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'Baccalauréat Scientifique I.S.N (Informatique et Sciences du Numérique)',
        stage: '2020 | Bac S',
      },
      {
        title: 'BTS S.I.O option SLAM (Solutions Logicielles et Applications Métiers)',
        stage: '2022 | BTS SIO (slam)',
      },
      {
        title: 'Bachelor Developpeur Web (Titre: Concepteur Développeur D\'application)',
        stage: '2023 | LICENCE (BachelorDeveloppeur Web)',
      },
    ],
  },
  {
    title: 'Langages',
    info: [
      {
        title: 'Back End',
        icons: ['FaHtml5','FaCss3','FaJs','FaReact','SiNextdotjs','SiFramer','FaWordpress', ],
      },
      {
        title: 'UI/UX Design',
        icons: ['FaFigma','SiAdobexd','SiAdobephotoshop'],icons: ['FaHtml5','FaCss3','FaJs','FaReact','SiNextdotjs','SiFramer','FaWordpress', ]
      },
      {
        title: 'Base de données',
        icons: ['FaFigma','SiAdobexd','SiAdobephotoshop'],icons: ['FaHtml5','FaCss3','FaJs','FaReact','SiNextdotjs','SiFramer','FaWordpress', ]
      },
      {
        title: 'Front End',
        icons: ['FaFigma','SiAdobexd','SiAdobephotoshop'],icons: ['FaHtml5','FaCss3','FaJs','FaReact','SiNextdotjs','SiFramer','FaWordpress', ]
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
];

const mappageIcone = {
  FaHtml5: FaHtml5,
  FaCss3: FaCss3,
  FaFigma:FaFigma,
  SiAdobexd:SiAdobexd,
  SiAdobephotoshop:SiAdobephotoshop,
  FaJs:FaJs,
  FaReact:FaReact,
  SiNextdotjs:SiNextdotjs,
  SiFramer:SiFramer,
  FaWordpress:FaWordpress
};


// components
import Avatar from '../../components/Avatar'
import Circles from '../../components/Circles'


// framer motion
import {motion} from 'framer-motion'
import {fadeIn} from '../../variants'


// counter
import CountUp from 'react-countup'


const About = () => {
  const [index,setIndex] =  useState(0);
  console.log(index);
  return (
    <>
      <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
        <Circles/>
        {/* Avatar img */}
        <motion.div 
          variants={fadeIn('right', 0.2)} 
          initial="hidden" 
          animate="show" 
          exit="hidden" 
          className="hidden xl:flex absolute bottom-0 -left-[370px]"
        >
          <Avatar/>
        </motion.div>

        <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">

          {/* text */}
          <div className="flex-1 flex flex-col justify-center">

            <motion.h2
              variants={fadeIn('right', 0.2)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"  
              className="h2">
              Quelques  <span className="text-accent">données</span> sur moi 😲
            </motion.h2>

            <motion.p 
              variants={fadeIn('right', 0.4)} 
              initial="hidden" 
              animate="show" 
              exit="hidden" 
              className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
              Je m&apos;appelle Bastien, j&apos;habite dans le Maine-et-Loire 
              et je suis étudiant en informatique avec pour objectif d&apos;explorer le dévelopement Web | Applicatif. 
              <br />Objectif : Aquérir mon master FullStack (2024).
            </motion.p>

            {/* Counters */}
            <motion.div
              variants={fadeIn('right', 0.6)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"  
              className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                    <CountUp start={0} end={age} duration={5}/>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Age
                  </div>
                </div>
                {/* cleints */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                    <CountUp start={0} end={250} duration={5}/> +
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                    Statified clients
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* info */}
          <motion.div
            variants={fadeIn('left', 0.4)} 
            initial="hidden" 
            animate="show" 
            exit="hidden"  
            className="flex flex-col w-full xl:max-w-[48%] h-[480px] ">
            <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4 ">
              {aboutData.map((item, itemIndex) => {
                return (
                  <div 
                    key={itemIndex} 
                    className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                    onClick={() => setIndex(itemIndex)}
                  >
                    {item.title}
                  </div>
                );
              })}
            </div>



            <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
              {/* conditionally render extra title */}
              {aboutData[index].title === "Langages" && (
                <h3 className="text-xl text-white">Mes<span className="text-accent"> technologies </span>préférées</h3>
              )}

              {aboutData[index].info.map((item, itemIndex)=>{
                return (
                  <div key={itemIndex} className="flex-1 flex flex-col gap-y-2 max-w-max items-start text-white/60">



                    {/* stage as an intro */}
                    <p className="text-sm font-semibold text-white/70">{item.stage}</p>
                    {/* title */}
                    <div className="font-light text-justify">{item.title}</div>
                    {/* icons */}
                    <div className="flex gap-x-4">
                      {item.icons?.map((nomIcone, indexIcone) => {
                        const ComposantIcone = mappageIcone[nomIcone];
                        return <ComposantIcone key={indexIcone} className="text-2xl text-white" />;
                      })}
                    </div>
                  </div>
                )
              })}
            </div>




          </motion.div>



        </div>
      </div>
    </>
  );
};

export default About;
