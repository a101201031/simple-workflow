import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { SignIn } from 'pages/sign/SignIn';
import { SignUp } from 'pages/sign/SignUp';

export const Sign: FC = () => (
  <Switch>
    <Route path="/sign/up" component={SignUp} />
    <Route path="/sign/in" component={SignIn} />
    <Redirect path="/*" to="/sign/up" />
  </Switch>
);
