import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import paymitIMG from "@/public/paymit.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Blogs",
    hash: "#blogs",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Backend Intern",
    company: "Stackbox",
    description:
      `• Developed the backend solution for Bin Consolidation to optimize inventory resource allocation. \n
      • Implemented ABC and FMS categorization using vlookup, enhancing inventory management. \n
      • Mastered Typescript and Python to make scalable backend solutions boosting system performance. \n
      • Undertook a comprehensive refactoring of the existing codebase, enhancing modularity and maintainability. \n
      • Developed robust test cases to ensure functionality and stability across updates.`,
    icon: React.createElement(CgWorkAlt),
    date: " Jun 2024 - Jul 2024 ",
  },
  {
    title: "Technical Intern",
    company: "ITC Infotech",
    description:
      `• Engineered multiple small-scale workflows to automate business processes using RPA. \n
      • Passed the foundation exam on the automation platform (AutomationEdge) \n
      • Navigated on the dynamic use of VBA macro coding \n
      • Scripted mini-bots to automate processes on Web GUI interface using Selenium Java with least platform \n
      dependency`,
    icon: React.createElement(CgWorkAlt),
    date: " Nov 2023 - Dec 2023 ",
  },
  {
    title: "Data Science Intern",
    company: "CSM Technologies",
    description:
      "Developed a project to parse key information from resumes in Python using NLP which can be used for further screening, optimizing the hiring process for recruiters.",
    icon: React.createElement(CgWorkAlt),
    date: " Sep 2023 - Oct 2023 ",
  },
] as const;

export const projectsData = [
  {
    title: "Paymit",
    description:
      "A payment platform to let users signup and carry out transactions using their wallet balance",
    tags: ["React", "Express", "MongoDB", "JWT"],
    imageUrl: paymitIMG,
  },
  {
    title: "Codewith",
    description:
      "Real-time collaborative code editor that allows multiple users to write and edit code together using WebSockets.",
    tags: ["React", "Express", "Socket.io"],
    imageUrl: paymitIMG,
  }
] as const;

export const blogsData = [
  {
    title: "Create your own Mail Server",
    description:
      "A small insight into how do emails work and the steps involved to create your own mail server",
    tags: ["SMTP", "DNS Records",],
    imageUrl: paymitIMG,
  },
  ] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Postman",
  "AWS",
  "Express",
  "Python",
  "Java",
] as const;
