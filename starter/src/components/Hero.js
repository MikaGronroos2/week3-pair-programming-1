import React from "react";
import styles from "./Hero.Module.css"; // Import the CSS module

function Hero() {
  return (
    <section className="hero" id="home">
      <div className={styles.hero}>
        <h1>backroads app</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
          explicabo debitis est autem dicta.
        </p>
        <a href="#tours" className="btn hero-btn">
          explore tours
        </a>
      </div>
      <div className={styles["hero-banner"]}>{/* ... */}</div>

      <div className={styles["hero-btn"]}>{/* ... */}</div>
    </section>
  );
}

export default Hero;
