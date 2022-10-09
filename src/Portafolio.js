import React, { useState } from "react";
import {  ChakraProvider } from '@chakra-ui/react'
import { theme } from "./styles/theme";
import { Nav } from "./components/nav/Nav";
import { AboutMain } from "./components/about/AboutMain";
import { HomeMain } from "./components/home/HomeMain";
import { ProyectosMain } from "./components/proyectos/ProyectosMain";
import { ContactoMain } from "./components/contacto/ContactoMain";

export const Portafolio = () => {
    const [toggleMenuM, setToggleMenuM] = useState(true);
    return (
        <ChakraProvider theme={theme}>
            <Nav toggleMenuM={toggleMenuM} setToggleMenuM={setToggleMenuM}/>
            <HomeMain toggleMenuM={toggleMenuM} setToggleMenuM={setToggleMenuM} />
            <AboutMain  />
            <ProyectosMain />
            <ContactoMain />
        </ChakraProvider>
    )
}
