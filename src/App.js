import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react';

// Header component
const Header = () => (
  <header className="flex justify-between items-center bg-gray-900 text-white p-4 z-10 relative">
    <nav>
      <ul className="flex space-x-4">
        <li><a href="#accommodation">Accommodation</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#workshops">Workshops</a></li>
      </ul>
    </nav>
    <div className="text-center">
      <h1 className="text-2xl font-bold">Techfest™</h1>
      <p>17th - 19th December, 2024</p>
    </div>
    <nav className="flex items-center space-x-4">
      <a href="#competitions">Competitions</a>
      <a href="#profile">Profile</a>
    </nav>
  </header>
);

// Animated background component
const AnimatedBackground = () => (
  <div className="fixed inset-0 z-0 bg-gray-800 overflow-hidden">
    {[...Array(20)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-cyan-400 opacity-20"
        style={{
          width: `${Math.random() * 100 + 50}px`,
          height: `${Math.random() * 100 + 50}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `float ${Math.random() * 10 + 5}s infinite alternate`
        }}
      />
    ))}
  </div>
);

// Animated Techfest Logo component
const AnimatedLogo = () => (
  <div className="relative w-64 h-64 mx-auto mb-8">
    <div className="absolute inset-0 border-4 border-cyan-400 rounded-full animate-pulse"></div>
    <div className="absolute inset-4 border-4 border-green-400 rounded-full animate-ping"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <span className="text-4xl font-bold text-white">TF</span>
    </div>
  </div>
);

// Main content component
const MainContent = () => (
  <main className="relative flex items-center justify-center h-screen text-white overflow-hidden">
    <AnimatedBackground />
    <div className="relative z-10 text-center">
      <AnimatedLogo />
      <h2 className="text-3xl font-bold mb-4">Workshops are Live Now!</h2>
      <p className="text-xl mb-4">Stay at IIT Bombay</p>
      <p className="text-2xl font-bold text-cyan-400 animate-bounce">Hackathon Coming Soon!</p>
    </div>
  </main>
);

// Footer component
const Footer = () => (
  <footer className="bg-gray-900 text-white p-4 z-10 relative">
    <div className="flex justify-between items-center">
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#contact">Contact Us</a></li>
          <li><a href="#about">About Us</a></li>
        </ul>
      </nav>
      <div className="flex space-x-4">
        <Instagram size={24} />
        <Facebook size={24} />
        <Twitter size={24} />
        <Youtube size={24} />
        <Linkedin size={24} />
      </div>
    </div>
  </footer>
);

// Main App component
const App = () => (
  <div className="flex flex-col min-h-screen">
    <style jsx global>{`
      @keyframes float {
        0% {
          transform: translateY(0) rotate(0deg);
        }
        100% {
          transform: translateY(-100px) rotate(360deg);
        }
      }
    `}</style>
    <Header />
    <MainContent />
    <Footer />
  </div>
);

export default App;