import { useState } from "react"
import { NavLink } from "react-router-dom"
import ivsa_logo from "../assets/ivsa-logo.jpg"
const Navbar = () => {


    const [visible, setVisible] = useState(false)
  return (

    <div className="flex py-4 items-center justify-between ">
      <div className="flex items-center gap-2">      
    <img src={ivsa_logo} alt="" className="h-10 w-10" /> 
    <h2 className="text-blue-800 text-lg font-bold">IVSA ABU-ZARIA</h2>
        </div> 
    <ul className=" hidden md:flex items-center  sm:flex gap-3 text-sm text-blue-700">
       <NavLink to={"/"} className=" flex flex-col  items-center gap-1">
        <p >HERO</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink> 
        
        <NavLink to={"/about"} className=" flex flex-col  items-center gap-1">
        <p >ABOUT</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>  
        <NavLink to={"/events"} className=" flex flex-col  items-center gap-1">
        <p >EVENTS</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/teams"} className=" flex flex-col  items-center gap-1">
        <p > TEAM</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>
        <NavLink to={"/contact"} className=" flex flex-col  items-center gap-1">
        <p >CONTACT</p>
        <hr className="w-3/4 border-none h-[1.5px] bg-gray-700 hidden" />
        </NavLink>  
    </ul>
    
    <i onClick={() => {setVisible(true)}} className='bx bx-menu-alt-right sm:hidden font-bold text-2xl cursor-pointer'></i>


    <div className={`absolute top-0 bottom-0 overflow-hidden bg-white z-50 transition-all ${visible ? 'w-full' : "w-0"}`}>
   <div className='flex flex-col text-gray-600 '>
<div onClick={()=> {setVisible(false)}} className="cursor-pointer flex items-center gap-4 p-3">
<i className='bx bx-left-arrow-alt text-2xl font-bold '></i>
<p className="text-green-800">Back</p>
</div>

<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800"  to={"/"} >HERO</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/about"} >ABOUT</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/events"} >EVENTS</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/teams"} >TEAMS</NavLink>
<NavLink onClick={() => {setVisible(false)}} className="py-2 pl-6 cursor-pointer hover:text-green-800" to={"/contact"} >CONTACT</NavLink>


   </div>
        </div>
    </div>
  )
}

export default Navbar;