import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './component/NavBar'; // Corrected import statement
import { BackgroundLines } from "./component/ui/background-lines";
import './App.css';

// Placeholder components
const About = () => <div>About Page</div>;
const Team = () => <div>Team Page</div>;
const Gallery = () => <div>Gallery Page</div>;
const Contact = () => <div>Contact Page</div>;
const Login = () => <div>Login Page</div>;

const App = () => {
    return (
        <Router>
            <NavBar />
            <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
                <div className="logo">
                    <img src="./logo.png" alt="logo" />
                </div>
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    SynergiaX
                </h2><br/>
                <p className="max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
                    The SynergiaX Hackathon is coming soon to Symbiosis Institute of Technology, Nagpur! While the dates are yet to be announced, this event will challenge participants to solve real-world problems with innovation and creativity. Stay tuned for more updates!
                </p>
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
                    COMING SOON!!!
                </h2>
            </BackgroundLines>
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/team" element={<Team />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </Router>
    );
};

export default App;