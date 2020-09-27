import React from 'react'

const ano = new Date();


const Footer = props => {
  return(

    <footer className="rodape">
      <div className="container">
        <div className="about">
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
          <p>
          <b>Horário de Atendimento:</b>
          <br/>
          Seg a Sex das 09h às 18h.
          <br/><br/>
          <b>Whatsapp:</b>
          <br/>
          (27) 9xxxx-xxxx
          </p>
          <nav className="menu">
            <ul>
              <li className="social">
                <a href="#" target="_blank"><i className="fab fa-instagram"></i></a>
                <a href="#" target="_blank"><i className="fab fa-facebook-f"></i></a>
              </li>
            </ul>
          </nav>
        </div>

        <nav className="menu">
          <ul>
            <li><a href="/quem-somos">quem somos</a></li>
            <li><a href="/politica-de-troca">politica de troca</a></li>
            <li><a href="/faq">faq</a></li>
            <li><a href="/contato">fale conosco</a></li>
          </ul>
        </nav>
      </div>
      <p className="copy">© Todos os direitos reservados. {ano.getFullYear()}</p>
    </footer>
  )
}

export default Footer
