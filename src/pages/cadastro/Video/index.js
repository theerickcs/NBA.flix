import React from 'react';
import {Link} from 'react-router-dom';
import BasePage from '../../../components/BasePage';


function CadastroVideo(){
    return(
        <BasePage>
          <h1>Cadastro de video</h1>
          <Link to='/cadastro/categoria'>
            Cadastrar categoria
          </Link>
        </BasePage>
    );
}
export default CadastroVideo;