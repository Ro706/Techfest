import React, { useState, useEffect } from 'react';
import './App.css';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

// Header component
const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="./logo.png" alt="Techfest Logo" className="logo-image" />
      </div>
      <nav className={`nav ${isNavOpen ? 'open' : ''}`}>
      <ul className="nav-links">
          <li><a href="#accommodation" className="hover:text-cyan-400">About</a></li>
          <li><a href="#events" className="hover:text-cyan-400">Teams</a></li>
          <li><a href="#workshops" className="hover:text-cyan-400">Gallery</a></li>
          <li><a href="#profile" className="hover:text-cyan-400">Profile</a></li>
        </ul>
      </nav>
      <button className="nav-toggle" onClick={toggleNav}>
        ☰
      </button>
    </header>
  );
};

// Animated background component
const AnimatedBackground = () => (
  <div className="animated-background">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="floating-circle"
        style={{
          width: `${Math.random() * 150 + 75}px`, // Increased size for floating circles
          height: `${Math.random() * 150 + 75}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 10 + 5}s`,
        }}
      />
    ))}
  </div>
);

// Typing effect component
const TypingEffect = ({ text }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let index = 0;

    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index += 1;
      } else {
        clearInterval(intervalId); // Stop when done
      }
    }, 150); // Typing speed

    return () => clearInterval(intervalId); // Cleanup
  }, [text]);

  return <span className="typing-effect">{displayText}</span>;
};

// Animated Techfest Logo component
const AnimatedLogo = () => (
  <div className="animated-logo">
    <div className="outer-ring neon-border"></div>
    <div className="inner-ring"></div>
    <div className="text-center-circle">
      <TypingEffect text="SynergiaX" /> {/* Ensure 'SynergiaX' is passed correctly */}
    </div>
  </div>
);

// Main content component
const MainContent = () => (
  <main className="main-content">
    <AnimatedBackground />
    <div className="relative z-10 text-center">
      <AnimatedLogo />
      <h2 className="text-3xl font-bold mb-4">Are you ready!</h2>
      <p className="text-xl mb-4"> At Symbiosis institute of technology</p>
      <p className="highlight">Hackathon Coming Soon!</p>
    </div>
  </main>
);

// Footer component
const Footer = () => (
  <footer className="footer">
    <nav className="footer-nav">
      <ul className="footer-links">
        <li>
          <a href="#contact" className="hover:text-cyan-400">Contact Us</a>
        </li>
        <li>
          <a href="#about" className="hover:text-cyan-400">About Us</a>
        </li>
      </ul>
    </nav>
    <div className="social-media">
      <a href="#instagram" aria-label="Instagram">
        <Instagram size={24} />
      </a>
      <a href="#facebook" aria-label="Facebook">
        <Facebook size={24} />
      </a>
      <a href="#twitter" aria-label="Twitter">
        <Twitter size={24} />
      </a>
      <a href="#youtube" aria-label="YouTube">
        <Youtube size={24} />
      </a>
      <a href="#linkedin" aria-label="LinkedIn">
        <Linkedin size={24} />
      </a>
    </div>
  </footer>
);

// Main App component
const App = () => (
  <div className="flex flex-col min-h-screen">
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default App;