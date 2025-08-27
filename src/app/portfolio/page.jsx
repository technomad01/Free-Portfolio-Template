"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "App Name",
    desc: "App Description",
    img: "/preview.png",
    gitUrl: "https://github.com/",
    previewUrl: "https://htmlcolorcodes.com/colors/dark-green/",
  },
  {
    id: 2,
    title: "App",
    desc: "App Description",
    img: "/preview.png",
    gitUrl: "https://github.com/",
    previewUrl: "https://htmlcolorcodes.com/colors/dark-green/",
  },
  {
    id: 3,
    title: "App",
    desc: "App Description",
    img: "/preview.png",
    gitUrl: "https://github.com/",
    previewUrl: "https://htmlcolorcodes.com/colors/dark-green/",
  },
  {
    id: 4,
    title: "App Name",
    desc: "App Description",
    img: "/preview.png",
    gitUrl: "https://github.com/",
    previewUrl: "https://htmlcolorcodes.com/colors/dark-green/",
  },
  {
    id: 5,
    title: "App Name",
    desc: "App Description",
    img: "/preview.png",
    gitUrl: "https://github.com/",
    previewUrl: "https://htmlcolorcodes.com/colors/dark-green/",
  },
  {
    id: 5,
    title: "App Name",
    desc: "App Description",
    img: "/preview.png",
    gitUrl: "https://github.com/",
    previewUrl: "https://htmlcolorcodes.com/colors/dark-green/",
  },
];

const Page = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full lg:flex flex-col items-center justify-between p-24 mb-8 overflow-scroll scroll-smooth">
        <motion.h1
          initial={{ fontSize: "30px", color: "rgb(30 41 59)" }}
          animate={{ fontSize: "70px", color: "rgb(255 255 255)" }}
          transition={{ duration: 2.5 }}
        >
          View my work
        </motion.h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 my-10 mx-10 gap-8 md:gap-12">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              desc={project.desc}
              imgUrl={project.img}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
