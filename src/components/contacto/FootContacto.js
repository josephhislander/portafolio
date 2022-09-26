import React from 'react';
import { Box, Img, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import logoReact from '../../assets/Imagenes/logoReact.png'
import { useTranslation } from 'react-i18next';

export const FootContacto = () => {

  const [t] = useTranslation("global");

  return (
    <Box >
        <Box display='flex' justifyContent='center' fontSize='5rem' gap='3rem' mt='2rem' mb='1rem'>
          <Text as='a' title='Git Hub' href='https://github.com/josephhislander'  cursor='pointer' target="_blank" rel="noopener noreferrer"  w='6rem' h='6rem' fontSize='5rem' transition='all 0.5s' _hover={{fontSize:'6rem', }} > 
            <FaGithub  />
          </Text> 
          <Text as='a' title='Linkedin' href='https://www.linkedin.com/in/joseph-galviz/'  cursor='pointer' target="_blank" rel="noopener noreferrer"  w='6rem' h='6rem' fontSize='5rem' transition='all 0.5s' _hover={{fontSize:'6rem', }} > 
            <FaLinkedin />
          </Text>
          
        </Box> 
       <Text align='center' mb='1rem'>{t("contact.contactFoot.create")}</Text>
       <Box display='flex' gap='1rem' justifyContent='center' >
        <Text alignSelf='center' fontSize='1.5rem' >{t("contact.contactFoot.developed")}</Text>
        <Box w='10rem'>
            <Img  src={logoReact} alt='logoReact' ></Img>
        </Box>
       </Box>

    </Box>
  )
}
