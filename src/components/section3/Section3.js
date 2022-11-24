import React from "react";
import "./section3.css";
function Section3() {
  return (
    <>
      <section className="section3Container">
        <div className="wrapper">
          <div className="section3Title">
            <div className="section3ContainerLeft">
              <h2>Máte záujem o naše služby?</h2>
              <p>
                Radi sa pozrieme na Váš problém a pomôžeme Vám ho správne
                vyriešiť. Stačí nás kontaktovať.
              </p>
            </div>
            <div className="section3ContainerRight">
              <div className="section3Form">
                <div className="section3Telephone">
                  <label>Telefón</label>
                  <input
                    type="text"
                    name="text"
                    className="section3Input"
                    placeholder="+421 466 546 545"
                  />
                </div>
                <div className="section3Email">
                  <label>E-mail</label>
                  <input
                    type="email"
                    name="email"
                    className="section3Input"
                    placeholder="info@gmail.com"
                  />
                </div>
                <div className="section3Btn">
                  <button>Vyplniť kontaktný formulár</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section3;
