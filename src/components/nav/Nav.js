import React, { useState } from "react";
import { Box } from '@chakra-ui/react';
import { useEffect } from "react";
import { ButtonLogoNav } from "./ButtonLogoNav";
import { ButtonsNav } from "./ButtonsNav";
import { animated, config, easings, useSpring } from "react-spring";


export  const Nav =  () => {

    const AnimatedBox = animated(Box);
    const [lenguage, setLenguage] = useState(true)
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleAnimation, setToggleAnimation] = useState(true);
    const [Cancel, setCancel] = useState(false)
    
    const spring = useSpring({
     from: toggleMenu ?  {y: (window.pageYOffset - 2000)} : {y: window.pageYOffset},
      to:   toggleMenu ? {y: window.pageYOffset} : {y: ( - 2000)},
      config : config.slow,
    })
  
    useEffect(() => {
      if(window.pageYOffset < 1 && window.innerWidth >= 700 ){
          setToggleMenu(true);
      }
      if(window.innerWidth  >  700 ){
        setCancel(true);
    }

      const handleScroll = ( ) => { 
        if (window.pageYOffset < 1 && window.innerWidth >= 700 ) {
          setToggleMenu(true);
        } else  {
          setToggleMenu(false);
        }
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
    }
    }, [])
    
    return(
        <AnimatedBox pos={'relative'} zIndex={1} >
           { toggleMenu &&
            <AnimatedBox style={ spring }>
              <ButtonsNav  lenguage={lenguage} setLenguage={setLenguage} setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} toggleAnimation= {toggleAnimation} setToggleAnimation={setToggleAnimation} Cancel={Cancel} />
            </AnimatedBox>
          } 

          { !toggleMenu  &&
             <ButtonLogoNav Cancel={Cancel} setCancel={setCancel}   setToggleMenu={setToggleMenu}  toggleMenu={toggleMenu} /> 
           }
        </AnimatedBox>   
    )
}