import React from 'react';
import Menu from '../../components/Menu';
import BannerMain from '../../components/BannerMain';
import Footer from '../../components/Footer';
import Carousel from '../../components/Carousel';
import DadosIniciais from '../../data/dados_iniciais.json';

function Home() {
  return (
    <div style={{background: "#141414"}}>
      <Menu/>
      <BannerMain
        videoTitle={DadosIniciais.categorias[0].videos[0].titulo}
        url={DadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Uma breve homenagem a um dos maiores nomes do basquete de todos os tempos, e que se foi de forma tão precoce."}
      />
      
      <Carousel
        ignoreFirstVideo
        category={DadosIniciais.categorias[0]}
      />

      <Footer/>

    </div>
    
  );
  
}

export default Home;
