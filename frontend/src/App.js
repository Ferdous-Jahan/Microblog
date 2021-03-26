import Login from "./components/Login";
import Registration from "./components/Registration";
import Home from "./components/Home";
import Post from "./components/Post";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/post/:id">
            <Post />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/registration" exact>
            <Registration />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
