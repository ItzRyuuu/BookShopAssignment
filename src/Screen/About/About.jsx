import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Navbar/Footer";
import "./about.css";

function About() {
  return (
    <div className="container">
      <Navbar />
      <div className="container-about">
        <div className="about-title">
          <h2>About Us</h2>
        </div>
        <div className="hr-style">
          <hr></hr>
        </div>
        <div className="about-h3">
          <h3 style={{ fontSize: "18px", color: "#133E87", fontWeight: "600" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            adipisci et doloremque distinctio voluptates repellat ad expedita
            quam consequatur minima.
          </h3>
        </div>
        <div className="whorwe-about">
          <h3>Who We Are</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, nostrum maiores sunt in repellendus officia hic, enim
            excepturi, repellat eius porro officiis. Magni, vero voluptate!
            Dolor, omnis totam. Aspernatur placeat illo ipsum asperiores
            pariatur rem ab quod nisi eligendi iure accusantium numquam
            molestias voluptate, porro est repudiandae iste cum aut minima
            incidunt consequuntur aliquam. Dolor necessitatibus possimus
            sapiente libero, delectus totam fugiat ab rem provident hic magnam
            nisi dignissimos dicta animi nesciunt rerum similique fugit odio
            quas, quod ratione! Est libero quasi corporis, perferendis, optio
            odit, praesentium repellat natus minus fugit modi sint cupiditate
            similique aliquam expedita. Optio illum tempora maxime, amet sunt
            autem quod beatae et aut officiis architecto nobis? Quam sit
            blanditiis sunt, quia cumque corrupti earum? Sunt exercitationem
            voluptate nostrum praesentium beatae possimus aspernatur nam quae
            consequuntur corporis. Id nam, qui iste ipsum incidunt voluptatem
            laudantium. Natus molestiae doloribus sint consectetur. Adipisci ea
            dicta non repudiandae corrupti?
          </p>
        </div>
        <div></div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
