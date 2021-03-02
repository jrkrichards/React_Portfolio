import React from "react";

function Header(props) {
  return (
    <h1 className="border-bottom border-dark text-center">
        {props.title}
    </h1>
  );
}

export default Header;