"use client";

import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* container */}
      <div className="h-full overflow-scroll lg:flex scroll-smooth">
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/* biography */}
          <div className="flex flex-col gap-12 justify-center text-white">
            <motion.h1
              className="font-bold text-xl hover:text-slate-300"
              initial={{ fontSize: "10px", color: "rgb(8 145 178)" }}
              animate={{ fontSize: "40px", color: "rgb(255 255 255)" }}
              transition={{ duration: 2.5 }}
            >
              ABOUT ME{" "}
            </motion.h1>

            <p className="text-l">
              Back in 2020 I decided to venture into the world of code in my
              free time and fell in head first into the rabbit hole of coding. I
              learned to create landing pages and work on some animation with
              HTML and CSS and Javascript. In 2022 I had the opportunity to dive
              right in and joined General Assembly and got my certification In
              Software Engineering.
              <br />
              <br />
              Fast forward to today and I’ve had the opportunity to build
              websites for several clients and friends. I'm always eager to
              expand my skill set and tackle new horizons. Ready for the next
              challenge and eager to see where the ever-evolving world of tech
              takes me.
              <br />
              <br />
              When I'm not writing code, i'm exploring the latest development
              trends in tech or solving puzzle games. Thanks for joining me on
              this journey!
            </p>
          </div>
          {/* Skills */}
          <div className="flex flex-col gap-12 justify-center text-white pb-12">
            <h1 className="font-bold text-2xl">SKILLS </h1>
            {/* skill list */}
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                JavaScript
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                TypeScript
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                React.js
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                Next.js
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                HTML
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                CSS
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                Tailwind.css
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                Bootstrap
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                MongoDB
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                MySQL
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                PostgreSQL
              </div>{" "}
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                Git
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                Framer-Motion
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                Figma
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                Postman
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                Insomnia
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-slate-800 text-white hover:bg-slate-300 hover:text-black">
                Vercel
              </div>
            </div>
          </div>
          {/* experience */}
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
