import React from "react";

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contactez-moi</h1>
          <p>
            Vous avez un projet, une question ou une collaboration à proposer ?
            Envoyez-moi un message
          </p>

          <div className="info-box">
            <h3>Email</h3>
            <p>youmserignefallou17@gmail.com</p>
          </div>

          <div className="info-box">
            <h3>Téléphone</h3>
            <p>+221 76 631 25 18</p>
          </div>

          <div className="info-box">
            <h3>Adresse</h3>
            <p>Sénégal, Thiès</p>
          </div>
        </div>

        <div className="contact-form-box">
          <form className="contact-form">
            <input type="text" placeholder="Votre nom" />
            <input type="email" placeholder="Votre email" />
            <input type="text" placeholder="Sujet" />
            <textarea placeholder="Votre message"></textarea>
            <button type="submit">Envoyer le message</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact