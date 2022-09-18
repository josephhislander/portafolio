import React from 'react';
import { Box } from '@chakra-ui/react';
import { TecnologiasItem } from './TecnologiasItem';
import  IconJs  from '../../assets/Iconos/js.png';
import  IconReact  from '../../assets/Iconos/react.png';
import  IconNode  from '../../assets/Iconos/nodejs.png';
import  IconAbobeXd  from '../../assets/Iconos/xd.png';
import  IconHtml  from '../../assets/Iconos/html-5.png';
import  IconBootstrap  from '../../assets/Iconos/bootstrap.png';
import  IconMongoDB  from '../../assets/Iconos/mongoDB.png';
import  IconGit  from '../../assets/Iconos/git.png';
import  IconCss  from '../../assets/Iconos/css-3.png';
import  IconSass  from '../../assets/Iconos/sass.png';
import  IconHeroku  from '../../assets/Iconos/heroku.png';
import  IconGitHub  from '../../assets/Iconos/github.png';
import { animated, config, to, useTrail } from 'react-spring';

export const Tecnologias = ({animation}) => {

  const icons = [  { icon: IconJs, name: 'JavaScript' } ,{ icon: IconReact, name: 'React.js' } ,{ icon: IconNode, name: 'Node.js' } , { icon: IconMongoDB, name: 'MongoDB' } ,{ icon: IconHtml, name: 'Html' } ,{ icon: IconBootstrap, name: 'Bootstrap' } ,{ icon: IconHeroku, name: 'Heroku' } ,{ icon: IconGit, name: 'Git' } ,{ icon: IconCss, name: 'Css' } ,{ icon: IconSass, name: 'Sass' } ,{ icon: IconAbobeXd, name: 'AdobeXd' } ,{ icon: IconGitHub, name: 'GitHub' } ]


  const trail = useTrail(icons.length, {
    config: config.default,
    from: animation && {opacity: 0, },
    to: animation && {opacity: 1, },
    // delay: 500
  })

  return (
    
     <Box>
      {animation &&
      <Box  justifyItems='center' display='grid' gridTemplateColumns={{base:'1fr 1fr 1fr', sm: '1fr 1fr 1fr 1fr'}}  columnGap={{lg:'5rem'}}  rowGap={{base:'2rem', lg:'1rem'}} mt='3rem'>
      {
        trail.map((item,i) => <TecnologiasItem  icon={icons[i].icon}  alt={icons[i].name} name={icons[i].name} key={i} style={item} /> )
      }
      </Box> 
      }
     </Box>
  
  )
}
// trail.map((item, i) => <SoftSkillsItem  style={item}  icon={data[i].icon}  skill={data[i].skill}  key={i}  />