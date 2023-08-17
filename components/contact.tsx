"use client"
import React from 'react'
import SectionHeading from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { useSectionInView } from '@/lib/hooks';
import { sendEmail } from '@/actions/sendEmail'
export default function Contact() {
    const { ref } = useSectionInView("Contact");

    return (
        <motion.section ref={ref}
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1,
            }}

            id='contact' className='mb-20 sm:mb-28 w-[min(100%,38rem)] text-center'>
            <SectionHeading>Contact me</SectionHeading>
            <p className='text-gray-700 -mt-3 dark:text-white/80'>Please contact me directly at<a className='underline' href="mailto:JoulWorking@gmail.com">JoulWorking@gmail.com</a> or thro this form</p>

            <form action={async (formData) => {
                await sendEmail(formData)
            }}
                className='mt-10 flex flex-col dark:text-black '>
                <input name='senderEmail' className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                    type="email"
                    required maxLength={150}
                    placeholder='Your email' />
                <textarea name='message' placeholder='Your message' required maxLength={5000} className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
                />
                <button className='group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10' type='submit'>
                    Submit <FaPaperPlane className='text-xs opacity-70 transition-all group-hover:translate-1-1 group-hover:-translate-x-1' /> </button>
            </form>
        </motion.section>
    )
}
