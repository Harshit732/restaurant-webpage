import React, { useState } from "react";

import Logo from "../assets/Logo.png";
import styles from "../styles/Hero.module.css";

import { Link } from "react-router-dom";

function Hero() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.contex}>
          <div className={styles.logo}>
            <img src={Logo} alt="logo img" />
          </div>
        </div>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>
              "It is not just&nbsp;
              <span style={{ color: "#FF7043" }}>Food,&nbsp;</span>
              <br />
              It is an&nbsp;
              <span style={{ color: "#FF7043" }}>Experience</span>
              ."
            </h1>
            <p>
            Taste the best delicacies at DelishBites, where flavor meets
            comfort. We offer a wide range of dishes made with fresh ingredients
          </p>
          <div className={styles.cardsContainer}>
            <div className={styles.card}>
              <h3>1000+</h3>
              <p>Reviews</p>
              <p>Rating: 4.9 ⭐</p>
            </div>
            <div className={styles.card}>
              <h3>100+</h3>
              <p>Food Items</p>
            </div>
            <div className={styles.card}>
              <h3>5-⭐</h3>
              <p>Quality</p>
              <p>Best Chefs</p>
            </div>
          </div>
          </div>

          

          {/*  <div className={styles.buttons}>
            <button> Reservation </button>
            <button> Menu </button>
          </div> */}

          {/* New Cards for Reviews and Food Items */}
          
        </div>
      </div>
    </>
  );
}

export default Hero;
