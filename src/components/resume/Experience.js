import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023- 2024</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cyber security Intern.(Remote)"
            subTitle="HackerBro Technology - (July2023 -Oct2023)"
            result="Mombasa"
            des="> Google Hacking. > Penetration Testing methodology. > Red Team Engagement. > Active Directory. > Bug Hunting. > Completed regular vulnerability scans . > Audited networks and security systems to identify vulnerabilities. > Carried out regular penetration tests on ICT products to ensure systems stayed free from security threats and breaches."
          />
          <ResumeCard
            title="Computer Science Attachee"
            subTitle="Kenya Pipeline Company Limited - (Jan2023 - April2023)"
            result="Mombasa"
            des="• Network installation, cabling and configuration. • Hardware and software preventive maintenance. • User software support. • Operating system and application (re)installation and (re)configuration. • Logging of user problems in the helpdesk system. • Data entry in procurement department. • Proficiency in Computer Packages (Word, Excel, PowerPoint) and Google Drive (Docs, Sheets, Gmail)."
          />
          <ResumeCard
            title="Penetration Testing"
            subTitle="TryHackMe - (June2023 - Present)"
            result="Mombasa"
            des="I am currently continuous learning, solving real world scenarios, and gaining more skills e.g problem-solving skills, Penetration Testing through the platform."
          />
        </div>
      </div>
     
    </motion.div>
  );
};

export default Experience;
