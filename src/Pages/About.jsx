import { Link } from "react-router-dom"
import aboutImage from "../assets/Self confidence-bro.svg"
const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center">
      <img className="w-auto md:w-[55%] h-full" src={aboutImage} alt="" />
      <div className="flex flex-col">
        <div className="mb-10">
<h1 className="text-green-500 text-2xl ">ABOUT ME</h1>
<hr  />
        </div>
  <h2 className="text-xl mb-4  ">INTRODUCTION</h2>
<p className="text-neutral-600 mb-4">Hi I am <span className="text-green-500">Ibrahim Adebanjo</span>, a Software  developer and a Veterinary Medical Student passionate about solving problems and creating impactful solutions. I specialize in 
  building intuitive web applications using technologies like React, Tailwind e.t.c, with a focus on seamless user experiences. </p>

<p className="text-neutral-600 mb-4">I am also expanding my expertise into ML/AI Engineering to become more versatile software professional. My background in Veterinary Medicine enhances my analytical thinking and attention to detail skills i bring into both
  development and testing.
</p>

<p className="text-neutral-600 mb-4">I'm driven by curiosity and the desire to learn, and I'm excited to collaborate on innovative projects that make a difference.</p>
     
    <div className="flex mb-4 items-center justify-start">
    <button onClick={()=>{window.open("https://drive.google.com/file/d/1HLGzUsd7lcsOf3gMxCBWb828D0KROAka/view?usp=drive_link", "_blank", "noopener,noreferrer")}} className="bg-green-100 mr-12  p-3 rounded-3xl text-gray-700">Download CV</button>
      <Link className="border-green-500 border-2 mr-12 p-2 rounded-3xl text-gray-700" to="/contact" >Hire Me</Link>
      </div> 
      </div>
    </div>
  )
}

export default About