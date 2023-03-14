import WeatherApp from '../images/WeatherApp.png'
import pokeApp from '../images/pokeApp.jpg'
import WineSuply from '../images/WineSuply.jpg'
import ticTacToe from '../images/tic-tac-toe.png'

export const projects = [
    {
        title: 'Wine Supply',
        description: 'Wine-Supply es el proyecto final grupal, que realizamos dentro del bootcamp de SoyHenry, se trata de un e-commerce de ventas de vino online. donde tiene sus secciones para mostrar todos los vinos, filtrados , detalles , etc... Cuenta con una opcion de pago con Mercado Pago. Participé en un equipo de 8 integrantes, aprendiendo habilidades blandas y tecnicas. Utilizamos la metodología de scrum para trabajar a lo largo del proyecto.',
        image: WineSuply,
        deployLink: 'https://voluble-hummingbird-3fb9b1.netlify.app/',
        codeLink: 'https://github.com/Wine-Supply'
    }, {
        title: 'PokeApp',
        description: 'Es una app de Pokemones, donde podemos encontrar un listado en tarjetas de los distintos pokemones. Podemos hacer busqueda, filtrados, ordenamientos, crear pokemon ... Realizada principalmente con ReactJs complementado con Redux para obtener un estado global. Realice el servidor con express y diseñe la base de datos relacional',
        image: pokeApp,
        deployLink: 'https://deploy-pi-chi.vercel.app/',
        codeLink: 'https://github.com/EmilioVigil/PI-Pokemon'
    }, {
        title: 'Weather App',
        description: 'Aplicación realizada principalmente con ReactJs , utilizando fetch para traer datos de cada ciudad o pais a través de la api de Weather ',
        image: WeatherApp,
        deployLink: 'https://weather-app-delta-bice.vercel.app/',
        codeLink: 'https://github.com/EmilioVigil/WeatherApp'
    }, {
        title: 'Tic-Tac-Toe',
        description: 'Aplicación replica del famoso juego del tres en raya, realizada con ReactJs y aplicando el uso de estados y hooks ',
        image: ticTacToe,
        deployLink: 'https://tic-tac-toe-kohl-ten.vercel.app/',
        codeLink: 'https://github.com/EmilioVigil/Tic-tac-toe'
    }
]