import type { FC } from "react";
import styles from "./lnading.module.css";

const Lnading: FC = () => {
  return (
    <div className={styles.landingContainer}>
      <div className={styles.info}>
        <h1 id={styles.welcoming}>Hey There I’m Ghassen Eljday</h1>
        <p id={styles.personalProfile}>
          I&apos;ve always had a passion for creating and designing things from
          scratch or merging some things to make a brand new thing out of them.
          I started my journey as a graphic designer where I made a bunch of
          logos. Then I started designing websites and quickly became passionate
          about programming. That&apos;s when I joined RBK to start an intensive
          training of1200 hours of coding in more than 40 sprints shaping my
          soft and technical skills and discovering cutting-edge technologies.
        </p>
      </div>
      <div className={styles.image}>
        <img id={styles.laptopImg} src="./laptop_S.png" alt="Ghassen-laptop" />
      </div>
    </div>
  );
};

export default Lnading;
