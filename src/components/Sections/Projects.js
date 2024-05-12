import Image from "next/image";

import web1 from "/public/web1.png";
import web2 from "/public/mark-konig-workinprogress.jpg";
import web3 from "/public/Threads_demo_picture.png"

import styles from "./Projects.module.css"

function Projects() {
    return ( 
        <section className="relative" id="portfolio">
        <div className="pt-20">
          <p className="text-center text-gray-500">Explore my recent</p>
          <h2 className="title">Projects</h2>
        </div>
        <div className="details_container">
          <div className={styles.projects_containers}>
            <div className="cards">
              <div className="article-container">
                <Image
                  src={web3}
                  alt="portfolio image 1"
                  className="rounded-lg object-cover"
                  width={"100%"} height={"100%"} />
              </div>
              <h2 className={styles.project_title}> Threads Clone App</h2>
              <div className="px-5 items-center flex-1">
                  <button
                    className="text_btn_projects btn mx-1" 
                    type="button" 
                    onClick={(e) => {e.preventDefault();
                      window.location.href='https://github.com/cs-mmeza/Threads';
                      }}
                      >
                      GitHub Repo
                  </button>
                  <button
                    className="text_btn_projects btn"
                    onClick={(e) => {e.preventDefault();
                      window.location.href='https://threads-six-zeta.vercel.app';
                    }}
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
                  className="rounded-lg object-cover"
                  width={"100%"} height={"100%"} />
              </div>
              <h2 className={styles.project_title}> Goals list app</h2>
              <div className=" basis-1/2 flex-1 px-10">
              <button
                className="text_btn_projects btn" 
                type="button" 
                onClick={(e) => {e.preventDefault();
                  window.location.href='https://github.com/cs-mmeza/goals_app';
                  }}>
                  GitHub Repo
                </button>
                {/* <button
                  className="btn_projects btn ml-10 md:ml-20 lg:ml-30"
                  onClick="location.href='https://github.com/'"
                >
                  Demo
                </button> */}
              </div>
            </div>
            <div className="cards">
              <div className="article_container">
                <Image
                  src={web1}
                  alt="portfolio image 1"
                  className="rounded-lg object-cover"
                  width={"100%"} height={"100%"} />
              </div>
              <h2 className={styles.project_title}> API Goals List </h2>
              <div className=" basis-1/2 flex-1 px-10">
                <button
                  className="text_btn_projects btn"
                  onClick={(e) => {e.preventDefault();
                    window.location.href='https://github.com/cs-mmeza/api_goals_app';
                    }}>
                  GitHub Repo
                </button>
                {/* <button
                  className="btn_projects btn ml-10 md:ml-20 lg:ml-30"
                  type="button"
                  onClick={(e) => {e.preventDefault();
                    window.location.href='https://github.com/cs-mmeza/api_goals_app';
                    }}>
                  Demo
                </button> */}
              </div>
            </div>
            <div className="cards">
              <div className="article-container">
                <Image
                  src={web2}
                  alt="portfolio image 1"
                  className="rounded-lg object-cover"
                  width={"100%"} height={"100%"} />
              </div>
              <h2 className={styles.project_title}>Business website</h2>
              <div className=" basis-1/2 flex-1 px-10 items-center">
                <button
                  className="text_btn_projects btn px-3"
                  onClick={(e) => {e.preventDefault();
                    window.location.href='https://github.com/cs-mmeza/norte-arq-demo';
                    }}>
                  GitHub Repo
                </button>
                {/* <button
                  className="btn_projects btn ml-10 md:ml-20 lg:ml-30"
                  onClick="location.href= https://github.com/"
                >
                  Demo
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}

export default Projects;