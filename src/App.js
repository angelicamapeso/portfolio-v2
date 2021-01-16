import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio">
            <h1>Portfolio</h1>
          </Route>
          <Route path="/about" component={About} />
          <Route path="/contact">
            <h1>Contact</h1>
          </Route>
          <Route path="/portfolio/:name" component={ProjectPage}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
