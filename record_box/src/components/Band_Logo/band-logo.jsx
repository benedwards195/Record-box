import { FaEnvelope, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from '../../images/record-box-logo.png';
import './band-logo.css';

export const BandLogo = () => {
  return (
    <div className="recbox">
      <img 
        src={logo} 
        alt="Label" 
        className="w-full h-full object-cover"
      />
      
      <div className="overlay-content">
        <div className="contact-column">
          <h2>Contact Us</h2>
          <ul className="contact-list">
            <li>
              <FaEnvelope className="icon" />
              <span><strong>Email:</strong> recordboxband@gmail.com</span>
            </li>
            <li>
              <FaInstagram className="icon" />
              <span><strong>Instagram:</strong> @rec.ordbox</span>
            </li>
            <li>
              <FaFacebookF className="icon" />
              <span><strong>Facebook:</strong> @RecordBoxEventsBand</span>
            </li>
          </ul>
        </div>

        <div className="setlist-column">
          <h2>Set Lists & Music</h2>
          <ul className="setlist-list">
            <li>Celebration Set List</li>
            <li>Birthday Set List</li>
            <li>Wedding Set List</li>
            <li>Luxury Set List</li>
            <li>Festival Set List</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
