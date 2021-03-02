import React from "react";

function Photo(props) {
  return (
    <img
        src={props.photo} 
        alt={props.alt}
        className={props.class}
        style={props.style}
    />
  );
}

export default Photo;