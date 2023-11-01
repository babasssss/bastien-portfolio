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
    title: 'Education',
    info: [
      {
        desc: 'Baccalauréat Scientifique I.S.N (Informatique et Sciences du Numérique)',
        stage: '2020',
        title: 'Bac S',
      },
      {
        desc: 'BTS S.I.O option SLAM (Solutions Logicielles et Applications Métiers)',
        stage: '2022',
        title: 'BTS SIO (slam)',
      },
      {
        desc: 'Bachelor developpeur web (Titre: CDA Concepteur Développeur d\'Application)',
        stage: '2023',
        title: 'LICENCE (Bachelor Developpeur Web)',
      },
    ],
  },
  {
    title: 'Mes langages',
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
  return (
    <>
    
    <div className="h-[calc(100%_+_40px)] bg-primary/30 py-32 text-center xl:text-left ">
	    <Circles/>
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
              className="mb-4 mt-8 md:mb-0 md:mt-0 max-w-[500px] mx-auto xl:mx-0 xl:mb-12 px-2 xl:px-0">
              Je m&apos;appelle Bastien, j&apos;habite dans le Maine-et-Loire 
              et je suis étudiant en informatique avec pour objectif d explorer le dévelopement Web | Applicatif. 
              <br />Objectif : Aquérir mon master FullStack (2024).
            </motion.p>

            {/* Counters */}
            <motion.div
              variants={fadeIn('right', 0.6)} 
              initial="hidden" 
              animate="show" 
              exit="hidden"  
              className="mb-10 mt-4 md:mb-0 md:mt-0 md:flex md:max-w-xl xl:max-w-none xl:mx-0 "
            >
              <div className="flex flex-1 xl:gap-x-6">
                {/* experience */}
                <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                    <CountUp start={0} end={age} duration={7}/> <span className="text-xs">ans</span>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px] max-w-auto">
                    Age
                  </div>
                </div>
                {/* cleints */}
                <div className="relative flex-1">
                  <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2 ">
                    <CountUp start={0} end={age-17} duration={7}/> <span className="text-xs">ans</span>
                  </div>
                  <div className="text-xs uppercase tracking-[1px] leading-[1.4] xl:max-w-[100px]  max-w-auto">
                    de Development
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


              {aboutData[index].title === "Education" ? (
                // Section Éducation
                <div className="relative pt-2 pr-2 max-w-xl mx-auto max-h-[390px] oververflow-education custom-scrollbar-education">
                  {...aboutData[index].info
                  .sort((a, b) => b.stage.localeCompare(a.stage))
                  .map((education, eduIndex) => (
                    <div key={eduIndex} className="relative mb-5">
                      <span className="date">{education.stage}</span>
                      <div className="content-education">
                        <div className="h3">{education.title}</div>
                        <p className="">{education.desc}</p>
                      </div> 
                    </div>
                  ))}
                </div>

                
              ) : ( aboutData[index].title === "Mes langages" ? (
                <>
                  {aboutData[index].info.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex-1 flex flex-col gap-y-6 max-w-max items-start text-white/60">
                      <div className="flex gap-x-6">
                        {item.icons?.map((nomIcone, indexIcone) => {
                          const ComposantIcone = mappageIcone[nomIcone];
                          return <ComposantIcone key={indexIcone} className="text-2xl text-white" />;
                        })}
                      </div>
                    </div>
                  ))}
                </>

              ) : null
              )}

            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
