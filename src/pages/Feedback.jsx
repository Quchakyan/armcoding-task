import { useRef } from "react";
import Helmet from "../components/helmet/Helmet";
import "../styles/Components.css";
import Notice from "../components/Notice";

export default function Feedback() {
  const getURL = window.location.href.includes("home") ? "Home" : "Feedback";
  const btnRef = useRef();
  const msgRef = useRef();
  function showAccess(e) {
    e.preventDefault();
    e.target.reset();
    btnRef.current.disabled = "disabled";
    btnRef.current.style.color = "darkgreen";
    msgRef.current.style.animationName = "showMessage";
    setTimeout(() => {
      btnRef.current.disabled = 0;
      btnRef.current.style.color = "#fff";
      msgRef.current.style.animationName = "";
    }, 1800);
  }
  return (
    <Helmet title={getURL}>
      <section className="feedback-cont">
        <div className="fb-flex-item">
          <p>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text, and a search for 'lorem ipsum' will uncover many web
            sites still in their infancy. Various versions have evolved over the
            years, sometimes by accident, sometimes on purpose injected humour
            and the lik
          </p>
          <div className="ifr-rel-div">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1524.0995466474865!2d44.56596344442748!3d40.18238249999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcae070d6b07%3A0x456f4a5ef074ce33!2s48%20Galshoyan%20St%2C%20Yerevan%200079!5e0!3m2!1sru!2sam!4v1692367984114!5m2!1sru!2sam"
              title="location"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <img src="./pictures/circle.png" className="circle" alt="circle" />
          </div>
        </div>
        <div className="fb-flex-item">
          <h3 className="title">ԿԱՊՆՎԵՔ ՄԵԶ ՀԵՏ ՀԻՄԱ</h3>
          <form className="fb-form" onSubmit={(e) => showAccess(e)}>
            <input type="text" name="name" placeholder="Անուն" />
            <input type="email" name="email" placeholder="Էլ․ հասցե" />
            <textarea name="message" placeholder="Հաղորդագրություն"></textarea>
            <button ref={btnRef} type="submit" className="btn">
              ՈՒՂԱՐԿԵԼ
            </button>
            <div ref={msgRef} className="notice">
              <Notice type="email" />
            </div>
          </form>
        </div>
      </section>
    </Helmet>
  );
}
