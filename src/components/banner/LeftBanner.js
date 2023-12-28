import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Network Technician.", "CyberSecurity Aficianado .","Ethical Hacker.", "Technical IT Support.", "Bug Bounty Hunter.", "Web Penetration Tester."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">Whoami.</h4>
        <h1 className="text-6xl font-bold text-white">
           <span className="text-designColor capitalize">LENOX</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Aspiring Cyber Security Expert, I have pursued Computer Science, i have knowledge in Networking, Ethical Hacking, Cyber Security, Web Application Security, IT support Specialist, and Penetration Testing. I am a dedicated and detail-oriented Computer science professional, possesing a passion for continuous learning, seeking a position in the Computer science, and Cyber Security field to make the most of my skills and experience.
        Agile and team-oriented individual with excellent communication skills, problem-solving skills, as well as the ability to adapt to changing environments and work processes. I am looking to continue developing my skills and abilities, thus
enhancing fore security hygiene and Innovation.
        </p>
      </div>
     {/* Media */}
     <Media />
    </div>
  );
}

export default LeftBanner