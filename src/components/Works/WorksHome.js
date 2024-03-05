import './Works.scss';
import { useEffect, useRef, useState } from 'react';
// import gsap from "gsap";
// import SplitText from '../../utils/SplitText3.min.js';
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function WorksHome() {
  const ref = useRef(null);
  const [reveal, setReveal] = useState(false);

  useEffect(() => {
    setTimeout(() => setReveal(true), 100);
  }, []);

  useEffect(() => {
    // --------------------------------------------------------
    // Text appear animation
    // const split = new SplitText("#works-title", {
    //   type: "lines",
    //   linesClass: "lineChildren",
    // });

    // new SplitText("#works-title", {
    //   type: "lines",
    //   linesClass: "lineParent",
    // });

    // gsap.to(split.lines, {
    //   duration: 1,
    //   y: -20,
    //   opacity: 1,
    //   stagger: 0.1,
    //   ease: "var(--custom-ease-out)",
    // });
  }, []);

  const thumbnailWork1 = require('../../images/projects/Profile.webp');
  const thumbnailWork2 = require('../../images/projects/Profile.webp');
  const thumbnailWork3 = require('../../images/projects/Profile.webp');
  const thumbnailWork4 = require('../../images/projects/Profile.webp');
  const thumbnailWork5 = require('../../images/projects/Profile.webp');

  const works = [
    {
      "title": "Naufal Rizki",
      "thumbnail": thumbnailWork5,
      "detail": "Bikin pusing sih tapi seru pol ga boong",
      "link": "https://www.instagram.com/naufalaliefianto",
    },
    {
      "title": "Roman Tinata",
      "thumbnail": thumbnailWork4,
      "detail": "Seru banget. Harganya juga affordable sih, lumayan lah",
      "link": "https://www.instagram.com/roman_tnata",
    },
    {
      "title": "Raga Jati",
      "thumbnail": thumbnailWork3,
      "detail": "Menurut aku ini worth to try banget si. Agak serem tapi menantang",
      "link": "https://www.instagram.com/ragajat_",
    },
    {
      "title": "Davina Winnie",
      "thumbnail": thumbnailWork2,
      "detail": "Sumpah ini seru banget. kalian wajib coba pokoknya! makanan sama minumannya juga lumayan enak",
      "link": "https://www.instagram.com/davinawinnie_",
    },
    {
      "title": "Dafa Hentra",
      "thumbnail": thumbnailWork1,
      "detail": "Mbohlah",
      "link": "https://www.instagram.com/dapahentra",
    }
  ]

  const workSliderContent = works.map((work, key) =>
    <SwiperSlide key={key} className={cn("work-item", { "is-reveal": reveal })}>
      <a href={work.link} target="_blank" rel="noreferrer">
        <div className="work-canvas">
          <img className="work-item-image" src={work.thumbnail} alt={work.title} data-scroll data-scroll-speed="-2" data-scroll-target=".work-canvas"></img>
        </div>
        <div className="work-description">
          <h3 className="text-24 font-white">{work.title}</h3>
          <p className="work-detail font-neutral text">{work.detail}</p>
        </div>
      </a>
    </SwiperSlide>
  )

  return (
    <section id="works-home" className={cn("home-works-section", { "is-reveal": reveal })} data-scroll-section>
      <h2 ref={ref} id="works-title" className={cn("works-title title title-works font-white", { "is-reveal": reveal })} data-scroll data-scroll-direction="vertical" data-scroll-speed="2">What They Said?</h2>

      <Swiper slidesPerView={"auto"} className="work-slider">
        {workSliderContent}
      </Swiper>
    </section>
  )
}