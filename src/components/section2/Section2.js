import React from "react";
import "./section2.css";
function Section2() {
  return (
    <>
      <section className="section2Container">
        <div className="wrapper">
          <div className="section2Wrapper">
            <div className="section2top">
              <p>pomôžeme vám</p>
              <h2>Služby podľa situácie</h2>
            </div>
            <div className="section2BoxContainer">
              {[1, 2, 3, 4, 5, 6].map((i) => {
                return (
                  <div className="section2ContainerBlock">
                    <div className="section2Icon">
                      <img src="./icon13.png" alt="i" />
                    </div>
                    <div className="section2Content">
                      <h2> Kupujem alebo predávam nehnuteľnosť</h2>
                      <p>
                        Chcem vypracovať kúpnu zmluvu na pozemok, kúpnu zmluvu
                        na dom/ byt, chcem zariadiť prevod nehnuteľnosti na
                        katastri, chcem osloviť ostatných vlastníkov
                      </p>
                    </div>
                    <span className="section2Arrow">
                      {" "}
                      ➡ &nbsp; Chcem vedieť viac{" "}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
