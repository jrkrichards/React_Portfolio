import React from "react";

function Link(props) {
  return (
    <a href={props.link} download={props.download}>
      <button type="button" className={`btn ${props.btnclass}`}>
        <i className={props.iconClass}>
            {props.buttonText}
        </i>
      </button>
    </a>
  );
}

export default Link;