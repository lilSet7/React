import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Repos from './pages/Repos'

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
          <Route path='/repos' component={Repos}/>
          <Route path='/' component={Home} />
      </Switch>
   </BrowserRouter>

  )
}