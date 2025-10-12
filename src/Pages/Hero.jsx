import { Link } from "react-router-dom"
import heroImage from "../assets/members.jpg"
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  justify-between gap-4 mb-4" >


      <div className="flex flex-col  ">
        <h1 className="text-3xl text-blue-500 font-mono mt-6 mb-6">INTERNATIONAL VETERINARY STUDENT ASSOCIATION </h1>
        <h2 className="text-2xl text-blue-400 mb-4">ABU ZARIA CHAPTER</h2>

        <p className="text-xl text-slate-600 mb-2">Empowering Next Generation of Veterinarians </p>
        <p className="text-lg text-slate-500">Welcome to IVSA ABU ZARIA, a Vibrant community of Veterinary Medical Students Dedicated Promoting Excellence in Veterinary Medicine through Animal Health, Public Welfare, Collaboration and Community Service. </p>
        <div className="flex justify-between md:justify-start  items-center mt-4 gap-6  ">
          <Link className="bg-blue-500   p-2 rounded-md text-slate-100" to="/contact">Join Now</Link>
          <Link className="border-blue-500 border-2 mr-12 p-2 rounded-md text-gray-700" to="/experience">Learn More</Link>
        </div>
        <div className="mt-5 font-sans">
          <h3 className="text-slate-600 mb-2 text-lg">QUICK STATS </h3>
          <h4 className="text-slate-500"><span className="text-blue-700 text-xl">120+</span> Members</h4>
          <h4 className="text-slate-500"><span className="text-blue-700 text-xl ">15+</span> Anual Events</h4>
          <h4 className="text-slate-500"><span className="text-blue-700 text-xl " >20+</span> Partner Organizations</h4>
        </div>
        <div>
          <h3  className="text-slate-600 mb-2 mt-4 text-lg" >FOLLOW US</h3>
          <div className="flex">
        <i onClick={()=>{window.open("https://x.com/AdebanjoIbrahi9", "_blank", "noopener,noreferrer")}} className='bx bxl-twitter text-4xl text-blue-400 cursor-pointer' ></i>
        <i onClick={()=>{window.open("https://x.com/AdebanjoIbrahi9", "_blank", "noopener,noreferrer")}} className='bx bxl-instagram text-4xl text-blue-400 cursor-pointer' ></i>
        <i onClick={()=>{window.open("https://x.com/AdebanjoIbrahi9", "_blank", "noopener,noreferrer")}} className='bx bxl-linkedin text-4xl text-blue-400 cursor-pointer' ></i>
        <i onClick={()=>{window.open("https://x.com/AdebanjoIbrahi9", "_blank", "noopener,noreferrer")}} className='bx bxl-whatsapp text-4xl text-blue-400 cursor-pointer' ></i>
          </div>
        </div>
      </div>


      <div className=" ">

        <img className="mb-3 border rounded-lg" src={heroImage} alt="" />

        <div>
          <h4 className="text-xl text-slate-500 mb-2">Upcoming Event</h4>
          <div className="flex gap-3 font-sans ">
            <div className="bg-blue-100 p-3 pb-5 text-slate-600 border border-blue-600">
              <h3 className="mb-1 text-blue-800">World Anitmicrobial Awareness Week 2025(WAAW)</h3>
              <p>Date: 18/11/2025 - 24/11/2025</p>
              <p className="mb-3">Location: </p>
              <Link className="bg-blue-500 p-2 rounded-md text-slate-100" to="/contact">Learn More</Link>
            </div>

            <div className="bg-blue-100 p-3 pb-5 text-slate-600 border border-blue-600">
<h4 className="text-blue-800">Notice:</h4>
<p className="mb-2">Membership Registration Open</p>
<p className="mb-3">Date: November - January</p>
<Link className="bg-blue-500 p-2 rounded-md text-slate-100" to="/contact">Register Now</Link>

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero
