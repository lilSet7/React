import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import axios from 'axios';
import * as S from './styled'

export default function App() {
  const [usuario, setUsuario] = useState('')
  const history = useHistory();

function handlePesquisa(){
    axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
      const repos = response.data;
      const reposName = [];
      repos.map((repos) => {
        reposName.push(repos.name)
      });
      localStorage.setItem('reposName', JSON.stringify(reposName));
      history.push('/repos')
    })

}

  return (
    <S.Container className="App">
      <S.Input
         className='usuarioInput'
         value={usuario} name='usuario'
         placeholder='Digite o Nome de Usuario'
        onChange={e => setUsuario(e.target.value)}
        />
      <S.Button type='button' onClick={handlePesquisa} >Pesquisar</S.Button>
    </S.Container>
  );
}
