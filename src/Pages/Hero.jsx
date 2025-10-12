import { Link } from "react-router-dom"
import heroImage from "../assets/Learning-bro.svg"
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center  justify-between gap-1" >
      <div className="flex flex-col  ">
        <p className="text-gray-700 mb-2 md:text-xl">Hi, I'm <span className="font-bold text-green-600">Ibrahim Adebanjo</span> a Frontend Software Developer and  Veterinary Medical Student.</p>
      <p className="text-sm md:text-lg mb-2">Welcome to my portfolio I'm Ibrahim Adebanjo,a passionate Software developer and aspiring ML engineer with the drive for Crafting engaging and intuitive web applications using emerging tools like (React, tailwind and Next). My unique background help me approach challenges with
         creativity and perception, whether I'm building user-friendly digital experiences or solving real world problems in Veterinary Medicine </p>
      <div className="flex justify-between md:justify-start  items-center mt-4 gap-12  ">
        <Link className="bg-green-100   p-3 rounded-md text-gray-700" to="/contact">HireMe</Link>
      <Link  className="border-green-500 border-2 mr-12 p-2 rounded-md text-gray-700" to="/experience">Portfolio</Link>
    </div>
    <div className="flex justify-start items-center mt-4  cursor-pointer ">
    <i className='bx bxl-typescript  text-green-400 text-2xl md:text-4xl cursor-pointer '></i>
    <i className='bx bxl-react text-green-500 text-2xl md:text-4xl cursor-pointer'></i>
    <i className='bx bxl-tailwind-css text-green-500 text-2xl md:text-4xl cursor-pointer'></i>
    <i className='bx bxl-vuejs text-green-500 text-2xl md:text-4xl cursor-pointer'></i>
    <i className='bx bxl-redux text-green-500 text-2xl md:text-4xl cursor-pointer'></i>
    <i className='bx bxl-github text-green-500 text-2xl md:text-4xl cursor-pointer'></i>
    <i className='bx bxl-git  text-green-500 text-2xl md:text-4xl cursor-pointer'></i>
    <i className='bx bxl-javascript text-green-500 text-2xl md:text-4xl cursor-pointer'></i>
    <i className='bx bxl-angular text-green-500 text-2xl md:text-4xl cursor-pointer'></i>

    </div>
      </div>
    <img className="md:w-[55%] " src={heroImage} alt="" />
    
    </div>
  )
}

export default Hero
