import { Link } from 'react-router-dom';
import './HeroSection.css';

function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Discover Luxury Fashion</h1>
        <p>Elevate your style with our curated collection of premium clothing and accessories</p>
        <Link to="/products" className="cta-btn">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;
