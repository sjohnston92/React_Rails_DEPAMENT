import React, { Fragment, } from 'react';
import { Route, Switch, } from 'react-router-dom';
import Home from './comp/Home';
import Department from './comp/Department';
import NoMatch from './comp/NoMatch';
import NavBar from './comp/NavBar';


import './App.css';
import { Container } from 'react-bootstrap';

const App = () => (
  <Fragment>
    <NavBar />
    <br />
    <Container>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/departments" component={Department} />
        <Route component={NoMatch} />
      </Switch>
    </Container>
  </Fragment>
);

export default App;
