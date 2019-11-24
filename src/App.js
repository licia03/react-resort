import React from 'react';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';

import { Route, Switch } from 'react-router-dom';

function App() {
  const root = "react-resort/";
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Home} />
        <Route exact path={`${process.env.PUBLIC_URL}/rooms`} component={Rooms} />
        <Route exact path={`${process.env.PUBLIC_URL}/rooms/:slug`} component={SingleRoom} /> 
        <Route component={Error} />
      </Switch>
    </>
  );
}

export default App;
