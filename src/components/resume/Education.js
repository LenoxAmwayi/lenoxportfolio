import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2023</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Diploma in Computer Science"
            subTitle="Technical University of Mombasa (2021 - 2024)"
            result="3.90/4"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture and vast growing technology."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Sigalame High School(2017 - 2020)"
            result="4.75/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale
            ."
          />
          <ResumeCard
            title="Primary School Education"
            subTitle="Shiongo Primary School (2008 - 2016)"
            result="5.00/5"
            des="Primary education is tertiary education leading to award of an academic certificate that will enable you to proccesed to Secondary school."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer Science Attachee"
            subTitle="Kenya Pipeline Company Limited - (Jan2023 - April2023)"
            result="Mombasa"
            des="•	Network installation, cabling and configuration.
•	Hardware and software preventive maintenance.
•	User software support.
•	Operating system and application (re)installation and (re)configuration.
•	Logging of user problems in the helpdesk system.
•	Data entry in procurement department.
•	Proficiency in Computer Packages (Word, Excel, PowerPoint) and Google Drive (Docs, Sheets, Gmail)
."
          />
          <ResumeCard
            title="Cyber security Intern.(Remote)"
            subTitle="HackerBro Technology - (July2023 -Oct2023)"
            result="Mombasa"
            des="> Google Hacking.
            > Penetration Testing methodology.
            > Red Team Engagement.
            > Active Directory.
            > Bug Hunting.
            > Completed regular vulnerability scans .
            > Audited networks and security systems to identify vulnerabilities.
            > Carried out regular penetration tests on ICT products to ensure systems stayed free
            from security threats and breaches."
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
}

export default Education