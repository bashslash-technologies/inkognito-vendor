import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./hoc/Authenticatiomlayout";
import AdminLayout from "./hoc/AdminLayout";

const App = () => {
  return (
    <Switch>
      <Route path="/ink" exact render={(props) => <AdminLayout {...props} />} />
      <Route path="/auth" exact render={(props) => <AuthLayout {...props} />} />
      <Redirect from="/" to="/auth" />
    </Switch>
  );
};

export default App;
