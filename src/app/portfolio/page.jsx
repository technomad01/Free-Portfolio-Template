"use client";

import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";

const projects = [
  {
    id: 1,
    title: "BookShelf App",
    desc: "This is a bookshelf app that has crud functionalities for books. Users can add new books as well as update and delete. It uses simple UI but also eye catching.",
    img: "/projects/bookshelf.png/",
    gitUrl: "/https://github.com/technomad01/the-bookshelf",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Nike-E-commerce App",
    desc: "This is a mock-app of a nike e-commerce site. It focuses mainly on the design and layout",
    img: "/projects/nike.png",
    gitUrl: "https://github.com/technomad01/Nike-e-commerce-site-mockup-",
    previewUrl: "https://nike-e-commerce-site-mockup.vercel.app/",
  },
  {
    id: 3,
    title: "Social Media App",
    desc: "A mock Facebook app using the same design principles as the original creators. It is implemented with dark mode functionality as well as a user auth system.",
    img: "/projects/mingle.png",
    gitUrl: "https://github.com/technomad01/mingle-app",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Fashion Retail website",
    desc: "An online fashion retail platform that has categories for men, women, accessories other related products. It is built with React, Strapi headless CMS and incorporates a payment system like stripe and fetches data from MongoDB database",
    img: "/projects/Nouveau.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Portfolio Site",
    desc: "A webiste built for a client to publish and sell ebooks ,merch, games and other projects.",
    img: "/projects/K-portfolio.png",
    gitUrl: "/",
    previewUrl: "/",
  },
  //   {
  //     id: 5,
  //     title: "Travel App",
  //     desc: "This is a travel app. Allows registered users find activities, touristic spots and eateries in the selected travel destination. Also has a daily planner for user to create a vacation plan based on the recommended sights.",
  //     img: "",
  //     gitUrl: "https://github.com/technomad01/travel-app-main",
  //     previewUrl: "/",
  //   },
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
