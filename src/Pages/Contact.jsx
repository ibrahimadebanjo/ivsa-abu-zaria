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
<p className="mt-2 font-sans text-slate-500"><span>Phone:</span>+2348152454812</p>
<p className="font-sans text-slate-500" ><span>Email:</span>ivsaabuzaria@gmail.com</p>
<h4 className="font-sans text-slate-800 mt-1">Social Media</h4>
<div className="flex">
        <i onClick={()=>{window.open("https://x.com/AdebanjoIbrahi9", "_blank", "noopener,noreferrer")}} className='bx bxl-twitter text-4xl text-blue-400 cursor-pointer' ></i>
        <i onClick={()=>{window.open("https://x.com/AdebanjoIbrahi9", "_blank", "noopener,noreferrer")}} className='bx bxl-linkedin text-4xl text-blue-400 cursor-pointer' ></i>
        <i onClick={()=>{window.open("https://x.com/AdebanjoIbrahi9", "_blank", "noopener,noreferrer")}} className='bx bxl-instagram text-4xl text-blue-400 cursor-pointer' ></i>
        <i onClick={()=>{window.open("https://x.com/AdebanjoIbrahi9", "_blank", "noopener,noreferrer")}} className='bx bxl-whatsapp text-4xl text-blue-400 cursor-pointer' ></i>
          </div>
</div>
    </div>
   </div>
  )
}

export default Contact