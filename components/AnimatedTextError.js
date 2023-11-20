import React, { useEffect, useRef } from 'react';

const AnimatedTextError = () => {
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);

  useEffect(() => {
    const elts = {
      text1: text1Ref.current,
      text2: text2Ref.current,
    };

    const texts = [
      "If",
      "You",
      "Like",
      "It",
      "Please",
      "Give",
      "a Love",
      ":)",
      "by @DotOnion"
    ];
  
    const morphTime = 1;
    const cooldownTime = 0.25;
    
    let textIndex = texts.length - 1;
    let time = new Date();
    let morph = 0;
    let cooldown = cooldownTime;

    
    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];

    const doMorph = () =>{
        morph -= cooldown;
        cooldown = 0;

        let fraction = morph / morphTime;

        if (fraction > 1) {
            cooldown = cooldownTime;
            fraction = 1;
        }

        setMorph(fraction);
    }

    const setMorph = (fraction) => {
        elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        fraction = 1 - fraction;
        elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
        elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

        elts.text1.textContent = texts[textIndex % texts.length];
        elts.text2.textContent = texts[(textIndex + 1) % texts.length];
    }

    const doCooldown = () =>{
        morph = 0;

        elts.text2.style.filter = "";
        elts.text2.style.opacity = "100%";

        elts.text1.style.filter = "";
        elts.text1.style.opacity = "0%";
    }

    // La logique d'animation (animate function)
    const animate = () => {
      requestAnimationFrame(animate);

        const newTime = new Date();
        const shouldIncrementIndex = cooldown > 0;
        const dt = (newTime - time) / 1000;
        time = newTime;

        cooldown -= dt;

        if (cooldown <= 0) {
            if (shouldIncrementIndex) {
                textIndex++;
            }

            doMorph();
        } else {
            doCooldown();
        }
    };

    animate();
  }, []);

  return (
    <div id="container-mail-error">
      <span ref={text1Ref} id="text1-mail-error"></span>
      <span ref={text2Ref} id="text2-mail-error"></span>
    </div>
  );
};

export default AnimatedTextError;
