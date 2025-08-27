"use client";

import { motion } from "framer-motion";

const Page = () => {
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quia aliquam, velit fugiat eveniet provident mollitia
              dolor corrupti, veritatis tenetur repellat esse molestias
              aspernatur aut eaque, quae in molestiae ipsa?
              <br />
              <br />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
              impedit, qui aperiam saepe ducimus nisi inventore aliquid amet
              unde cum omnis vitae? Harum voluptatem nisi maiores, iusto illum
              cumque omnis.
              <br />
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              inventore rerum numquam esse rem ipsa sed atque eius nisi minus
              odio, eligendi nemo ducimus, nam laudantium sunt similique
              excepturi voluptatum?
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
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
