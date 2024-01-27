'use client'
import Head from "next/head";
import Image from "next/image";

import { useEffect, useState } from "react";

import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillInstagram } from "react-icons/ai";
import { IoIosCheckmarkCircle } from "react-icons/io";

import maudev from "../../public/mau-meza.jpg";
import web1 from "../../public/web1.png";

import styles from "./page.module.css";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [icon, setIcon] = useState(<BsFillSunFill />);

  useEffect(() => {
    setIcon(darkMode ? <BsFillSunFill color="white" /> : <BsFillMoonStarsFill />);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Mauricio Meza Portfolio</title>
        <meta name="Description" content="Generated by Mauricio Meza"></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className=" min-h-screen">
          <nav className=" py-10 mb-12 flex justify-between">
            <h1 className={styles.header}>
              Mauricio Meza Dev.
            </h1>
            <ul className="flex items-center">
              <ul className="flex items-center">
                <a
                  onClick={toggleDarkMode}
                  className="cursor-pointer text-2xl"
                >
                  {icon}
                </a>
              </ul>
              <li>
                <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#">
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className=" text-center p-5">
            <div className=" ">
            <p className={styles.conv}>I am</p>
            <h1 className={styles.name}>
              Mauricio Meza
            </h1>
            <h2 className={styles.title}>
              Software Developer.
            </h2>
            </div>
            <p className={styles.paragraph}>
              a skilled <span className="text-teal-500">Software developer</span> with a rich background in Mechanical Design and Manufacturing, boasting 7 years of engineering excellence. My journey in software development has been a fascinating transition, and I'm excited to share my experiences and creations with you.
            </p>
            <p className={styles.paragraph}>
              From conceptualizing intricate designs to crafting elegant code, I thrive on the synergy of creativity and precision. Join me as I navigate the realms of software development, combining my engineering background with a passion for building innovative solutions.
            </p>
          </div>
          <div className={styles.social_icons}>
            <a href="https://www.linkedin.com/in/mauricio-meza/?locale=en_US">
              <AiFillLinkedin />
            </a>
            <a href="https://github.com/cs-mmeza">
              <AiFillGithub />
            </a>
            <a href="https://www.instagram.com/maumeza17/">
              <AiFillInstagram />
            </a>
          </div>
          <div className={styles.profilePicture}>
            <Image src={maudev} layout="fill" objectFit=" cover" alt="" />
          </div>
        </section>
        <section className="relative" id="skills">
          <p className="text-center text-gray-500">Check my</p>
          <h2 className={styles.title}>
            Tech Stack
          </h2>
          <div className="flex justify-center flex-col lg:flex gap-10">
            <div className={styles.experience_details_container}>
              <div className={styles.about_containers}>
                <div className="cards">
                  <h3 className={styles.experience_title}>Front-End Development</h3>
                  <div>
                    <h4 className={styles.experience_subtitle}>Languages & Frameworks:</h4>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>HTML</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>CSS</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>JavaScript</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>React</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Tailwindcss</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>DOM</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>TypeScript</h4>
                    </article>
                  </div>
                </div>
                <div className="cards">
                  <h3 className={styles.experience_title}>Back-End Development</h3>
                  <div>
                    <h4 className={styles.experience_subtitle}>Languages & Frameworks:</h4>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Express.js</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Python</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Django</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Java</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Spring</h4>
                    </article>
                    <h4 className={styles.experience_subtitle}>Version Control:</h4>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Git</h4>
                    </article>
                    <h4 className={styles.experience_subtitle}>Back-End Development:</h4>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>RESTfull APIs</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Microservices</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Docker</h4>
                    </article>
                  </div>
                </div>
                <div className="cards">
                  <h3 className={styles.experience_title}>Data Processing & Analysis</h3>
                  <div>
                    <h4 className={styles.experience_subtitle}>Database Management</h4>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>PostgreSQL</h4>
                    </article>
                    <article className="flex text-md text-left">
                      <IoIosCheckmarkCircle className="flex mr-2" alt="experience icon" />
                      <h4 className="">Relational Database</h4>
                    </article>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>BigQuery</h4>
                    </article>
                    <h4 className={styles.experience_subtitle}>Data Processing</h4>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>Data Cleaning</h4>
                    </article>
                    <article className="flex text-md text-left">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4 className="">Pattern Identification</h4>
                    </article>
                    <h4 className={styles.experience_subtitle}>Data Visualization</h4>
                    <article className="flex">
                      <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                      <h4>TableaU</h4>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative" id="portfolio">
          <div className={styles.head}>
            <p className="text-center text-gray-500">Explore my recent</p>
            <h2 className={styles.title}>Projects</h2>
          </div>
          <div className="experience_details_container">
            <div className="cards">
              <div className="article-container">
                <Image 
                  src={web1} 
                  alt="portfolio image 1" 
                  className=" rounded-lg object-cover" 
                  width={"100%"} height={"100%"} />
              </div>
              <h2> First Project</h2>
              <div className="basis-1/2 flex-1">
              <button 
                  className="btn_outliner"
                  onClick="location.href= https://github.com/"
                >
                  GitHub
                </button>
                <button 
                  className="btn_outliner"
                  onClick="location.href= https://github.com/"
                >
                  Demo
                </button>
              </div>
            </div>
            <div className="cards">
              <div className="article-container">
                <Image 
                  src={web1} 
                  alt="portfolio image 1" 
                  className=" rounded-lg object-cover" 
                  width={"100%"} height={"100%"} />
              </div>
              <h2> First Project</h2>
              <div className="basis-1/2 flex-1">
              <button 
                  className="btn_outliner"
                  onClick="location.href= https://github.com/"
                >
                  GitHub
                </button>
                <button 
                  className="btn_outliner"
                  onClick="location.href= https://github.com/"
                >
                  Demo
                </button>
              </div>
            </div>
            <div className="cards">
              <div className="article-container">
                <Image 
                  src={web1} 
                  alt="portfolio image 1" 
                  className=" rounded-lg object-cover" 
                  width={"100%"} height={"100%"} />
              </div>
              <h2> First Project</h2>
              <div className="basis-1/2 flex-1">
              <button 
                  className="btn_outliner"
                  onClick="location.href= https://github.com/"
                >
                  GitHub
                </button>
                <button 
                  className="btn_outliner"
                  onClick="location.href= https://github.com/"
                >
                  Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
