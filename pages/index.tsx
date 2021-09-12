import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Lnading from "../components/Home";
import Info from "../components/Info";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";

const Home: NextPage = () => {
  return (
    <section>
      <Head>
        <title>Eljday</title>
        <meta name="Eljday" content="Ghassen Eljday's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className={styles.container}>
        <Lnading />
        <Info />
        <Projects />
      </div>
    </section>
  );
};

export default Home;
