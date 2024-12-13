import { useRef } from "react";
import emailjs from "@emailjs/browser";
import React from "react";

const Msg = (props) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    props.handleSubmit();
    alert("Mail sent.");

    emailjs
      .sendForm(
        "janeeshrocks", // Service ID
        "template_cqz9uxc", // Template ID
        form.current,
        "z5u06SVWVYN_3fnis" // Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="flex justify-center items-center p-6 bg-gradient-to-r from-blue-50 to-blue-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-xl w-full transition-transform transform hover:scale-105">
        <form ref={form} onSubmit={sendEmail}>
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Contact Us</h2>

          <label className="block text-gray-700 font-semibold mb-1">Your Name</label>
          <input
            type="text"
            name="from_name"
            placeholder="Enter your Name"
            required
            className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 transition duration-300"
          />

          <label className="block text-gray-700 font-semibold mb-1">Phone Number</label>
          <input
            type="tel"
            name="number"
            placeholder="Enter your phone number"
            required
            className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 transition duration-300"
          />

          <label className="block text-gray-700 font-semibold mb-1">Email</label>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your Mail"
            required
            className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 transition duration-300"
          />

          <label className="block text-gray-700 font-semibold mb-1">Company Name</label>
          <input
            type="text"
            name="company_name"
            placeholder="Enter your company name"
            required
            className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 transition duration-300"
          />

          <label className="block text-gray-700 font-semibold mb-1">Message</label>
          <textarea
            name="message"
            required
            className="w-full p-3 mb-4 border rounded-lg border-gray-300 focus:outline-none focus:ring focus:ring-blue-400 transition duration-300"
            placeholder="Write your message here"
            rows="4"
          ></textarea>

          <input
            type="submit"
            value="Send"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-md"
          />
        </form>
      </div>
    </div>
  );
};

export default Msg;
