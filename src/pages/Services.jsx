import { useState, useRef, useEffect } from "react";
import Helmet from "../components/helmet/Helmet";
import "../styles/Pages.css";
import OrderCall from "../components/OrderCall";

export default function Services() {
  const [call, setCall] = useState(false);
  const formRef = useRef();
  const handleForm = (done) => {
    if (done) {
      setTimeout(() => {
        setCall(false);
      }, 1800);
    } else {
      setCall((prev) => !prev);
    }
  };
  useEffect(() => {
    if (call) {
      const getOffset = formRef.current.offsetTop;
      console.log(getOffset);
      window.scrollTo({
        top: getOffset,
        behavior: "smooth",
      });
    }
  }, [call]);
  return (
    <Helmet title="Services">
      <section className="services-page-container">
        <div className="service-flexbox">
          <div className="service-child">
            <h2 className="title">ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h2>
            <p>
              <b>
                Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր,
                թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ
                մանրէազերծված բժշկական վիրակապեր արտադրող;
              </b>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </p>
            <button className="btn" onClick={() => handleForm(false)}>
              ՊԱՏՎԻՐԵԼ ԶԱՆԳ
            </button>
          </div>
          <div className="pic-relative service-child">
            <img src="./pictures/service.jpg" alt="pic" />
            <img src="./pictures/circle.png" alt="circle" className="circle" />
          </div>
        </div>
        <div className="service-flexbox">
          <div className="pic-relative service-child">
            <img src="./pictures/service2.jpg" alt="pic" />
            <img src="./pictures/circle.png" alt="circle" className="circle" />
          </div>
          <div className="service-child">
            <h2 className="title">ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ</h2>
            <p>
              <b>
                Մենք առաջարկում ենք ԲԺՇԿԱԿԱՆ ՊԱՐԱԳԱՆԵՐԻ ՍՏԵՐԻԼԻԶԱՑՈՒՄ; Բինտեր,
                թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ, մանրէազերծված և ոչ
                մանրէազերծված բժշկական վիրակապեր արտադրող;
              </b>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
              typesetting industry. Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s
            </p>
            <button className="btn" onClick={() => handleForm(false)}>
              ՊԱՏՎԻՐԵԼ ԶԱՆԳ
            </button>
          </div>
        </div>
        {call ? <OrderCall change={handleForm} el={formRef} /> : null}
      </section>
    </Helmet>
  );
}
