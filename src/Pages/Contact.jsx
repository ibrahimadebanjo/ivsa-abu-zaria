import { Manipulation } from "swiper/modules"
import FaqAccordion from "../Components/FaqAcccordion"
import MapEmbed from "../Components/Map"
import ContactForm from "../Components/ContactForm"
const Contact = () => {
  return (
    
   <div className="mb-6">
    <h2 className="text-blue-600 text-center text-2xl">CONTACT US</h2>
    <div className="flex flex-col md:flex-row gap-5">
<div>
  <div>
<FaqAccordion/>
  </div>
  <div>
    <MapEmbed/>
  </div>
</div>

<div className=" flex flex-col ">
 <ContactForm/>
 <h2 className="text-lg text-blue-600 mt-2">Contact Info</h2>
 <h4 className="font-sans text-slate-800">Location</h4>
<p className="font-sans text-slate-500">Faculyt of Veterinary Medicine </p>
<p className="font-sans text-slate-500"> Ahmadu Bello University, Zaria</p>
<p className="font-sans text-slate-500" ><span>Email:</span>ivsanigeria.abu@ivsamo.org</p>
<h4 className="font-sans text-slate-800 mt-1">Social Media</h4>
<div className="flex">
           <i onClick={()=>{window.open("https://x.com/IvsaAbu?t=dqEMU1ClPZEEB9ZmekUdRg&s=09", "_blank", "noopener,noreferrer")}} className='bx bxl-twitter text-4xl text-blue-400 cursor-pointer' ></i>
        <i onClick={()=>{window.open("https://www.instagram.com/ivsaabu_zaria/?igsh=Z2Q4dzBjMmJ0NGJ2&utm_source=qr#", "_blank", "noopener,noreferrer")}} className='bx bxl-instagram text-4xl text-blue-400 cursor-pointer' ></i>
        <i onClick={()=>{window.open("https://www.linkedin.com/company/ivsa-abu-zaria/", "_blank", "noopener,noreferrer")}} className='bx bxl-linkedin text-4xl text-blue-400 cursor-pointer' ></i>  </div>
</div>
    </div>
   </div>
  )
}

export default Contact