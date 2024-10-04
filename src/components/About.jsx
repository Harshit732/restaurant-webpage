import React from "react";
import styles from "../styles/About.module.css";
import About1 from "../assets/About1.jpg";
import About2 from "../assets/About2.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <>
      <div style={{ marginTop: "1rem" }}>
        <div className={styles.main}>
          <h1>About Us..</h1>
          <div className={styles.section}>
            <div className={styles.image}>
              <img src={About1} alt="" />
            </div>
            <div className={styles.content}>
              <h1>Our dining</h1>
              <p>
                DelishBites is a vibrant culinary experience, offering a variety
                of fresh, vegetable-forward dishes inspired by our Chef's
                journeys across Southeast Asia and beyond. Our mission is
                simple: to craft dishes that tell the story of our dedicated
                farmers.
              </p>
              <p>
                At DelishBites, every meal is a celebration of flavor,
                freshness, and sustainability. Join us on a culinary journey
                that honors the earth and the artisans who cultivate its bounty.
              </p>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.content}>
              {" "}
              <h1>Our Menu</h1>
              <p>
                We are thrilled to welcome guests back for dine-in at
                DelishBites, where you can create your own unique dining
                experience from our menu or indulge in our signature 5-course
                Chef's Tasting, available daily while supplies last.
              </p>
              <p>Prefer to enjoy DelishBites at home?</p>
              <Link to={"/menu/vegetarian"}>
                <button className={styles.menuButton}>Menu</button>
              </Link>
            </div>
            <div className={styles.image}>
              <img src={About2} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
