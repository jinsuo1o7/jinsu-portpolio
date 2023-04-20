import React from "react";
import { h1TitleStyle } from "@/styles/styles";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/project";

export default function ProjectList() {
  return (
    <section className="py-40">
      <h1 className={h1TitleStyle}>Projects</h1>
      <ul className="flex flex-col gap-4">
        {projects.map((project) => (
          <li className="border-2 border-black rounded-md" key={project.title}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </section>
  );
}
