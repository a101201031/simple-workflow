import { Home } from 'pages/home/Home';
import { Main } from 'pages/main/Main';
import { Sign } from 'pages/sign/Sign';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

export const App = () => (
  <Switch>
    <Route path="/sign" component={Sign} />
    <Route path="/main" component={Main} />
    <Route path="/" component={Home} />
  </Switch>
);
