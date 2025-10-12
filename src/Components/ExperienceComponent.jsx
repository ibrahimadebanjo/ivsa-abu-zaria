
import { AppContext } from '../Context/Context'
import { useContext } from 'react'
import abuImage from '../assets/abu-image.png'
import ileseImage from '../assets/Ilese-comp.jpg'
import yic from '../assets/YIC-logo.jfif'
import codeSmith from '../assets/codesmith.ico'
import alx from '../assets/alx.jpg'
import fcda from '../assets/fcta.png'
const ExperienceComponent = () => {
    const { experience } = useContext(AppContext);
  return (
    <div>
    <h2 className="text-center text-4xl mt-3 mb-4">EXPERIENCE</h2>
        <p className="text-stone-700 text-xl text-center mb-8 ">My Professional Experience. </p>
       
<div className="flex  justify-between items-center flex-col md:flex-row gap-[2%] mb-8">
{/* first row */}
<div className="flex flex-col md:w-[49%] ">

  <h1 className='text-neutral-600 mb-6 ml-4 '>Education/Experience</h1>
{/*  */}
<div className="flex gap-3">
  <div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full">
<img src={ileseImage} className="" alt="" />
</div>
<div className="h-full w-[2px] bg-slate-300 "></div>
</div>

<div className=" bg-slate-200 p-3 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold text-green-600'>{experience.ilese.date}</p>
<h3 className='text-[18px] font-semibold  text-green-600'>{experience.ilese.name}</h3>
<p className='text-[14px]'>{experience.ilese.desc}</p>
</div>
</div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
  <div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full">
<img src={abuImage} className="" alt="" />
</div>
<div className="h-full w-[2px] bg-slate-300"></div>
</div>

<div className=" bg-slate-200   p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold  text-green-600'>{experience.abu.date}</p>
<h3 className='text-[18px] font-semibold  text-green-600 '>{experience.abu.name}</h3>
<p className='text-[14px]'>{experience.abu.desc}</p>
</div>
</div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
  <div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full">
<img src={yic} className="" alt="" />
</div>
<div className="h-full w-[2px] bg-slate-300 "></div>
</div>

<div className="bg-slate-200   p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold text-green-500'>{experience.code4you.date}</p>
<h3 className='text-[18px] font-semibold text-green-500'>{experience.code4you.name}</h3>
<p className='text-[14px]'>{experience.code4you.desc}</p>
</div>
</div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
  <div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full">
<img src={alx} className="" alt="" />
</div>
<div className="h-full w-[2px] bg-slate-300 "></div>
</div>

<div className=" bg-slate-200   p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold text-green-500'>{experience.alxpf.date}</p>
<h3 className='text-[18px] font-semibold text-green-500 '>{experience.alxpf.name}</h3>
<p className='text-[14px]'>{experience.alxpf.desc}</p>
</div>
</div>
</div>
{/*  */}

</div>
  {/* second row */}
  <div className="flex flex-col md:w-[49%] h-auto">

  <h1 className='text-neutral-600 mb-6 ml-4 mt-10 md:mt-0'>Education/Experience</h1>
{/*  */}
<div className="flex gap-3">
  <div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full">
<img src={codeSmith} className="" alt="" />
</div>
<div className="h-full w-[2px] bg-slate-300 "></div>
</div>

<div className=" bg-slate-200   p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold text-green-500'>{experience.codesmith.date}</p>
<h3 className='text-[18px] font-semibold text-green-500 '>{experience.codesmith.name}</h3>
<p className='text-[14px]'>{experience.codesmith.desc}</p>
</div>
</div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
  <div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full">
<img src={alx} className="" alt="" />
</div>
<div className="h-full w-[2px] bg-slate-300  "></div>
</div>

<div className=" bg-slate-200  p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold text-green-500'>{experience.aice.date}</p>
<h3 className='text-[18px] font-semibold text-green-500 '>{experience.aice.name}</h3>
<p className='text-[14px]'>{experience.aice.desc}</p>
</div>
</div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
  <div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full">
<img src={alx} className="" alt="" />
</div>
<div className="h-full w-[2px] bg-slate-300  "></div>
</div>

<div className=" bg-slate-200  p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold text-green-500'>{experience.alxfe.date}</p>
<h3 className='text-[18px] font-semibold text-green-500'>{experience.alxfe.name}</h3>
<p className='text-[14px]'>{experience.alxfe.desc}</p>
</div>
</div>
</div>
{/*  */}

{/*  */}
<div className="flex gap-3">
  <div className="flex flex-col items-center">
<div className="w-8 h-8 rounded-full">
<img src={fcda} className="" alt="" />
</div>
<div className="h-full w-[2px] bg-slate-300  "></div>
</div>

<div className=" bg-slate-200  p-3 mt-2 rounded-md">
<div className="flex flex-col ">
<p className='text-sm text font-bold text-green-500 '>{experience.fcda.date}</p>
<h3 className='text-[18px] font-semibold text-green-500 '>{experience.fcda.name}</h3>
<p className='text-[14px]'>{experience.fcda.desc}</p>
</div>
</div>
</div>
{/*  */}

</div>

</div>
</div>
  )
}
  

export default ExperienceComponent;
