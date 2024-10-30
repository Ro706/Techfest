import React from 'react';
import ParticlesComponent from './components/particles';
import './App.css';


const App = () => {
    return (
        <>
         <ParticlesComponent id="particles" />
                <div className="logo">
                    <img src="./logo.png" alt="logo" />
                </div>
                <div className="flex items-center justify-center w-full flex-col px-4">
                <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight typing-animation">
                    SynergiaX
                </h2><br/>
                <p className="event-announcement">
                    The SynergiaX Hackathon is coming soon to Symbiosis Institute of Technology, Nagpur! While the dates are yet to be announced, this event will challenge participants to solve real-world problems with innovation and creativity. Stay tuned for more updates!
                </p>
                <div class="input-group">
                    <input type="email" className="input" id="Email" name="Email" placeholder="Email" autoComplete="off"/>
                    <input className="button--submit" value="Get Notified" type="submit" onClick={() => alert("Thank you for subscribing!")}/>
                </div>
            </div>
            <footer>
                <p className="flex items-center justify-center w-full flex-col px-4 py-10">&copy; 2025 SynergiaX. All rights reserved.</p>
            </footer>
        </>
    );
};

export default App;