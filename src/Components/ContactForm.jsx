import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData, // keep existing fields
      [e.target.name]: e.target.value, // update the changed field
    });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thanks for reaching out!");
  };

  return (
    <div className=" bg-white">
      <h2 className=" mt-4 text-2xl font-semibold mb-3 text-blue-800">
        GET IN TOUCH
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4 min-w-full  ">
        {/* Name */}
        <div className="flex gap-3 ">
        <div>
          <label className="block text-gray-700 mb-1">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
        
          />
        </div>

        {/* Email */}
        <div>
          <label className="block text-gray-700 mb-1">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-2 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
            required
          />
        </div>
</div>
        {/* Message */}
        <div>
          <label className="block text-gray-700 mb-1">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your message..."
            rows="4"
            className="w-full border border-gray-300 p-2 md:h-80 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none resize-none"
            required
          ></textarea>
        </div>
         <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
