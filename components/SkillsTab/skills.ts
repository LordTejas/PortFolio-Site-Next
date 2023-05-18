import React from 'react';

export interface ISkill {
  name: string;
  type: string;
  iconUrl: string;
}

const Skills: ISkill[] = [
  {
    name: "Python",
    type: "backend",
    iconUrl: "/assets/icons/python.png",
  },
  {
    name: "Java",
    type: "backend",
    iconUrl: "/assets/icons/java.png",
  },
  {
    name: "JavaScript",
    type: "frontend",
    iconUrl: "/assets/icons/js.png",
  },
  {
    name: "TypeScript",
    type: "frontend",
    iconUrl: "/assets/icons/typescript.png",
  },
  {
    name: "ReactJs",
    type: "frontend",
    iconUrl: "/assets/icons/react.svg",
  },
  {
    name: "Redux",
    type: "frontend",
    iconUrl: "/assets/icons/redux.png",
  },
  {
    name: "ExpressJs",
    type: "backend",
    iconUrl: "/assets/icons/expressjs.png",
  },
  {
    name: "NextJs",
    type: "frontend",
    iconUrl: "/assets/icons/nextjs.svg",
  },
  {
    name: "TailwindCSS",
    type: "frontend",
    iconUrl: "/assets/icons/tailwind.png",
  },
  {
    name: "Bootstrap",
    type: "frontend",
    iconUrl: "/assets/icons/bootstrap.png",
  },
  {
    name: "MongoDb",
    type: "backend",
    iconUrl: "/assets/icons/mongodb.svg",
  },
  {
    name: "MySQl",
    type: "backend",
    iconUrl: "/assets/icons/mysql.svg",
  },
  {
    name: "PostgresSQl",
    type: "backend",
    iconUrl: "/assets/icons/postgres.png",
  },
  {
    name: "HTTP",
    type: "backend",
    iconUrl: "/assets/icons/https.png",
  },
  {
    name: "Docker",
    type: "backend",
    iconUrl: "/assets/icons/docker.png",
  },
  {
    name: "Git",
    type: "backend",
    iconUrl: "/assets/icons/git.svg",
  },
  {
    name: "Github",
    type: "backend",
    iconUrl: "/assets/icons/github.svg",
  },
];

export default Skills;