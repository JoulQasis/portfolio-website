import React from "react";
import { PiStudentBold } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";
import Brainrush from "@/public/Brainrush.png";
import WaggingTails from "@/public/WaggingTails.png";
import JoulPort from "@/public/JoulPort.png";

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
        name: "Projects",
        hash: "#projects",
    },
    {
        name: "Skills",
        hash: "#skills",
    },
    {
        name: "Experience",
        hash: "#experience",
    },
    {
        name: "Contact",
        hash: "#contact",
    },
] as const;

export const experiencesData = [
    {
        title: "University of Pecs",
        location: "Pecs, Hungary",
        description:
            "Enrolled in University of Pecs to pursue my pasion as a developer.",
        icon: React.createElement(FaUniversity),
        date: "2020",
    },
    {
        title: "Front-end developer",
        location: "Budapest, Hungary",
        description:
        "working with a team of experienced colleagues who are researching and developing Angular web components.",
        icon: React.createElement(FaAngular),
        date: "2023",
    },
    {
        title: "Student Years",
        location: "Pecs, Hungary",
        description:
        "Through dedicated effort, consistent and continuous studying, and a focus on my major in web development and mathematics, I gained a substantial amount of experience.",
        icon: React.createElement(PiStudentBold),
        date: "2020 - 2023",
    },
    {
        title: "Full-Stack Graduate",
        location: "Pecs, Hungary",
        description:
        "I am a proficient full-stack graduate actively seeking a meaningful employment opportunity to apply and leverage my acquired skill set.",
        icon: React.createElement(FaUserGraduate),
        date: "2023 - present",
    },
] as const;

export const projectsData = [
    {
        title: "BrainRush",
        description:
            "I deployed my full-stack thesis project of 6 months using MERN stack. Users can create an account and play games to develop their congnitive abilities.",
        tags: ["React", "Express", "MongoDB", "NodeJs","JavaScript"],
        imageUrl: Brainrush,
    },
    {
        title: "WaggingTails",
        description:
            "e-commerce website i did for fun using MEAN stack, a full stack store with a cart and functional payment. ",
        tags: ["Angualr", "MongoDB", "Node.js", "JavaScript", "Express"],
        imageUrl: WaggingTails,
    },
    {
        title: "My Portfolio",
        description:
            "This Portfolio you are checking is one of my fine development, A responsive website with light & dark mode and a fresh moder UI design",
        tags: ["React", "Next.js", "Framer-Motion", "Tailwind", "TypeScript","Email"],
        imageUrl: JoulPort,
    },
] as const;

export const skillsData = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "HTML",
    "CSS",
    "Git",
    "Tailwind",
    "Prisma",
    "MongoDB",
    "Express",
    "PostgreSQL",
    "Java",
    "Django",
    "Framer Motion",
    "Python",
    "C",
    "C#",
    "C++",
    "Matlab",
    "PHP",
] as const;