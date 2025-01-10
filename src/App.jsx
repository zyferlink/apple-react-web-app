import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/iphonemodel/Model"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"
import { appleImg } from "./utils";

import { useState, useEffect } from "react";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading time (e.g., fetching data)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    // Cleanup the timer
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-screen bg-black flex-col">

        {/* Logo */}
        <img
          src={appleImg}
          alt="Apple Logo"
          width={32}
          height={26}
        />

        {/* Loader container */}
        <div className="loader-container mt-8"> 
          <div className="line-loader">
            <div className="line"></div>
          </div>
        </div>

      </div>


    );
  }

  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Highlights />
      <Model />
      <Features />
      <HowItWorks />
      <Footer />
    </main>
  );
};

export default App;

