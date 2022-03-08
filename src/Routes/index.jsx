import { Switch, Route } from "react-router-dom";
import Dashboard from "../Pages/Dashboard";
import DisplayCart from "../Pages/DisplayCart";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Dashboard />
      </Route>
      <Route path="/cart">
        <DisplayCart />
      </Route>
    </Switch>
  );
};

export default Routes;
