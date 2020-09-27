import React from 'react'
import Headline from './Headline'
import {BrowserRouter, Route} from 'react-router-dom';


const Header = props => {
  return(

    <header className="header">
      <div className="container">

        <div className="top ">
          <a href="./" className="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1114 403.98">
              <rect className="logo-box" x="15" y="15" width="1084" height="373.98"/>
              <g>
                <path className="logo-nome" d="M290.95,475h-51q8.15-7.25,8.15-19.63V369.66l-23.55,15.7v70.05q0,12.39,7.85,19.63H181.64q7.85-7.25,7.85-19.63V303.53l23.25-15.7H189.49v-3.62q0-12.38-7.85-19.63h66.43l35,23.25v58.58l-26.27,17.51,26.27,17.51v74Q283.1,467.8,290.95,475ZM248.07,348.83v-61H224.52v76.39Z" transform="translate(-83 -158.01)"/>
                <path className="logo-nome" d="M365.23,451.49V405l35-23.55v54.65l-23.55,15.4h23.55v3.92q0,12.68,7.85,19.63h-109q7.85-7.25,7.85-19.63V303.53l23.25-15.7H307v-3.62q0-12.38-7.85-19.63h109q-7.86,6.95-7.85,19.63v27.18l-35,23.25v-31.1l23.35-15.7H342l-.11,76.39L377,341v40.46l-23.25,15.7V377.51L342,385.36v50.73l-23.25,15.4Z" transform="translate(-83 -158.01)"/>
                <path className="logo-nome" d="M525.87,475H475.14Q483,467.8,483,455.41V370l-23.55,15.4v70.05q0,12.39,7.85,19.63H416.56q7.85-6.94,7.85-19.63V303.53L448,288.13H424.41v-3.93q0-12.68-7.85-19.63H483q8.75,6,17.51,11.78T518,288.13V455.41Q518,467.8,525.87,475ZM483,348.83V288.13H459.44v76.09Z" transform="translate(-83 -158.01)"/>
                <path className="logo-nome" d="M600.45,451.79l-.3-76.39-11.47,7.85V362.11l46.8-31.4V436.09l-23.55,15.7h23.55v3.62q0,12.68,7.85,19.63H534q7.85-7.25,7.85-19.63V303.53l23.25-15.4H541.87v-3.93q0-12.38-7.85-19.63H643.32q-7.86,6.95-7.85,19.63v27.18l-35,23.25v-31.1l23.25-15.4H576.9v148l-23.25,15.7Z" transform="translate(-83 -158.01)"/>
                <path className="logo-nome" d="M701,264.58q-7.86,7.25-7.85,19.63v171.2q0,12.39,7.85,19.63H650.27q7.85-7.25,7.85-19.63V284.21q0-12.38-7.85-19.63Z" transform="translate(-83 -158.01)"/>
                <path className="logo-nome" d="M867.37,284.21v171.2q0,12.68,7.85,19.63H824.49q7.85-6.94,7.85-19.63V288.13H808.79V455.41q0,13,8.15,19.63h-51q7.85-6.64,7.85-19.63V288.13H750.51V455.41q0,12.68,7.85,19.63H707.64q7.85-6.94,7.85-19.63V303.84l23.25-15.7H715.49v-3.93q0-12.38-7.85-19.33h66.13l17.66,11.47,17.36-11.47h66.43Q867.36,271.83,867.37,284.21Z" transform="translate(-83 -158.01)"/>
                <path className="logo-nome" d="M979.69,451.79l-35,23.25H921.11l-35-23.25V288.13l35-23.25h23.55l35,23.25Zm-35-163.66H921.11V451.79h23.55Z" transform="translate(-83 -158.01)"/>
                <path className="logo-nome" d="M1055.78,451.49V375.1L997.2,414V303.53l23.35-15.7H997.2v-3.62q0-12.68-7.85-19.63h109.31q-7.86,7.25-7.85,19.63v32.61l-35,23.25V303.53l23.25-15.7h-46.8l.3,81.83,58.28-39V451.49l-35,23.55H989.35q7.85-6.94,7.85-19.63V428.24l35-23.55v31.4l-23.35,15.4Z" transform="translate(-83 -158.01)"/>
              </g>
            </svg>
          </a>

          <nav className="menu">
            <ul>
              <li><a href="/" id="home">home</a></li>
              <li><a href="/quem-somos">quem somos</a></li>
              <li className="submenu">
                <a href="#" className="submenu_item">nossos produtos</a>
                <ul>
                  <li><a href="#">stickers</a></li>
                  <li><a href="#">camisetas</a></li>
                  <li><a href="#">pacthes</a></li>
                  <li><a href="#">edc</a></li>
                  <li><a href="#">bandeiras</a></li>
                </ul>
              </li>
              <li><a href="/contato">contato</a></li>
              <li className="social">
                <a href="https://instagram.com/reagimos_" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
              </li>
              <li className="carrinho">
                <a href="#!/~/cart">
                  <svg viewBox="0 0 512 512">
                    <path d="m245.33 276.4v-9.728c0-5.888 4.779-10.667 10.667-10.667s10.667 4.779 10.667 10.667v9.707c39.275-4.693 70.763-34.283 76.757-74.261l21.845-148.27c-11.456-7.104-25.003-11.179-39.488-11.179h-38.763c-2.111-15.979-8.874-42.667-31.039-42.667s-28.928 26.688-31.04 42.667h-38.763c-14.955 0-28.864 4.437-40.555 11.989l22.933 147.41c6.017 40.043 37.569 69.675 76.779 74.326zm10.667-255.06c3.435 0 7.424 9.728 9.451 21.333h-18.88c2.005-11.605 5.994-21.333 9.429-21.333z"/>
                    <path d="m428.37 406.89l-28.245-296.64c-1.429-14.912-7.168-28.331-15.808-39.275l-19.797 134.27c-7.595 50.56-48 87.723-97.856 92.48v32.939c0 5.888-4.779 10.667-10.667 10.667s-10.667-4.779-10.667-10.667v-32.96c-49.941-4.8-90.283-41.92-97.856-92.416l-20.714-133.27c-8.171 10.731-13.504 23.829-14.891 38.229l-28.245 296.64c-2.56 26.859 6.379 53.739 24.533 73.685 13.781 15.168 32.043 25.344 51.84 29.397v-72.64c0-29.397 23.936-53.333 53.333-53.333h85.333c29.397 0 53.333 23.936 53.333 53.333v72.64c19.797-4.053 38.059-14.229 51.84-29.397 18.156-19.967 27.116-46.826 24.534-73.684z"/>
                    <path d="m298.66 405.33h-85.334c-17.643 0-32 14.357-32 32v74.667h149.33v-74.667c1e-3 -17.642-14.357-32-31.999-32z"/>
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <BrowserRouter>
          <Route path="/" exact>
            <Headline />
          </Route>
        </BrowserRouter>
      </div>
    </header>
  )
}

export default Header