import './Menu.scss';
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Error from '../../pages/Error';
import logo from "../../images/logos.svg";
import Home from '../../pages/Home';

export default function Menu() {

  useEffect(() => {
    // Menu behavior event
    // When the user scrolls down, hide the navbar. When the user scrolls up or is on bottom of page, show the navbar
    // let prevScrollpos = window.pageYOffset;
    // const menu = document.getElementById("menu");

    // window.onscroll = () => {
    //   let currentScrollPos = window.pageYOffset;

    //   if (prevScrollpos > currentScrollPos || window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 1) {
    //     menu.style.top = "0";
    //   } else {
    //     menu.style.top = "-120px";
    //   }
    //   prevScrollpos = currentScrollPos;
    // }

    // Click menu event
    const hamburger = document.querySelector(".hamburger-check");
    const mobileWindow = document.querySelector(".mobile");
    const links = document.querySelectorAll(".mobile__links a");

    links.forEach(link => {
      link.addEventListener("click", () => {
        mobileWindow.classList.remove("opened");
        hamburger.checked = false;
      });
    });

    hamburger.addEventListener("change", () => {
      mobileWindow.classList.toggle("opened");
    });
  }, []);

  return (
    <section>
      <div className="hamburger">
        {/* Hamburger button */}
        <input type="checkbox" className="hamburger-check" name="hamburger" />
        <label htmlFor="hamburger">{/* None */}</label>
        <div className="hamburger-lines">
          <span></span>
          <span></span>
        </div>
      </div>

      <Router>
        <nav id="menu" className="menu">
          <div className="menu__inner">
            <div className="menu__inner--logo">
              <a href="#home">
                <img src={logo} alt="MT. Logo" width="80" height="45" />
              </a>
            </div>
            <div className="menu__inner--links">
              <span className="text font-white hover-underline-animation"><a href="#works-home">What They Said</a></span>
              <span className="text font-white hover-underline-animation"><a href="#about">About</a></span>
              <span className="text font-white hover-underline-animation"><a href="#contact">Contact</a></span>
            </div>
          </div>
        </nav>


        <div className="mobile">
          <div className="mobile-logo">
            <a href="#home">
              <img src={logo} alt="MT. Logo" width="80" height="45" />
            </a>
          </div>

          <div className="mobile__links">
            <span className="title title-menu font-white">Menu</span>
            <span className="text font-white hover-underline-animation"><a href="#works-home">What They Said</a></span>
            <span className="text font-white hover-underline-animation"><a href="#about">About</a></span>
            <span className="text font-white hover-underline-animation"><a href="#contact">Contact</a></span>
          </div>

          <div className="mobile__contact">
            <div className="links">
              <div className="link-title text">Socials</div>
              <div className="link text font-white hover-underline-animation"><a href="https://www.instagram.com/granddoor.id/" target="_blank" rel="noreferrer">Instagram</a></div>
              <div className="link text font-white hover-underline-animation"><a href="https://vt.tiktok.com/ZSFDvgsk8/" target="_blank" rel="noreferrer">Tiktok</a></div>
              <div className="link text font-white hover-underline-animation"><a href="https://www.twitter.com/aesketik/" target="_blank" rel="noreferrer">Twitter</a></div>
            </div>

            <div className="links">
              <div className="link-title text">Contact</div>
              <div className="link text font-white hover-underline-animation"><a href="mailto:granddoor@gmail.com">granddoor@gmail.com</a></div>
              <div className="link text font-white hover-underline-animation"><a href="tel:+6282322735591">+62 823 2273 5591</a></div>
              <div className="link text font-white hover-underline-animation">&#8205;</div>
            </div>
          </div>
        </div>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/works" element={<Works />} /> */}
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </section >
  )
}