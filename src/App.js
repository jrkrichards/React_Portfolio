import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {createBrowserHistory} from 'history';
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  const history = createBrowserHistory();
  document.title = "JR_Portfolio";
  return (
    
    <Router history={history} basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </Switch>
    </Router>
    
  );
}

export default App;
