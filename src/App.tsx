import React, { Component } from 'react';
import { Button, Content } from 'carbon-components-react';
import HeaderB from './components/HeaderB';
import './App.scss';

import { Route, Switch } from 'react-router-dom';
import DashboardPage from './content/Dashboard';
import ProvedoresPage from './content/Provedores';

function App() {
  return (
    <>
      <HeaderB/>
      <Content>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route path="/repos" component={ProvedoresPage} />
        </Switch>
      </ Content> 
    </>
  );
}

export default App;
