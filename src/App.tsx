import { BrowserRouter } from "react-router-dom"

import {About, Contact, Experiences, Hero, Navbar, Technologies, Projects, StarsCanvas} from "./components"


function App() {

  return <BrowserRouter>
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Experiences />
      <Technologies />
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  </BrowserRouter>
}

export default App
