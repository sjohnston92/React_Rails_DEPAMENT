import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './Samples/Home';
import About from './Samples/About';
import NoMatch from './Samples/NoMatch';
import NavBar from './Samples/NavBar';


import './App.css';
import { Container } from 'react-bootstrap';

const App = () => (
  <Fragment>
    <NavBar />
    <br />
    <Container>
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
