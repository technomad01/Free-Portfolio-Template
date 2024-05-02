import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ title, imgUrl, desc, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-96 w-96 md:-72 rounded-b-xl relative group overflow-scroll"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 right-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-80 transition-all duration-100">
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative rounded-full mr-2 hover:border-yellow-400 group/link"
          >
            <Image
              className="flex items-center justify-center top-3 start-2 end-2 absolute cursor-pointer object-scale-down "
              src="/code.png"
              alt=""
              width={30}
              height={30}
            />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full mr-2  hover:border-yellow-400 group/link"
          >
            <Image
              className="flex items-center justify-center top-3 start-2 end-2 absolute cursor-pointer object-scale-down"
              src="/link.png"
              alt=""
              width={30}
              height={30}
            />
          </Link>
        </div>
      </div>
      <div className="h-full text-white rounded-b-xl bg-[#181818]py-6 px-4 mb-2">
        <h5 className="font-xl font-semibold my-2">{title}</h5>
        <p className="text-[#ADB7BE]">{desc} </p>
      </div>
    </div>
  );
};

export default ProjectCard;
