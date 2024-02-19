import styles from "./Hero.module.css";
import Header from "../Layout/Header.js";

import Image from "next/image";

import maudev from "/public/mau-meza.jpg";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";

function Hero() {
    return (
        <div>
            <section className=" min-h-screen">
                <Header />
                <div className=" text-center p-5">

                    <div className=" ">
                        <p className={styles.conv}>I am</p>
                        <h1 className={styles.name}>
                            Mauricio Meza
                        </h1>
                    </div>
                    <p className={styles.summary}>
                        a skilled <span className="text-teal-500">Full-Stack developer</span> with a rich background in Mechanical Design and Manufacturing, boasting 7 years of engineering excellence, my journey in software development has been a fascinating transition. With experience as a <span className="text-teal-500"> Back-End developer</span> in my last job, I've honed my abilities in creating robust and efficient systems.
                    </p>
                    {/* <p className={styles.summary}>
              From conceptualizing intricate designs to crafting elegant code, I thrive on the synergy of creativity and precision. I'm excited to share my experiences and creations with you as I navigate the realms of software development, combining my <span className="text-teal-500">engineering background</span> with a passion for building innovative solutions.
            </p> */}
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
                    <Image
                        src={maudev}
                        alt=""
                        fill
                        style={{ objectFit: "cover" }}
                    />
                </div>
                <div className="text-center p-5">
                    <p className={styles.summary}>
                        From conceptualizing intricate designs to crafting elegant code, I thrive on the synergy of creativity and precision. I'm excited to share my experiences and creations with you as I navigate the realms of software development, combining my <span className="text-teal-500">engineering background</span> with a passion for building innovative solutions.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Hero;