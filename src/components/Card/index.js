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
        {props.cardInfo.map((props) => (
          <section className={props.secClass}>
            {props.cardInfoDetail.map((props) => (
              <aside className={props.sumClass}>
              <CardTitle
                link={props.h6Link}
                project={props.h6Project}
                class={props.h6Class}
              />
              <Photo
                photo={props.image} 
                alt="Placeholder"
                class={props.imgClass}
                style={props.imgStyle}
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
            </aside>
            ))}
          </section>
        ))}
      </div>
    </div>
  );
}

export default Card;
