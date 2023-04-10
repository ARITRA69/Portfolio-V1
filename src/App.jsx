import { BrowserRouter } from "react-router-dom"

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from './components'

const App = () => {
  
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#206484]">
        <a href="https://www.canva.com/design/DAFave5TOxE/8n8DFrmfcjImN_xKDVCozA/view?utm_content=DAFave5TOxE&utm_campaign=designshare&utm_medium=link&utm_source=homepage_design_menu" target="_blank">
          <button class="fixed bottom-4 right-4 bg-[#0f2531] hover:bg-[#193f53] transition-all duration-300 text-white py-3 px-6 rounded-lg shadow-lg z-10 justify-between">
            View My CV
          </button>
        </a>
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar/>
          <Hero/>
        </div>
        <About/>
        <Experience/>
        <Tech/>
        <Works/>
        <div className="relative z-0">
          <Contact/>
          <StarsCanvas/>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
