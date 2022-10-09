import React, { useEffect, useRef, useState } from 'react';
import { Box, Button, Img, Input, Stack, Textarea, useDisclosure } from '@chakra-ui/react';
import { FormControl, FormLabel} from '@chakra-ui/react'
import topContac from '../../assets/Imagenes/topContac.png';
import emailjs from '@emailjs/browser';
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
import { animated, config, useSpring } from 'react-spring';
import { useTranslation } from 'react-i18next';

export const FormularioContacto = () => {

  const AnimatedFormLabel= animated(FormLabel);
  const AnimatedButton = animated(Button);
  const [t] = useTranslation("global");
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    const handleScroll = ( ) => { 
      if (window.pageYOffset >= 1900) {
        setAnimation(true);
      }}
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
  }
  }, [])
  const spring = useSpring({
    from: animation &&  { opacity: 0},
    to: animation && { opacity: 1},
    config : config.slow,
    delay: 500
  })
  const spring2 = useSpring({
    from: animation &&  { y: 50, opacity: 0},
    to: animation && { y:0, opacity: 1},
    config : config.slow,
    delay: 500
  })

    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_t70rm3o', 'template_5ibq1pr', form.current, 'tjglEOo7wUAqViFak')
        .then((result) => {
            onOpen();
            document.getElementById("form").reset();
        }, (error) => {
        });
    };

  return (
    <Box >
        <Img src={topContac}></Img>
        <Box w='100%' h={{base:'30rem', lg: '250px'}} bg='brand.lightBlue' >
            <Box w={{base:'80%', md: '50%'}} m='auto'  >
               <form  ref={form} onSubmit={sendEmail} id='form' >
                    <FormControl color='brand.darkBlue' isRequired  >
                        <Box display={{base:'block', lg:'flex'}} gap='1rem' alignItems='center' >
                            <AnimatedFormLabel  style={spring} fontSize='1.8rem' htmlFor='name'>{t("contact.contactForm.name")}</AnimatedFormLabel>
                            <Input id='name' fontSize='1.5rem' borderColor='brand.gray'    _hover={{borderColor: 'brand.gray'}} size='lg' name='name'/>
                            <AnimatedFormLabel style={spring} fontSize='1.8rem' htmlFor='email'>Email:</AnimatedFormLabel>
                            <Input id='email' type='email' name='email' fontSize='1.5rem' borderColor='brand.gray'   _hover={{borderColor: 'brand.gray'}} size='lg'/>
                        </Box>
                        <AnimatedFormLabel style={spring} fontSize='1.8rem' htmlFor='name'>{t("contact.contactForm.message")}</AnimatedFormLabel>
                        <Textarea fontSize='1.5rem' borderColor='brand.gray'   _hover={{borderColor: 'brand.gray'}} size='lg' name='message'/>
                        <Stack align='center ' mt='2rem'>
                            <AnimatedButton style={spring2} fontSize='1.5rem' type='submit' size='lg' colorScheme='blue' variant='solid' >{t("contact.contactForm.send")}</AnimatedButton>
                        </Stack>
                    </FormControl>
                </form>


                <AlertDialog
                    isOpen={isOpen}
                    motionPreset='slideInBottom'
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            
                        </AlertDialogHeader>
                        <AlertDialogBody>
                        Sent successfully!
                        </AlertDialogBody>

                        <AlertDialogFooter>
                        <Button ref={cancelRef} onClick={onClose} fontSize='1.5rem'>
                            Ok!
                        </Button>

                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog> 
            </Box>
        </Box>
    </Box>
  )
}
