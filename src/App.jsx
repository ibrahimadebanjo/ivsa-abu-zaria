import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Hero from "./Pages/Hero"
import About from "./Pages/About"
import Skills from "./Pages/Skills"
import Experience from "./Pages/Experience"
// import Testimonials from "./Pages/Testimonials"
import Contact from "./Pages/Contact"
import Footer from "./Pages/Footer"
import Projects from "./Pages/Projects"
import Services from "./Pages/Services"

function App() {
  return (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vm]">
<Navbar/>
<Routes>
  <Route path="/"  element={<Hero/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/skills" element={<Skills/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/projects" element={<Projects/>}/>
  <Route path="/experience" element={<Experience/>}/>
  {/* <Route path="/about" element={<Testimonials/>}/> */}
  <Route path="/contact" element={<Contact/>}/>
</Routes>
<Footer/>
  </div>
  )
}

export default App
