import "./Contact.scss";
import contactImage from "../../images/herow.webp"
import React, { useEffect, useState } from 'react';
import cn from 'classnames';

export default function Contact() {
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    // --------------------------------------------------------
    // Follow mouse image
    // https://armandocanals.com/posts/CSS-transform-rotating-a-3D-object-perspective-based-on-mouse-position.html

    let constrain = 60;
    let mouseOverContainer = document.querySelector('.contact-section');
    let layer = document.querySelector('.contact-img');

    function transforms(x, y, el) {
      let box = el.getBoundingClientRect();
      let calcX = -(y - box.y - (box.height / 2)) / constrain;
      let calcY = (x - box.x - (box.width / 2)) / constrain;

      return "perspective(100vw) "
        + "   rotateX(" + calcX + "deg) "
        + "   rotateY(" + calcY + "deg) ";
    };

    function transformElement(el, xyEl) {
      el.style.transform = transforms.apply(null, xyEl);
    }

    if (matchMedia('(pointer:fine)').matches) {
      mouseOverContainer.onmousemove = function (e) {
        let xy = [e.clientX, e.clientY];
        let position = xy.concat([layer]);

        window.requestAnimationFrame(function () {
          transformElement(layer, position);
        });
      };
    }
  }, []);

  return (
    <section id="contact" className="contact-section" data-scroll-section>
      <div className="wrapper-rolling-text">
        <div className="rolling-text font-white title title-contact">
          <span>Don't Missed It · Don't Missed It ·&nbsp;</span>
        </div>
      </div>

      <div className="mid-container">
        <div className="contact-img-container">
          <img src={contactImage} alt="contact" className={cn("contact-img", { "is-reveal": reveal })} data-scroll data-scroll-target=".contact-img-container"></img>
        </div>

        <div className="links-container">
          <div className="links">
            <div className="link-title text">Socials</div>
            <div className="link text font-white hover-underline-animation"><a href="https://www.instagram.com/granddoor.id/" target="_blank" rel="noreferrer">Instagram</a></div>
            <div className="link text font-white hover-underline-animation"><a href="https://vt.tiktok.com/ZSFDvgsk8//" target="_blank" rel="noreferrer">Tiktok</a></div>
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

    </section>
  )
}