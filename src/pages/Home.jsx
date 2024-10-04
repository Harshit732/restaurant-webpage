import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import Review from "../components/Review";
import styles from "../styles/Home.module.css";
import PopularDishes from "../components/PopularDishes";
import Cuisine from "../components/Cuisine";

function Home() {
  return (
    <>
      <div className={styles.main}></div>
      <div className={styles.container}>
        <Hero />
        <PopularDishes/>
        <Cuisine/>
        <div id="about-section"><About /></div>
        <Review />
      </div>
      
      
       
     
    </>
  );
}

export default Home;
