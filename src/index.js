import React from 'react';
import * as ReactDOM from 'react-dom/client'
import { ColorModeScript } from '@chakra-ui/react';
import { Portafolio } from './Portafolio';
import { theme } from './styles/theme';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import global_es from './translations/es/global.json'
import global_en from './translations/en/global.json'

i18next.init({
    interpolation: {escapeValue:false},
    lng: 'es',
    resources: {
        es:{
            global: global_es
        },
        en: {
            global: global_en
        },
    },
});

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(
    <>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <I18nextProvider i18n={i18next}>
            <Portafolio />
        </I18nextProvider>
    </>
);

