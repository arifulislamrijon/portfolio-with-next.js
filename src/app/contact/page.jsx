"use client";
import { useRef } from "react";
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
    const form =useRef();
    const sendEmail=(e)=>{
        e.preventDefault();

        emailjs.sendForm(
              "service_rlbb7kv",
             "template_ov8zih8",
             form.current,
             "h3KXSAk7ru5pi12Cq"
        )
           

             .then(
                (result)=>{
                    alert("Message send successfully");
                    form.current.reset();
                },
                (error)=>{
                    alert("Failed to send message");
                    console.error(error.text);
                }

             )
    }
  return (
    <section className="w-11/12 mx-auto py-12 mt-42" >
      <h2 className="text-3xl font-bold text-center mb-8">Contact Me</h2>

      {/* Contact Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-7">
        <div className="space-y-4 text-xl font-bold sm:p-5 text-gray-700 p-10 mt-6 bg-blue-50 rounded-4xl">
          <div className="flex justify-center items-center gap-3 mt-8">
            <FaEnvelope className="text-blue-600" />
            <a href="mailto:arifulislamrijon34@email.com" className="hover:underline">arifulislamrijon34@email.com</a>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaPhoneAlt className="text-green-600" />
            <span>+880 1892507800</span>
          </div>
          <div className="flex justify-center items-center gap-3">
            <FaMapMarkerAlt className="text-red-500" />
            <span>Dhaka, Bangladesh</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center items-center  gap-4 mt-4 text-2xl">
          <div>
              <a href="https://github.com/arifulislamrijon" className="flex gap-3" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-black" /><p>Github</p>
            </a>
          </div>
           <div>
             <a href="https://linkedin.com/in/arifulislamrijon" className="flex gap-3" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-700" />Linkedin
            </a>
           </div>
          </div>
        </div>

        {/* Contact Form */}
        <form ref={form} onSubmit={sendEmail} className="space-y-5 bg-white p-6 rounded-lg shadow-md">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 p-3 rounded-md"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-3 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* service id = service_rlbb7kv
             template id = template_ov8zih8
             Public Key = h3KXSAk7ru5pi12Cq
        */}
      </div>
    </section>
  );
}
