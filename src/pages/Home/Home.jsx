import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";
import linkedinImage from "./../../components/images/linkedin.png";
import githubImage from "./../../components/images/github.png";
import emailImage from "./../../components/images/mail.png";

const Home = () => {
  return (
    <div className={styles.principal_container}>
      <div className={styles.first_box}>
        <div className={styles.introduction}>
          <h1>
            Olá, o meu nome é <span>Bruno Martins </span>{" "}
          </h1>
          <p>
            Transformando ideias em soluções completas, uma linha de código de
            cada vez. <br></br>
            Sou um Full Stack Developer apaixonado por criar experiências
            digitais memoráveis e funcionais.
          </p>
          <div className={styles.loader_container}>
            <div className={styles.loader}>
              <div className={`${styles.face} ${styles.front}`}></div>
              <div className={`${styles.face} ${styles.back}`}></div>
              <div className={`${styles.face} ${styles.left}`}></div>
              <div className={`${styles.face} ${styles.right}`}></div>
              <div className={`${styles.face} ${styles.top}`}></div>
              <div className={`${styles.face} ${styles.bottom}`}></div>
            </div>
          </div>
        </div>
        {
          <div className={styles.card}>
            <div className={styles.bg}></div>
            <div className={styles.blob}></div>
          </div>
        }
      </div>
      <div className={styles.second_box}>
        <div className={styles.card1}>
          <div className={styles.background}></div>
          <div className={styles.logo}></div>
          <div className={`${styles.box} ${styles.box1}`}>
            <span className={styles.icon}>
              <img src={linkedinImage} alt="LinkedIn" className={styles.svg} />
            </span>
          </div>
          <div className={`${styles.box} ${styles.box2}`}>
            <span className={styles.icon}>
              <img src={githubImage} alt="GitHub" className={styles.svg} />
            </span>
          </div>
          <div className={`${styles.box} ${styles.box3}`}>
            <span className={styles.icon}>
              <img src={emailImage} alt="Email" className={styles.svg} />
            </span>
          </div>
          <div className={`${styles.box} ${styles.box4}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Home;
