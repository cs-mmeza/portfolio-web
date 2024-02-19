import React from "react";
import styles from "./header.module.css";   
import { useDarkMode, toggleDarkMode } from "@/app/components/context/DarkModeContext";


function Header() {
    const { icon, toggleDarkMode } = useDarkMode();
    return (
        <div>
            <nav className={styles.nav}>
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
                        <a
                            href="https://docs.google.com/document/d/1-dLvyX3TRGO-UIzUJhaP2SBk-xyW3D64/edit?usp=sharing&ouid=105066509412189301443&rtpof=true&sd=true"
                            className=" px-4 py-2 rounded-md ml-8 btn"
                        >
                            Resume
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;