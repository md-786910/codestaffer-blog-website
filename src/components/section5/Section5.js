import React from "react";
import "./section5.css";
function Section5() {
  return (
    <div className="wrapper section5Container">
      <div className="section5Wrapper">
        <div className="section5Span">
          <span>Blog</span>
        </div>
        <div className="section5Div">
          <div className="section5Title">
            <h2>Posledné články</h2>
          </div>
          <div className="section5Btn">
            <button>ZObraziť všetky</button>
          </div>
        </div>

        <div className="section5Card">
          {[1, 2, 3].map((elem) => {
            return (
              <>
                <div className="section5Item">
                  <div className="section5cardImage">
                    <img src="./blog1.png" alt="iten" />
                  </div>
                  <div className="section5CardContent">
                    <h4>Lorem ipsum</h4>
                    <span>
                      {new Date().toLocaleDateString().split("/").join(" .")}
                    </span>
                  </div>

                  <div className="section5Show">
                    <h4>Lorem ipsum</h4>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Fusce tristique diam vel sem commodo, quis molestie erat
                      luctus. Donec nec leo elementum, scelerisque velit ut,
                      vestibulum urna. In aliquet nisi a risus accumsan
                      efficitur. Aliquam leo turpis, imperdiet eget
                    </p>
                    <span className="section5ShowSpan">
                      {new Date().toLocaleDateString().split("/").join(" .")}
                    </span>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Section5;
