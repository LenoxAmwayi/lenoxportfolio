import React from 'react'
import {  FaLinkedinIn, FaGithub, FaMailBulk } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Lenox</h3>
        <p className="text-lg font-normal text-gray-400">
        A CyberSecurity Enthusiast. 
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I am an individual who has a keen interest and passion for cybersecurity.
        Often self-motivated to learn about various aspects of cybersecurity, including but not limited to network security, ethical hacking, cryptography, incident response, and more. 
        I also engage in activities such as self-study, participating in online forums and communities, attending cybersecurity events, and experimenting with different security tools and techniques to acquire industry-based skills.
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+254 799075857<br></br>
          <span className="text-lightText">+254 707733580</span>
          
          </span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">cyberhat001@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Contact Me in</h2>
        <div className="flex gap-4">
        <a href="mailto:cyberhat001@gmail.com" target="_blank">
          <span className="bannerIcon">
            <FaMailBulk />
          </span>
          </a>
          <a href="https://github.com/LenoxAmwayi" target="_blank">
          <span className="bannerIcon">
            <FaGithub />
          </span>
          </a>
          <a href="https://www.linkedin.com/in/lenox-amwayi" target="_blank">
          <span className="bannerIcon">
            <FaLinkedinIn />
          </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft