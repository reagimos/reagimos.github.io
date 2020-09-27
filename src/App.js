import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

import Header from './components/Header'
import Frases from './components/Frases'
import Noise from './components/Noise'
import Home from './components/Home'
import About from './components/About'
import Politics from './components/Politics'
import Faq from './components/Faq'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  componentWillMount () {
    const script = document.createElement("script");

    script.src = "http://reagimos.com/assets/ecwid.js";
    script.async = true;

    document.body.appendChild(script);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Noise />
            <Route path="/" exact component={Frases} />
            <Route path="/" exact component={Home} />
            <Route path="/quem-somos" component={About} />
            <Route path="/politica-de-troca" component={Politics} />
            <Route path="/faq" component={Faq} />
            <Route path="/contato" component={Contact} />
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
