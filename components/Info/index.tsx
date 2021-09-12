import type { FC } from "react";
import styles from "./info.module.css";

const Info: FC = () => {
  return (
    <div className={styles.infoContainer}>
      <div className={styles.doing}>
        <h1 id={styles.welcoming}>What i Do?</h1>
      </div>
      <div className={styles.infoContent}>
        {/* image side */}
        <div className={styles.image}>
          <img
            id={styles.laptopImg}
            src="./keyboard_S.png"
            alt="Ghassen-laptop"
          />
        </div>
        {/* info side */}
        <div className={styles.info}>
          <h1 id={styles.welcoming}>Full Stack Developer</h1>
          <p id={styles.personalProfile}>
            I really love Front-End, Acquired organizational skills such as time
            management autonomous learning and problem-solving I have experience
            with ES6+ React Redux Angular Vue Node Express Rest API MySQL and
            MongoDB.
          </p>
          <div className={styles.toolIcon}>
            <img
              className={styles.icon}
              src="./icons/icons8-javascript-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-html-5-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-css3-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-nodejs-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-json-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-api-100.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-react-100.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-redux-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-angularjs-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-vue-js-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-sql-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-mongodb-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-typescript-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-webpack-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-ubuntu-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-windows-10-96.png"
              alt=""
            />
            <img
              className={styles.icon}
              src="./icons/icons8-figma-96.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
