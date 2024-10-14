import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './component/NavBar';
import { BackgroundLines } from "./component/ui/background-lines";
import { SparklesCore } from "./component/ui/sparkles";
import './App.css';

// Placeholder components
const About = () => <div>About Page</div>;
const Team = () => <div>Team Page</div>;
const Gallery = () => <div>Gallery Page</div>;
const Contact = () => <div>Contact Page</div>;
const Login = () => <div>Login Page</div>;

const App = () => {
    return (
        <>
        {/* // <Router> */}
            {/* <NavBar /> */}
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <div className="logo">
                    <img src="./logo.png" alt="logo" />
                </div>
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight typing-animation">
                    SynergiaX
                </h2><br/>
                <div className="sparkles-container">
                    {/* Gradients */}
                    <div className="gradient-line inset-x-5 md:inset-x-20" />
                    <div className="gradient-line-thin inset-x-5 md:inset-x-20" />
                    <div className="gradient-line-sky inset-x-10 md:inset-x-60" />
                    <div className="gradient-line-sky-thin inset-x-10 md:inset-x-60" />
         
                    {/* Core component */}
                    <SparklesCore
                      background="transparent"
                      minSize={0.4}
                      maxSize={1}
                      particleDensity={1200}
                      className="w-full h-full"
                      particleColor="#FFFFFF"
                    />
         
                    {/* Radial Gradient to prevent sharp edges */}
                    <div className="radial-gradient-mask"></div>
                </div>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    The SynergiaX Hackathon is coming soon to Symbiosis Institute of Technology, Nagpur! While the dates are yet to be announced, this event will challenge participants to solve real-world problems with innovation and creativity. Stay tuned for more updates!
                </p>
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    COMING SOON!!!
                </h2>
            </BackgroundLines>
            {/* <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes> */}
        {/* </Router> */}
        </>
    );
};

export default App;