import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Lnading from "../components/Home";
import Info from "../components/Info";
import Projects from "../components/Projects";

const Home: NextPage = () => {
  return (
    <section className={styles.container}>
      <Head>
        <title>Eljday</title>
        <meta name="Eljday" content="Ghassen Eljday's portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Lnading />
      <Info />
      <Projects />
    </section>
  );
};

export default Home;
