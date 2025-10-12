import questionBro from "../assets/Questions-bro.svg"
const Contact = () => {
  return (
    <div>
     <h2 className="text-center  text-stone-600  mb-2 text-4xl">CONTACT ME</h2>
     <p className=" text-stone-700 text-xl text-center mb-2">Collaboration Station.</p>
    <div className="flex justify-center items-center lg:gap-5 flex-col md:flex-row mb-8">
      <img className="md:w-[55%] " src={questionBro} alt="" />
      <div className="w-full h-auto bg-green-100 flex ">
        <div className="flex flex-col">

<div className="flex flex-col">
  <div className="flex justify-start items-center ml-3 gap-3">
  <i className="bx bx-phone rounded-3xl cursor-pointer text-green-600 p-1  border-2 border-white  text-4xl mt-4"></i>
<div className="flex flex-col mt-4">
<h2 className="text-stone-700">Phone</h2>
<p className="text-stone-700">+2348134390992</p>
</div>
  </div>

  <div className="flex justify-start items-center ml-3 gap-3">
  <i onClick={()=>{window.open("https://wa.link/q2m9up", "_blank", "noopener,noreferrer")}} className="bx bxl-whatsapp rounded-3xl cursor-pointer text-green-600 p-1  border-2 border-white  text-4xl mt-4"></i>
<div className="flex flex-col mt-4">
<h2 className="text-stone-700">Whatsapp</h2>
<p className="text-stone-700">+2348158310258</p>
</div>
  </div>

  <div className="flex justify-start items-center ml-3 gap-3">
  <i onClick={()=>{window.open("https://mail.google.com/mail/?view=cm&fs=1&to=ibrahimadebanjo2443@gmail.com", "_blank", "noopener,noreferrer")}}   className="bx bxl-gmail rounded-3xl cursor-pointer text-green-600 p-1  border-2 border-white  text-4xl mt-4"></i>
<div className="flex flex-col mt-4">
<h2 className="text-stone-700">Gmail</h2>
<p className="text-stone-700">ibrahimadebanjo283@gmail.com</p>
</div>
  </div>

  <div className="flex justify-start items-center ml-3 gap-3">
  <i className="bx bx-current-location rounded-3xl cursor-pointer text-green-600 p-1  border-2 border-white  text-4xl mt-4"></i>
<div className="flex flex-col mt-4">
<h2 className="text-stone-700">Location</h2>
<p className="text-stone-700">Abuja/Zaria/Remote</p>
</div>
  </div>
</div>

<div className="flex flex-col">
<p className="text-stone-700 text-sm ml-4 mt-4 mb-2">Ready to collaborate? Send me a message 
  and let's get started.</p>
<div className="flex flex-col ml-3 mr-4">
<p className="text-lg text-stone-600" >Your Gmail</p>
<input type="email" placeholder=" johndoe@gmail.com" className="outline-none p-2 text-green-700"  />
</div>

<div className="flex flex-col m-4 ml-3">
<p className="text-lg text-stone-600"  >Your Message</p>
<textarea name="" id="textarea"   rows="3" placeholder=" Your Message" className=" w-full outline-none p-2 text-green-700"  >

</textarea>
<button className="bg-green-500 text-white text-xl w-24 p-1 rounded-md mt-3">Send <i className="bx bx-send cursor-pointer text-lg "></i>
</button>
</div>

</div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Contact