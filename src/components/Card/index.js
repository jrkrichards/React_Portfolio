import React from "react";
import "./style.css";
import Header from "../Header"
import Photo from "../Photo"
import image from "./assets/Self_at_Zion.JPG";
import CardTitle from "../CardTitle"
import CardText from "../CardText";

function Card(props) {
  return (
    <div className="card mt-2 h-100 w-100">
      <div className="card-body">
        <Header 
        title={props.title}
        />
        <div className="row clearfix">
          <summary className="col-md-12">
            <Photo
              photo={image} 
              alt="Placeholder"
              class="img-thumbnail img-fluid float-left mr-3"
              style={{width: "200px", height: "200px"}}
            />
            <CardTitle
              title={props.subtitle}
              link={props.link}
              project={props.project}
              text={props.text}
              class={props.class}
            />
            <CardText
              text={props.text}
            />
          </summary>
        </div>
      </div>
    </div>
  );
}

export default Card;
