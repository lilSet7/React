import React, { useEffect, useState }from  'react';
import * as S from './styled';
import { useHistory } from 'react-router-dom';

export default function Repos(){
  const history = useHistory();
  const [reposName, setReposName] = useState([])

  useEffect(() => {
    let reposName = localStorage.getItem('reposName');
    if(reposName != null) {
      reposName = JSON.parse(reposName);
      setReposName(reposName)
      localStorage.clear()
    }else {
      history.push('/')
    }

  }, [])
  
  return (
    <S.Container>
      <S.Title>Repositorios</S.Title>
      <S.List>
          { reposName.map((repos, index) => {
            return(
            <S.ListItem key={index}> {repos}</S.ListItem>
          )
          })}
      </S.List>
      <S.Button to='/'>Volta</S.Button>
    </S.Container>
  )
}
