import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
// import Animals from './animals/Animals';
import ElephantHome from './animals/elephants/ElephantHome';
import ElephantList from './animals/elephants/ElephantList';
import ElephantPreview from './animals/elephants/ElephantPreview';
import Footer from './Footer';
import CatsMain from './animals/cats/CatsMain';
import { Main } from '../styles/styled';
import { Container } from '@material-ui/core';

export default function App() {
  return (
    <Container>
      <Router>
        <Header></Header>
        <Main>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/animals/elephants">
              <ElephantHome></ElephantHome>
            </Route>
            <Route path="/animals/elephants/list">
              <ElephantList></ElephantList>
            </Route>
            <Route path="/animals/elephants/list/:eName">
              <ElephantPreview></ElephantPreview>
            </Route>

            <Route path="/cats">
              <CatsMain></CatsMain>
            </Route>
          </Switch>
        </Main>
      </Router>
      <Footer></Footer>
    </Container>
  );
}
