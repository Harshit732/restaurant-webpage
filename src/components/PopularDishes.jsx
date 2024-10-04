import React from "react";

import styles from "../styles/PopularDishes.module.css";
import menu from "../populardish";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import Card from "./Card";

function PopularDishes() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.container}>
          <h1>Popular Dishes...</h1>
          <Splide
            options={{
              type: "loop",
              autoplay: true,
              interval: 10000,
              pauseOnHover: true,
              perPage: 5,
              breakpoints: {
                768: {
                  perPage: 1, 
                },
              },
            }}
          >
            {menu.map((item, index) => (
              <SplideSlide key={index}>
                <Card dish={item} key={index}/>
              </SplideSlide>
            ))}
          </Splide>
        </div>
      </div>
    </>
  );
}

export default PopularDishes;
