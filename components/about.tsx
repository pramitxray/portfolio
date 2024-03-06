"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      I am a <span className="font-semibold">pre-final year Computer Science Engineering student</span> with a deep interest and profiency in Python, 
      MERN stack alongside other languages. I like to spend my leisure time on competitive coding platforms or browsing through the current 
      technological developments in the market. I'm keen on learning new technical languages and concepts and implementing them in real life situations. 
      {" "}</p>
      <p>
        My core stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with NLP and RPA. I am always looking to
        learn new technologies. Feel free to connect with me if you share {" "}
        <span className="font-semibold">similar interests or have any exciting opportunities</span> to collaborate.
        {"\n "}
      </p>
      
      <p>
        When I'm not coding, I enjoy playing
        football and FPS shooters.{" "}
        Additionally, <span className="italic">I am an enthusiastic food blogger, </span>combining my love for writing and gastronomy as a side hobby.
      </p>
    </motion.section>
  );
}
