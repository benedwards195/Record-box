import { FaEnvelope, FaFacebookF, FaInstagram, FaSpotify } from "react-icons/fa";
import bandImg from '../../images/band-img1.png';
import './banner.css';

export const Banner = () => {
  return (
    <div className="banner">
      <img 
        src={bandImg} 
        alt="Live Performance" 
        className="w-full h-full object-cover"
      />

      <div className="banner-text">
        <h1 className="record-box">RECORD BOX</h1>
        {/* <h2>Live Music for Unforgettable Events</h2>
        <p className="intro">
          From weddings to birthdays and private parties, Record Box delivers high energy live performances packed with crowd-pleasing hits from every era.
        </p> */}
{/* </div> */}

         <div className="banner-socials">
          <a href="https://instagram.com" target="@rec.ordbox" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://spotify.com" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
          <a href="mailto:band@example.com" target="recordboxband@gmail.com" rel="noopener noreferrer"><FaEnvelope /></a>
          <a href="https://facebook.com" target="@RecordBoxEventsBand" rel="noopener noreferrer"><FaFacebookF /></a>
        </div>
      </div>
    </div>
  );
};
