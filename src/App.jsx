import React from "react"
import { BrowserRouter } from "react-router-dom"
import { Hero, About, Contact, Experience, Feedbacks, Navbar, Tech, Works, StarsCanvas } from "./components"

const App = () => {
  
  return ( 
  
  <BrowserRouter>

        {/* Main Container  */}
      <div className="relative z-0 bg-primary ">

        {/* Section 1 - Start Navbar, Hero Section */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center ">
          <Navbar/>
          <Hero/>
        </div>
        {/* Section 1 - End Navbar, Hero Section */}

        {/* Section 2 - Start Other Section */}
        <div>
          <About/>
          <Experience/>
          <Tech/>
          <Works/>
          {/* <Feedbacks/> */}
          <div className="relative z-0">
            <Contact/>
            <StarsCanvas/>
          </div>
        </div>
        {/* Section 2 - End Other Section  */}
      </div>
      {/* Main Container - End  */}
    </BrowserRouter>
  )
}

export default App
