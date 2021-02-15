import React from 'react';
import { Route, Switch } from 'react-router-dom';

import CatHome from './CatHome';
import CatList from './CatList';
import CatPreview from './CatPreview';

export default function CatsMain() {
  return (
    <Switch>
      <Route path="/list/:cName">
        <CatPreview></CatPreview>
      </Route>
      <Route path="/list">
        <CatList></CatList>
      </Route>
      <Route path="/">
        <CatHome></CatHome>
      </Route>
    </Switch>
  );
}
