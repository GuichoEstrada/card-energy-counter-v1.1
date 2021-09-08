import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Landing from './components/landing/landing';
import Header from './components/header/header';
import Main from './components/main/main';
// import Footer from './components/footer/footer';

import './App.styles.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/main' component={Main} />
      </Switch>
    </div>
  );
}

export default App;