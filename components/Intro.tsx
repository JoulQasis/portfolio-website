"use client";

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from 'react-icons/fa';
import { useSectionInView } from '@/lib/hooks';
import { useActiveSectionContext } from '@/context/active-section-context';

export default function Intro() {

    const { ref } = useSectionInView("Home", 0.5);
    const {setActiveSection,setTimeOfLastClick}=useActiveSectionContext();
    return (
        <section ref={ref}
            id='home' className='mb-28 max-w-[60rem] text-center sm:mb-0 scroll-mt-[100rem]'>
            <div className='flex items-center justify-center'>
                <div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                            type: "tween",
                            duration: 0.2,
                        }}>
                        <Image src={require('./Joul.jpg')} alt="Joul's Picture" width={192} height={192}
                            quality={95} priority={true}
                            className='h-24 w-24 rounded-full object-cover border-[0.35rem]
                         border-white shadow-xl'/>
                    </motion.div>
                </div>
            </div>
            <motion.h1
                className="mb-10 mt-4 px-40 text-2xl font-medium !leading-[1.5] sm:text-4xl"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
            >
                <span className="font-bold">Hello, I'm Joul.</span> I'm a{" "}
                <span className="font-bold">full-stack developer</span> with{" "}
                <span className="font-bold">3 years</span> of experience. I enjoy
                building <span className="italic">sites & apps</span>. My focus is{" "}
                <span className="underline">MERN,MEAN Stack,nextjs. </span><span>and much more!</span>
            </motion.h1>

            <motion.div className='flex flex-col sm:flex-row items-center justify-center gap-3 px-4 text-lg font-medium'
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 0.1,
                }}>
                <Link
                      onClick={() => {
                        setActiveSection("Contact");
                        setTimeOfLastClick(Date.now());
                    }}
                href="#contact" className='group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-non focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition-all'>
                    Contact me here! <BsArrowRight className='opacity-70 group-hover:translate-x-1 transition' /></Link>
                <a href='/CV.pdf' download className='group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-non focus:scale-110 hover:scale-110 active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10'>
                    Download CV <HiDownload className='opacity-60 group-hover:translate-y-1 transition' /> </a>
                <a href='https://www.linkedin.com/in/joulqasis/' target="_blank" className='bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-non focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'>
                    <BsLinkedin />
                </a>
                <a href='https://github.com/JoulQasis/' target="_blank" className='bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.3rem] rounded-full outline-non focus:scale-[1.15] hover:text-gray-950 hover:scale-[1.15] active:scale-105 transition-all cursor-pointer border border-black/10 dark:bg-white/10 dark:text-white/60'>
                    <FaGithubSquare />
                </a>

            </motion.div>
        </section>
    )
}
