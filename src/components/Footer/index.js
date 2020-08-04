import React from 'react';
import { FooterBase } from './styles';
import Bola from '../../assets/Image/BOLA.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
         {"    "}.{"  "}.{"  "}.{"    "}
      <img className='Bola' src={Bola} alt='O mais importante.' width='40px' height='40px' />
      <p>
        Projeto implementado durante a 
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
