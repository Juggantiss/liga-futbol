import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import LigaCristiana from "./LigaCristiana";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/JovenesConPropositos">
          <LigaCristiana />
        </Route>
      </Switch>
    </Router>
  );
}
