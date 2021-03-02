import React from "react";
import "./style.css";


function CardTitle(props) {
  return (
    <h6 className={`card title text-center ${props.class}`}>
      {props.title}
      <a
        href={props.link}
      >
        {props.project}
      </a>
    </h6>
  );
}

export default CardTitle;
