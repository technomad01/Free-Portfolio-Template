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
                  .typeString("Hello, I'm Jane Doe")
                  .callFunction(() => {
                  })
                  .pauseFor(3500)
                  .deleteAll()
                  .callFunction(() => {
                  })
                  .start()
                  .changeDelay(50) // Change typing speed (optional)
                  .deleteAll()
                  .callFunction(() => {           
                  })
                  .start();
              }}
              options={{
                loop: true, 
              }}
            />
          </div>

          {/* desc */}
          <p className="md:text-xl text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam autem, neque quis possimus at maxime, repellat dignissimos magni quibusdam explicabo sit beatae iste. Quibusdam provident modi molestias cupiditate laboriosam quae!
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
