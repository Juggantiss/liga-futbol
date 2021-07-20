import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import LigaCristiana from "./LigaCristiana";
import ShowMatch from "./ShowMatch";

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
        <Route exact path="/Match/:idMatch">
          <ShowMatch />
        </Route>
      </Switch>
    </Router>
  );
}
