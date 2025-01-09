import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Model from "./components/model3d/Model"
import Features from "./components/Features"
import HowItWorks from "./components/HowItWorks"

const App = () => {

  return (
    <main className="bg-black"> 
    <Navbar/>
    <Hero/>
    <Highlights/>
    <Model/>
    <Features/>
    <HowItWorks/>
    </main>
  )
}

export default App
