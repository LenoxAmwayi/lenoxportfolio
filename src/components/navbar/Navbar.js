import React, { useState } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaGithub, FaLinkedinIn, FaWhatsapp, } from "react-icons/fa";
import {logoo} from "../../assets/index"
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu]=useState(false)
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
      <div>
        <img src={logoo} alt="logoo" />
      </div>
      <div>
        <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-1">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              <Link
                activeClass="active"
                to={link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
        <span
          onClick={() => setShowMenu(!showMenu)}
          className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
        >
          <FiMenu />
        </span>
        {showMenu && (
          <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
            <div className="flex flex-col gap-8 py-2 relative">
              <div>
                <img className="w-32" src={logoo} alt="logoo" />
                <p className="text-sm text-gray-400 mt-2">
                Aspiring Cyber Security Expert, I have pursued Computer Science, i have knowledge in Networking, Ethical Hacking, Cyber Security, Web Application Security, IT support Specialist, and Penetration Testing. I am a dedicated and detail-oriented Computer science professional, possesing a passion for continuous learning, seeking a position in the Computer science, and Cyber Security field to make the most of my skills and experience. Agile and team-oriented individual with excellent communication skills, problem-solving skills, as well as the ability to adapt to changing environments and work processes. I am looking to continue developing my skills and abilities in the growing technology world.
                </p>
              </div>
              <ul className="flex flex-col gap-4">
                {navLinksdata.map((item) => (
                  <li
                    key={item._id}
                    className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                  >
                    <Link
                      onClick={() => setShowMenu(false)}
                      activeClass="active"
                      to={item.link}
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={500}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-4">
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
              <span
                onClick={() => setShowMenu(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
              >
                <MdClose />
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar