import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-4xl font-bold">Awards</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cybersecurity trophy and Certificate."
            subTitle="Communication Authority of Kenya partnership with Huawei."
            result="Success"
            des="Achieved Cybersecurity trophy and certificate from Communication Authority of Kenya
            partnership with Huawei for participating in Cybersecurity and Hackathon Competition
            up to nationals."
          />
          <ResumeCard
            title="Ethical Hacking Essential Certificate."
            subTitle="EC-Council."
            result="Success"
            des="Ethical hacking, also known as penetration testing or white-hat hacking, involves
            authorized professionals assessing and identifying vulnerabilities in computer systems,
            networks, or applications. The goal is to discover and address security weaknesses
            before malicious hackers can exploit them. Here are some essential aspects of ethical
            hacking."
          />
          <ResumeCard
            title="NDG Kali Linux Certificate."
            subTitle="Cisco Networking Academy."
            result="Success"
            des="Achieved NDG Kali Linux certificate from Cisco Networking Academy Trainings, online."
          />
          <ResumeCard
            title="Cybersecurity Essential Certificate."
            subTitle="Cisco Networking Academy."
            result="Success"
            des="Achieved Cybersecurity Essential certificate from Cisco Networking Academy Trainings, online."
          />
        </div>
      </div>
     
          
    </motion.div>
  );
};

export default Achievement;
