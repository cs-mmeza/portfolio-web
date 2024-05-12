import { IoIosCheckmarkCircle } from "react-icons/io";
import styles from "./Skills.module.css";

function Skills() {
    return (
        <section className="relative" id="skills">
            <div className=" mt-10">
                <p className="text-center text-gray-500">Check my</p>
                <h2 className="title dark:text-gray-100">
                    Tech Stack
                </h2>
            </div>
            <div className="flex justify-center flex-col lg:flex gap-10">
                <div className="details_container">
                    <div className={styles.skills_containers}>
                        <div className="cards">
                            <h3 className={styles.skills_title}>Front-End Development</h3>
                            <div>
                                <h4 className={styles.skills_subtitle}>Languages & Frameworks:</h4>
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
                            <h3 className={styles.skills_title}>Back-End Development</h3>
                            <div>
                                <h4 className={styles.skills_subtitle}>Languages & Frameworks:</h4>
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
                                <h4 className={styles.skills_subtitle}>Version Control:</h4>
                                <article className="flex">
                                    <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                                    <h4>Git</h4>
                                </article>
                                <h4 className={styles.skills_subtitle}>Back-End Development:</h4>
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
                            <h3 className={styles.skills_title}>Data Processing & Analysis</h3>
                            <div>
                                <h4 className={styles.skills_subtitle}>Database Management</h4>
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
                                <h4 className={styles.skills_subtitle}>Data Processing</h4>
                                <article className="flex">
                                    <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                                    <h4>Data Cleaning</h4>
                                </article>
                                <article className="flex text-md text-left">
                                    <IoIosCheckmarkCircle className="mr-2" alt="experience icon" />
                                    <h4 className="">Pattern Identification</h4>
                                </article>
                                <h4 className={styles.skills_subtitle}>Data Visualization</h4>
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
    );
}

export default Skills;