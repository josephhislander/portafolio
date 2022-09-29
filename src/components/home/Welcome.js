import { Box, Text, useColorModeValue } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import Typed from 'typed.js';



export const Welcome = () => {

  const [t, i18n] = useTranslation("global");
  const saludoTraduction = t("home.welcome");


  const FuenteColor = useColorModeValue( 'brand.blue','brand.bone');
	const el = useRef(null);
  const typed = useRef(null);
  
    useEffect(() => {
      let options;
      if(window.innerWidth > 700) {
        options = {
            strings: [
            saludoTraduction + ',web developer',
           
            saludoTraduction + ',software developer'
          ],
          typeSpeed: 50,
          backSpeed: 50,
        };
      } else {
        options = {
          strings: [
            saludoTraduction + ',\n web developer',
            saludoTraduction + ',\n software developer'
        ],
        typeSpeed: 70,
        backSpeed: 70,
      };
      }

      const timer = setTimeout(() => {
        typed.current = new Typed(el.current, options);
      }, 3000);
      // elRef refers to the <span> rendered below
      
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        clearTimeout(timer)
        typed.current.destroy();
      }
    }, [saludoTraduction])

    return (

          <Box className="type-wrap"   pos='absolute' top='75%'  w='100%'  color={FuenteColor}  >
                  <Text  fontFamily='Anonymous Pro, Time new romans' fontSize={{base:'30px',md:'30px'}} align='center' >
                      <span style={{ whiteSpace: 'pre' }} ref={el}></span>    
                  </Text>       
            </Box>


      );
    }
    
    // ReactDOM.render(
    //     <TypedReactHooksDemo />,
    //   document.getElementById('react-root')
    // );

