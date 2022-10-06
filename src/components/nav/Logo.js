import React, { useState } from "react";
import {  Box, useColorModeValue } from "@chakra-ui/react";
import {  Image  } from '@chakra-ui/react';
import logoD from  '../../assets/Imagenes/logo-dark.png'; 
import logoL from  '../../assets/Imagenes/logo-light.png'; 
import { useEffect } from "react";

export const Logo = ({toggleMenuM, setToggleMenuM, setToggleMenu, toggleMenu, setCancel, Cancel}) => {
   
    const logoColor = useColorModeValue(logoL, logoD);
 
    const actions = () => {
        setToggleMenuM(false)
        setToggleMenu(!toggleMenu); 
    }

    
    
    return (



            
                <Image src={logoColor} alt='logoPersonal' boxSize={{base:'10rem', md:'7rem'}} onClick={actions}/>


    )
}




// import React, { useState } from "react";
// import {  Box, useColorModeValue } from "@chakra-ui/react";
// import {  Image  } from '@chakra-ui/react';
// import logoD from  '../../assets/Imagenes/logo-dark.png'; 
// import logoL from  '../../assets/Imagenes/logo-light.png'; 
// import { useEffect } from "react";

// export const Logo = ({toggleMenuM, setToggleMenuM, setToggleMenu, toggleMenu, setCancel, Cancel}) => {
   
//     const logoColor = useColorModeValue(logoL, logoD);
//     const [toggleButton, setToggleButton] = useState(true)
//     const actions = () => {
//         setToggleMenuM(false)
//         setToggleMenu(!toggleMenu); 
//     }

//     useEffect(() => {

//        if(window.innerWidth <= 500) {let lastScroll = window.pageYOffset;
        
//         const handleScroll = () => {
         
//             if(window.pageYOffset < lastScroll ) {
//                 console.log('suebiendo');
//                 setToggleButton(true);
//                 lastScroll = window.pageYOffset
//             } else if (window.pageYOffset > lastScroll) {
//                 console.log('bajando');
//                 setToggleButton(false);
//                 lastScroll = window.pageYOffset;
//             }


//         } 

//         window.addEventListener('scroll', handleScroll)

//       return () => {
//         window.removeEventListener('scroll', handleScroll);

//       }
// }

//     }, [])

    
//     return (

//         <Box>

//             { toggleButton &&
//                 <Image src={logoColor} alt='logoPersonal' boxSize={{base:'10rem', md:'7rem'}} onClick={actions}/>

//             }

//         </Box>
//     )
// }