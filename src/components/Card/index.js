import React from "react";
import "./style.css";
import Header from "../Header";
import Photo from "../Photo";
import CardTitle from "../CardTitle";
import CardText from "../CardText";
import Link from "../Link";

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
              photo={props.image} 
              alt="Placeholder"
              class="img-thumbnail img-fluid float-left mr-3"
              style={props.imgStyle}
            />
            <CardTitle
              title={props.subtitle}
              link={props.link}
              project={props.project}
              text={props.text}
              class={props.h6Class}
            />
            <CardText
              text={props.text}
            />
            {props.buttons.map((props) => (
              <Link
              link={props.link}
              download={props.download}
              btnClass={props.btnclass}
              iconClass={props.iconClass}
              buttonText={props.btnText}
            />
            ))}  
          </summary>
        </div>
      </div>
    </div>
  );
}

export default Card;
