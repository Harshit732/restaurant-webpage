import React from "react";
import styles from "../styles/Review.module.css";
import { IoIosStar } from "react-icons/io";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

function Review() {
  return (
    <div className={styles.main}>
      <h1 className={styles.heading}>Reviews</h1>
      <div className={styles.content}>
        <Splide
          options={{
            type: "loop",
            perPage: 1,
            autoplay: true,
            interval: 5000,
            arrows: false,
          }}
        >
          {reviews.map((review, index) => (
            <SplideSlide key={index}>
              <div className={styles.review}>
                <span className={styles.reviewer}>
                  <h2>{review.name}&nbsp;&nbsp;</h2>
                  {Array.from({ length: review.rating }, (_, i) => (
                    <IoIosStar key={i} className={styles.star} />
                  ))}
                </span>
                <p className={styles.reviewText}>{review.text}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
}

const reviews = [
  {
    name: "Rakesh Singh",
    rating: 3,
    text: "We were visiting DelishBites from distance for a long weekend. We honestly weren't expecting much but we were blown away. The service, vibe and food were all amazing. I wanted to try everything on the menu. We're already planning a day trip up just to eat here again."
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "DelishBites exceeded all my expectations! The ambiance was cozy, and the staff was incredibly welcoming. Every dish was bursting with flavor, especially the desserts. I can't wait to come back again soon!"
  },
  {
    name: "Vikram Patel",
    rating: 4,
    text: "Fantastic place for a family dinner! The menu had plenty of options for everyone, and the quality of food was top-notch. The service was prompt, and the staff went out of their way to make our experience special."
  },
  {
    name: "Sonia Verma",
    rating: 5,
    text: "Absolutely loved DelishBites! The attention to detail in every dish was remarkable, and the presentation was stunning. The service was friendly, and the atmosphere made the experience even better. Will definitely recommend!"
  },
  {
    name: "Ankit Mehta",
    rating: 3,
    text: "The food was great, but the highlight was the atmosphere. It felt very relaxed, and the staff was very attentive. The menu has something for everyone. I wish the portions were a bit larger, though."
  },
  {
    name: "Neha Kapoor",
    rating: 4,
    text: "Had a wonderful time dining here. The food was delicious, and the staff was very friendly. The decor was beautiful, making it a perfect spot for a weekend dinner. Highly recommended!"
  },
];

export default Review;
