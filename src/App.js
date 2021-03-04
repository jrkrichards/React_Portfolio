import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  const history = createHistory({
    basename: process.env.PUBLIC_URL,
  });
  document.title = "JR_Portfolio";
  return (
    
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
    
  );
}

export default App;
