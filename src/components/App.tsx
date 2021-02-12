import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
// import Animals from './animals/Animals';
import ElephantHome from './animals/elephants/ElephantHome';
import ElephantList from './animals/elephants/ElephantList';
import ElephantPreview from './animals/elephants/ElephantPreview';
import Footer from './Footer';
import CatHome from './animals/cats/CatHome';
import CatList from './animals/cats/CatList';
import CatPreview from './animals/cats/CatPreview';
import { Main } from '../styles/styled';
import { Container } from '@material-ui/core';

export default function App() {
  return (
    <Container>
      <Header></Header>
      <Main>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          {/* <Route exact path="/animals">
            <Animals></Animals>
          </Route> */}

          <Route exact path="/animals/elephants">
            <ElephantHome></ElephantHome>
          </Route>
          <Route exact path="/animals/elephants/list">
            <ElephantList></ElephantList>
          </Route>
          <Route exact path="/animals/elephants/list/:eName">
            <ElephantPreview></ElephantPreview>
          </Route>

          <Route exact path="/animals/cats">
            <CatHome></CatHome>
          </Route>
          <Route exact path="/animals/cats/list">
            <CatList></CatList>
          </Route>
          <Route exact path="/animals/cats/list/:cName">
            <CatPreview></CatPreview>
          </Route>
        </Switch>
      </Main>
      <Footer></Footer>
    </Container>
  );
}
