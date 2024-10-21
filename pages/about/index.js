// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithubSquare,
  FaJenkins,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiExpress,
  SiGithubactions,
  SiJira,
  SiKubernetes,
  SiMongodb,
  SiNestjs,
  SiRabbitmq,
  SiTestinglibrary,
  SiTypescript,
  SiPrisma,
} from "react-icons/si";

import { SiNextdotjs, SiFramer } from "react-icons/si";

import { BiLogoPostgresql } from "react-icons/bi";

import { DiRedis } from "react-icons/di";

import { GrGraphQl } from "react-icons/gr";

import { TbApi } from "react-icons/tb";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "Frontend Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <SiTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
        ],
      },
      {
        title: "Backend Development",
        icons: [
          <FaNodeJs />,
          <SiNestjs />,
          <BiLogoPostgresql />,
          <SiMongodb />,
          <DiRedis />,
          <SiRabbitmq />,
          <SiExpress />,
          <GrGraphQl />,
          <TbApi />,
          <SiTestinglibrary />,
          <FaGithubSquare />,
          <SiPrisma />,
        ],
      },
      {
        title: "DevOps",
        icons: [
          <FaJenkins />,
          <SiGithubactions />,
          <SiKubernetes />,
          <FaDocker />,
          <FaAws />,
        ],
      },
      {
        title: "Management",
        icons: [<SiJira />],
      },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Middle Full-Stack Developer - Kauz",
        stage: "10.2023 - 08.2024",
      },
      {
        title: "Junior Full-Stack Developer - IT Incubator",
        stage: "02.2023 - 10.2023",
      },
      {
        title: "Trainee Node.js Developer - IT Incubator",
        stage: "11.2022 - 02.2023",
      },
    ],
  },
  {
    title: "education",
    info: [
      {
        title: "Bootcamp - GoIt",
        stage: "05.2022 - 10.2022",
      },
      {
        title: "Bachelor's Degree - ЧНУ",
        stage: "09.2018 - 06.2022",
      },
    ],
  },
  {
    title: "languages",
    info: [
      {
        title: "English",
        stage: "C1",
      },
      {
        title: "Ukrainian",
        stage: "Fluent",
      },
      {
        title: "Russian",
        stage: "Fluent",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import { useState } from "react";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="mt-8 h-full bg-primary/30 py-32 text-center xl:text-left">
      <Circles />

      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>

      <div className="lg:mt-5 container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            Captivating <span className="text-accent">stories</span> birth
            magnificent designs.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            About 3 years ago I started my journey as a js developer, taking
            part in the development of about 5 commercial projects and making
            several of my own, I reached the level of a middle full-stack
            developer, confident in my abilities and capable of performing
            complex tasks. I love sharing my experience with others, so I’ve
            recently been running my own YouTube channel
          </motion.p>

          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="flex gap-3 relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={3} duration={5} /> +
                </div>
                <div className="pt-[2px] text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years of experience
                </div>
              </div>

              {/* projects */}
              <div className="flex  gap-3 relative flex-1 after:w-[1px] after:h-full">
                <div className="min-w-[80px] text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="pt-[2px] text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Finished projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, i) => {
              return (
                <div
                  key={i}
                  className={`${
                    index === i &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(i)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>

          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, i) => {
              return (
                <div
                  key={i}
                  className="flex md:flex-row max-w-max gap-x-2 mb-5 items-center text-white/60 "
                >
                  <div className="font-light mb-2 md:mb-0 w-[200px]">
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>

                  {/* icons */}
                  <div className="flex gap-x-4 flex-wrap gap-5">
                    {item.icons?.map((icon, i) => {
                      return (
                        <div className="text-2xl text-white" key={i}>
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
