import { useState } from "react"
import { NavLink } from "react-router-dom"

const Navbar = () => {


    const [visible, setVisible] = useState(false)
  return (
  
    <div className="flex py-4 items-center justify-between ">
       
    <h4><span className="text-green-600">IBRAHIM</span>  ADEBANJO</h4> 
    <ul className=" hidden md:flex items-center  sm:flex gap-3 text-sm text-gray-700">
       <NavLink to={"/"} className=" flex flex-col  items-center gap-1">
        <p >HERO</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> 
        
        <NavLink to={"/about"} className=" flex flex-col text-gray-700 items-center gap-1">
        <p >ABOUT</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> 
        <NavLink to={"/skills"} className=" flex flex-col  items-center gap-1">
        <p >SKILLS</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> 
        <NavLink to={"/services"} className=" flex flex-col  items-center gap-1">
        <p >SERVICES</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/projects"} className=" flex flex-col  items-center gap-1">
        <p >PROJECTS</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/experience"} className=" flex flex-col  items-center gap-1">
        <p >EXPERIENCE</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className=" flex flex-col  items-center gap-1">
        <p >CONTACT</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>  
    </ul>
    
    <i onClick={() => {setVisible(true)}} className='bx bx-menu-alt-right sm:hidden font-bold text-2xl cursor-pointer'></i>


    <div className={`absolute top-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : "w-0"}`}>
   <div className='flex flex-col text-gray-600 '>
<div onClick={()=> {setVisible(false)}} className="cursor-pointer flex items-center gap-4 p-3">
<i className='bx bx-left-arrow-alt text-2xl font-bold '></i>
<p className="text-green-800">Back</p>
</div>

<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/"} >HERO</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/about"} >ABOUT</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/skills"} >SKILLS</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/services"} >SERVICES</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/projects"} >PROJECTS</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/experience"} >EXPERIENCE</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/contact"} >CONTACT</NavLink>


   </div>
        </div>
    </div>
  )
}

export default Navbar;