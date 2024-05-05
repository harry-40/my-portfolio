import React from 'react';
const ContactForm = () => {


  return (
    <form  className="w-15 ml-16 mr-16   p-12 rounded-lg shadow-md text-white">
      
      <h1 className='text-4xl py-3'> Contact me</h1>
      
      <div className="mb-5  ">
        <label htmlFor="name" className="block font-bold ">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          className="w-full  py-3 rounded-md  bg-gray-700"
          placeholder="Your Name"
          required
        />
      </div>
      <div className="mb-5">
        <label htmlFor="email" className="block font-bold">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full  py-3 rounded-md  bg-gray-700"
          placeholder="Your Email"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="mobile" className="block font-bold">Mobile Number</label>
        <input
          type="tel"
          id="mobile"
          name="mobile"
          className="w-full  py-3 rounded-md bg-gray-700  "
          placeholder="Your Mobile Number"
          required
        />
      </div>
      <div className="mb-6">
        <label htmlFor="message" className="block font-bold">Message</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full  py-3 rounded-md  bg-gray-700"
          placeholder="Your Message"
          required
        ></textarea>
      </div>
      <div className="text-center">
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Send Message</button>
      </div>
    </form>
  );
};

export default ContactForm;
