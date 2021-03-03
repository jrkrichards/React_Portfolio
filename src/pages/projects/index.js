import React from 'react'
import {useState} from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Wrapper from "../../components/Wrapper";
import Row from "../../components/Row";
import Card from "../../components/Card";
import Col from "../../components/Col";
import RecipeImg from "./assets/home_page_demo.gif"
import DogImg from "./assets/dogblog-start.PNG"
import BurgerImg from "./assets/burger-start.PNG"
import NoteImg from "./assets/home_page - Note.PNG"
import FtImg from "./assets/ft_dashboard.PNG"
import EdImg from "./assets/ee_dir.PNG"

const Projects = () => {
    const [projectInfo] = useState([
        {
            title: "Projects",
            cardInfo:[
                {
                    secClass:"row my-5",
                    cardInfoDetail: [
                        {
                            sumClass:"col-md-6",
                            h6Class: "",
                            h6Project:"Recipe Generator",
                            h6Link:"https://jrkrichards.github.io/Food_Application/",
                            image: RecipeImg,
                            imgClass:"img-thumbnail img-fluid img-responsive my-2",
                            imgStyle: {width: "auto", height: "auto"},
                            text: "Recipe Pal was created to help users not only find delicious recipes but to also be able to see what ingredients are required to cook the recipe and what grocery stores are near by. To access the repo click on the github logo below.",
                            buttons: [
                                {
                                link:"https://github.com/jrkrichards/Food_Application",
                                btnClass:"btn-git text-center",
                                iconClass:"fab fa-github pr-1 text-center"
                                }
                            ]
                        },
                        {
                            sumClass:"col-md-6",
                            h6Class: "",
                            h6Project:"Fitness Tracker",
                            h6Link:"https://evening-taiga-21966.herokuapp.com/",
                            image: FtImg,
                            imgClass:"img-thumbnail img-fluid img-responsive my-2",
                            imgStyle: {width: "auto", height: "auto"},
                            text: "This is a full stack application that allows the user to track thier workouts and see a summary dashboard of their progress. This application utilizes a mongodb database and allows a user to create a new workout, read the database, and update an existing workout through mongoose.",
                            buttons: [
                                {
                                link:"https://github.com/jrkrichards/Fitness-Tracker",
                                btnClass:"btn-git text-center",
                                iconClass:"fab fa-github pr-1 text-center"
                                }
                            ]
                        }
                    ]
                },
                {
                    secClass:"row my-5",
                    cardInfoDetail: [
                        {
                            sumClass:"col-md-6",
                            h6Class: "",
                            h6Project:"Dog Blog",
                            h6Link:"https://dog-blog-app.herokuapp.com/",
                            image: DogImg,
                            imgClass:"img-thumbnail img-fluid img-responsive my-2",
                            imgStyle: {width: "auto", height: "auto"},
                            text: "This is a full stack application themed around a dog blog. This application has CRUD functionality and utilizes the Sequelize ORM. Further this application allows users to create accounts and will present all blog posts those users made on their account page. Lastly there is a google map API that shows the user nearby parks.",
                            buttons: [
                                {
                                link:"https://github.com/jrkrichards/dog_blog",
                                btnClass:"btn-git text-center",
                                iconClass:"fab fa-github pr-1 text-center"
                                }
                            ]
                        },
                        {
                            sumClass:"col-md-6",
                            h6Class: "",
                            h6Project:"Eat-Da-Burger",
                            h6Link:"https://afternoon-castle-58595.herokuapp.com/",
                            image: BurgerImg,
                            imgClass:"img-thumbnail img-fluid img-responsive my-2",
                            imgStyle: {width: "auto", height: "auto"},
                            text: "This application is burger logger which shows the burgers that are waiting to be devoured and which ones have been devoured. This application utilizes node & express, to set up our backend server and create routes, mysql, to query and write to the database, and handlebars, to render our data to the front end.",
                            buttons: [
                                {
                                link:"https://github.com/jrkrichards/Burger",
                                btnClass:"btn-git text-center",
                                iconClass:"fab fa-github pr-1 text-center"
                                }
                            ]
                        }
                    ]
                },
                {
                    secClass:"row my-5",
                    cardInfoDetail: [
                        {
                            sumClass:"col-md-6",
                            h6Class: "",
                            h6Project:"Employee Directory",
                            h6Link:"https://jrkrichards.github.io/Employee-Directory/",
                            image: EdImg,
                            imgClass:"img-thumbnail img-fluid img-responsive my-2",
                            imgStyle: {width: "auto", height: "auto"},
                            text: "This application is an employee directory that allows the user to view non-sensitive data about randomly generated employees, sort employees by their age, filter the employee list by gender. This application utilizes React, Bootstrap, and the randomuser API to generate random employees.",
                            buttons: [
                                {
                                link:"https://github.com/jrkrichards/Employee-Directory",
                                btnClass:"btn-git text-center",
                                iconClass:"fab fa-github pr-1 text-center"
                                }
                            ]
                        },
                        {
                            sumClass:"col-md-6",
                            h6Class: "",
                            h6Project:"Note Taker",
                            h6Link:"https://note-taker-jrkr.herokuapp.com/",
                            image: NoteImg,
                            imgClass:"img-thumbnail img-fluid img-responsive my-2",
                            imgStyle: {width: "auto", height: "auto"},
                            text: "This application allows the users to save notes to the backend using express and node.js. When the user clicks the save icon the note will save to the db. When the user wants to view previously saved notes they can click on the titles. When a user want to write new note they can click the pen to change the form from read-only to writeable.",
                            buttons: [
                                {
                                link:"https://github.com/jrkrichards/Notetaker",
                                btnClass:"btn-git text-center",
                                iconClass:"fab fa-github pr-1 text-center"
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
            <div className="p-5 container text-center top-buffer">
            <Row>
                <Col size="md-12">
                {projectInfo.map((props) => (
                    <Card
                    title={props.title}
                    cardInfo={props.cardInfo}
                />
                ))}
                </Col>
            </Row>
            </div>
            </Wrapper>
            <Footer />
        </div>
    )
}

export default Projects;
