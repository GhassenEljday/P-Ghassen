import type { FC } from "react";
import styles from "./projects.module.css";

const Projects: FC = () => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.doing}>
        <h1 id={styles.welcoming}>My Projects</h1>
      </div>
      <div className={styles.projects}>
        <div className={styles.projectCard}>
          <div className={styles.imageCadr}>
            <img className={styles.projectImage} src="./test.jpg" alt="" />
          </div>
          <div className={styles.projectName}>Project Name</div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.imageCadr}>
            <img className={styles.projectImage} src="./test.jpg" alt="" />
          </div>
          <div className={styles.projectName}>Project Name</div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.imageCadr}>
            <img className={styles.projectImage} src="./test.jpg" alt="" />
          </div>
          <div className={styles.projectName}>Project Name</div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.imageCadr}>
            <img className={styles.projectImage} src="./test.jpg" alt="" />
          </div>
          <div className={styles.projectName}>Project Name</div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.imageCadr}>
            <img className={styles.projectImage} src="./test.jpg" alt="" />
          </div>
          <div className={styles.projectName}>Project Name</div>
        </div>
        <div className={styles.projectCard}>
          <div className={styles.imageCadr}>
            <img className={styles.projectImage} src="./test.jpg" alt="" />
          </div>
          <div className={styles.projectName}>Project Name</div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
