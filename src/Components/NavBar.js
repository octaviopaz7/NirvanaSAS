import React, { useEffect, useState } from 'react';
import { Link } from "react-scroll";
import styles from "./NavBar.module.css";
import {TiThMenu} from "react-icons/ti";
import {AiFillCloseCircle} from "react-icons/ai";

const NavBar = () => {

  const [navBarOpen, setNavBarOpen] = useState(false);
  const [windowDimension, setWindowDimension] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  }); 

  const detecDimension = () => {
    setWindowDimension({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize" , detecDimension);
    windowDimension.width > 800 && setNavBarOpen(false);
    return () => {
    window.removeEventListener("resize", detecDimension);
    };
  },[windowDimension]);

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
    <div 
      className={!navBarOpen ? styles.navBar : styles.navOpen}>
        {!navBarOpen && <p className={styles.logo}> NirvanaSAS</p>}
        {!navBarOpen && windowDimension.width < 800 ? (
          <TiThMenu 
          onClick={() => setNavBarOpen(!navBarOpen)} 
          size={25} 
          />
        ) : (
          windowDimension.width < 800 && (
          <AiFillCloseCircle 
          onClick={() => setNavBarOpen(!navBarOpen)} 
          color="#f1f1f1" 
          size={25} 
          />
          )  
        )}
        {navBarOpen || 
          (windowDimension.width > 800 && (
            <ul className={styles.linksContainer}>
             {links.map((x) => (
                <div>
                  <Link 
                    onClick={() => setNavBarOpen(false)}
                    to={x.link}
                    smooth
                    duration={500}
                    className={styles.navLink}
                  > 
                    {x.link === "MisionVision" ? "Mision Vision" : x.link}
                  </Link>
                  <div className={styles.border}></div>
                </div>
            ))} 
          </ul>
         ))}
    </div>
  );
};

export default NavBar