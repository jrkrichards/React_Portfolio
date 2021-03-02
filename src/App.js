import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import Row from "./components/Row";
import Card from "./components/Card";
import Col from "./components/Col"
import "./App.css";

function App() {
  document.title = "JR_Portfolio";
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <div className="p-5 container text-center top-buffer">
          <Row>
            <Col size="md-12">
            <Card
                title="Welcome!"
                class="d-none"
                text="My name is Jason. I was born and raised in Honolulu, Hawaii. I left the islands to pursue a career in business and to see what life outside of the islands was like. I received my bachelors and masters in Accounting from the University of Nevada, Las Vegas and had the opportunity to work with PricewaterhouseCoopers (PwC) after college. While at PwC I obtained a bredth of knowledge and experience in accounting, finance, business processes, controls, and project management while working on public and private clients in the utility, gaming, travel, and manufacturing industries. During this time I was exposed to many technologies and became intrigued by how these technologies could help solve problems while making our everyday work more efficient and effective. This curiosity led me to seek more knowledge around coding specific to technologies that help with data analysis (Python & Tableau) as well as web development, which is why I enrolled in the bootcamp at UC Berkeley. During the bootcamp I have obtained knowledge that I can implement in my current Finance role to help drive better story telling around the business and implement more cross-functional process automation through the use of systems."
              />
            </Col>
          </Row>
          </div>
          {/* <Route exact path="/" component={Search} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/search" component={Search} /> */}
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
