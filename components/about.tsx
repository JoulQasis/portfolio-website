"use client"
import React from 'react'
import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useSectionInView } from '@/lib/hooks';

export default function About() {

    const { ref } = useSectionInView("About");



    return (
        <motion.section
            ref={ref}
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28 "
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
        >
            <SectionHeading>About me</SectionHeading>
            <p className="mb-3">
                After graduating with a degree in{" "}
                <span className="font-medium">Computer Science</span>, I am more than ready to apply my skills
                passionatly in a serious working environment. I majored in {" "}
                <span className="font-medium">full-stack web development</span>.{" "}
                <span className="italic">My favorite part of programming</span> is the
                problem-solving aspect. I <span className="underline">love</span> the
                feeling of finally figuring out a solution to a problem. My core stack
                is{" "}
                <span className="font-medium">
                    React,Angular, Next.js, Node.js,Express.js and MongoDB
                </span>
                . I am also familiar with TypeScript. I am always looking to
                learn new technologies. I am currently looking for a{" "}
                <span className="font-medium">full-time position</span> as a software
                developer.
            </p>

            <p>
                <span className="italic">When I'm not coding</span>, I enjoy playing the violin that i studied for 6 years,
                playing video games, Working out,going to the beach and playing with my dog. I also enjoy{" "}
                <span className="font-medium">learning new things</span>. I am currently
                learning a fourth language which is{" "}
                <span className="font-medium">German</span>.
            </p>
        </motion.section>
    )
}
