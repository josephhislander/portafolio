import React from "react";
import { useColorModeValue } from "@chakra-ui/react";
import {  Image  } from '@chakra-ui/react';
import logoD from  '../../assets/Imagenes/logo-dark.png'; 
import logoL from  '../../assets/Imagenes/logo-light.png'; 


export const Logo = ({ setToggleMenuM, setToggleMenu, toggleMenu}) => {
   
    const logoColor = useColorModeValue(logoL, logoD);
 
    const actions = () => {
        setToggleMenuM(false)
        setToggleMenu(!toggleMenu); 
        // console.log('hola mundo')
        if(window.innerWidth <= 500 && !toggleMenu ){
            disableScroll();
        } else if(window.innerWidth <= 500 && toggleMenu) {
            enableScroll();
        }
    }

    const disableScroll =() => {  
        let x = window.scrollX;
        let y = window.scrollY;
        window.onscroll = function(){ window.scrollTo(x, y) };
    }

    function enableScroll(){  
        window.onscroll = null;
    }

    return (
                <Image src={logoColor} alt='logoPersonal' boxSize={{base:'10rem', md:'7rem'}} onClick={actions}/>
    )
}
