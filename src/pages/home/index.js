import React from 'react'
import {useState} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Row from "../../components/Row";
import Card from "../../components/Card";
import Col from "../../components/Col";
import image from "./assets/Self_at_Zion.JPG";

const Home = () => {
    const [homeInfo] = useState([
        {
            title: "Welcome",
            cardInfo:[
                {
                    secClass:"row clearfix",
                    cardInfoDetail: [
                        {
                            sumClass:"col-md-12",
                            image: image,
                            imgClass:"img-thumbnail img-fluid float-left mr-3",
                            imgStyle: {width: "200px", height: "200px"},
                            h6Class: "d-none",
                            text: "My name is Jason. I was born and raised in Honolulu, Hawaii. I left the islands to pursue a career in business and to see what life outside of the islands was like. I received my bachelors and masters in Accounting from the University of Nevada, Las Vegas and had the opportunity to work with PricewaterhouseCoopers (PwC) after college. While at PwC I obtained a bredth of knowledge and experience in accounting, finance, business processes, controls, and project management while working on public and private clients in the utility, gaming, travel, and manufacturing industries. During this time I was exposed to many technologies and became intrigued by how these technologies could help solve problems while making our everyday work more efficient and effective. This curiosity led me to seek more knowledge around coding specific to technologies that help with data analysis (Python & Tableau) as well as web development, which is why I enrolled in the bootcamp at UC Berkeley. During the bootcamp I have obtained knowledge that I can implement in my current Finance role to help drive better story telling around the business and implement more cross-functional process automation through the use of systems.",
                            buttons: [
                                {
                                link:"./assets/Jason Richards' Resume_01282021.pdf",
                                download:"Jason Richards' Resume",
                                btnClass:"btn-git text-center",
                                iconClass:"fas fa-user-tie pr-1 text-center",
                                btnText:"Resume"
                                },
                                {
                                link:"/projects",
                                btnClass:"btn-li text-center",
                                iconClass:"fas fa-code pr-1 text-center",
                                btnText:"Projects"
                                },
                                {
                                link:"/contact",
                                btnClass:"btn-li text-center",
                                iconClass:"fas fa-at pr-1 text-center",
                                btnText:"Contact"
                                }
                            ]
                        }
                    ]
                }
            ]           
        }
    ])
    return (
        <div>
            <Navbar />
            <Wrapper>
            <div id="page-content">
                <div className="p-5 container text-center top-buffer">
                    <Row>
                        <Col size="md-12">
                        {homeInfo.map((props) => (
                            <Card
                            title={props.title}
                            cardInfo={props.cardInfo}
                        />
                        ))}
                        </Col>
                    </Row>
                </div>
            </div>
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Home;
