import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Navbar/Footer";
import book1 from "../../images/harrypotter1.jpg";
import book2 from "../../images/harrypotter2.jpg";
import book3 from "../../images/got.jpg";
import horror from "../../images/horror.png";
import fantasy from "../../images/fantasy.png";
import education from "../../images/education.png";
import program from "../../images/program.png";
import history from "../../images/history.png";
import food from "../../images/food.png";
import about from "../../images/about.jpg";
import "./banner.css";
import "../../Components/Navbar/navbar.css";

const Banner = () => {
  return (
    <div>
      <Navbar />
      <div className="banner">
        <div className="textinfo">
          <div className="">
            <p className="text-content">
              Get Your New <br></br>Book Collections!
            </p>
            <p className="text-content2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste,
              delectus!
            </p>
          </div>
          <div className="div-button"></div>
        </div>
        <div className="images">
          <img src={book1} alt="" />
          <img className="img2" src={book2} alt="" />
          <img className="img3" src={book3} alt="" />
        </div>
      </div>
      <div className="cate-container">
        <h2 style={{ height: "10vh", display: "flex" }}>Books Categories</h2>
        <div className="cate-info">
          <div>
            <img src={horror} alt=""></img>
            <h3>Horror</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dignissimos labore beatae animi atque eligendi vero eius? Nemo,
              eligendi suscipit.
            </p>
          </div>
          <div>
            <img src={fantasy} alt=""></img>
            <h3>Fantasy</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dignissimos labore beatae animi atque eligendi vero eius? Nemo,
              eligendi suscipit.
            </p>
          </div>
          <div>
            <img src={education} alt=""></img>
            <h3>Education</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dignissimos labore beatae animi atque eligendi vero eius? Nemo,
              eligendi suscipit.
            </p>
          </div>
          <div>
            <img src={program} alt=""></img>
            <h3>Programming</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dignissimos labore beatae animi atque eligendi vero eius? Nemo,
              eligendi suscipit.
            </p>
          </div>
          <div>
            <img src={history} alt=""></img>
            <h3>History</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dignissimos labore beatae animi atque eligendi vero eius? Nemo,
              eligendi suscipit.
            </p>
          </div>
          <div>
            <img src={food} alt=""></img>
            <h3>Food</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
              dignissimos labore beatae animi atque eligendi vero eius? Nemo,
              eligendi suscipit.
            </p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-info">
          <div className="about-img">
            <img src={about} alt="" />
          </div>
          <div className="about-para">
            <h2>WHY INDEPENDENCE MATTERS</h2>
            <p>
              Think about the last good book you read. Did it make you feel more
              connected to others? Maybe it served as a welcome escape. Maybe it
              helped you rediscover the beauty in life. Did it surprise you? As
              an independent bookstore, we strive to offer the same variety and
              richness of experience as the books on our shelves. And because
              the only people we’re beholden to are our customers and ourselves,
              we can focus on what really matters — promoting diverse
              perspectives, upholding the free exchange of ideas, championing
              the enduring power of books, and bolstering the great community of
              readers and authors we’re lucky to be a part of. Thank you for
              supporting these lofty goals. Your choice sustains a family
              business, and allows us to follow our passion for getting the
              right books into the right hands, 365 days a year.
            </p>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Banner;
