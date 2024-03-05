import './About.scss';

export default function AboutInstagram() {
  return (
    <section id="about-instagram" className="about-instaram-section" data-scroll-section>
      <div className="font-white ml-5 tablet-m-0 title title-description" data-scroll data-scroll-direction="vertical" data-scroll-speed="3">Join us in our offline adventure! Tackle mystery puzzles, prove your intelligence, and find the key to unlock the door to an unforgettable story.</div>
      <div className="font-neutral ml-5 mt-24 tablet-ml-0 text" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">Check out<br></br>our instagram &#8594; <a className="font-white hover-underline-animation" href="https://www.instagram.com/minhthanh7219/" target="_blank" rel="noreferrer">{/* Instagram redirection link */}HERE</a></div>
    </section>
  )
}