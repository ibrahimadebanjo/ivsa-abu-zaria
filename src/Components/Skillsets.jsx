
import { useContext } from "react"
import { AppContext } from "../Context/Context"
import next from "../assets/nextjs-icon-512x512-y563b8iq.png"
import material from "../assets/material-ui.svg"
const Skillsets = () => {
  const {tools, framework} = useContext(AppContext)
    return (
      <div className="mb-10">
       <h2 className="text-center  text-stone-600 mt-4 mb-4 text-4xl"> MY SKILLS</h2>
       <p className="text-stone-700 text-xl text-center mb-8" >The key Skills/ Technologies I use for my Projects. </p>

       <div className="flex flex-col gap-3 items-center">
 <h3 className="text-2xl  text-stone-400 font-bold">Frameworks/Library </h3>
 <div className="flex flex-wrap gap-4 justify-center items-center">
       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={framework.tailwind}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={framework.react}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={framework.bootstrap}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <img src={next} alt="" className="w-[110px] h-[110px] p-2" />

        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={framework.vue}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={framework.redux}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <img src={material} alt="" className="w-[110px] h-[110px] p-2" />
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={framework.angular}></i>
        </div>

       </div>
       
       </div>
       </div>
{/*  */}

<div className="flex flex-col gap-3 items-center mt-9">
 <h3 className="text-2xl  text-stone-400 font-bold">LANGUAGES/TOOLS </h3>
 <div className="flex flex-wrap gap-4 justify-center items-center">
       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={tools.git}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={tools.github}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={tools.firebase}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={tools.html}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={tools.node}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={tools.javascript}></i>
        </div>

       </div>

       <div className="flex justify-between gap-6 md:flex-wrap">
        <div className="border-2  border-green-200 text-center">
        <i className={tools.css}></i>
        </div>

        <div className="border-2  border-green-200 text-center">
        <i className={tools.typescript}></i>
        </div>

       </div>
       
       </div>
       </div>

    </div>
    )
  }
  export default Skillsets;