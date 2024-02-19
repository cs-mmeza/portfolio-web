import Head from "next/head";

import Hero from "./Sections/Hero";
import Projects from "./Sections/Projects";
import Skills from "./Sections/Skills";

import styles from "./Main.module.css";

import { useDarkMode } from "./context/DarkModeContext";

function Main() { 
    const { darkMode } = useDarkMode();
  
    return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title>Mauricio Meza Portfolio</title>
          <meta name="Description" content="Generated by create next app"></meta>
          <link rel='icon' href='./portfolio-32.png' />
        </Head>
  
        <main className={styles.main}>
          <Hero />
          <Skills />
          <Projects />
        </main>
      </div>
    );
  }

  export default Main;