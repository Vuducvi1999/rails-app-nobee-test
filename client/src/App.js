import { Route, Switch } from "react-router";
import Home from "./components/home";
import './App.css'

function App() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
  );
}

export default App;
