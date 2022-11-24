import React from "react";
import "./headerSection.css";
function HeaderSection() {
  return (
    <section className="headerSection">
      <div className="wrapper ">
        <div className="sectionTitle">
          <p>ONLINE Advokátska podpora pre vaše parcely</p>
          <h1>Pomôžeme Vám s vysporiadaním pozemkov online</h1>
          <div className="headerSectionBtn">
            <button>Zobraziť viac</button>
          </div>
        </div>

        <div className="headerSectionItem">
          {[1, 2, 35, 61, 2, 7, 2].map((item) => {
            return (
              <div className="sectionItems">
                <div className="icons">
                  <img src="./icon11.png" alt="icon" />
                </div>
                <div className="icontext">
                  <p>Kúpna zmluva</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HeaderSection;
