import React from "react";
import Link from "next/link";

const ProjectCard = ({ title, imgUrl, desc, gitUrl, previewUrl }) => {
  return (
    <div>
      <div
        className="h-96 w-96 md:-72 rounded-b-xl relative overflow-scroll"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      ></div>

      {/* Text Area */}
      <div className="h-full text-white rounded-b-xl  py-6 px-4 mb-2">
        <h5 className="font-xl font-semibold my-2">{title}</h5>
        <p className="text-[#ADB7BE]">{desc}</p>

        {/* GitHub and Live Preview Links */}
        <div className="mt-4 flex gap-4 text-sm">
          <Link
            href={gitUrl}
            className="text-blue-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            href={previewUrl}
            className="text-blue-400 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live Preview
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
