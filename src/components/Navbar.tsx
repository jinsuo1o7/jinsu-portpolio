import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { SiVelog } from "react-icons/si";
import Logo from "@/components/ui/Logo";
import Link from "next/link";
const navigations = [
  {
    title: "Github",
    icon: <AiFillGithub />,
    link: "https://github.com/jinsuo1o7",
  },
  { title: "Velog", icon: <SiVelog />, link: "https://velog.io/@jinsuo1o7" },
];
export default function Navbar() {
  return (
    <header className="flex items-center justify-between py-2 sticky top-0 bg-white border-b">
      <Link href="/" className="text-4xl">
        <Logo />
      </Link>
      <ul className="flex items-center">
        {navigations.map((navigation, index) => (
          <li key={index} className="mr-8 hover:text-blue-500">
            <a
              className="flex items-center gap-1"
              href={navigation.link}
              target="_blank"
            >
              <span className="text-xl">{navigation.icon}</span>
              <span className="">{navigation.title}</span>
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}
