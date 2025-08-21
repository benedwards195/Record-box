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
    </div>
  );
};
