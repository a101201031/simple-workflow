import { Request } from 'pages/appr/Request';
import React, { FC } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
export const Approval: FC = () => {
  return (
    <Switch>
      <Route path={`/main/approval/request`} component={Request} />
      <Redirect path="/*" to="/main/approval/request" />
    </Switch>
  );
};
