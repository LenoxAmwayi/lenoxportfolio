import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY BLOG APP AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="HackGuard"
          des=" A vulnerability scanning tool designed to identify and assess potential vulnerabilities within a computer system, network, or application. These tool play a crucial role in cybersecurity by helping organizations proactively identify weaknesses in their IT infrastructure before malicious actors can exploit them."
          src={projectOne}
        />
        <ProjectsCard
          title="MERN Blog App"
          des="A blog app involves creating a platform where users can create, read, update, and delete blog posts. A blog is a type of website or online platform where individuals or organizations regularly post articles, opinions, updates, or other informational content, typically displayed in reverse chronological order. A blog app streamlines the process of creating and managing blog posts."
          src={projectTwo}
        />
        <ProjectsCard
          title="Honeypot"
          des=" A honeypot in the context of computer security refers to a deceptive or attractive target set up to detect, deflect, or study unauthorized access, use, or exploitation of information systems."
          src={projectThree}
        />
        
        
      </div>
    </section>
  );
}

export default Projects