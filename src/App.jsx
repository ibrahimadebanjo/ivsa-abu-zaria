import { Route, Routes } from "react-router-dom"
import Navbar from "./Components/Navbar"
import Hero from "./Pages/Hero"
import About from "./Pages/About"
// import Testimonials from "./Pages/Testimonials"
import Contact from "./Pages/Contact"
import Teams from "./Pages/Teams"
import Events from "./Pages/Events"

function App() {
  return (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vm]">
<Navbar/>
<Routes>
  <Route path="/"  element={<Hero/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/events" element={<Events/>}/>
  <Route path="/teams" element={<Teams/>}/>
  {/* <Route path="/about" element={<Testimonials/>}/> */}
  <Route path="/contact" element={<Contact/>}/>
</Routes>
{/* <Footer/> */}
  </div>
  )
}

export default App
