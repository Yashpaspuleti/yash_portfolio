import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-yash.png";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-dark.svg";
import linkedinLight from "../../assets/linkedin-light.svg";
import linkedinDark from "../../assets/linkedin-dark.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import CV from "../../assets/Yashwanth Pasupuleti.pdf";
import { useTheme } from "../../common/ThemeContext";
import Typed from "typed.js";
import React, { useEffect, useRef } from "react";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const typedElement = useRef(null);

  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;

  useEffect(() => {
    const options = {
      strings: [
        "Frontend Developer",
        "Web Developer",
        "React Developer",
        "Photographer",
      ],
      typedSpeed: 20,
      backSpeed: 80,
      loop: true,
      showCursor: false,
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Yash Pasupuleti"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Yashwanth <br /> Pasupuleti
        </h1>
        <div className={styles.typedWrapper}>
          <h2 ref={typedElement}></h2>
        </div>
        <span>
          <a href="https://twitter.com/YashPasupuleti" target="_blank">
            <img src={twitterIcon} alt="Twitter icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/yashwanth-kumar-pasupuleti-228974170/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
          <a href="https://github.com/Yashpaspuleti" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
        </span>
        <p className={styles.description}>
          A master's graduate in Computer Science with a passion for creating
          user-friendly and visually appealing web applications.
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
