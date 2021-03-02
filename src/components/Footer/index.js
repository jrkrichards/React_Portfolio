import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer id="sticky-footer"className="footer py-4 bg-dark text-white">
      <div className="container text-center">
        <small>
          <a href="https://github.com/jrkrichards">
            <button type="button" className="btn btn-git text-center text-white"><i className="fab fa-github pr-1 text-center text-white"></i> Github</button>
          </a>
          <a href="https://www.linkedin.com/in/jrkrichards/">
            <button type="button" className="btn btn-li text-center text-white"><i className="fab fa-linkedin-in pr-1 text-center text-white"></i> Linkedin</button>
          </a>
          <br />
        </small>            
        <small>Copyright &copy; 2020</small>
      </div>
    </footer>
  );
}

export default Footer;
