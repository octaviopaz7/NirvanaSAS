import React from 'react'
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";

const NavBar = () => {
  const links = [
    {
        id: 1,
        link: "Home",
    },
    {
        id: 2,
        link: "Compañia",
    },
    {
        id: 3,
        link: "MisionVision",
    },
    {
        id: 4,
        link: "Activos",
    },
    {
        id: 5,
        link: "Portofolio",
    },
    {
        id: 6,
        link: "Contacto",
    }
  ];

  return (
    <div className={styles.NavBar}>
        <ul>
        {links.map( x => (
          <div>
            <Link>{x.link === "MissionVision" ? "Mision Vision" : x.link}</Link>
          </div>
            ))}
        </ul>
    </div>
  );
};

export default NavBar