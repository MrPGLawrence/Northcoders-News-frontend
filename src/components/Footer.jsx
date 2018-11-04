import React from "react";
import * as FontAwesome from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <p className="footer-p">A Northcoders Project by Patrick Lawrence</p>
      <div className="social">
        <a href="mailto:mrpglawrence@gmail.com" className="social-google">
          <FontAwesome.FaGoogle />
        </a>
        <a
          href="https://twitter.com/MrPGLawrence"
          className="social-twitter"
        >
          <FontAwesome.FaTwitter />
        </a>
        <a
          href="https://linkedin.com/in/MrPGLawrence"
          className="social-linkedin"
        >
          <FontAwesome.FaLinkedin />
        </a>
        <a href="https://github.com/MrPGLawrence" className="social-github">
          <FontAwesome.FaGithub />
        </a>
      </div>
    </footer>
  );
};
export default Footer;
