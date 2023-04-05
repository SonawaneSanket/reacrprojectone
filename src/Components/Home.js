import React, { Fragment } from "react";
import vg from "../Assets/2.webp";
import {
  AiFillGoogleCircle,
  AiFillAmazonCircle,
  AiFillYoutube,
  AiFillInstagram,
} from "react-icons/ai";

function Home() {
  return (
    <Fragment>
      <div className="home" id="home">
        <main>
          <h1>Innovate Pro</h1>
          <p>Next-Generation Software Empowering Your Business</p>
        </main>
      </div>
      <div className="home2">
        <img src={vg} alt="graphics" />

        <div>
          <p>
            As a software developer, I offer custom software solutions for
            businesses and individuals. With my expertise in web development,
            mobile app development, and custom software, I can help you bring
            your ideas to life. Let's work together to create a unique and
            effective solution that meets your needs and exceeds your
            expectations.
          </p>
        </div>
      </div>

      <div className="home3" id="about">
        <div>
          <h1>About</h1>
          <p>
            As a software developer, I understand the importance of
            data in modern business. My expertise in data management, analysis,
            and custom software development allows me to help businesses and
            individuals make the most of their data. From building data
            management systems to developing custom software solutions that
            integrate with existing data infrastructure, I can help you manage
            your data effectively and gain valuable insights. My goal is to help
            you make informed decisions and achieve your business objectives
            through innovative data solutions. Whether you need help with data
            analysis tools, reporting systems, or data visualization, I have the
            skills and experience to deliver a solution that meets your unique
            needs. Let's work together to unlock the power of your data and take
            your business to the next level.
          </p>
        </div>
      </div>

      <div className="home4" id="brands">
        <div>
          <h1>Brands</h1>
          <article>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillGoogleCircle />
              <p>Google</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillAmazonCircle />
              <p>Amazon</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillInstagram />
              <p>Instagram</p>
            </div>
            <div style={{ animationDelay: "0.5s" }}>
              <AiFillYoutube />
              <p>Youtube</p>
            </div>
          </article>
        </div>
      </div>
    </Fragment>
  );
}

export default Home;
