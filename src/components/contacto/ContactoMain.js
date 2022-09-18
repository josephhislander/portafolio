import React from 'react'
import {Box} from '@chakra-ui/react'
import { FormularioContacto } from './FormularioContacto'
import { FootContacto } from './FootContacto'

export const ContactoMain = () => {
  return (
     <Box id='contacto'   pt='8rem'  h={{base:'100%', lg:'100vh'}}>
        <FormularioContacto />
        <FootContacto />
     </Box>
  )
}
