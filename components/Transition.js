// Framer motion
import {motion} from 'framer-motion'
import { useState } from 'react';

// Variante pour l'effet "bug"
const bugVariants = {
  initial: { 
    opacity: 0.8, 
    x: "2%", 
    y: "2%", 
    filter: "hue-rotate(0deg)" 
  },
  animate: { 
    opacity: [1, 0.9, 1, 0.9, 1], 
    x: ["2%", "-2%", "2%", "-2%", "0%"], 
    y: ["2%", "-2%", "2%", "-2%", "0%"], 
    filter: ["hue-rotate(0deg)", "hue-rotate(15deg)", "hue-rotate(-15deg)", "hue-rotate(15deg)", "hue-rotate(0deg)"]
  },
  exit: { 
    opacity: 0.7, 
    x: "-4%", 
    y: "-4%", 
    filter: "hue-rotate(-30deg)" 
  }
}


const Transition = () => {
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);

  if (isAnimationComplete) {
    return null;
  }
  return (
    <>
      <motion.div 
        className='fixed top-0 bottom-0 right-0 w-screen h-screen z-30 bg-[#2e2257]' 
        variants={bugVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        onAnimationComplete={() => setIsAnimationComplete(true)} 
        transition={{ 
          x: [
            { type: "spring", stiffness: 300, damping: 30 },
            { type: "spring", stiffness: 300, damping: 30 },
            { type: "spring", stiffness: 300, damping: 30 },
            { type: "spring", stiffness: 300, damping: 30 },
            { type: "spring", stiffness: 300, damping: 30 }
          ],
          y: [
            { type: "spring", stiffness: 300, damping: 30 },
            { type: "spring", stiffness: 300, damping: 30 },
            { type: "spring", stiffness: 300, damping: 30 },
            { type: "spring", stiffness: 300, damping: 30 },
            { type: "spring", stiffness: 300, damping: 30 }
          ],
          filter: [
            { duration: 0.2 },
            { duration: 0.2 },
            { duration: 0.2 },
            { duration: 0.2 },
            { duration: 0.2 }
          ],
          opacity: [
            { duration: 0.3 },
            { duration: 0.3 },
            { duration: 0.3 },
            { duration: 0.3 },
            { duration: 0.3 }
          ]
        }}
      ></motion.div>
    </>
  );
};

export default Transition;
