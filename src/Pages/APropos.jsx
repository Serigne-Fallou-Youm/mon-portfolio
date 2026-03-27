import React from "react";
import profilImage from "../../public/images/fallou.jpg";

function APropos() {
  return (
    <section className="apropos">
      <div className="apropos-container">
        <h1>À propos de moi</h1>

        <img 
          src={profilImage} 
          alt="Photo de Serigne Fallou Youm" 
          className="apropos-image" 
          style={{ width: "200px", borderRadius: "50%" }}
        />

        <p>
          Bonjour ! Je m'appelle Serigne Fallou Youm, développeur web full stack passionné par React, Laravel, Python et PHP. 
          J’aime créer des sites web modernes et performants, et aider les entreprises à transformer leurs idées en applications fonctionnelles.
        </p>

        <div className="apropos-details">
          <div className="detail">
            <h3>Expérience</h3>
            <p>2 ans en développement web et projets personnels</p>
          </div>
          <div className="detail">
            <h3>Compétences</h3>
            <p>React, Laravel, PHP, Python, MySQL, Git</p>
          </div>
          <div className="detail">
            <h3>Passion</h3>
            <p>Créer des interfaces modernes et fonctionnelles</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default APropos