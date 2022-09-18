import { ColorModeScript } from '@chakra-ui/react';
import React from 'react';
import * as ReactDOM from 'react-dom/client'
import { Portafolio } from './Portafolio';
import { theme } from './styles/theme';


const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Portafolio />
    </>
);

