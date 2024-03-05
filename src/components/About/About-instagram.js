import './About.scss';

export default function AboutInstagram() {
  return (
    <section id="about-instagram" className="about-instaram-section" data-scroll-section>
      <div className="font-white ml-5 tablet-m-0 title title-description" data-scroll data-scroll-direction="vertical" data-scroll-speed="3">Tackle mystery puzzles, Find the key, and prove your intelligence through the game!</div>
      <div className="font-neutral ml-5 mt-24 tablet-ml-0 text" data-scroll data-scroll-direction="vertical" data-scroll-speed="1">Dont Forget<br></br>To Follow Us! &#8594; <a className="font-white hover-underline-animation" href="https://www.instagram.com/dapahentra/" target="_blank" rel="noreferrer">{/* Instagram redirection link */}HERE</a></div>
    </section>
  )
}