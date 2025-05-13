"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Typewriter from "typewriter-effect";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px48 ">
        {/* Hero container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image
            src="/hero.png?version=1"
            alt=""
            priority={true}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 70vw, 800px"
            className="object-contain"
          />
        </div>
        {/* text container */}
        <div className="h-1/2 lg:h-full lg:w-1/2  flex flex-col gap-8 items-center justify-center">
          {/* title */}
          <div className="text-2xl md:text-3xl font-bold text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hello, I'm Claudia")
                  .callFunction(() => {
                    // console.log(" String typed out!");
                  })
                  .pauseFor(3500)
                  .deleteAll()
                  .callFunction(() => {
                    // console.log("All string deleted");
                  })
                  .start()
                  .changeDelay(50) // Change typing speed (optional)
                  .deleteAll()
                  .callFunction(() => {
                    // console.log("All string deleted");
                  })
                  .start();
              }}
              options={{
                loop: true, // Set loop to true for continuous looping
              }}
            />
          </div>

          {/* desc */}
          <p className="md:text-xl text-white">
            I'm a front-end developer with a base in Kuala Lumpur and Kuwait. I
            am passionate about building interactive applications that are
            accesible, user friendly and visually pleasing.
          </p>
          {/* buttons */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio">
              <button className="p-4 rounded-lg ring-1 ring-white text-white">
                View My Work
              </button>
            </Link>
            <Link href="/contact">
              <button className="p-4 rounded-lg ring-1 ring-white text-white">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
