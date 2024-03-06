"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { blogsData } from "@/lib/data";
import Blog from "./blog";
import { useSectionInView } from "@/lib/hooks";

export default function Blogs() {
    const { ref } = useSectionInView("Blogs", 0.5);

    return (
        <section ref={ref} id="blogs" className="scroll-mt-28 mb-28">
            <SectionHeading>My blogs</SectionHeading>
            <div>
                {blogsData.map((blog, index) => (
                    <React.Fragment key={index}>
                        <Blog {...blog} />
                    </React.Fragment>
                ))}
            </div>
        </section>
    );
}