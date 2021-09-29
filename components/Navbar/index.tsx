import type { FC } from "react";
import { useState } from "react";
import styles from "./navbar.module.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcon from "react-icons/ai";

const Navbar: FC = () => {
  const [sideBar, setSideBar] = useState(false);

  const showSideBar = () => setSideBar(!sideBar);

  return (
    <div className={!sideBar ? styles.navbar : styles.navbarOpen}>
      <div
        className={!sideBar ? styles.menuBars : styles.menuBarsClosed}
        onClick={showSideBar}
      >
        {!sideBar ? (
          <FaIcons.FaBars id={styles.berger} className={styles.icon} />
        ) : (
          <AiIcon.AiOutlineClose
            id={styles.cloeBerger}
            className={styles.icon}
            onClick={showSideBar}
          />
        )}
      </div>
      <nav className={sideBar ? styles.navMenuActive : styles.navMenu}>
        <ul className={styles.navMenuItems}>
          <li className={styles.navMenuItem} id={styles.contact}>
            Find me on
          </li>
          <li className={styles.navMenuItem}>
            <a
              target="_blank"
              href="https://github.com/ghasseneljday"
              className={styles.navMenuAn}
            >
              <AiIcon.AiFillGithub className={styles.navMenuIcon} />
              <p className={styles.navMenuText}>GitHub</p>
            </a>
          </li>
          <li className={styles.navMenuItem}>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/ghasseneljday/"
              className={styles.navMenuAn}
            >
              <AiIcon.AiFillLinkedin className={styles.navMenuIcon} />
              <p className={styles.navMenuText}>LinkedIn</p>
            </a>
          </li>
          <li className={styles.navMenuItem}>
            <a
              target="_blank"
              href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=ghasseneljday@gmail.com"
              className={styles.navMenuAn}
            >
              <AiIcon.AiFillMail className={styles.navMenuIcon} />
              <p className={styles.navMenuText}>Email</p>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
