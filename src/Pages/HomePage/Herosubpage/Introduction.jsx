import React from "react";
import "../Herosubpage/introduction.scss";
import "../Herosubpage/queryintroduction.scss";
import AboutImg from "../../../assets/Images/Images/Developer activity-bro.png";
import CVdownload from '../../../Components/Buttons/CVdownload'
export default function Introduction() {
  return (
    <div className="IntroductionMain">
      <div className="AboutsubfromMain" id="subabout1">
        <img src={AboutImg} alt="" />
      </div>
      <div className="AboutsubfromMain" id="subabout2">
        <h2 className="about"> ⚡ About Me</h2>
        <p>
          Hey there! I'm <a href="#">Saif Ur Rehman</a>, and I've been fascinated by computers
          since I was young.</p>
          <p> Now, as a third-year BSc Computer Science student
          at <a href="https://gcuf.edu.pk/" target="-blank">GC University</a>, Faisalabad, I'm diving deep into the world of
          technology. With a year of experience in web development, especially
          with the{" "}
          <a
            href="https://www.coursera.org/articles/mern-stack"
            target="-blank"
          >
            MERN stack
          </a>
          , I'm passionate about crafting impactful digital solutions. My drive
          pushes me to make meaningful contributions to the field, constantly
          refining my skills along the way.</p> <p>When i am not   coding, you'll find me gaming
          with friends, binge-watching a <a href="https://www.netflix.com/pk/" target="-blank">Netflix</a>  shows, or shooting hoops on the
          basketball🏀 court when the weather's nice. Let's join forces to shape a
          brighter future in technology together! 🚀
        </p>
        <CVdownload/>
      </div>
    </div>
  );
}
