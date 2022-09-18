import React from "react";
import {  ChakraProvider } from '@chakra-ui/react'
import { theme } from "./styles/theme";
import { Nav } from "./components/nav/Nav";
import { AboutMain } from "./components/about/AboutMain";
import { HomeMain } from "./components/home/HomeMain";
import { ProyectosMain } from "./components/proyectos/ProyectosMain";
import { ContactoMain } from "./components/contacto/ContactoMain";

export const Portafolio = () => {
    return (
        <ChakraProvider theme={theme}>
            <Nav/>
            <HomeMain />
            <AboutMain  />
            <ProyectosMain />
            <ContactoMain />
        </ChakraProvider>
    )
}
