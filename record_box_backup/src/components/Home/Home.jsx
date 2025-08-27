import { BandLogo } from "../Band_Logo/band-logo";
import { Banner } from "../Banner/Banner";
import './home.css';

export const Home = () => {
return (
    <>
            <div className="hero">
        <Banner />
    </div>
    <div>
   <section id="band-bio" className="band-bio-wrapper">
  <article className="band-bio-article">
    <h2>Band Bio – Record Box</h2>
    <p>
      Meet one of the most versatile and dynamic live event bands — Matt, Alex, Joe, and Minnie — a powerhouse quartet delivering unforgettable performances across weddings, parties, luxury events, festivals, and everything in between.
    </p>
    <p>
      With Matt on bass, Alex on drums, Joe on guitar, and Minnie on vocals and piano, this talented group brings years of live experience, rich musicianship, and undeniable chemistry to the stage. Every member contributes vocals, blending tight harmonies with standout lead moments to bring iconic songs to life.
    </p>
  </article>

  <article className="band-bio-top-songs">
    <h2>Top song performances</h2>
    <p>
      Their expansive repertoire covers decades of feel-good hits — from soul classics and rock anthems to disco bangers and modern pop chart-toppers — including crowd favorites like:
    </p>
    <ul className="neat-list">
      <li>Dancing Queen</li>
      <li>Sex on Fire</li>
      <li>Superstition</li>
      <li>Don't Stop Believing</li>
      <li>Twist and Shout</li>
      <li>Le Freak</li>
    </ul>
    <p>
      Whether you're planning an intimate wedding, a high-end corporate function, a lively birthday bash, or a festival crowd-pleaser, this band can tailor their set list to perfectly suit your vibe and audience.
    </p>
    <p>
      Based in the UK and available nationwide, they bring energy, professionalism, and total flexibility to every event — with all the gear, talent, and passion needed to keep your guests singing and dancing all night long.
    </p>
  </article>
</section>

<div>
    <section id="meet-the-band" className="meet-band-section">
    <article className="meet-band-article">
      <h2>Meet the Band</h2>
      <h4>
        Our lineup features a tight-knit group of musicians with a shared love for music and live performance:
      </h4>

      <div>
        <h3>Minnie – Lead Vocals</h3>
        <p>With a soulful voice and magnetic stage presence, Minnie brings the emotion and power behind every lyric, connecting with audiences of all sizes.</p>
      </div>

      <div>
        <h3>Matt – Bass</h3>
        <p>Matt provides the heartbeat of the band with smooth, solid basslines that keep the groove steady and the energy high.</p>
      </div>

      <div>
        <h3>Joe – Guitar</h3>
        <p>Joe adds texture and flair with melodic riffs, rhythmic drive, and tasteful solos, giving each classic a fresh, vibrant edge.</p>
      </div>

      <div>
        <h3>Alex – Drums</h3>
        <p>With sharp timing and dynamic rhythm, Alex drives the band forward and keeps every set tight and engaging.</p>
      </div>
      <div id="our-sound">
          <h2>Our Sound</h2>
    <p>From The Beatles and Queen to Amy Winehouse and Adele, we cover the very best of British music — blending nostalgia with modern style. Whether you’re after mellow acoustic vibes or a dancefloor-filling finale, we tailor our setlist to fit your event.</p>
      </div>
    </article>

    
    <div className="right-side-placeholder">
        <article className="what-we-offer">
       
    <h2>What We Offer</h2>
    <ul className="neat-list">
        <li>Professional live music for weddings, corporate events, birthdays, and more</li>
        <li>Flexible set lengths and styles to suit your schedule</li>
        <li>Full PA and sound setup included</li>
        <li>Available across anywhere in UK!</li>
    </ul>
    </article>
    <div>
      <h2 id="pricing" className="availability">Pricing</h2>
      <h4 className="what-we-offer-pricing-description">Including Full PA System and backline, Playlists playing inbetween, travel, setup and pack down time:</h4>
      <ul className="neat-list">
        <li><b>Local Events</b> - Starting Price: £400 </li>
        <li><b>Weddings</b> - Starting Price: £800</li>
        <li><b>Private Parties</b> - Starting Price: £600</li>
      </ul>
    </div>
    <div>
<p>We also welcome song suggestions that we can seamlessly add to our existing set lists as we want to ensure a personalised experience.</p> 

<p>Need something custom? Let's talk! </p>



<p>Let us bring the music that everyone knows and loves — played live, with heart.</p>
</div>
    </div>
   
  </section>

</div>
 <section id="contact" className="contact-section">
    <BandLogo />
    </section>
<footer>© 2025, Benjamin Edwards</footer>
    </div>
    </>
)
}