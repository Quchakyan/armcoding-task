import React from "react";
import Helmet from "../components/helmet/Helmet";
import "../styles/Pages.css";

export default function About() {
  return (
    <Helmet title="About">
      <h1 className="title">ՄԵՐ ՄԱՍԻՆ</h1>
      <section className="about-cont-flex">
        <div className="about-flexbox p-1">
          <div className="ab-cont-first">
            <img src="./pictures/doctor.jpg" alt="pic" />
            <img src="./pictures/circle.png" alt="circle" className="circle" />
          </div>
          <div>
            <p>
              <b>
                Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ,
                մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;
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
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
        <div className="about-flexbox p-2">
          <div className="ab-cont-second">
            <img src="./pictures/gloves.jpg" alt="pic" />
            <img src="./pictures/circle.png" alt="circle" className="circle" />
          </div>
          <div>
            <p>
              <b>
                Բինտեր, թանզիֆե մանրէազերծված բժշկական անձեռոցիկներ,
                մանրէազերծված և ոչ մանրէազերծված բժշկական վիրակապեր արտադրող;
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
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled it to make a type specimen book. It
              has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </div>
        </div>
      </section>
    </Helmet>
  );
}
