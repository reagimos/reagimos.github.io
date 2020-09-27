import React from 'react'
import { HashLink as Link } from 'react-router-hash-link';

const Headline = props => {
  return(
    <div className="slides">
      <div className="banner">
        <div className="headline">
        <h1>NÃO SEJA UMA OVELHA<b>.</b></h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <Link to="/#reaja" className="btn btn-solid">reaja</Link>
        </div>
      </div>
    </div>
  )
}

export default Headline
