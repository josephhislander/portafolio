import shoppingListPortadaPc from '../Imagenes/Pantallas/ShoppingList/Pc/shoppingListPortadaPc.png';
import shoppingListPantallaPrincipalPc from '../Imagenes/Pantallas/ShoppingList/Pc/shoppingListPantallaPrincipalPc.png';
import shoppingListLoginConGooglePc from '../Imagenes/Pantallas/ShoppingList/Pc/shoppingListLoginConGooglePc.png';
import shoppingListRegisterPc from '../Imagenes/Pantallas/ShoppingList/Pc/shoppingListRegisterPc.png';
import shoppingListListaPc from '../Imagenes/Pantallas/ShoppingList/Pc/shoppingListListaPc.png';
import shoppingListMarcarPc from '../Imagenes/Pantallas/ShoppingList/Pc/shoppingListMarcarPc.png';
import shoppingListNuevaListaPC from '../Imagenes/Pantallas/ShoppingList/Pc/shoppingListNuevaListaPC.png';
import shoppingListPresupuestoPc from '../Imagenes/Pantallas/ShoppingList/Pc/shoppingListPresupuestoPc.png';
import shoppingListMv from '../Imagenes/Pantallas/ShoppingList/Movil/shoppingListMv.png';
import tresEnRayaHomePc from '../Imagenes/Pantallas/TresEnRaya/Pc/tresEnRayaHome.png';
import tresEnRayaTutorialPc from '../Imagenes/Pantallas/TresEnRaya/Pc/tresEnRayaTutorial.png';
import tresEnRayaPlayPc from '../Imagenes/Pantallas/TresEnRaya/Pc/tresEnRayaPlay.png';
import tresEnRayaMv from '../Imagenes/Pantallas/TresEnRaya/Movil/tresEnRayaMv.png';
import ahorcadoHomePc from '../Imagenes/Pantallas/Ahorcado/Pc/ahorcadoHome.png';
import ahorcadoTutorialPc from '../Imagenes/Pantallas/Ahorcado/Pc/ahorcadoTutorial.png';
import ahorcadoPlayPc from '../Imagenes/Pantallas/Ahorcado/Pc/ahorcadoPlay.png';
import ahorcadoMv from '../Imagenes/Pantallas/Ahorcado/Movil/ahorcadoMv.png';
import frontPageTresEnRaya from '../Imagenes/Pantallas/portada-tresEnRayaPc2.png';
import frontPageAhorcado from '../Imagenes/Pantallas/portada-ahorcadoPc2.png';
import  IconJs  from '../Iconos/js.png';
import  IconReact  from '../Iconos/react.png';
import  IconNode  from '../Iconos/nodejs.png';
import  IconHtml  from '../Iconos/html-5.png';
import  IconBootstrap  from '../Iconos/bootstrap.png';
import  IconMongoDB  from '../Iconos/mongoDB.png';
import  IconCss  from '../Iconos/css-3.png';

