import React from "react";
import "./section1.css";
function Section1() {
  return (
    <>
      <section className="section1Container">
        <div className="wrapper">
          <div className="section1Div">
            <div className="section1Left">
              <span className="tag">lorem ipsum</span>
              <h2>Kto sme a čomu s venujeme.</h2>
              <p>
                Poskytujeme všetky služby ohľadne nehnuteľností na jednom
                mieste, kdekoľvek na Slovensku, online a najmä bez potreby
                návštevy úradov. Sme advokátska kancelária špecializujúca na
                nehnuteľnosti. Prinášame inovatívne služby a vernosť, rýchlosť,
                a efektívnosť sú naše pracovné metódy, vďaka ktorým bude každá
                záležitosť vybavená k Vašej najväčšej spokojnosti.   Kolektív
                advokátskej kancelárie Palider
              </p>
              <img src="./sign.png" alt="sign" />
            </div>

            <div className="section1Right">
              <div className="section1Image">
                <img src="./image1.png" alt="logo" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
