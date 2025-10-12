
const Footer = () => {
  return (
    <div className=" footer text-blue-800 w-[100%] ">
      <div className="footer-grid mb-4">
        <div className="flex items-center justify-start gap-2 mb-3 ">
        <i onClick={()=>{window.open("https://www.linkedin.com/in/ibrahim-adebanjo/", "_blank", "noopener,noreferrer")}} className='bx bxl-linkedin text-2xl md:text-3xl text-green-600 rounded-2xl border-2 cursor-pointer' ></i>
         <p className="text-sm md:text-xl">LinkedIn</p>
        </div>
        <div className="flex items-center justify-start gap-2 mb-3">
        <i onClick={()=>{window.open("https://www.instagram.com/codescientist30/", "_blank", "noopener,noreferrer")}} className='bx bxl-instagram text-2xl md:text-3xl text-green-600 rounded-2xl border-2 cursor-pointer' ></i>
         <p className="text-sm md:text-xl">Instagram</p>
        </div>
        <div className="flex items-center justify-start gap-2 mb-3">
        <i onClick={()=>{window.open("https://x.com/AdebanjoIbrahi9", "_blank", "noopener,noreferrer")}} className='bx bxl-twitter text-2xl md:text-3xl  text-green-600 rounded-2xl border-2 cursor-pointer' ></i>
         <p className="text-sm md:text-xl">Twitter</p>
        </div>
        <div className="flex items-center justify-start gap-2">
        <i onClick={()=>{window.open("https://www.linkedin.com/in/ibrahim-adebanjo/", "_blank", "noopener,noreferrer")}} className='bx bxl-blogger text-2xl md:text-3xl text-green-600 rounded-2xl border-2 cursor-pointer' ></i>
         <p className="text-sm md:text-xl">Blog</p>
        </div>
        <div className="flex items-center justify-start gap-2">
        <i onClick={()=>{window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ibrahimadebanjo2443@gmail.com", "_blank", "noopener,noreferrer")}} className='bx bxl-gmail text-2xl md:text-3xl  text-green-600 rounded-2xl border-2 cursor-pointer' ></i>
         <p className="text-sm md:text-xl">Email</p>
        </div>
        <div className="flex items-center justify-start gap-2">
        <i onClick={()=>{window.open("https://wa.link/q2m9up", "_blank", "noopener,noreferrer")}} className='bx bxl-whatsapp text-2xl md:text-3xl text-green-600 rounded-2xl border-2 cursor-pointer' ></i>
         <p className="text-sm md:text-xl"> Whatsapp</p>
        </div>
      
      </div>
    </div>
  )
}

export default Footer
