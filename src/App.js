import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/home";
import Projects from "./pages/projects";
import Contact from "./pages/contact";
import "./App.css";

function App() {
  document.title = "JR_Portfolio";
  return (
    <Router basename='/'>
      <Route exact path="/" component={Home} />
      <Route exact path="/projects" component={Projects} />
      <Route exact path="/contact" component={Contact} />
    </Router>
  );
}

export default App;
