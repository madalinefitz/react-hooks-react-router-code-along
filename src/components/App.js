import { Route, Switch } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Login from "./Login";
import About from "./About";

function App() {
    return (
      <div>
        <NavBar/>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="/">
            < Home />
          </Route>
        </Switch>
      </div>
    )
  }

export default App