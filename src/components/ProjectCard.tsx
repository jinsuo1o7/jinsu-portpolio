import React from "react";
import ReactHtmlParser from "react-html-parser";
import { Project } from "@/data/project";
import { AiFillGithub } from "react-icons/ai";

type Props = { project: Project };
export default function ProjectCard({ project }: Props) {
  const { title, link, description, skills, repository } = project;
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <h1 className="font-extrabold text-3xl">{title}</h1>
        <div className="flex items-center gap-4">
          <a
            href={link}
            className="bg-blue-400 rounded-lg py-2 px-3 text-white font-bold"
            target="_blank"
          >
            Site Link
          </a>
          <a className="text-4xl" href={repository} target="_blank">
            <AiFillGithub />
          </a>
        </div>
      </div>
      <p className="break-keep my-4">{ReactHtmlParser(description)}</p>
      <section className="mb-4">
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {skills.map(({ title, description }, index) => (
            <li
              key={index}
              className="border-2 border-black px-4 py-1 rounded-lg shadow-md"
            >
              <h1 className="font-bold">{title}</h1>
              <p className="break-keep h-24">{description}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
