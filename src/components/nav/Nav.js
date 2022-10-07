import React, { useState } from "react";
import { Box } from '@chakra-ui/react';
import { useEffect } from "react";
import { ButtonLogoNav } from "./ButtonLogoNav";
import { ButtonsNav } from "./ButtonsNav";
import { animated, config, useSpring } from "react-spring";


export  const Nav =  ({toggleMenuM, setToggleMenuM}) => {

    const AnimatedBox = animated(Box);
    const [lenguage, setLenguage] = useState(true)
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleAnimation, setToggleAnimation] = useState(true);
    const [Cancel, setCancel] = useState(false)
    const [toggleButton, setToggleButton] = useState(true)

    const spring = useSpring({
     from: toggleMenu ?  {y: (window.pageYOffset - 2000)} : {y: window.pageYOffset},
      to:   toggleMenu ? {y: window.pageYOffset} : {y: ( - 2000)},
      config : config.slow,
    })
  
    useEffect(() => {
      if(window.pageYOffset < 1  ){ setToggleMenu(true);}
      let lastScroll = window.pageYOffset;

    //   if(window.innerWidth  >  700 ){
    //     setCancel(true);
    // }

      const handleScroll = ( ) => { 
        if (window.pageYOffset < 1 && window.innerWidth >= 700 ) {
          setToggleMenu(true);
        } 
        // else {
        //   setToggleMenu(false)
        // }

        console.log(lastScroll);
        if(window.innerWidth <= 500) {
        if( !toggleMenuM &&  window.pageYOffset < (lastScroll - 50)  ) {
                         console.log('suebiendo');
                         setToggleButton(true);
                         lastScroll = window.pageYOffset;
                     } else if (window.pageYOffset > (lastScroll + 50) && !toggleMenuM) {
                         console.log('bajando');
                         setToggleButton(false);
                         lastScroll = window.pageYOffset;
                     }

                    }
        
      }
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
    }
    }, [])

//     useEffect(() => {

//       if(window.innerWidth <= 500) {let lastScroll = window.pageYOffset;
       
//        const handleScroll = () => {
        
//            if(window.pageYOffset < (lastScroll - 50)  && !toggleMenuM) {
//                console.log('suebiendo');
//                setToggleButton(true);
//                lastScroll = window.pageYOffset
//            } else if (window.pageYOffset > (lastScroll + 50) && !toggleMenuM) {
//                console.log('bajando');
//                setToggleButton(false);
//                lastScroll = window.pageYOffset;
//            }


//        } 

//        window.addEventListener('scroll', handleScroll)

//      return () => {
//        window.removeEventListener('scroll', handleScroll);

//      }
// }
  //  }, [])
    
    return(
        <AnimatedBox pos={'relative'} zIndex={1} >

            <AnimatedBox style={ spring }>
              <ButtonsNav  toggleMenuM={toggleMenuM} setToggleMenuM={setToggleMenuM}  lenguage={lenguage} setLenguage={setLenguage} setToggleMenu={setToggleMenu} toggleMenu={toggleMenu} toggleAnimation= {toggleAnimation} setToggleAnimation={setToggleAnimation} Cancel={Cancel} />
            </AnimatedBox>
    
          { !toggleMenu  && toggleButton &&
             <ButtonLogoNav  toggleMenuM={toggleMenuM} setToggleMenuM={setToggleMenuM} Cancel={Cancel} setCancel={setCancel}   setToggleMenu={setToggleMenu}  toggleMenu={toggleMenu} /> 
           }
        </AnimatedBox>   
    )
}