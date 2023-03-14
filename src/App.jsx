import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Hero, About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas } from "./components"

const App = () => {
  
  return ( 
  
  <BrowserRouter>

      <div className="relative z-0 bg-primary">
        {/* Start Navbar, Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
          <Navbar/>
          <Hero/>
        </div>
        {/* End Navbar, Hero Section */}

        {/* Start Other Section */}
        <div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          <Feedbacks/>
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
