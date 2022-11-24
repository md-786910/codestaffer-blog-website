import React from "react";
import Section5 from "../section5/Section5";
import "./section4.css";
function Section4() {
  return (
    <>
      <section className="section4Container">
        <div className="wrapper">
          <div className="section4Wrapper">
            <div className="section4div">
              <div className="section4Left"></div>
              <div className="section4Right">
                <div className="section4Items">
                  {[1, 2, 3, 4].map((elem, index) => {
                    return (
                      <div className="section4Card">
                        <span>
                          10 <span className="plusIcon">+</span>
                        </span>
                        <p>Rokov Praxe</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
        <Section5 />
      </section>
    </>
  );
}

export default Section4;
