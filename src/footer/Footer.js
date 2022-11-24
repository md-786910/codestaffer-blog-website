import React from "react";
import "./footer.css";
function Footer() {
  return (
    <footer className="footerContainer">
      <div className="wrapper">
        <div className="footerWrapper">
          <div className="footer1 footerTitle">
            <div className="footerLogo">
              <img src="./footerlogo.png" alt="footerlogo" />
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              elementum
            </p>
          </div>
          <div className="footer2 footerTitle">
            <h3>Naše služby</h3>
            <div className="footerItem">
              <a href="https://google.com">Vysporiadanie pozemkov</a>
              <a href="https://google.com">Vysporiadanie pozemkov</a>
            </div>
          </div>

          <div className="footer3 footerTitle">
            <h3>Blog</h3>
            <div className="footerItem">
              <a href="https://google.com">Vysporiadanie pozemkov</a>
              <a href="https://google.com">Vysporiadanie pozemkov</a>
            </div>
          </div>

          <div className="footer4 footerTitle">
            <h3>Ostatné linky</h3>
            <div className="footerItem">
              <a href="https://google.com">Vysporiadanie pozemkov</a>
              <a href="https://google.com">Vysporiadanie pozemkov</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
