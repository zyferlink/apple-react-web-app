import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/iphonemodel/Model"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"
import Footer from "./components/Footer"
import AppLoader from "./components/loader/AppLoader"

import { useState, useEffect } from "react";


const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); 
      setTimeout(() => {
        setIsLoading(false);
      }, 1000); 
    }); 
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="bg-black">
      {isLoading ? (
        <AppLoader fadeOut={fadeOut} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <Highlights />
          <Model />
          <Features />
          <HowItWorks />
          <Footer />
        </>
      )}
    </main>
  );
};

export default App;
