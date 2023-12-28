import React from 'react'
import { FaGithub, FaWhatsapp, FaLinkedinIn, FaSchool,FaHackerrank, FaNetworkWired } from "react-icons/fa";
import {  SiOpenbugbounty } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
          <a href="https://github.com/LenoxAmwayi" target="_blank">
            <span className="bannerIcon">
              <FaGithub />
            </span>
            </a>
            <a href="https://wa.me/+254799075857" target="_blank">
            <span className="bannerIcon">
              <FaWhatsapp />
            </span>
            </a>
            <a href="https://www.linkedin.com/in/lenox-amwayi" target="_blank">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
            </a>
          </div>
        </div>
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <SiOpenbugbounty/>
            </span>
            <span className="bannerIcon">
              <FaNetworkWired />
            </span>
            <span className="bannerIcon">
              <FaHackerrank />
            </span>
            <span className="bannerIcon">
              <FaSchool/>
            </span>

          </div>
        </div>
      </div>
  )
}

export default Media