export const proyectos = [
    {
        left: true,
        frontPage: shoppingListPortadaPc,
        title: 'ShoppingList',
        code: 'https://github.com/stars/josephhislander/lists/shoppinglistapp',
        production: 'http://shopping-list-app0.herokuapp.com/', 
        shortDescription: ' \u00A0 Es una aplicación web que permite crear y gestionar listas de compras, presupuestos y gastos, que cuenta  con un  sistema de registro de usuario y almacenamiento permanente.',
        technologies: [ { name: 'React.js', icon: IconReact},  { name: 'Bootstrap', icon: IconBootstrap},  { name: 'Node.js', icon: IconNode},  { name: 'MongoDB', icon: IconMongoDB},  { name: 'Express.js', icon: 'Express.js', type: 'text'} ],
        origen: ' \u00A0 El proceso de ir de compras con una lista tradicional  y un presupuesto en mente puede llegar a ser tedioso, recorrer los pasillos del super mercado con una hoja o una lista digital en una mano y una calculadora en la otra, para ir por un lado marcando los productos que ingresa a su carrito y por el otro calculando el costo de estos intentando evitar exceder su presupuesto termina siendo agotador, ShoppingList automatiza este proceso a través de una interfaz fácil de usar que permite acceder a ella desde un teléfono, Tablet o laptop con conexión a internet, de manera personalizada podrá mantener y gestionar cuantas listas desee iniciando sesión en la app.',
        funcionalidades: [
            '- Registro de usuario e inicio de sesión:  cuenta con un sistema de registro de usuario  que permite hacerlo directamente desde shoppingList o  atreves de la API de google presionando solo un botón, de igual forma puede iniciar sesión de ambas maneras y acceder a sus listas  las cuales solo estarán disponibles para su usuario registrado e identificado.', 
            '- Crear listas de compras: a través del botón (+) podra crear y personalizar nuevas listas de compras, asignándoles un titulo, los productos que quiere que contenga y la cantidad de estos .',
            '- Gestionar listas de compras: desde la pantalla principal podra observar, borrar, y editar las lista antes creadas.', 
            '- Uso de las listas: al seleccionar la lista desde la pantalla principal  esta se abrirá y podrá asignarle un presupuesto, luego cada vez que encuentre un producto  en el supermercado y lo coloque en su carrito podrá marcar el producto en la lista, asignarle  precio y un impuesto si fuese necesario, automáticamente el costo total del producto o productos se debitara del presupuesto inicial e indicara en tiempo real cual es su presupuesto restante, cuando el presupuesto se acerque a cero la aplicación le  enviara una alerta notificándole, de igual manera cuando el presupuesto se agote', 
            '- Otras funcionalidades: durante el uso de la lista podrá modificar su presupuesto en cualquier momento, también podrá borrar y añadir productos si fuese necesario.'],
        otrasTecnologias: [
            '- Animate.js',
            '- Moment.js',
            '- React google login',
            '- React modal',
            '- React redux',
            '- Sass',
            '- Sweetalert2'
        ],
        data: [
              {
                image: shoppingListPortadaPc,
                caption: "shoppingListPortadaPc"
                
              },

              {
                image: shoppingListRegisterPc,
                caption: "shoppingListRegisterPc"
                
              },
              {
                image: shoppingListLoginConGooglePc,
                caption: "shoppingListLoginConGooglePc"
              },
              {
                image: shoppingListPantallaPrincipalPc,
                caption: "shoppingListPantallaPrincipalPc"
              },
              {
                image: shoppingListListaPc,
                caption: "shoppingListListaPc"
              },
              {
                image: shoppingListMarcarPc,
                caption: "shoppingListMarcarPc"
                
              },{
                image: shoppingListNuevaListaPC,
                caption: "shoppingListNuevaListaPC"
              },
              {
                image: shoppingListPresupuestoPc,
                caption: "shoppingListPresupuestoPc"
                
              },
              {
                image: shoppingListMv,
                caption: "shoppingListMv"
                
              },
             ]
    }, 
    {
        left: false,
        frontPage: frontPageTresEnRaya,
        title: 'Tres en Raya',
        code: 'https://github.com/josephhislander/tres-en-raya',
        production: 'https://josephhislander.github.io/tres-en-raya/', 
        shortDescription: '\u00A0 Es una aplicación web que  virtualiza  el clasico juego de XO o Tambien conocido como tres en raya, cuenta con un tutorial y un area de juego.',
        technologies: [ { name: 'Html', icon: IconHtml},  { name: 'Css', icon: IconCss},  { name: 'JavaScript', icon: IconJs}],
        origen: ' \u00A0 Hoy día hay mas personas que cargan consigo un smartphone, que un bolígrafo y papel en su bolsillo, el tradicional  Tres en raya es un juego para dos jugadores que consiste en completar una linea de tres X o tres O (dependiendo del símbolo que haya elegido y le represente en el juego),  antes que su contrincante en un tablero de 3x3 casillas que solía dibujarse sobre un papel, en el cual cada participante tendrá un turno intercalado para posicionar su símbolo y servirse de su habilidad para lograr dibujar de primero una linea de tres que le concederá la victoria, este entretenido juego ahora  estará disponible  con esta app de manera digital al cual se puede acceder a través de su teléfono, Tablet o laptop y pasar un divertido rato con sus amigos.',
        funcionalidades: [
            '- Tutorial:  cuenta con una guía ilustrada que le enseña las bases y principios del juego.', 
            '- Tablero:  el área de juego posee un tablero en donde este se desarrolla  y permite a cada jugador  marcar su símbolo de manera intercalada.',
            '- Contadores:  para aumentar la dinámica de juego se ha establecido un objetivo el primer jugador que acumule 5 puntos gana el juego,  por ello podremos observar en los laterales del tableros contadores para cada participante que llevan la cuenta de los puntos acumulados.', 
            '- Otras funcionalidades:  ubicados debajo del tablero podremos encontrar un conjunto de botones que permiten regresar a la pantalla de inicio, deshacer un movimiento, reiniciar los contadores, o volver al tutorial para recordar las reglas del juego.'],
            data: [{
                image: tresEnRayaHomePc,
                caption: "tresEnRayaHomePc"
              },
              {
                image: tresEnRayaTutorialPc,
                caption: "tresEnRayaTutorialPc"
              },
              {
                image: tresEnRayaPlayPc,
                caption: "tresEnRayaPlayPc"
              },
              {
                image: tresEnRayaMv,
                caption: "tresEnRayaMv"
              },
            ]
    },
    {
        left: true,
        frontPage: frontPageAhorcado,
        title: 'Ahorcado',
        code: 'https://github.com/josephhislander/ahorcado2.0',
        production: 'https://josephhislander.github.io/ahorcado2.0/', 
        shortDescription: '\u00A0 Es una aplicación web que  virtualiza el clasico juego del ahorcado, un juego de adivinanzas  para dos  jugadores, cuenta con un tutorial y un area de juego. ',
        technologies: [ { name: 'Html', icon: IconHtml},  { name: 'Css', icon: IconCss},  { name: 'JavaScript', icon: IconJs}],
        origen: ' \u00A0 Ahorcado es un juego de adivinanzas para dos jugadores en el que cada participante tiene un rol diferente, el primero debe escoger una palabra y ocultarla sin que su contrincante se de cuenta el segundo debe intentar adivinarla antes de que se agoten sus oportunidades, todo esto se lleva  a cabo de forma didáctica a través de  la representación en papel  de la palabra oculta mediante cortas rayas horizontales que representan cada una de las letras que forman parte del misterio, serán un dato clave para  que  el adivinador deduzca cual es la palabra que esta escondida, cada vez que este se equivoqué una parte del dibujo de un pequeños y desafortunado personaje de palitos será dibujado hasta que la ilustración del ahorcado sea completada  en este caso el adivinador abra perdido la partida  si por el contrario sus decisiones son mas acertadas  terminara descubriendo el misterio y ganando la partida salvando a nuestro compañero de palitos, esta App virtualiza este  clásico juego al cual se puede acceder a través de su teléfono, Tablet o laptop y pasar un divertido rato con sus amigos.',
        funcionalidades: [
            '- Tutorial:  cuenta con una guía ilustrada que le enseña las bases y principios del juego.', 
            '- Área de juego: el área de juego  cuenta con un ocultador de palabras,  un área de dibujo  y un teclado en pantalla que permite indicar la letra elegida.',
            '- Ocultador de palabras:  le permite escribir una palabra y al presionar el botón ocultar la esconderá y dibujara los espacios correspondientes que le indicaran al rival   cuantas letras contiene la adivinanza.', 
            '- Área de dibujo: en este espacio se ira dibujando el ahorcado cada vez que se digite una letra incorrecta.', 
            '- Teclado en pantalla:  todas las letras que necesitaremos están dibujadas en  pantalla al alcance de un click o touch.',
            '- Otras funciones: en el área de juego al presionar el logo de la app nos redirigirá a la pantalla de inicio desde donde podremos acceder de nuevo al tutorial en caso de ser necesario.'],
            data: [{
              image:   ahorcadoHomePc,
              caption: "ahorcadoHomePc"
            },
            {
              image:   ahorcadoTutorialPc,
              caption: "ahorcadoTutorialPc"
            },
            {
              image:   ahorcadoPlayPc,
              caption: "ahorcadoPlayPc"
            },
            {
              image:   ahorcadoMv,
              caption: "ahorcadoMv"
            },
          ]
    }
]