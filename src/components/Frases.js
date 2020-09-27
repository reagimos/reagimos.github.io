import React, { Component } from "react";
import Slider from "react-slick";

export default class Frases extends Component {
  render() {
    const settings = {
      dots: false,
      arrows: false,
      autoplay: true,
      infinite: true,
      speed: 1000,
      autoplaySpeed: 6000,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="frases">
        <div className="container">
          <Slider {...settings}>
            <p>
              Nunca confie em um governo que não confia em seus cidadãos com armas.
              <b>Bejamin Franklin</b>
            </p>
            <p>
              Tirania pode ser definida como aquilo que é legal para o governo mas ilegal para o cidadão.
              <b>Thomas Jefferson</b>
            </p>
            <p>
              Se você agir sempre com dignidade, talvez não consiga mudar o mundo, mas será um canalha a menos.
              <b>John F. Kennedy</b>
            </p>
            <p>
              Antes de tudo, esteja armado.
              <b>Nicolay Maquiavel</b>
            </p>
            <p>
              Se eu tivesse outo horas para derrubar uma árvore, passaria seis afiando meu machado.
              <b>Abraham Lincoln</b>
            </p>
            <p>
              A árvore da liberdade deve ser regada de quando em quando com o sangue dos patriotas e dos tiranos. É o seu adubo natural.
              <b>Thomas Jefferson</b>
            </p>
            <p>
              Em tempo de paz convém ao homem serenidade e humildade, mas quando estoura a guerra deve agir como um tigre.
              <b>William Shakespeare</b>
            </p>
            <p>
              No inferno, os lugares mais quentes são reservados áqueles que escolheram a neutralidade em tempo de crise.
              <b>Dante Alighieri</b>
            </p>
            <p>
              A desobediência civil é um verdadeiro fundamento da liberdade. Os obedientes são os escravos.
              <b>Henry David Thoreau</b>
            </p>
          </Slider>
        </div>
      </div>
    );
  }
}
