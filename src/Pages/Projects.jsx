import project_1 from '../assets/project-1.png'
import project_2 from '../assets/project-2.png'
import project_3 from '../assets/project-3.png'
import project_4 from '../assets/project-4.png'
const Projects = () => {
  return (
    <div>
       <h2 className="text-center text-4xl mt-3 mb-4">MY PROJECTS</h2>
       <p className="text-stone-700 text-xl text-center mb-8 ">Recent developments.</p>
    
    <div className='flex justify-between items-center gap-[4%] md:gap-[1%] flex-col lg:flex-row mb-8'>
      {/*  */}
      <div className="flex flex-col border-2  border-stone-300 lg:h-[490px] lg:w-[24%] mb-6 xl:h-[400px] ">
        <div>
        <img src={project_1} alt="" className='h-56  w-full lg:h-40' />
        </div>
      <h2 className='text-lg text-neutral-700  mb-1 ml-2'>Netflix Clone</h2>
       <p className='text-md  text-neutral-700 mb-1 ml-2'>Designed and developed a Netflix clone, scalable web application offering user authentication, movie recommendations, abd a seamless
        viewing experience, leveraging React, Tailwind and Firebase. </p>
        <div className='mb-2 ml-2 mt-2 flex gap-10'>
        <button className=' rounded-lg text-center p-2 text-white bg-green-500' 
          onClick={()=>{window.open("https://github.com/ibrahimadebanjo/netflix-clone", "_blank", "noopener,noreferrer")}}>Github</button>
          <button className='text-center rounded-lg  p-2 text-white bg-green-500'
          onClick={()=>{window.open("https://netflix-clone-sage-eta.vercel.app/login", "_blank", "noopener,noreferrer")}}>Live</button>
        </div>
      </div>
{/*  */}
      {/*  */}
      <div className="flex flex-col border-2  border-stone-300 lg:h-[490px] lg:w-[24%] mb-6 xl:h-[400px]">
        <div>
        <img src={project_2} alt="" className='h-56 w-full lg:h-40' />
        </div>
      <h2 className='text-lg text-neutral-700  mb-1 ml-2'>Fatimo's Portfolio Website</h2>
       <p className='text-md text-neutral-700 mb-1 ml-2'>Designed and developed a professional portfolio website,showcasing
        her skills and Experience with responsive and user-friendly interface,built using HTML, CSS and Bootstrap. </p>
        <div className='mb-2 ml-2  flex gap-10'>
        <button className=' rounded-lg text-center p-2 text-white bg-green-500' 
          onClick={()=>{window.open("https://github.com/ibrahimadebanjo/fatimah-portfolio", "_blank", "noopener,noreferrer")}}>Github</button>
          <button className='text-center rounded-lg  p-2 text-white bg-green-500'
          onClick={()=>{window.open("https://fatimah-portfolio.vercel.app/", "_blank", "noopener,noreferrer")}}>Live</button>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="flex flex-col border-2  border-stone-300 lg:h-[490px] lg:w-[24%] mb-6 xl:h-[400px]">
        <div>
        <img src={project_3} alt="" className='h-56 w-full lg:h-40' />
        </div>
      <h2 className='text-lg text-neutral-700 mt-2 mb-2 ml-2'>Language Translator</h2>
       <p className='text-md mt-2 text-neutral-700 mb-2 ml-2'>Developed a language translator application, enabling users to seamlessly translate texts from one language to another 
        using APIs and Javascript. </p>
        <div className='mb-2 ml-2 mt-2 flex gap-10'>
        <button className=' rounded-lg text-center p-2 text-white bg-green-500' 
          onClick={()=>{window.open("https://github.com/ibrahimadebanjo/javascript-mini-projects/tree/main/language%20translator", "_blank", "noopener,noreferrer")}}>Github</button>
          <button className='text-center rounded-lg  p-2 text-white bg-green-500'
          onClick={()=>{window.open("", "_blank", "noopener,noreferrer")}}>Live</button>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="flex flex-col border-2  border-stone-300 lg:h-[490px] lg:w-[24%] mb-6 xl:h-[400px]">
        <div>
        <img src={project_4} alt="" className='h-56 w-full lg:h-40' />
        </div>
      <h2 className='text-lg text-neutral-700 mt-2 mb-2 ml-2'>Spotify Clone</h2>
       <p className='text-md mt-2 text-neutral-700 mb-2 ml-2'>Developed a Spotify-inspired music streaming platform featuring playlist management,audio playback, songs recommendations e.t.c. using React, Redux and Tailwind. </p>
        <div className='mb-2 ml-2 mt-2 flex gap-10'>
          <button className=' rounded-lg text-center p-2 text-white bg-green-500' 
          onClick={()=>{window.open("https://github.com/Ibrahimadebanjo/react-sportify-clone", "_blank", "noopener,noreferrer")}}>Github</button>
          <button className='text-center rounded-lg  p-2 text-white bg-green-500'
          onClick={()=>{window.open("https://react-sportify-clone.vercel.app/", "_blank", "noopener,noreferrer")}}>Live</button>
        </div>
      </div>
      {/*  */}
      
    </div>
    </div>
  )
}

export default Projects;
